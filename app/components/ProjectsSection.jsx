'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, X } from 'lucide-react'
import { Gallery4, Gallery4Item } from '../../components/ui/gallery4'

const projects = [
  {
    id: "1",
    title: "E-Commerce Website using React, Spring and MySQL",
    description: "Full-stack e-commerce solution with secure payment processing, inventory management, and comprehensive admin dashboard.",
    image: "https://img.youtube.com/vi/cg52C_uXVxQ/maxresdefault.jpg",
    href: "https://github.com/mdsuhail17/E-Commerce-Website-using-React-Spring-Boot-and-Mysql",
    video: "https://www.youtube.com/embed/cg52C_uXVxQ",
    tags: ["React", "Spring Boot", "MySQL", "JWT", "Redux", "Bootstrap"],
    github: "https://github.com/mdsuhail17/E-Commerce-Website-using-React-Spring-Boot-and-Mysql",
    live: "https://production.d3j8xjzug6oja7.amplifyapp.com/home",
    fullDescription: "A comprehensive e-commerce platform built with React frontend and Spring Boot backend. Features include user authentication, product catalog, shopping cart, secure payment processing, order management, and admin dashboard for inventory control."
  },
  {
    id: "2",
    title: "School Management backend project Spring and MySQL",
    description: "Backend management system for schools with student enrollment, course management, and administrative features.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
    href: "https://github.com/mdsuhail17/FullStack-Project-Java-Spring-Boot--School-Management-",
    video: "https://youtube.com/@learntechwithsuhail?si=TrgcGlvkD9FzFutN",
    tags: ["Spring Boot", "MySQL", "REST API", "JPA", "Maven"],
    github: "https://github.com/mdsuhail17/FullStack-Project-Java-Spring-Boot--School-Management-",
    live: "https://d3l9pp35ufm08p.cloudfront.net/",
    fullDescription: "A comprehensive school management backend system built with Spring Boot and MySQL. Features include student enrollment, course management, teacher assignment, grade tracking, and administrative dashboard with REST API endpoints."
  }
]

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const handleItemClick = (item) => {
    setSelectedProject(item)
  }

  return (
    <div id="projects">
      <Gallery4 
        title="Projects"
        description="A collection of projects I've built using React and Spring Boot, created to strengthen my frontend and backend development skills. Each project reflects my learning journey and passion for building real-world applications."
        items={projects}
        onItemClick={handleItemClick}
      />

      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="aspect-video bg-black rounded-t-xl overflow-hidden">
                <iframe
                  src={selectedProject.video}
                  title={selectedProject.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4 text-white">{selectedProject.title}</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.fullDescription}</p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-white">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags?.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors text-white"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors text-white"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default ProjectsSection