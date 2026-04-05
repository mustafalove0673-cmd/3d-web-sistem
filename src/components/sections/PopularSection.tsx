'use client'

import { motion } from 'framer-motion'
import { Heart, MessageCircle, ExternalLink, Crown } from 'lucide-react'
import { videos } from '@/lib/video-data'

const topVideos = [...videos]
  .filter(v => v.likes > 0)
  .sort((a, b) => b.likes - a.likes)
  .slice(0, 5)

const rankColors = [
  'from-accent to-cyan-300',
  'from-hot to-rose-300',
  'from-lime to-emerald-300',
  'from-violet to-purple-300',
  'from-orange to-amber-300',
]

export default function PopularSection() {
  return (
    <section id="popular" className="py-12 md:py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-[2px] bg-hot" />
          <span className="text-[11px] font-bold text-hot tracking-[0.2em] uppercase">Popüler</span>
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-black tracking-tight">
          En Çok Beğenilenler
        </h2>
      </motion.div>

      <div className="space-y-3">
        {topVideos.map((video, i) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ x: 8 }}
            onClick={() => {
              if (video.url) window.open(video.url, '_blank')
            }}
            className="group flex items-center gap-4 md:gap-5 p-4 md:p-5 bg-card border border-border rounded-xl cursor-pointer hover:border-accent/20 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
          >
            {/* Rank */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
              className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${rankColors[i]} flex items-center justify-center text-background font-black text-sm`}
            >
              {i + 1}
            </motion.div>

            {/* Thumbnail */}
            {video.thumbnail && (
              <div className="hidden sm:block flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border border-border/50">
                <img src={video.thumbnail} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            )}

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h3 className="font-heading font-bold text-sm truncate group-hover:text-accent transition-colors">
                {video.title}
              </h3>
              <p className="text-xs text-muted-foreground truncate mt-0.5">
                {video.description.slice(0, 60)}...
              </p>
            </div>

            {/* Stats */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <span className="flex items-center gap-1 text-hot text-sm font-bold">
                <Heart className="w-3.5 h-3.5 fill-hot" />
                {video.likes.toLocaleString('tr-TR')}
              </span>
              <ExternalLink className="w-4 h-4 text-muted-foreground/30 group-hover:text-accent transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
