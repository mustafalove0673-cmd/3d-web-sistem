'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import Navbar from '@/components/sections/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import CategoryFilter from '@/components/sections/CategoryFilter'
import VideoCard from '@/components/sections/VideoCard'
import VideoModal from '@/components/sections/VideoModal'
import PopularSection from '@/components/sections/PopularSection'
import StatsSection from '@/components/sections/StatsSection'
import SkillsGallery from '@/components/sections/SkillsGallery'
import Footer from '@/components/sections/Footer'
import { videos, type Video } from '@/lib/video-data'

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('Tümü')
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredVideos = useMemo(() => {
    let result = videos
    if (activeCategory !== 'Tümü') {
      result = result.filter((v) => v.category === activeCategory)
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (v) =>
          v.title.toLowerCase().includes(q) ||
          v.description.toLowerCase().includes(q) ||
          v.tags.some((t) => t.toLowerCase().includes(q))
      )
    }
    return result
  }, [activeCategory, searchQuery])

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <PopularSection />
      <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

      {/* Search + Video Grid */}
      <section id="videos" className="pb-16 md:pb-24 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Video ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-muted/50 border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all"
            />
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <span className="text-sm text-muted-foreground">
            {filteredVideos.length} video bulundu
          </span>
        </div>

        {/* Video Grid */}
        <LayoutGroup>
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredVideos.map((video, i) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  index={i}
                  onClick={setSelectedVideo}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {filteredVideos.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="text-4xl mb-4">🎬</div>
            <h3 className="font-heading text-xl font-semibold mb-2">Video Bulunamadı</h3>
            <p className="text-muted-foreground text-sm">
              Farklı bir kategori veya arama terimi deneyin.
            </p>
          </motion.div>
        )}
      </section>

      <SkillsGallery />
      <StatsSection />
      <Footer />

      {/* Video Modal */}
      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </main>
  )
}
