import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kỷ Yếu Lớp 9A - Một Thời Để Nhớ",
  description: "Website lưu giữ kỷ niệm của lớp 9A, nơi chia sẻ hình ảnh, video, lời nhắn và kỷ niệm đáng nhớ",
  generator: 'v0.dev',
  icons: {
    icon: "/favicon.png", // ← cái này là dòng thêm mới
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}


