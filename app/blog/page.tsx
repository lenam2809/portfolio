import { getPersonalInfo } from "@/lib/personal-info"
import { PersonalInfoProvider } from "@/context/personal-info-context"
import { BlogList } from "@/components/blog-list"

export const revalidate = 60 // Revalidate this page every 60 seconds

export default async function BlogPage() {
    const personalInfo = await getPersonalInfo()

    return (
        <PersonalInfoProvider initialData={personalInfo}>
            <div className="py-10">
                <div className="container">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4">Blog</h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Bài viết, hướng dẫn và hiểu biết sâu sắc về phát triển .NET, C# và kỹ thuật phần mềm.
                        </p>
                    </div>
                </div>
                <BlogList />
            </div>
        </PersonalInfoProvider>
    )
}
