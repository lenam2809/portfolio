"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Database, Code, Server, Globe, Layers, GitBranch } from "lucide-react"

const skills = [
    {
        name: ".NET Core",
        icon: <Database className="h-8 w-8 text-[#B2545E]" />,
        level: 90,
        example: "Built a high-performance API handling 10M+ requests daily using .NET Core and Azure",
    },
    {
        name: "C#",
        icon: <Code className="h-8 w-8 text-[#B2545E]" />,
        level: 95,
        example: "Developed custom LINQ providers and optimized memory usage in large-scale applications",
    },
    {
        name: "Entity Framework",
        icon: <Layers className="h-8 w-8 text-[#B2545E]" />,
        level: 85,
        example: "Implemented complex data access patterns with EF Core, reducing query times by 40%",
    },
    {
        name: "Blazor",
        icon: <Globe className="h-8 w-8 text-[#B2545E]" />,
        level: 80,
        example: "Created interactive dashboards with real-time updates using Blazor WebAssembly",
    },
    {
        name: "SQL Server",
        icon: <Server className="h-8 w-8 text-[#B2545E]" />,
        level: 85,
        example: "Optimized database schemas and queries, improving performance in a system with 50M+ records",
    },
    {
        name: "Git & CI/CD",
        icon: <GitBranch className="h-8 w-8 text-[#B2545E]" />,
        level: 75,
        example: "Set up automated deployment pipelines with GitHub Actions and Azure DevOps",
    },
]

export function Skills() {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

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
                    Skills & Expertise
                </motion.h2>
                <motion.p
                    className="text-muted-foreground max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    My technical skills and areas of expertise in .NET development and related technologies.
                </motion.p>
            </div>

            <TooltipProvider>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
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
                                            <div className="p-2 rounded-md bg-[#B2545E]/10 text-[#B2545E]">{skill.icon}</div>
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
                                        <strong>Real-world example:</strong> {skill.example}
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
