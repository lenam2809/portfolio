"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Enterprise CRM System",
        description:
            "A comprehensive customer relationship management system built with .NET 7, EF Core, and Blazor WebAssembly.",
        image: "/placeholder.svg?height=400&width=600",
        tags: [".NET 7", "Blazor", "EF Core", "SQL Server"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "E-commerce Platform",
        description: "Scalable e-commerce solution with microservices architecture using .NET 6 and Azure services.",
        image: "/placeholder.svg?height=400&width=600",
        tags: [".NET 6", "Microservices", "Azure", "Docker"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "Real-time Analytics Dashboard",
        description: "Interactive dashboard for real-time data visualization using SignalR and Blazor Server.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Blazor Server", "SignalR", "Chart.js", "SQL Server"],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 4,
        title: "Task Management API",
        description: "RESTful API for task management with .NET 7, Entity Framework Core, and JWT authentication.",
        image: "/placeholder.svg?height=400&width=600",
        tags: [".NET 7", "EF Core", "JWT", "REST API"],
        demoUrl: "#",
        githubUrl: "#",
    },
]

export function Projects() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null)

    return (
        <section className="py-20 container relative">
            {/* Custom decorative element */}
            <div className="absolute bottom-0 left-0 w-40 h-40 -z-10 opacity-10">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill="#B2545E"
                        d="M39.9,-65.7C51.1,-58.5,59.2,-46.3,65.8,-33C72.4,-19.7,77.5,-5.3,75.8,8.2C74.1,21.7,65.6,34.3,55.4,44.9C45.2,55.5,33.3,64.1,19.7,69.5C6.1,74.9,-9.1,77.1,-23.4,73.9C-37.7,70.7,-51.1,62.1,-60.2,50.1C-69.3,38.1,-74.1,22.7,-76.3,6.8C-78.5,-9.1,-78.1,-25.6,-70.8,-38.3C-63.5,-51,-49.3,-59.9,-35.2,-65.5C-21.1,-71.1,-7,-73.4,4.3,-80.1C15.7,-86.8,28.7,-72.9,39.9,-65.7Z"
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
                    Featured Projects
                </motion.h2>
                <motion.p
                    className="text-muted-foreground max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    A selection of my recent work and personal projects showcasing my skills and experience.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        onMouseEnter={() => setHoveredProject(project.id)}
                        onMouseLeave={() => setHoveredProject(null)}
                        className="h-full"
                    >
                        <Card className="overflow-hidden border border-border/50 dark:bg-[#252538] h-full group transition-all duration-300 hover:shadow-xl">
                            <div className="relative h-56 w-full overflow-hidden">
                                {/* Custom overlay pattern */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                                {/* Diagonal pattern overlay */}
                                <div className="absolute inset-0 bg-[#1E1E2E]/80 opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10">
                                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <pattern
                                                id="diagonalHatch"
                                                width="10"
                                                height="10"
                                                patternTransform="rotate(45 0 0)"
                                                patternUnits="userSpaceOnUse"
                                            >
                                                <line x1="0" y1="0" x2="0" y2="10" stroke="#B2545E" strokeWidth="1" />
                                            </pattern>
                                        </defs>
                                        <rect width="100%" height="100%" fill="url(#diagonalHatch)" />
                                    </svg>
                                </div>

                                <Image
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* View details button that appears on hover */}
                                <div
                                    className={`absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-300 ${hoveredProject === project.id ? "opacity-100" : "opacity-0"
                                        }`}
                                >
                                    <Button className="bg-[#B2545E] hover:bg-[#B2545E]/90 text-white button-glow">
                                        <Eye className="h-4 w-4 mr-2" />
                                        View Details
                                    </Button>
                                </div>
                            </div>

                            <CardContent className="pt-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-[#B2545E] transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground mb-4">{project.description}</p>
                            </CardContent>

                            <CardFooter className="flex flex-wrap gap-2 pt-0 pb-6">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 text-xs rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors duration-300 hover:bg-[#B2545E]/20 hover:text-[#B2545E]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </CardFooter>

                            {/* Project links that slide up on hover */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1E1E2E] to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-end gap-2">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className="bg-transparent border-white/20 hover:bg-white/10 hover:text-white"
                                >
                                    <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="h-4 w-4 mr-1" />
                                        Demo
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className="bg-transparent border-white/20 hover:bg-white/10 hover:text-white"
                                >
                                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                        <Github className="h-4 w-4 mr-1" />
                                        Code
                                    </Link>
                                </Button>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Button asChild className="relative overflow-hidden group bg-[#B2545E] hover:bg-[#B2545E]/90 text-white">
                        <Link href="/projects">
                            <span className="relative z-10">View All Projects</span>
                            <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#B2545E]/0 via-white/20 to-[#B2545E]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
