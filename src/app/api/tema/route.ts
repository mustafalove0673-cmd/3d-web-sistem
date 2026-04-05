/**
 * TEMA API v1.0
 * 
 * POST /api/tema
 * Body: { topic: string }
 * 
 * "tema villa inşaatı" → Sektör analizi + Renk paleti + 3D konsept + Section planı
 */
import { NextRequest, NextResponse } from 'next/server';
import { generateFullSiteConfig, SECTOR_TEMPLATES, INSTALLED_PACKAGES } from '@/lib/site-template';
import { getBestPalette, getAllCorrectPalettes } from '@/lib/color-system';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { topic } = body;

    if (!topic || typeof topic !== 'string' || topic.trim().length === 0) {
      return NextResponse.json(
        { error: 'Konu gerekli. Örnek: "tema villa inşaatı"' },
        { status: 400 }
      );
    }

    // 1. Template eşleştir
    const config = generateFullSiteConfig(topic);
    
    // 2. Renk paleti al
    const palette = getBestPalette(topic);
    const allPalettes = getAllCorrectPalettes();

    // 3. Komple site planı oluştur
    const sitePlan = {
      success: true,
      timestamp: new Date().toISOString(),
      
      // Kullanıcı girdisi
      input: {
        topic: topic.trim(),
        detectedSector: config.template.sectorName,
      },

      // Template bilgisi
      template: {
        sector: config.template.sector,
        sectorName: config.template.sectorName,
        style: config.template.style,
        threeConcept: config.template.threeConcept,
        sections: config.template.sections,
        features: config.template.features,
        font: config.template.font,
      },

      // Renk paleti (otomatik seçilmiş)
      colorPalette: {
        name: palette.paletteName,
        colors: palette.palette.colors,
        gradient: palette.palette.gradient,
        glowEffect: palette.palette.glowEffect,
        auraRing: palette.palette.auraRing,
      },

      // Kullanılan 19 paket (TEK REPO)
      packages: Object.entries(INSTALLED_PACKAGES).map(([key, pkg]) => ({
        role: key,
        name: pkg.name,
        package: pkg.package,
        repo: `https://github.com/${pkg.repo}`,
        stars: pkg.stars,
        usage: pkg.usage,
      })),

      // Mevcut renk paletleri (alternatif)
      availablePalettes: allPalettes.map(p => ({
        id: p.id,
        name: p.name,
        why: p.why,
        colors: p.colors,
      })),

      // Dosya yapısı
      fileStructure: {
        permanent: config.structure.permanent,
        temporary: config.structure.temporary,
      },

      // Temizleme komutu
      cleanupCommand: 'bash scripts/cleanup-site.sh',
    };

    return NextResponse.json(sitePlan);
  } catch (error) {
    console.error('Tema API Error:', error);
    return NextResponse.json(
      { error: 'Tema analizi başarısız', details: String(error) },
      { status: 500 }
    );
  }
}

// GET: Mevcut tüm sektörleri listele
export async function GET() {
  const sectors = Object.entries(SECTOR_TEMPLATES).map(([key, t]) => ({
    id: key,
    name: t.sectorName,
    style: t.style,
    threeConcept: t.threeConcept,
    sections: t.sections,
    palette: t.palette,
  }));

  return NextResponse.json({
    success: true,
    totalSectors: sectors.length,
    sectors,
    totalPackages: Object.keys(INSTALLED_PACKAGES).length,
  });
}
