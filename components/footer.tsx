"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 bg-gradient-to-t from-purple-900/90 to-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-purple-200 flex items-center justify-center gap-2">
            Được tạo bởi
            <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Z x V.dev
            </span>
            <Heart size={16} className="text-pink-500 animate-pulse" fill="currentColor" />
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
