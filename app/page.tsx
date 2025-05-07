import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { BlogList } from "@/components/blog-list"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <BlogList />
      <Contact />
    </div>
  )
}
