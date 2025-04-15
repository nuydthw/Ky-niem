"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import MusicPlayer from "./music-player"

const navItems = [
  { name: "Trang Chủ", path: "/" },
  { name: "Giới Thiệu", path: "/about" },
  { name: "Album Ảnh", path: "/gallery" },
  { name: "Video", path: "/videos" },
  { name: "Lưu Bút", path: "/messages" },
  { name: "Thành Viên", path: "/members" },
  { name: "Bảng Vàng", path: "/achievements" },
  { name: "Lời Nhắn GV", path: "/teachers" },
  { name: "Sổ Cảm Xúc", path: "/guestbook" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-purple-900/80 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-white">Lớp 9A</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === item.path
                      ? "text-white bg-purple-700/50"
                      : "text-purple-100 hover:bg-purple-800/50 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <MusicPlayer />
            </nav>

            {/* Mobile Navigation Button */}
            <div className="flex items-center md:hidden">
              <MusicPlayer />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 ml-2 rounded-md text-purple-100 hover:bg-purple-800/50 hover:text-white focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-purple-900/95 backdrop-blur-lg pt-20"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.path}
                    className={`block px-4 py-3 rounded-md text-lg font-medium ${
                      pathname === item.path
                        ? "text-white bg-purple-700/50"
                        : "text-purple-100 hover:bg-purple-800/50 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
