import { getPersonalInfo } from "@/lib/personal-info"
import { PersonalInfoProvider } from "@/context/personal-info-context"
import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { BlogList } from "@/components/blog-list"
import { Contact } from "@/components/contact"
import { PersonalInfoDisplay } from "@/components/personal-info-display"

export const revalidate = 60 // Revalidate this page every 60 seconds

export default async function Home() {
  const personalInfo = await getPersonalInfo()

  return (
    <PersonalInfoProvider initialData={personalInfo}>
      <div>
        <Hero />
        <PersonalInfoDisplay />
        <Skills />
        <Projects />
        <BlogList />
        <Contact />
      </div>
    </PersonalInfoProvider>
  )
}
