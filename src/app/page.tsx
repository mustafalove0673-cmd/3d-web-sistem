'use client'

import { useState, useEffect, useRef } from 'react'
import { Play, Download, X, Video, Clock, HardDrive } from 'lucide-react'

interface VideoFile {
  name: string
  size: number
  sizeMB: string
  modified: string
}

const getVideoLabel = (name: string) => {
  const clean = name
    .replace(/\.mp4$/i, '')
    .replace(/[^a-zA-Z0-9ğüşıöçĞÜŞİÖÇ\s\-#.!]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  if (clean.length > 80) return clean.slice(0, 77) + '...'
  return clean
}

const getVideoUrl = (name: string) => `/api/videos?file=${encodeURIComponent(name)}`

export default function Home() {
  const [videos, setVideos] = useState<VideoFile[]>([])
  const [loading, setLoading] = useState(true)
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    fetch('/api/videos')
      .then(r => r.json())
      .then(data => setVideos(data.videos || []))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveVideo(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const totalSize = videos.reduce((a, v) => a + v.size, 0)
  const totalMB = (totalSize / (1024 * 1024)).toFixed(1)

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-40 bg-background/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Video className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="font-heading text-lg font-bold">Video Kütüphanesi</h1>
              <p className="text-xs text-muted-foreground">Tüm videoların tek yerde</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="hidden sm:flex items-center gap-1.5">
              <HardDrive className="w-3.5 h-3.5" />
              {totalMB} MB
            </span>
            <span className="flex items-center gap-1.5">
              <Video className="w-3.5 h-3.5" />
              {videos.length} video
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
          </div>
        ) : videos.length === 0 ? (
          <div className="text-center py-20">
            <Video className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-muted-foreground">Henüz video bulunmuyor</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {videos.map((video, i) => (
              <div
                key={video.name}
                className="group relative bg-card border border-border/40 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
              >
                {/* Video Card */}
                <div className="flex flex-col sm:flex-row">
                  {/* Thumbnail / Play Area */}
                  <div
                    className="relative sm:w-72 md:w-80 h-44 sm:h-auto bg-muted/30 cursor-pointer flex-shrink-0"
                    onClick={() => setActiveVideo(video.name)}
                  >
                    <video
                      ref={activeVideo === video.name ? videoRef : undefined}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      preload="metadata"
                      muted
                    >
                      <source src={getVideoUrl(video.name)} type="video/mp4" />
                    </video>
                    {/* Play Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                      <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>
                    {/* Duration Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-medium bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-lg flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {video.sizeMB} MB
                      </span>
                    </div>
                    {/* Index */}
                    <div className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-black/60 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{i + 1}</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between min-w-0">
                    <div>
                      <h3 className="font-heading font-semibold text-sm sm:text-base leading-snug line-clamp-2 mb-2">
                        {getVideoLabel(video.name)}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {new Date(video.modified).toLocaleDateString('tr-TR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() => setActiveVideo(video.name)}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-xl font-medium text-sm hover:bg-primary/90 transition-colors"
                      >
                        <Play className="w-4 h-4" fill="currentColor" />
                        İzle
                      </button>
                      <a
                        href={getVideoUrl(video.name)}
                        download={video.name}
                        className="flex items-center justify-center gap-2 px-4 py-2.5 bg-secondary text-secondary-foreground rounded-xl font-medium text-sm hover:bg-secondary/80 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        <span className="hidden sm:inline">İndir</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Video Player Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            {/* Title Bar */}
            <div className="px-4 py-3 bg-black/80 border-b border-white/5">
              <p className="text-sm text-white/70 truncate font-medium">
                {getVideoLabel(activeVideo)}
              </p>
            </div>
            {/* Video */}
            <video
              ref={videoRef}
              className="w-full max-h-[75vh]"
              controls
              autoPlay
              src={getVideoUrl(activeVideo)}
            >
              <source src={getVideoUrl(activeVideo)} type="video/mp4" />
            </video>
            {/* Download Bar */}
            <div className="px-4 py-3 bg-black/80 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-white/40">
                {videos.find(v => v.name === activeVideo)?.sizeMB} MB
              </span>
              <a
                href={getVideoUrl(activeVideo)}
                download={activeVideo}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                <Download className="w-4 h-4" />
                İndir
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-border/30 py-4 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs text-muted-foreground">
            {videos.length} video • Toplam {totalMB} MB
          </p>
        </div>
      </footer>
    </div>
  )
}
