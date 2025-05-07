"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
// Ensure ButtonProps is correctly imported or replace with appropriate type
import type { ButtonProps } from "@/components/ui/button" // Verify this export exists or replace with a valid type

interface AnimatedButtonProps extends ButtonProps {
    children: React.ReactNode
}

export function AnimatedButton({ children, className, ...props }: AnimatedButtonProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="relative inline-block">
            <Button
                className={`relative z-10 overflow-hidden ${className}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                {...props}
            >
                {children}
                <span
                    className={`absolute inset-0 z-0 bg-white/20 transition-all duration-300 ${isHovered ? "animate-ripple" : "opacity-0"
                        }`}
                />
            </Button>
        </div>
    )
}
