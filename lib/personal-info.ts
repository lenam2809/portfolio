// personal-info.ts - Client-side version
export type PersonalInfo = {
    name: string
    title: string
    email: string
    phone: string
    avatar: string
    address: {
        street: string
        city: string
        state: string
        zipCode: string
    }
    bio: string
    skills: {
        name: string
        icon: string
        level: number
        example: string
    }[]
    projects: {
        id: number
        title: string
        description: string
        image: string
        tags: string[]
        demoUrl: string
        githubUrl: string
    }[]
    blogPosts: {
        id: number
        title: string
        excerpt: string
        date: string
        image: string
        slug: string
    }[]
    socialLinks: {
        github: string
        linkedin: string
        email: string
    }
}

export const DEFAULT_PERSONAL_INFO: PersonalInfo = {
    name: "Nguyễn Văn A",
    title: "Lập Trình Viên .NET C#",
    email: "nguyenvana@example.com",
    phone: "+84 123 456 789",
    avatar: "/images/avatar.jpg",
    address: {
        street: "123 Đường Lê Lợi",
        city: "Hồ Chí Minh",
        state: "TP.HCM",
        zipCode: "700000",
    },
    bio: "Tôi là một lập trình viên .NET C# với kinh nghiệm xây dựng các ứng dụng mạnh mẽ, có khả năng mở rộng.",
    skills: [
        {
            name: ".NET Core",
            icon: "Database",
            level: 90,
            example: "Xây dựng API hiệu suất cao sử dụng .NET Core và Azure",
        },
    ],
    projects: [
        {
            id: 1,
            title: "Dự án mẫu",
            description: "Mô tả dự án mẫu",
            image: "/placeholder.svg?height=400&width=600",
            tags: [".NET"],
            demoUrl: "#",
            githubUrl: "#",
        },
    ],
    blogPosts: [
        {
            id: 1,
            title: "Bài viết mẫu",
            excerpt: "Tóm tắt bài viết mẫu",
            date: "1/1/2023",
            image: "/placeholder.svg?height=300&width=500",
            slug: "bai-viet-mau",
        },
    ],
    socialLinks: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "example@example.com",
    },
}

// Fetch the personal info from our API endpoint
export async function getPersonalInfo(): Promise<PersonalInfo> {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
        const response = await fetch(`${baseUrl}/api/personal-info`)

        if (!response.ok) {
            console.warn("Failed to fetch personal info, using default data")
            return DEFAULT_PERSONAL_INFO
        }

        const data = await response.json() as PersonalInfo

        // Validate the data
        if (!data.name || !data.email) {
            console.warn("Received invalid personal info data, using default data")
            return DEFAULT_PERSONAL_INFO
        }

        return data
    } catch (error) {
        console.error("Error fetching personal info:", error)
        return DEFAULT_PERSONAL_INFO
    }
}