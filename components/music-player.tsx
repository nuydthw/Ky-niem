"use client"

import { useState, useEffect, useRef } from "react"
import { Music, MicOffIcon as MusicOff } from "lucide-react"

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true) // Bắt đầu với trạng thái đang phát
  const [mounted, setMounted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    setMounted(true)
    // Create audio element
    audioRef.current = new Audio("/ĐOÁ HOA.mp3")  // Đường dẫn đến file nhạc của bạn
    audioRef.current.loop = true
    audioRef.current.volume = 0.5
    
    // Tự động phát khi component được mount
    const playAudio = () => {
      if (audioRef.current) {
        const playPromise = audioRef.current.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true)
            })
            .catch(error => {
              console.log("Autoplay prevented:", error)
              setIsPlaying(false)
            })
        }
      }
    }
    
    playAudio()
    
    // Clean up on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const toggleMusic = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }

    setIsPlaying(!isPlaying)
  }

  if (!mounted) {
    // Trả về null khi component chưa được mount ở client
    return null
  }

  return (
    <button
      onClick={toggleMusic}
      className="p-2 rounded-full bg-purple-800/50 text-purple-100 hover:bg-purple-700/50 hover:text-white transition-colors"
      aria-label={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
    >
      {isPlaying ? <MusicOff size={18} /> : <Music size={18} />}
    </button>
  )
}