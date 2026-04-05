'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart, MessageCircle, Calendar, ExternalLink, Github, Copy, Check, Maximize } from 'lucide-react'
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
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  useEffect(() => {
    if (!video && videoRef.current) videoRef.current.pause()
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
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-background/90 backdrop-blur-2xl" />

        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 50 }}
          transition={{ type: 'spring', stiffness: 250, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl bg-card border border-border rounded-2xl overflow-hidden shadow-2xl shadow-black/50 max-h-[92vh] overflow-y-auto"
        >
          {/* Video / Thumbnail */}
          <div className="relative aspect-video bg-black">
            {video.videoSrc ? (
              <video
                ref={videoRef}
                src={video.videoSrc}
                controls
                autoPlay
                className="w-full h-full object-contain"
                playsInline
              />
            ) : video.thumbnail ? (
              <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full dot-pattern flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-accent" />
                </div>
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-lg bg-background/60 backdrop-blur-md border border-border flex items-center justify-center text-foreground hover:bg-background transition-colors"
            >
              <X className="w-4 h-4" />
            </motion.button>

            <div className="absolute top-3 left-3 z-10">
              <span className="px-2.5 py-1 rounded-md bg-background/60 backdrop-blur-md border border-border text-[11px] font-bold">
                {video.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 md:p-7">
            <h2 className="font-heading text-xl md:text-2xl font-black tracking-tight mb-3">{video.title}</h2>

            <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-muted-foreground">
              {video.likes > 0 && (
                <span className="flex items-center gap-1.5 text-hot font-bold text-xs">
                  <Heart className="w-3.5 h-3.5 fill-hot" />
                  {video.likes.toLocaleString('tr-TR')} beğeni
                </span>
              )}
              {video.comments > 0 && (
                <span className="flex items-center gap-1.5 text-xs">
                  <MessageCircle className="w-3.5 h-3.5" />
                  {video.comments} yorum
                </span>
              )}
              <span className="flex items-center gap-1.5 text-xs">
                <Calendar className="w-3.5 h-3.5" />
                {video.date}
              </span>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-5">{video.description}</p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {video.tags.map(tag => (
                <span key={tag} className="px-2.5 py-1 rounded-md bg-accent/5 border border-accent/10 text-[11px] text-accent/60 font-medium">#{tag}</span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2.5">
              {video.videoSrc && (
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => videoRef.current?.requestFullscreen?.()}
                  className="flex items-center gap-2 px-4 py-2.5 bg-accent text-background rounded-lg font-bold text-sm"
                >
                  <Maximize className="w-3.5 h-3.5" />
                  Tam Ekran
                </motion.button>
              )}
              {video.url && (
                <motion.a
                  href={video.url}
                  target="_blank"
                  rel="noopener"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-4 py-2.5 border border-border text-foreground rounded-lg font-bold text-sm hover:border-accent/20 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Kaynak
                </motion.a>
              )}
              {video.repoUrl && (
                <motion.a
                  href={video.repoUrl}
                  target="_blank"
                  rel="noopener"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-4 py-2.5 border border-border text-foreground rounded-lg font-bold text-sm hover:border-accent/20 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  Repo
                </motion.a>
              )}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleCopyLink}
                className="flex items-center gap-2 px-4 py-2.5 border border-border text-foreground rounded-lg font-bold text-sm hover:border-accent/20 transition-colors"
              >
                {copied ? <><Check className="w-3.5 h-3.5 text-lime" />Kopyalandı!</> : <><Copy className="w-3.5 h-3.5" />Kopyala</>}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
