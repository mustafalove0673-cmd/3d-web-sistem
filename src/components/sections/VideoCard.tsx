'use client'

import { motion } from 'framer-motion'
import { Heart, MessageCircle, ExternalLink, Github, Calendar, ArrowUpRight, Play, Film } from 'lucide-react'
import type { Video } from '@/lib/video-data'

interface Props {
  video: Video
  index: number
  onClick: (video: Video) => void
}

export default function VideoCard({ video, index, onClick }: Props) {
  const hasThumbnail = !!video.thumbnail
  const hasVideo = !!video.videoSrc

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      onClick={() => onClick(video)}
      className="group relative bg-card border border-border rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5"
    >
      {/* Thumbnail Area */}
      <div className="relative aspect-video bg-gradient-to-br from-muted to-background overflow-hidden">
        {/* Thumbnail image or gradient placeholder */}
        {hasThumbnail ? (
          <img
            src={video.thumbnail}
            alt={video.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 dot-pattern" />
        )}

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.06 + 0.3 }}
            className={`w-14 h-14 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-xl ${
              hasVideo
                ? 'bg-accent shadow-accent/30'
                : 'bg-background/80 backdrop-blur-sm border border-border'
            }`}
          >
            {hasVideo ? (
              <Play className="w-5 h-5 text-background fill-background ml-0.5" />
            ) : (
              <ExternalLink className="w-5 h-5 text-foreground" />
            )}
          </motion.div>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-lg bg-background/80 backdrop-blur-sm border border-border text-[11px] font-medium text-foreground">
            {video.category}
          </span>
        </div>

        {/* Top right badges */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5">
          {/* Video source indicator */}
          {hasVideo && (
            <span className="flex items-center gap-1 px-2 py-1 rounded-lg bg-accent/90 border-0 text-[11px] font-medium text-background">
              <Film className="w-3 h-3" />
              Video
            </span>
          )}
          {/* Likes badge */}
          {video.likes > 0 && (
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-background/80 backdrop-blur-sm border border-border text-[11px] font-medium text-foreground">
              <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
              {video.likes.toLocaleString('tr-TR')}
            </span>
          )}
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="font-heading font-semibold text-base text-foreground mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-1">
          {video.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {video.description}
        </p>

        {/* Meta row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
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

          <div className="flex items-center gap-1.5">
            {video.repoUrl && (
              <motion.a
                href={video.repoUrl}
                target="_blank"
                rel="noopener"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="w-7 h-7 rounded-lg bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/30 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
              </motion.a>
            )}
            {!hasVideo && video.url && (
              <motion.a
                href={video.url}
                target="_blank"
                rel="noopener"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="w-7 h-7 rounded-lg bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/30 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            )}
            <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {video.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md bg-muted/50 border border-border text-[10px] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </motion.div>
  )
}
