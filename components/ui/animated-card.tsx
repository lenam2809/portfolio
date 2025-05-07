"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import type { CardProps } from "@/components/ui/card" // Ensure CardProps is exported from the module or define it locally if missing

interface AnimatedCardProps extends CardProps {
    children: React.ReactNode
    className?: string // Add className to the interface
}

export function AnimatedCard({ children, className, ...props }: AnimatedCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="relative group">
            <Card
                className={`relative z-10 transition-all duration-300 ${className}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                {...props}
            >
                {children}
            </Card>
            <div
                className={`absolute inset-0 bg-gradient-to-r from-[#B2545E]/40 to-purple-500/40 rounded-lg blur-lg transition-opacity duration-300 ${isHovered ? "opacity-70" : "opacity-0"
                    }`}
                style={{ transform: "translate(8px, 8px)" }}
            />
        </div>
    )
}
