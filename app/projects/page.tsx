import { Projects } from "@/components/projects"

export default function ProjectsPage() {
    return (
        <div className="py-10">
            <div className="container">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">My Projects</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive collection of my work, showcasing my skills and experience as a .NET C# Developer.
                    </p>
                </div>
            </div>
            <Projects />
        </div>
    )
}
