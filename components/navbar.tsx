"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { MoodIndicator } from "@/components/mood-indicator"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion } from "framer-motion"

const navItems = [
    { name: "Trang chủ", path: "/" },
    { name: "Dự án", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Liên hệ", path: "/contact" },
]

export function Navbar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <motion.header
            className={`fixed top-0 z-50 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:supports-[backdrop-filter]:bg-[#1E1E2E]/60 transition-all duration-300 ${scrolled ? "border-opacity-100 py-2" : "border-opacity-0 py-4"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <motion.div
                        className="relative w-8 h-8 rounded-full bg-gradient-to-br from-[#B2545E] to-[#1E1E2E] flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-white font-bold text-sm">NAM</span>
                        <div className="absolute inset-0 rounded-full border border-[#B2545E] opacity-50"></div>
                    </motion.div>
                    <span className="text-xl font-bold">Portfolio</span>
                </Link>

                {/* Điều hướng desktop */}
                <nav className="hidden md:flex items-center gap-6">
                    <div className="flex items-center gap-6 mr-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className="group relative text-sm font-medium transition-colors hover:text-[#B2545E]"
                            >
                                <span className={`${pathname === item.path ? "text-[#B2545E]" : "text-foreground/80"}`}>
                                    {item.name}
                                </span>
                                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#B2545E] transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center gap-4">
                        <MoodIndicator />
                        <ThemeToggle />
                    </div>
                </nav>

                {/* Điều hướng mobile */}
                <div className="flex items-center gap-4 md:hidden">
                    <MoodIndicator />
                    <ThemeToggle />
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Mở menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="dark:bg-[#1E1E2E] pt-10">
                            <div className="flex flex-col gap-6 pt-10">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.path}
                                        href={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-lg font-medium transition-colors hover:text-[#B2545E] ${pathname === item.path ? "text-[#B2545E]" : "text-foreground/80"
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.header>
    )
}
