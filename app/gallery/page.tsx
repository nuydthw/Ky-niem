"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import ParticleBackground from "@/components/particle-background"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = [
    { id: "all", name: "Tất cả" },
    { id: "classroom", name: "Lớp học" },
    { id: "trips", name: "Dã ngoại" },
    { id: "events", name: "Sự kiện" },
    { id: "birthday", name: "Sinh nhật" },
    { id: "graduation", name: "Tổng kết" },
  ]

  // Sample gallery data
  const galleryImages = [
    {
      id: 1,
      src: "/placeholder.svg?height=600&width=800&text=Lớp học 1",
      alt: "Lớp học 1",
      category: "classroom",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=600&width=800&text=Dã ngoại 1",
      alt: "Dã ngoại 1",
      category: "trips",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=600&width=800&text=Sự kiện 1",
      alt: "Sự kiện 1",
      category: "events",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=600&width=800&text=Sinh nhật 1",
      alt: "Sinh nhật 1",
      category: "birthday",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=600&width=800&text=Tổng kết 1",
      alt: "Tổng kết 1",
      category: "graduation",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=600&width=800&text=Lớp học 2",
      alt: "Lớp học 2",
      category: "classroom",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=600&width=800&text=Dã ngoại 2",
      alt: "Dã ngoại 2",
      category: "trips",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=600&width=800&text=Sự kiện 2",
      alt: "Sự kiện 2",
      category: "events",
    },
    {
      id: 9,
      src: "/placeholder.svg?height=600&width=800&text=Sinh nhật 2",
      alt: "Sinh nhật 2",
      category: "birthday",
    },
    {
      id: 10,
      src: "/placeholder.svg?height=600&width=800&text=Tổng kết 2",
      alt: "Tổng kết 2",
      category: "graduation",
    },
  ]

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <main className="min-h-screen pt-20 relative">
      <ParticleBackground />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
        >
          Album Ảnh Kỷ Niệm
        </motion.h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-purple-600 text-white"
                  : "bg-purple-900/30 text-purple-100 hover:bg-purple-800/50"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="overflow-hidden rounded-lg bg-purple-900/30 backdrop-blur-sm group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-white">{image.alt}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 bg-purple-900/50 rounded-full text-white hover:bg-purple-700/50 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </div>
    </main>
  )
}
