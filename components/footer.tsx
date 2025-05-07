import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { MoodIndicator } from "@/components/mood-indicator"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-border/40 bg-background dark:bg-[#1E1E2E] py-8">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 flex items-center gap-3">
                        <MoodIndicator />
                        <p className="text-sm text-muted-foreground">&copy; {currentYear} Lê Văn Nam. Đã đăng ký bản quyền.</p>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-[#B2545E] transition-colors"
                            aria-label="GitHub"
                        >
                            <Github className="h-5 w-5" />
                        </Link>
                        <Link
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-[#B2545E] transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-5 w-5" />
                        </Link>
                        <Link
                            href="mailto:lenam28091999@gmail.com"
                            className="text-muted-foreground hover:text-[#B2545E] transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}