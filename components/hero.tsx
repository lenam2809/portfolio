"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { usePersonalInfo } from "@/context/personal-info-context"
import Image from "next/image"

export function Hero() {
    const [isVisible, setIsVisible] = useState(false)
    const { personalInfo } = usePersonalInfo()

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <section className="py-32 md:py-40 container relative overflow-hidden">
            {/* Mẫu nền tùy chỉnh */}
            <div className="absolute inset-0 -z-10 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                <motion.div
                    className="flex-1 text-center md:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                            <span className="block">Xin chào, tôi là</span>
                            <span className="text-[#B2545E]">{personalInfo.name}</span>
                        </h1>
                    </motion.div>

                    <motion.h2
                        className="text-xl md:text-2xl text-muted-foreground mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        {personalInfo.title}
                    </motion.h2>

                    <motion.p
                        className="text-lg max-w-2xl mb-8 mx-auto md:mx-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        {personalInfo.bio}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <Button size="lg" className="relative overflow-hidden group bg-[#B2545E] hover:bg-[#B2545E]/90 text-white">
                            <span className="relative z-10">Thuê Tôi</span>
                            <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#B2545E]/0 via-white/20 to-[#B2545E]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                        </Button>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="flex-1 flex justify-center md:justify-end"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        {/* Avatar tùy chỉnh với viền độc đáo */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#B2545E] to-[#1E1E2E] p-1">
                            <div className="h-full w-full rounded-full overflow-hidden border-4 border-[#1E1E2E] dark:border-[#B2545E]/20">
                                <Image
                                    src={personalInfo.avatar || "/images/avatar.jpg"}
                                    alt={personalInfo.name}
                                    width={320}
                                    height={320}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Phần tử trang trí */}
                        <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-[#B2545E]/20 animate-pulse"></div>
                        <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-[#B2545E]/30 animate-pulse delay-300"></div>

                        {/* Chấm động */}
                        <div className="absolute top-1/4 -left-6 w-3 h-3 rounded-full bg-[#B2545E] animate-ping-slow"></div>
                        <div className="absolute bottom-1/4 -right-6 w-3 h-3 rounded-full bg-[#B2545E] animate-ping-slow delay-700"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
