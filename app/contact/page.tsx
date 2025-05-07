import { Contact } from "@/components/contact"

export default function ContactPage() {
    return (
        <div className="py-10">
            <div className="container">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Get in touch for collaborations, job opportunities, or just to say hello.
                    </p>
                </div>
            </div>
            <Contact />
        </div>
    )
}
