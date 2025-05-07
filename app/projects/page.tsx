import { getPersonalInfo } from "@/lib/personal-info"
import { PersonalInfoProvider } from "@/context/personal-info-context"
import { Projects } from "@/components/projects"

export const revalidate = 60 // Revalidate this page every 60 seconds

export default async function ProjectsPage() {
    const personalInfo = await getPersonalInfo()

    return (
        <PersonalInfoProvider initialData={personalInfo}>
            <div className="py-10">
                <div className="container">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4">Dự Án Của Tôi</h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Bộ sưu tập toàn diện về công việc của tôi, thể hiện kỹ năng và kinh nghiệm của tôi với tư cách là Lập
                            Trình Viên .NET C#.
                        </p>
                    </div>
                </div>
                <Projects />
            </div>
        </PersonalInfoProvider>
    )
}
