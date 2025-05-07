import { getPersonalInfo } from "@/lib/personal-info"
import { PersonalInfoProvider } from "@/context/personal-info-context"
import { Contact } from "@/components/contact"

export const revalidate = 60 // Revalidate this page every 60 seconds

export default async function ContactPage() {
    const personalInfo = await getPersonalInfo()

    return (
        <PersonalInfoProvider initialData={personalInfo}>
            <div className="py-10">
                <div className="container">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4">Liên Hệ Với Tôi</h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Liên hệ để hợp tác, cơ hội việc làm, hoặc chỉ để chào hỏi.
                        </p>
                    </div>
                </div>
                <Contact />
            </div>
        </PersonalInfoProvider>
    )
}
