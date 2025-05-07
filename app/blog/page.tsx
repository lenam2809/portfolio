import { BlogList } from "@/components/blog-list"

export default function BlogPage() {
    return (
        <div className="py-10">
            <div className="container">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Blog</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Articles, tutorials, and insights on .NET development, C#, and software engineering.
                    </p>
                </div>
            </div>
            <BlogList />
        </div>
    )
}
