import { NextRequest, NextResponse } from 'next/server'
import { readdirSync, statSync } from 'fs'
import { join } from 'path'

const UPLOAD_DIR = join(process.cwd(), 'upload')

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const file = searchParams.get('file')

  // Serve specific video file
  if (file) {
    const filePath = join(UPLOAD_DIR, file)
    try {
      const stat = statSync(filePath)
      const ext = file.split('.').pop()?.toLowerCase()
      const mimeMap: Record<string, string> = {
        mp4: 'video/mp4',
        webm: 'video/webm',
        mov: 'video/quicktime',
        avi: 'video/x-msvideo',
        mkv: 'video/x-matroska',
      }
      const contentType = mimeMap[ext || ''] || 'video/mp4'

      const fileBuffer = await import('fs/promises').then(fs => fs.readFile(filePath))
      return new NextResponse(fileBuffer, {
        headers: {
          'Content-Type': contentType,
          'Content-Length': String(stat.size),
          'Content-Disposition': `inline; filename="${encodeURIComponent(file)}"`,
          'Cache-Control': 'public, max-age=604800',
        },
      })
    } catch {
      return NextResponse.json({ error: 'Dosya bulunamadı' }, { status: 404 })
    }
  }

  // List all videos
  try {
    const files = readdirSync(UPLOAD_DIR)
      .filter(f => /\.(mp4|webm|mov|avi|mkv)$/i.test(f))
      .map(f => {
        const stat = statSync(join(UPLOAD_DIR, f))
        return {
          name: f,
          size: stat.size,
          sizeMB: (stat.size / (1024 * 1024)).toFixed(1),
          modified: stat.mtime.toISOString(),
        }
      })
      .sort((a, b) => b.modified.localeCompare(a.modified))

    return NextResponse.json({ videos: files, total: files.length })
  } catch {
    return NextResponse.json({ videos: [], total: 0 })
  }
}
