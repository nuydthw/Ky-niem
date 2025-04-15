"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import ParticleBackground from "@/components/particle-background"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Loading Animation */}
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              Kỷ Yếu Lớp 9A
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 1 }}
              className="h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"
            />
          </motion.div>
        </div>
      ) : (
        <div className="relative z-10">
          {/* Hero Banner */}
          <section className="relative h-screen flex items-center justify-center">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-indigo-900/50 to-pink-900/30 mix-blend-multiply" />
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>

            <div className="relative z-10 text-center px-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6"
              >
                Lớp 9A
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-white mb-8 italic"
              >
                "Một thời để nhớ, một lớp để yêu"
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Khám phá kỷ niệm
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Quick Navigation */}
          <section className="py-16 bg-gradient-to-b from-purple-900/90 to-indigo-900/90 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { title: "Album Ảnh", href: "/gallery", icon: "📸" },
                  { title: "Video Kỷ Niệm", href: "/videos", icon: "🎬" },
                  { title: "Lưu Bút", href: "/messages", icon: "✍️" },
                  { title: "Thành Viên", href: "/members", icon: "👨‍👩‍👧‍👦" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Link href={item.href}>
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:shadow-lg group">
                        <div className="text-4xl mb-3">{item.icon}</div>
                        <h3 className="text-xl font-medium text-white group-hover:text-pink-200 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Memories */}
          <section className="py-20 bg-gradient-to-b from-indigo-900/90 to-purple-900/90 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
              >
                Khoảnh Khắc Đáng Nhớ
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="overflow-hidden rounded-xl group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={`/placeholder.svg?height=400&width=600&text=Kỷ niệm ${item}`}
                        alt={`Kỷ niệm ${item}`}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4">
                          <h3 className="text-xl font-bold text-white">Kỷ niệm {item}</h3>
                          <p className="text-purple-200">Mô tả ngắn về khoảnh khắc đáng nhớ này</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-white/20 transition-all duration-300"
                >
                  Xem thêm kỷ niệm
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  )
}
