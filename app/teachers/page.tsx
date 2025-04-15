"use client"

import { motion } from "framer-motion"
import { MessageSquare, Quote } from "lucide-react"
import ParticleBackground from "@/components/particle-background"

export default function TeachersPage() {
  // Sample teachers messages data
  const teachersMessages = [
    {
      id: 1,
      name: "Cô Nguyễn Thị A",
      role: "Giáo viên chủ nhiệm",
      subject: "Ngữ văn",
      avatar: "/placeholder.svg?height=300&width=300&text=GV-A",
      message:
        "Các em thân mến, ba năm đồng hành cùng các em là khoảng thời gian đáng nhớ trong sự nghiệp giảng dạy của cô. Cô đã chứng kiến sự trưởng thành của các em từng ngày, từ những cô cậu học sinh còn bỡ ngỡ ngày đầu vào lớp 7 đến những thanh niên, thiếu nữ trưởng thành, tự tin ngày hôm nay. Cô tin rằng, với nền tảng kiến thức, kỹ năng và phẩm chất đã được rèn luyện, các em sẽ vững bước trên con đường phía trước, dù có khó khăn, thử thách. Hãy luôn giữ vững niềm tin, sự lạc quan và tinh thần đoàn kết như những gì các em đã thể hiện trong suốt thời gian qua. Cô luôn tự hào về các em, lớp 9A thân yêu của cô!",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      name: "Thầy Trần Văn B",
      role: "Giáo viên bộ môn",
      subject: "Toán học",
      avatar: "/placeholder.svg?height=300&width=300&text=GV-B",
      message:
        "Các em học sinh lớp 9A thân mến, thầy rất vui khi được dạy các em môn Toán trong suốt ba năm qua. Thầy đã chứng kiến sự nỗ lực, cố gắng của các em trong việc chinh phục môn học được xem là khó nhưng cũng rất quan trọng này. Nhiều em đã có những tiến bộ vượt bậc, từ những bài kiểm tra đầu tiên còn nhiều lúng túng đến những thành tích đáng nể trong các kỳ thi học sinh giỏi. Thầy tin rằng, dù các em có theo đuổi ngành nghề nào trong tương lai, những kỹ năng tư duy logic, phân tích và giải quyết vấn đề mà các em đã rèn luyện qua môn Toán sẽ là hành trang quý giá. Chúc các em luôn thành công và hạnh phúc trên con đường phía trước!",
    },
    {
      id: 3,
      name: "Cô Lê Thị C",
      role: "Giáo viên bộ môn",
      subject: "Tiếng Anh",
      avatar: "/placeholder.svg?height=300&width=300&text=GV-C",
      message:
        "Dear my beloved students of class 9A, it has been my great pleasure to be your English teacher for the past three years. I have witnessed your progress in English, from struggling with basic conversations to confidently expressing yourselves in this global language. I am particularly proud of how you have embraced not just the language but also the cultural aspects that come with learning English. Remember that language is a bridge that connects people from different backgrounds and cultures. As you move forward in life, I hope you will continue to develop your English skills and use them to explore the world, make new friends, and create opportunities for yourselves. Always believe in your abilities and never stop learning. I wish you all the best in your future endeavors!",
      audioUrl: "/placeholder.mp3",
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
          Lời Nhắn Từ Giáo Viên
        </motion.h1>

        <div className="space-y-16">
          {teachersMessages.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-md rounded-xl overflow-hidden border border-purple-500/20"
            >
              <div className="md:flex">
                <div className="md:w-1/3 bg-purple-800/30">
                  <div className="p-6 flex flex-col items-center justify-center h-full">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-white/50">
                      <img
                        src={teacher.avatar || "/placeholder.svg"}
                        alt={teacher.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white text-center">{teacher.name}</h3>
                    <p className="text-purple-200 text-center mb-1">{teacher.role}</p>
                    <p className="text-purple-300 text-center">Môn: {teacher.subject}</p>
                  </div>
                </div>

                <div className="md:w-2/3 p-6 md:p-8">
                  <div className="flex items-start mb-4">
                    <Quote className="text-purple-400 mr-2 flex-shrink-0 mt-1" size={24} />
                    <p className="text-purple-100 italic leading-relaxed">{teacher.message}</p>
                  </div>

                  {teacher.videoUrl && (
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <MessageSquare className="mr-2" size={18} />
                        Video nhắn gửi
                      </h4>
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <iframe
                          width="100%"
                          height="100%"
                          src={teacher.videoUrl}
                          title={`Lời nhắn từ ${teacher.name}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg"
                        ></iframe>
                      </div>
                    </div>
                  )}

                  {teacher.audioUrl && (
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <MessageSquare className="mr-2" size={18} />
                        Audio nhắn gửi
                      </h4>
                      <audio controls className="w-full" src={teacher.audioUrl}>
                        Trình duyệt của bạn không hỗ trợ phát audio.
                      </audio>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
