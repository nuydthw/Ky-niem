"use client"

import { motion } from "framer-motion"
import { Trophy, Medal, Award, Star } from "lucide-react"
import ParticleBackground from "@/components/particle-background"

export default function AchievementsPage() {
  // Sample achievements data
  const classAchievements = [
    {
      id: 1,
      title: "Lớp xuất sắc nhất khối",
      year: "2022-2023",
      description: "Đạt danh hiệu lớp xuất sắc nhất khối 9 với thành tích học tập và hoạt động ngoại khóa nổi bật.",
      icon: <Trophy className="text-yellow-400" size={24} />,
    },
    {
      id: 2,
      title: "Giải nhất cuộc thi văn nghệ cấp trường",
      year: "2022",
      description: "Tiết mục 'Tuổi học trò' đạt giải nhất cuộc thi văn nghệ chào mừng ngày Nhà giáo Việt Nam 20/11.",
      icon: <Medal className="text-yellow-400" size={24} />,
    },
    {
      id: 3,
      title: "Giải nhì cuộc thi thể thao cấp trường",
      year: "2022",
      description: "Đội bóng đá nam của lớp đạt giải nhì trong giải bóng đá học sinh cấp trường.",
      icon: <Award className="text-yellow-400" size={24} />,
    },
  ]

  const studentAchievements = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      achievements: [
        {
          title: "Học sinh xuất sắc",
          year: "2022-2023",
          description: "Đạt danh hiệu học sinh xuất sắc toàn diện cấp trường.",
        },
        {
          title: "Giải nhất Olympic Toán cấp quận",
          year: "2022",
          description: "Đạt giải nhất cuộc thi Olympic Toán học cấp quận.",
        },
      ],
    },
    {
      id: 2,
      name: "Trần Thị B",
      achievements: [
        {
          title: "Học sinh giỏi Văn cấp thành phố",
          year: "2023",
          description: "Đạt giải nhì học sinh giỏi môn Văn cấp thành phố.",
        },
        {
          title: "Giải nhất cuộc thi viết văn",
          year: "2022",
          description: "Đạt giải nhất cuộc thi viết văn 'Tuổi trẻ tài cao' cấp quận.",
        },
      ],
    },
    {
      id: 3,
      name: "Lê Văn C",
      achievements: [
        {
          title: "Giải nhất cuộc thi hát",
          year: "2023",
          description: "Đạt giải nhất cuộc thi giọng hát hay cấp trường.",
        },
        {
          title: "Thành viên đội tuyển văn nghệ",
          year: "2022-2023",
          description: "Là thành viên nòng cốt của đội tuyển văn nghệ trường.",
        },
      ],
    },
    {
      id: 4,
      name: "Phạm Thị D",
      achievements: [
        {
          title: "Học sinh giỏi Tiếng Anh",
          year: "2023",
          description: "Đạt giải ba học sinh giỏi môn Tiếng Anh cấp thành phố.",
        },
        {
          title: "Chứng chỉ IELTS 7.0",
          year: "2022",
          description: "Đạt chứng chỉ IELTS 7.0 khi mới học lớp 9.",
        },
      ],
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
          Bảng Vàng Thành Tích
        </motion.h1>

        {/* Class Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Trophy className="mr-3 text-yellow-400" size={28} />
            Thành Tích Tập Thể
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {classAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-md rounded-xl p-6 border border-purple-500/20"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-purple-800/50 rounded-full mr-4">{achievement.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                    <p className="text-purple-300 text-sm">{achievement.year}</p>
                  </div>
                </div>
                <p className="text-purple-100">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Student Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Star className="mr-3 text-yellow-400" size={28} />
            Thành Tích Cá Nhân
          </h2>

          <div className="space-y-8">
            {studentAchievements.map((student, studentIndex) => (
              <motion.div
                key={student.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: studentIndex * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-md rounded-xl overflow-hidden border border-purple-500/20"
              >
                <div className="p-4 bg-purple-800/50">
                  <h3 className="text-xl font-bold text-white">{student.name}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {student.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex">
                        <div className="mr-4 mt-1">
                          <Medal className="text-yellow-400" size={20} />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">{achievement.title}</h4>
                          <p className="text-purple-300 text-sm mb-1">{achievement.year}</p>
                          <p className="text-purple-100">{achievement.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}
