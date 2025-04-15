"use client"

import { motion } from "framer-motion"
import ParticleBackground from "@/components/particle-background"

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  const teachers = [
    {
      name: "Cô Nguyễn Thị A",
      role: "Giáo viên chủ nhiệm",
      subject: "Ngữ văn",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Thầy Trần Văn B",
      role: "Giáo viên bộ môn",
      subject: "Toán học",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Cô Lê Thị C",
      role: "Giáo viên bộ môn",
      subject: "Tiếng Anh",
      image: "/placeholder.svg?height=200&width=200",
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
          Giới Thiệu Lớp 9A
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-purple-900/30 backdrop-blur-md p-8 rounded-2xl border border-purple-500/20"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Thông Tin Lớp</h2>
            <ul className="space-y-3 text-purple-100">
              <li className="flex items-start">
                <span className="font-semibold min-w-32">Tên lớp:</span>
                <span>9A</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold min-w-32">Niên khóa:</span>
                <span>2020 - 2023</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold min-w-32">Sĩ số:</span>
                <span>35 học sinh</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold min-w-32">Trường:</span>
                <span>THCS Nguyễn Văn A</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold min-w-32">Địa chỉ:</span>
                <span>123 Đường ABC, Quận XYZ, TP. HCM</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-purple-900/30 backdrop-blur-md p-8 rounded-2xl border border-purple-500/20"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Thông Điệp Lớp</h2>
            <div className="text-purple-100 space-y-4">
              <p className="italic text-xl">"Một thời để nhớ, một lớp để yêu"</p>
              <p>
                Chúng tôi - lớp 9A, một tập thể đoàn kết, năng động và đầy sáng tạo. Ba năm học cùng nhau đã tạo nên
                những kỷ niệm khó quên và những tình bạn bền vững.
              </p>
              <p>
                Dù mai này có đi đâu, chúng ta vẫn mãi là một gia đình. Website này là nơi lưu giữ những khoảnh khắc đẹp
                nhất của chúng ta, để mỗi khi nhớ về nhau, chúng ta có thể ghé thăm và sống lại những kỷ niệm tuyệt vời.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.h2
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-3xl font-bold text-center text-white mb-12"
        >
          Đội Ngũ Giáo Viên
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              custom={index + 3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-purple-900/30 backdrop-blur-md rounded-xl overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={teacher.image || "/placeholder.svg"}
                  alt={teacher.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-70" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{teacher.name}</h3>
                <p className="text-purple-200 mb-2">{teacher.role}</p>
                <p className="text-purple-300">Môn: {teacher.subject}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          custom={6}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md p-8 rounded-2xl border border-purple-500/20 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Châm Ngôn Lớp</h2>
          <p className="text-2xl md:text-3xl italic text-purple-100">"Tình bạn là mãi mãi, kỷ niệm là vĩnh cửu"</p>
        </motion.div>
      </div>
    </main>
  )
}
