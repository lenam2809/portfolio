"use client"

import { usePersonalInfo } from "@/context/personal-info-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export function PersonalInfoDisplay() {
    const { personalInfo } = usePersonalInfo()

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
                    Thông Tin Cá Nhân
                </motion.h2>
                <motion.p
                    className="text-muted-foreground max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Thông tin liên hệ và tiểu sử của tôi
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="border border-border/50 dark:bg-[#252538] h-full">
                        <CardHeader>
                            <CardTitle>Thông Tin Liên Hệ</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Mail className="h-5 w-5 text-[#B2545E] mt-0.5" />
                                <div>
                                    <h3 className="font-medium">Email</h3>
                                    <p className="text-muted-foreground">{personalInfo.email}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Phone className="h-5 w-5 text-[#B2545E] mt-0.5" />
                                <div>
                                    <h3 className="font-medium">Điện thoại</h3>
                                    <p className="text-muted-foreground">{personalInfo.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-[#B2545E] mt-0.5" />
                                <div>
                                    <h3 className="font-medium">Địa chỉ</h3>
                                    <p className="text-muted-foreground">
                                        {personalInfo.address.street}, {personalInfo.address.city}, {personalInfo.address.state}{" "}
                                        {personalInfo.address.zipCode}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="border border-border/50 dark:bg-[#252538] h-full">
                        <CardHeader>
                            <CardTitle>Tiểu Sử</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{personalInfo.bio}</p>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
