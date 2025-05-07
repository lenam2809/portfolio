"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, FileText } from "lucide-react"

export function Contact() {
    const [focusedField, setFocusedField] = useState<string | null>(null)

    return (
        <section className="py-16 container">
            <div className="text-center mb-12">
                <motion.h2
                    className="text-3xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Liên Hệ
                </motion.h2>
                <motion.p
                    className="text-muted-foreground max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Bạn có dự án trong đầu hoặc muốn thảo luận về cơ hội tiềm năng? Tôi rất muốn nghe từ bạn.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="border border-border/50 dark:bg-[#252538]">
                        <CardHeader>
                            <CardTitle>Gửi Tin Nhắn Cho Tôi</CardTitle>
                            <CardDescription>
                                Điền vào biểu mẫu dưới đây và tôi sẽ liên hệ lại với bạn sớm nhất có thể.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">
                                        Tên
                                    </label>
                                    <Input
                                        id="name"
                                        placeholder="Tên của bạn"
                                        className={`dark:bg-[#1E1E2E] transition-all duration-300 ${focusedField === "name" ? "border-[#B2545E] ring-1 ring-[#B2545E]" : ""
                                            }`}
                                        onFocus={() => setFocusedField("name")}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">
                                        Email
                                    </label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Email của bạn"
                                        className={`dark:bg-[#1E1E2E] transition-all duration-300 ${focusedField === "email" ? "border-[#B2545E] ring-1 ring-[#B2545E]" : ""
                                            }`}
                                        onFocus={() => setFocusedField("email")}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">
                                        Tin Nhắn
                                    </label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tin nhắn của bạn"
                                        rows={5}
                                        className={`dark:bg-[#1E1E2E] transition-all duration-300 ${focusedField === "message" ? "border-[#B2545E] ring-1 ring-[#B2545E]" : ""
                                            }`}
                                        onFocus={() => setFocusedField("message")}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                </div>
                                <Button type="submit" className="w-full bg-[#B2545E] hover:bg-[#a34853] text-white">
                                    Gửi Tin Nhắn
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    className="flex flex-col justify-center"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Kết Nối Với Tôi</h3>
                            <div className="flex flex-col space-y-4">
                                <Link
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-muted-foreground hover:text-[#B2545E] transition-colors"
                                >
                                    <Github className="h-5 w-5 mr-3" />
                                    <span>github.com/nguyenvana</span>
                                </Link>
                                <Link
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-muted-foreground hover:text-[#B2545E] transition-colors"
                                >
                                    <Linkedin className="h-5 w-5 mr-3" />
                                    <span>linkedin.com/in/nguyenvana</span>
                                </Link>
                                <Link
                                    href="mailto:nguyenvana@example.com"
                                    className="flex items-center text-muted-foreground hover:text-[#B2545E] transition-colors"
                                >
                                    <Mail className="h-5 w-5 mr-3" />
                                    <span>nguyenvana@example.com</span>
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-4">Hồ Sơ</h3>
                            <p className="text-muted-foreground mb-4">
                                Tải xuống hồ sơ của tôi để tìm hiểu thêm về kinh nghiệm, học vấn và kỹ năng của tôi.
                            </p>
                            <Button asChild className="bg-[#B2545E] hover:bg-[#a34853] text-white">
                                <Link href="/resume.pdf" download>
                                    <FileText className="h-4 w-4 mr-2" />
                                    Tải Xuống CV
                                </Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
