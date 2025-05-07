import type React from "react"
import type { Metadata, Viewport } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PersonalInfoProvider } from "@/context/personal-info-context"
import { getPersonalInfo } from "@/lib/personal-info"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio | Lập Trình Viên .NET C#",
  description: "Trang web portfolio cá nhân giới thiệu kỹ năng và dự án của tôi với tư cách là Lập Trình Viên .NET C#",
  authors: [{ name: "Lê Văn Nam" }],
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#1E1E2E" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const personalInfo = await getPersonalInfo()

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.className} min-h-screen bg-white dark:bg-[#1E1E2E] text-slate-900 dark:text-[#F5F5F5]`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <PersonalInfoProvider initialData={personalInfo}>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
              <Footer />
            </div>
          </PersonalInfoProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}