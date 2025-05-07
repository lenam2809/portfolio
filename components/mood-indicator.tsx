"use client"

import { useEffect, useState } from "react"
import { Sun, Moon, Sunrise, Sunset } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function MoodIndicator() {
    const [timeOfDay, setTimeOfDay] = useState<"morning" | "day" | "evening" | "night">("day")
    const [greeting, setGreeting] = useState("Chào buổi trưa")

    useEffect(() => {
        const updateTimeOfDay = () => {
            const hour = new Date().getHours()

            if (hour >= 5 && hour < 12) {
                setTimeOfDay("morning")
                setGreeting("Chào buổi sáng")
            } else if (hour >= 12 && hour < 17) {
                setTimeOfDay("day")
                setGreeting("Chào buổi chiều")
            } else if (hour >= 17 && hour < 21) {
                setTimeOfDay("evening")
                setGreeting("Chào buổi tối")
            } else {
                setTimeOfDay("night")
                setGreeting("Chúc ngủ ngon")
            }
        }

        updateTimeOfDay()
        const interval = setInterval(updateTimeOfDay, 60000) // Cập nhật mỗi phút

        return () => clearInterval(interval)
    }, [])

    const getIcon = () => {
        switch (timeOfDay) {
            case "morning":
                return <Sunrise className="h-4 w-4 text-amber-400" />
            case "day":
                return <Sun className="h-4 w-4 text-yellow-400" />
            case "evening":
                return <Sunset className="h-4 w-4 text-orange-400" />
            case "night":
                return <Moon className="h-4 w-4 text-indigo-400" />
        }
    }

    const getColor = () => {
        switch (timeOfDay) {
            case "morning":
                return "bg-amber-400"
            case "day":
                return "bg-yellow-400"
            case "evening":
                return "bg-orange-400"
            case "night":
                return "bg-indigo-400"
        }
    }

    const getTimeOfDayInVietnamese = () => {
        switch (timeOfDay) {
            case "morning":
                return "sáng"
            case "day":
                return "trưa"
            case "evening":
                return "tối"
            case "night":
                return "đêm"
        }
    }

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <div className={`relative w-3 h-3 rounded-full ${getColor()} animate-pulse`}>
                            <span className={`absolute inset-0 rounded-full animate-ping-slow ${getColor()}`}></span>
                        </div>
                        <span className="text-xs font-medium hidden md:inline-block">{getTimeOfDayInVietnamese()}</span>
                        {getIcon()}
                    </div>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                    <p>{greeting}! Tôi có thể giúp gì cho bạn hôm nay?</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
