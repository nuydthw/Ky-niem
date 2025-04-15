"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, MessageSquare, User, Calendar } from "lucide-react"
import ParticleBackground from "@/components/particle-background"

export default function GuestbookPage() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  // Sample guestbook entries
  const [entries, setEntries] = useState([
    {
      id: 1,
      name: "Nguyễn Văn X",
      message: "Trang kỷ yếu rất đẹp và ý nghĩa. Chúc các bạn lớp 9A luôn thành công và hạnh phúc!",
      date: "2023-05-15",
    },
    {
      id: 2,
      name: "Trần Thị Y",
      message: "Nhìn lại những kỷ niệm của các bạn, mình cũng nhớ về thời học sinh của mình. Giữ gìn tình bạn nhé!",
      date: "2023-05-10",
    },
    {
      id: 3,
      name: "Lê Văn Z",
      message: "Trang web thiết kế rất đẹp, hiệu ứng mượt mà. Chúc các bạn có nhiều kỷ niệm đẹp hơn nữa!",
      date: "2023-05-05",
    },
  ])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim() === "" || message.trim() === "") return

    const newEntry = {
      id: entries.length + 1,
      name,
      message,
      date: new Date().toISOString().split("T")[0],
    }

    setEntries([newEntry, ...entries])
    setName("")
    setMessage("")
    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  }

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
          Sổ Cảm Xúc
        </motion.h1>

        <div className="max-w-4xl mx-auto">
          {/* Comment Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-md rounded-xl p-6 mb-12 border border-purple-500/20"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <MessageSquare className="mr-3" size={24} />
              Để Lại Lời Nhắn
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-purple-200 mb-2">
                  Tên của bạn
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-purple-500/30 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  placeholder="Nhập tên của bạn"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-purple-200 mb-2">
                  Lời nhắn
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-purple-500/30 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 min-h-[120px]"
                  placeholder="Nhập lời nhắn của bạn"
                  required
                ></textarea>
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Gửi lời nhắn
                  <Send size={18} />
                </button>
              </div>
            </form>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-200"
              >
                Cảm ơn bạn đã để lại lời nhắn!
              </motion.div>
            )}
          </motion.div>

          {/* Comments List */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Lời Nhắn Từ Mọi Người</h2>

            {entries.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-md rounded-xl p-6 border border-purple-500/20"
              >
                <div className="flex items-start">
                  <div className="bg-purple-700/50 rounded-full p-3 mr-4">
                    <User className="text-purple-200" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold text-white">{entry.name}</h3>
                      <div className="flex items-center text-purple-300 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {entry.date}
                      </div>
                    </div>
                    <p className="text-purple-100">{entry.message}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
