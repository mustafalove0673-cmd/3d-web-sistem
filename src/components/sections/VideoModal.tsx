'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart, MessageCircle, Calendar, ExternalLink, Github, Copy, Check } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import type { Video } from '@/lib/video-data'

interface Props {
  video: Video | null
  onClose: () => void
}

export default function VideoModal({ video, onClose }: Props) {
  const [copied, setCopied] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // Pause video when modal closes
  useEffect(() => {
    if (!video && videoRef.current) {
      videoRef.current.pause()
    }
  }, [video])

  if (!video) return null

  const handleCopyLink = () => {
    navigator.clipboard.writeText(video.url || video.videoSrc || '')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 40 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl bg-card border border-border rounded-2xl overflow-hidden shadow-2xl shadow-black/40 max-h-[90vh] overflow-y-auto"
        >
          {/* Video / Thumbnail Area */}
          <div className="relative aspect-video bg-gradient-to-br from-muted via-background to-accent/5">
            {video.videoSrc ? (
              <video
                ref={videoRef}
                src={video.videoSrc}
                controls
                autoPlay
                className="w-full h-full object-contain bg-black"
                playsInline
              >
                Tarayıcınız video oynatmayı desteklemiyor.
              </video>
            ) : video.thumbnail ? (
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <div className="absolute inset-0 dot-pattern" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center shadow-xl shadow-accent/30 cursor-pointer"
                    onClick={() => video.url && window.open(video.url, '_blank')}
                  >
                    <svg className="w-8 h-8 text-background fill-background ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </div>
              </>
            )}

            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-background/60 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-background transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {/* Category */}
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1.5 rounded-lg bg-background/60 backdrop-blur-sm border border-border text-xs font-medium">
                {video.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Title */}
            <h2 className="font-heading text-2xl font-bold mb-3">{video.title}</h2>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-muted-foreground">
              {video.likes > 0 && (
                <span className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                  <span className="font-medium text-foreground">{video.likes.toLocaleString('tr-TR')}</span> beğeni
                </span>
              )}
              {video.comments > 0 && (
                <span className="flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4" />
                  <span className="font-medium text-foreground">{video.comments}</span> yorum
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {video.date}
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed mb-6">
              {video.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {video.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-lg bg-muted/50 border border-border text-xs text-muted-foreground">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              {video.videoSrc && (
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => videoRef.current?.requestFullscreen?.()}
                  className="flex items-center gap-2 px-5 py-2.5 bg-accent text-background rounded-xl font-medium text-sm"
                >
                  🎬 Tam Ekran İzle
                </motion.button>
              )}
              {video.url && (
                <motion.a
                  href={video.url}
                  target="_blank"
                  rel="noopener"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-5 py-2.5 border border-border text-foreground rounded-xl font-medium text-sm hover:border-accent/30 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Kaynakta İzle
                </motion.a>
              )}
              {video.repoUrl && (
                <motion.a
                  href={video.repoUrl}
                  target="_blank"
                  rel="noopener"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-5 py-2.5 border border-border text-foreground rounded-xl font-medium text-sm hover:border-accent/30 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub Repo
                </motion.a>
              )}
              {(video.url || video.videoSrc) && (
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleCopyLink}
                  className="flex items-center gap-2 px-5 py-2.5 border border-border text-foreground rounded-xl font-medium text-sm hover:border-accent/30 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      Kopyalandı!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Link Kopyala
                    </>
                  )}
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
