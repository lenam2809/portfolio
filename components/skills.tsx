"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Database, Code, Server, Globe, Layers, GitBranch } from "lucide-react"
import { usePersonalInfo } from "@/context/personal-info-context"

// Ánh xạ tên icon thành component
const iconMap: Record<string, React.ReactNode> = {
    Database: <Database className="h-8 w-8 text-[#B2545E]" />,
    Code: <Code className="h-8 w-8 text-[#B2545E]" />,
    Layers: <Layers className="h-8 w-8 text-[#B2545E]" />,
    Globe: <Globe className="h-8 w-8 text-[#B2545E]" />,
    Server: <Server className="h-8 w-8 text-[#B2545E]" />,
    GitBranch: <GitBranch className="h-8 w-8 text-[#B2545E]" />,
}

export function Skills() {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
    const { personalInfo } = usePersonalInfo()

    return (
        <section className="py-20 container relative">
            {/* Custom decorative element */}
            <div className="absolute top-0 right-0 w-40 h-40 -z-10 opacity-10">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill="#B2545E"
                        d="M47.5,-57.2C59.9,-46.8,67.5,-30.9,71.5,-13.7C75.5,3.5,75.8,22,68.1,36.1C60.3,50.2,44.5,59.9,27.7,65.2C10.9,70.5,-6.9,71.4,-23.1,66.5C-39.4,61.6,-54.2,50.9,-62.6,36.1C-71,21.3,-73,2.3,-69.3,-15.2C-65.6,-32.7,-56.2,-48.8,-42.8,-59C-29.4,-69.2,-12,-73.5,3.2,-77.2C18.4,-80.9,35.1,-67.7,47.5,-57.2Z"
                        transform="translate(100 100)"
                    />
                </svg>
            </div>

            <div className="text-center mb-16">
                <motion.h2
                    className="text-3xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Kỹ Năng & Chuyên Môn
                </motion.h2>
                <motion.p
                    className="text-muted-foreground max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Kỹ năng kỹ thuật và lĩnh vực chuyên môn của tôi trong phát triển .NET và các công nghệ liên quan.
                </motion.p>
            </div>

            <TooltipProvider>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {personalInfo.skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                        >
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Card className="border border-border/50 dark:bg-[#252538] hover:shadow-md transition-all duration-300 overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#B2545E]/0 via-[#B2545E]/5 to-[#B2545E]/0 opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1500"></div>
                                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                            <div className="p-2 rounded-md bg-[#B2545E]/10 text-[#B2545E]">
                                                {iconMap[skill.icon] || <Code className="h-8 w-8 text-[#B2545E]" />}
                                            </div>
                                            <h3 className="text-xl font-semibold">{skill.name}</h3>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="relative h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="absolute h-full bg-[#B2545E] rounded-full"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: hoveredSkill === skill.name ? `${skill.level}%` : `${skill.level}%` }}
                                                    transition={{ duration: 1, ease: "easeOut" }}
                                                />
                                            </div>
                                            <div className="mt-2 text-right text-sm text-muted-foreground">{skill.level}%</div>
                                        </CardContent>
                                    </Card>
                                </TooltipTrigger>
                                <TooltipContent side="top" className="max-w-xs">
                                    <p>
                                        <strong>Ví dụ thực tế:</strong> {skill.example}
                                    </p>
                                </TooltipContent>
                            </Tooltip>
                        </motion.div>
                    ))}
                </div>
            </TooltipProvider>
        </section>
    )
}
