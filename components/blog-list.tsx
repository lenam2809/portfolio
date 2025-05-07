"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const blogPosts = [
    {
        id: 1,
        title: "Xây Dựng Microservices Có Khả Năng Mở Rộng với .NET 7",
        excerpt:
            "Tìm hiểu cách thiết kế và triển khai kiến trúc microservices có khả năng mở rộng sử dụng các tính năng mới nhất trong .NET 7.",
        date: "2/5/2023",
        image: "/placeholder.svg?height=300&width=500",
        slug: "xay-dung-microservices-co-kha-nang-mo-rong-voi-dotnet-7",
    },
    {
        id: 2,
        title: "Mẹo Tối Ưu Hiệu Suất Entity Framework Core",
        excerpt:
            "Tối ưu hóa các hoạt động cơ sở dữ liệu với các kỹ thuật hiệu suất Entity Framework Core đã được chứng minh.",
        date: "15/4/2023",
        image: "/placeholder.svg?height=300&width=500",
        slug: "meo-toi-uu-hieu-suat-entity-framework-core",
    },
    {
        id: 3,
        title: "Bắt Đầu với Blazor WebAssembly",
        excerpt: "Hướng dẫn toàn diện để xây dựng ứng dụng web phía máy khách với Blazor WebAssembly.",
        date: "28/3/2023",
        image: "/placeholder.svg?height=300&width=500",
        slug: "bat-dau-voi-blazor-webassembly",
    },
]

export function BlogList() {
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
                    Bài Viết Mới Nhất
                </motion.h2>
                <motion.p
                    className="text-muted-foreground max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Những hiểu biết, hướng dẫn và suy nghĩ về phát triển .NET và kỹ thuật phần mềm.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="overflow-hidden border border-border/50 dark:bg-[#252538] h-full flex flex-col group hover:shadow-md transition-all duration-300">
                            <div className="relative h-48 w-full overflow-hidden">
                                {/* Hình dạng tùy chỉnh cho hình thu nhỏ blog sử dụng clip-path */}
                                <div className="absolute inset-0 clip-path-blog">
                                    <Image
                                        src={post.image || "/placeholder.svg"}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                {/* Lớp phủ gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E2E]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <CardContent className="pt-6 flex-grow">
                                <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-[#B2545E] transition-colors duration-300">
                                    {post.title}
                                </h3>
                                <p className="text-muted-foreground">{post.excerpt}</p>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    asChild
                                    variant="ghost"
                                    className="p-0 h-auto text-[#B2545E] hover:text-[#a34853] hover:bg-transparent group/btn"
                                >
                                    <Link href={`/blog/${post.slug}`} className="flex items-center">
                                        Đọc thêm
                                        <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover/btn:translate-x-1" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Button asChild className="bg-[#B2545E] hover:bg-[#a34853] text-white">
                        <Link href="/blog">Xem Tất Cả Bài Viết</Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
