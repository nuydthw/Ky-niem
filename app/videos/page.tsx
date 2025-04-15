"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"
import ParticleBackground from "@/components/particle-background"

export default function VideosPage() {
  const videos = [
    {
      id: 1,
      title: "Kỷ niệm ngày học cuối cùng",
      description: "Những khoảnh khắc đáng nhớ trong ngày học cuối cùng của lớp 9A",
      thumbnail: "/placeholder.svg?height=720&width=1280&text=Video 1",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube ID
    },
    {
      id: 2,
      title: "Chuyến dã ngoại Đà Lạt",
      description: "Những kỷ niệm tuyệt vời trong chuyến đi Đà Lạt của lớp 9A",
      thumbnail: "/placeholder.svg?height=720&width=1280&text=Video 2",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube ID
    },
    {
      id: 3,
      title: "Lễ tổng kết năm học",
      description: "Buổi lễ tổng kết năm học đầy xúc động của lớp 9A",
      thumbnail: "/placeholder.svg?height=720&width=1280&text=Video 3",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube ID
    },
    {
      id: 4,
      title: "Tiết mục văn nghệ của lớp",
      description: "Tiết mục văn nghệ đặc sắc của lớp 9A trong hội diễn văn nghệ trường",
      thumbnail: "/placeholder.svg?height=720&width=1280&text=Video 4",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube ID
    },
  ]

  return (
    <main className="min-h-screen pt-20 relative">
      <ParticleBackground />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          Video Kỷ Niệm
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-purple-900/30 backdrop-blur-md rounded-xl overflow-hidden"
            >
              <div className="relative aspect-video group">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-purple-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-colors"
                  >
                    <Play size={24} fill="white" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
                <p className="text-purple-200">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md p-8 rounded-2xl border border-purple-500/20"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Video Kỷ Yếu Tổng Hợp</h2>
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/7ANH8SiEWcE?si=KRG2TgTcXkm-dk4b"
              title="HAZEL - LAST NIGHT 2 [prod. by @NxTMusic21]"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
