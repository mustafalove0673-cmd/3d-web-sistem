'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Heart, MessageCircle, ExternalLink, Github, Calendar, Play, Film } from 'lucide-react'
import type { Video } from '@/lib/video-data'

interface Props {
  video: Video
  index: number
  onClick: (video: Video) => void
}

export default function VideoCard({ video, index, onClick }: Props) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // 3D tilt
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    x.set(px)
    y.set(py)
  }

  function handleMouseLeave() {
    x.set(0.5)
    y.set(0.5)
    setIsHovered(false)
  }

  const hasThumbnail = !!video.thumbnail
  const hasVideo = !!video.videoSrc

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92, y: -30 }}
      transition={{
        duration: 0.6,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(video)}
      className="group relative bg-card border border-border rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/5"
    >
      {/* Glow border on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-accent/20 via-transparent to-hot/20 z-[-1] blur-sm"
      />

      {/* Thumbnail */}
      <div className="relative aspect-video bg-gradient-to-br from-muted to-background overflow-hidden">
        {hasThumbnail ? (
          <>
            <img
              src={video.thumbnail}
              alt={video.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              loading="lazy"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 dot-pattern" />
        )}

        {/* Animated border glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.6 : 0 }}
          className="absolute inset-0 border-2 border-accent/30 rounded-2xl transition-opacity"
        />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: isHovered ? 1 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm ${
              hasVideo
                ? 'bg-accent/90 shadow-lg shadow-accent/30'
                : 'bg-background/60 border border-border'
            }`}
          >
            {hasVideo ? (
              <Play className="w-5 h-5 text-background fill-background ml-0.5" />
            ) : (
              <ExternalLink className="w-4 h-4 text-foreground" />
            )}
          </motion.div>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md bg-background/70 backdrop-blur-md text-[10px] font-bold text-foreground tracking-wide">
            {video.category}
          </span>
        </div>
        <div className="absolute top-3 right-3 flex items-center gap-1.5">
          {hasVideo && (
            <span className="flex items-center gap-1 px-2 py-1 rounded-md bg-accent/90 text-[10px] font-bold text-background">
              <Film className="w-2.5 h-2.5" />
              VIDEO
            </span>
          )}
          {video.likes > 0 && (
            <span className="flex items-center gap-1 px-2 py-1 rounded-md bg-background/70 backdrop-blur-md text-[10px] font-bold text-foreground">
              <Heart className="w-2.5 h-2.5 text-hot" />
              {video.likes.toLocaleString('tr-TR')}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        <h3 className="font-heading font-bold text-sm text-foreground mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-1 tracking-tight">
          {video.title}
        </h3>
        <p className="text-muted-foreground text-xs leading-relaxed mb-3 line-clamp-2">
          {video.description}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {video.date}
            </span>
            {video.comments > 0 && (
              <span className="flex items-center gap-1">
                <MessageCircle className="w-3 h-3" />
                {video.comments}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1">
            {video.repoUrl && (
              <motion.a
                href={video.repoUrl}
                target="_blank"
                rel="noopener"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="w-6 h-6 rounded-md bg-muted/30 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-3 h-3" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {video.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded bg-accent/5 border border-accent/10 text-[9px] text-accent/60 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom gradient line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-hot to-lime origin-left"
      />
    </motion.div>
  )
}
