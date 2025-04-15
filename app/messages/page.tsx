"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ParticleBackground from "@/components/particle-background"

export default function MessagesPage() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  const messages = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      nickname: "Alex",
      avatar: "/placeholder.svg?height=200&width=200&text=A",
      message:
        "Cảm ơn các bạn đã cho mình những kỷ niệm tuyệt vời. Mong rằng tình bạn của chúng ta sẽ mãi bền vững theo thời gian.",
    },
    {
      id: 2,
      name: "Trần Thị B",
      nickname: "Bella",
      avatar: "/placeholder.svg?height=200&width=200&text=B",
      message:
        "Ba năm học cùng nhau, biết bao kỷ niệm vui buồn. Dù mai này có đi đâu, mình vẫn luôn nhớ về lớp 9A thân yêu.",
    },
    {
      id: 3,
      name: "Lê Văn C",
      nickname: "Charlie",
      avatar: "/placeholder.svg?height=200&width=200&text=C",
      message:
        "Mỗi ngày đến lớp là một niềm vui. Cảm ơn các bạn đã luôn bên cạnh, động viên và giúp đỡ mình trong suốt thời gian qua.",
    },
    {
      id: 4,
      name: "Phạm Thị D",
      nickname: "Daisy",
      avatar: "/placeholder.svg?height=200&width=200&text=D",
      message:
        "Lớp 9A - nơi cho mình những người bạn tuyệt vời nhất. Mong rằng sau này chúng ta vẫn sẽ giữ liên lạc và gặp lại nhau.",
    },
    {
      id: 5,
      name: "Hoàng Văn E",
      nickname: "Eric",
      avatar: "/placeholder.svg?height=200&width=200&text=E",
      message:
        "Những năm tháng học trò sẽ mãi là kỷ niệm đẹp trong lòng mình. Chúc các bạn luôn thành công và hạnh phúc trên con đường mình đã chọn.",
    },
    {
      id: 6,
      name: "Vũ Thị F",
      nickname: "Fiona",
      avatar: "/placeholder.svg?height=200&width=200&text=F",
      message:
        "Cảm ơn thầy cô và các bạn đã tạo nên một môi trường học tập thân thiện và đầy ắp tiếng cười. Mình sẽ nhớ mãi những kỷ niệm này.",
    },
  ]

  const handleCardFlip = (id: number) => {
    if (flippedCard === id) {
      setFlippedCard(null)
    } else {
      setFlippedCard(id)
    }
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
          Lưu Bút Kỷ Niệm
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {messages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative h-80 cursor-pointer perspective-1000`}
              onClick={() => handleCardFlip(item.id)}
            >
              <div
                className={`absolute inset-0 transition-transform duration-700 transform-style-3d ${
                  flippedCard === item.id ? "rotate-y-180" : ""
                }`}
              >
                {/* Front of card */}
                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-purple-800/70 to-pink-700/70 backdrop-blur-md rounded-xl p-6 flex flex-col items-center justify-center border border-purple-500/30">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-white/50">
                    <img
                      src={item.avatar || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{item.name}</h3>
                  <p className="text-purple-200 mb-4">"{item.nickname}"</p>
                  <p className="text-white/70 text-sm italic">Nhấp để xem lời nhắn</p>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-pink-700/70 to-purple-800/70 backdrop-blur-md rounded-xl p-6 flex flex-col items-center justify-center border border-purple-500/30">
                  <h3 className="text-xl font-bold text-white mb-4">Lời nhắn</h3>
                  <p className="text-purple-100 text-center italic">"{item.message}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
