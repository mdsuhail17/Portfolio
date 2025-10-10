'use client'

import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import YouTubeSection from './components/YouTubeSection'
import ExperienceSection from './components/ExperienceSection'
import ContactSection from './components/ContactSection'
export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <YouTubeSection />
      <ExperienceSection />
      <div className="bg-gray-100 w-full">
        <ContactSection />
      </div>
    </main>
  )
}
