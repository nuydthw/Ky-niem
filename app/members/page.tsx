"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, User, Mail, Phone, MapPin } from "lucide-react"
import ParticleBackground from "@/components/particle-background"

export default function MembersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMember, setSelectedMember] = useState<number | null>(null)

  // Sample members data
  const members = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      nickname: "Alex",
      avatar: "/placeholder.svg?height=300&width=300&text=A",
      role: "Lớp trưởng",
      hobbies: ["Đọc sách", "Chơi bóng rổ", "Nghe nhạc"],
      quote: "Học, học nữa, học mãi",
      contact: {
        email: "nguyenvana@example.com",
        phone: "0123456789",
        address: "Quận 1, TP.HCM",
      },
    },
    {
      id: 2,
      name: "Trần Thị B",
      nickname: "Bella",
      avatar: "/placeholder.svg?height=300&width=300&text=B",
      role: "Lớp phó học tập",
      hobbies: ["Vẽ tranh", "Chơi piano", "Nấu ăn"],
      quote: "Sống là để trải nghiệm",
      contact: {
        email: "tranthib@example.com",
        phone: "0123456789",
        address: "Quận 2, TP.HCM",
      },
    },
    {
      id: 3,
      name: "Lê Văn C",
      nickname: "Charlie",
      avatar: "/placeholder.svg?height=300&width=300&text=C",
      role: "Lớp phó văn nghệ",
      hobbies: ["Chơi guitar", "Hát", "Xem phim"],
      quote: "Âm nhạc là cuộc sống của tôi",
      contact: {
        email: "levanc@example.com",
        phone: "0123456789",
        address: "Quận 3, TP.HCM",
      },
    },
    {
      id: 4,
      name: "Phạm Thị D",
      nickname: "Daisy",
      avatar: "/placeholder.svg?height=300&width=300&text=D",
      role: "Tổ trưởng",
      hobbies: ["Đọc truyện", "Chơi cầu lông", "Du lịch"],
      quote: "Mỗi ngày là một cơ hội mới",
      contact: {
        email: "phamthid@example.com",
        phone: "0123456789",
        address: "Quận 4, TP.HCM",
      },
    },
    {
      id: 5,
      name: "Hoàng Văn E",
      nickname: "Eric",
      avatar: "/placeholder.svg?height=300&width=300&text=E",
      role: "Tổ phó",
      hobbies: ["Chơi game", "Lập trình", "Bơi lội"],
      quote: "Công nghệ thay đổi thế giới",
      contact: {
        email: "hoangvane@example.com",
        phone: "0123456789",
        address: "Quận 5, TP.HCM",
      },
    },
    {
      id: 6,
      name: "Vũ Thị F",
      nickname: "Fiona",
      avatar: "/placeholder.svg?height=300&width=300&text=F",
      role: "Thủ quỹ",
      hobbies: ["Mua sắm", "Làm bánh", "Yoga"],
      quote: "Sống khỏe, sống vui",
      contact: {
        email: "vuthif@example.com",
        phone: "0123456789",
        address: "Quận 6, TP.HCM",
      },
    },
    {
      id: 7,
      name: "Đặng Văn G",
      nickname: "Gary",
      avatar: "/placeholder.svg?height=300&width=300&text=G",
      role: "Học sinh",
      hobbies: ["Chơi bóng đá", "Chạy bộ", "Nhiếp ảnh"],
      quote: "Thể thao là đam mê",
      contact: {
        email: "dangvang@example.com",
        phone: "0123456789",
        address: "Quận 7, TP.HCM",
      },
    },
    {
      id: 8,
      name: "Ngô Thị H",
      nickname: "Helen",
      avatar: "/placeholder.svg?height=300&width=300&text=H",
      role: "Học sinh",
      hobbies: ["Khiêu vũ", "Đọc sách", "Viết blog"],
      quote: "Nhảy múa là niềm vui",
      contact: {
        email: "ngothih@example.com",
        phone: "0123456789",
        address: "Quận 8, TP.HCM",
      },
    },
  ]

  const filteredMembers = members.filter((member) => member.name.toLowerCase().includes(searchTerm.toLowerCase()))

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
          Thành Viên Lớp 9A
        </motion.h1>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto mb-12 relative"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm thành viên..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-full bg-white/10 backdrop-blur-md border border-purple-500/30 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-300" size={18} />
          </div>
        </motion.div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-md rounded-xl overflow-hidden border border-purple-500/20 cursor-pointer"
              onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={member.avatar || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-70" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-purple-200">"{member.nickname}"</p>
                </div>
              </div>

              {/* Expanded Details */}
              {selectedMember === member.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="p-4"
                >
                  <div className="mb-3">
                    <p className="text-purple-200 mb-1">Vai trò:</p>
                    <p className="text-white font-medium">{member.role}</p>
                  </div>

                  <div className="mb-3">
                    <p className="text-purple-200 mb-1">Sở thích:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.hobbies.map((hobby, i) => (
                        <span key={i} className="px-2 py-1 bg-purple-800/50 rounded-full text-xs text-white">
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="text-purple-200 mb-1">Châm ngôn:</p>
                    <p className="text-white italic">"{member.quote}"</p>
                  </div>

                  <div className="pt-2 border-t border-purple-500/30">
                    <p className="text-purple-200 mb-2">Liên hệ:</p>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2 text-white">
                        <Mail size={14} className="text-purple-300" />
                        <span>{member.contact.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white">
                        <Phone size={14} className="text-purple-300" />
                        <span>{member.contact.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white">
                        <MapPin size={14} className="text-purple-300" />
                        <span>{member.contact.address}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-12">
            <User size={48} className="mx-auto text-purple-400 mb-4" />
            <p className="text-purple-200 text-lg">Không tìm thấy thành viên nào</p>
          </div>
        )}
      </div>
    </main>
  )
}
