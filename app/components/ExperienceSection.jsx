'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExpandableCard } from '../../components/ui/expandable-card'
import { Github, ExternalLink, Youtube } from 'lucide-react'

const ExperienceSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, threshold: 0.1 })

  const experiences = [
    {
      id: 1,
      title: 'ESO AI - AI Study Partner',
      company: 'Next.js | TypeScript | Tailwind CSS | FastAPI | MongoDB | ChromaDB',
      period: '2024 – Present',
      description: 'AI-Powered Learning Platform',
      fullDescription: 'For Students: ESO AI allows students to upload their textbooks and instantly ask questions, get direct answers from the book, and receive simplified explanations with page references. It makes studying faster, clearer, and more interactive by helping students understand difficult topics without manually searching through hundreds of pages.\n\nFor Teachers (Lecture Mode): ESO AI provides an automatic lecture creation tool where educators can upload textbooks, select topics, and generate full teaching scripts along with ready-made PPT slides. This saves teachers hours of preparation time and makes classroom delivery more structured and effective.',
      achievements: [],
      image: 'eso-ai-text', // Special flag for text gradient
      github: null,
      live: 'https://eso-ai-sohail.vercel.app/',
      video: null,
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Python', 'LLM', 'PyPDF2', 'MongoDB Atlas', 'ChromaDB']
    },
    {
      id: 2,
      title: 'E-Commerce Web Application',
      company: 'React | Spring Boot | MySQL | AWS',
      period: '2024 – 2025',
      description: 'Full-Stack E-Commerce Platform',
      fullDescription: 'Developed a full-stack e-commerce platform with product catalog, cart, checkout, order management, and secure authentication using Spring Boot, React, and MySQL. Optimized REST APIs and queries for high performance and deployed the application on AWS (Elastic Beanstalk, Amplify, and RDS) for scalable cloud hosting.',
      achievements: [],
      image: '/ecommerce.jpg',
      github: 'https://github.com/mdsuhail17/E-Commerce-Website-using-React-Spring-Boot-and-Mysql',
      live: 'https://ecommerce-frontend-rho-lime.vercel.app/',
      video: 'https://www.youtube.com/watch?v=cg52C_uXVxQ',
      tags: ['React', 'Spring Boot', 'MySQL', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'AWS']
    },
    {
      id: 3,
      title: 'School Management System',
      company: 'Spring Boot | Thymeleaf | MySQL | AWS',
      period: '2024 – 2025',
      description: 'Backend Management System',
      fullDescription: 'Developed a Spring Boot–based backend with role-based access (Admin & Student), secure authentication, and scalable data handling using Spring Security and MySQL. Built REST APIs and Thymeleaf dashboards for student profiles, courses, and holidays, improving UI responsiveness and data visibility while optimizing database performance with Spring Data JPA.',
      achievements: [],
      image: '/school management.png',
      github: 'https://github.com/mdsuhail17/FullStack-Project-Java-Spring-Boot--School-Management-',
      live: 'https://crazystore.onrender.com/',
      video: null,
      tags: ['Thymeleaf', 'Spring Boot', 'MySQL', 'AWS']
    },
    {
      id: 4,
      title: 'Intern — Frontend Developer at Kode Mapa',
      company: 'React | Tailwind CSS',
      period: 'January 2024 – July 2024',
      description: 'Healthcare Platform Development',
      fullDescription: 'Built and optimized the frontend for Clynicare, a healthcare booking platform, using React.js to deliver a seamless booking experience for home medical services. Developed reusable responsive components, improving UI performance and reducing development effort. Integrated REST APIs for bookings, authentication, and caregiver verification while delivering weekly demos and progress updates.',
      achievements: [],
      image: '/clynicare.jpg',
      github: null,
      live: 'https://www.clynicare.com/',
      video: null,
      tags: ['React', 'Tailwind CSS']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 px-5 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              My professional journey and career milestones
            </h2>
          </motion.div>

          {/* Expandable Cards Grid */}
              <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-5"
          >
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
              >
                <ExpandableCard
                  title={exp.title}
                  src={exp.image}
                  description={exp.description}
                  classNameExpanded="[&_h4]:text-white [&_h4]:font-medium [&_h4]:text-lg [&_h4]:mb-2 [&_p]:text-gray-300"
                >
                <div className="space-y-4">
                  {/* Period */}
                        <div>
                    <p className="text-gray-400 text-sm font-medium mb-1">Period</p>
                    <p className="text-gray-200">{exp.period}</p>
                      </div>

                  {/* Company/Tech Stack */}
                  {exp.company && (
                            <div>
                      <p className="text-gray-400 text-sm font-medium mb-1">Tech Stack</p>
                      <p className="text-gray-200">{exp.company}</p>
                            </div>
                  )}

                  {/* Full Description */}
                            <div>
                    <p className="text-gray-400 text-sm font-medium mb-1">Description</p>
                    <div className="text-gray-200 leading-relaxed whitespace-pre-line">{exp.fullDescription}</div>
                            </div>

                  {/* Tags */}
                  {exp.tags && exp.tags.length > 0 && (
                    <div>
                      <p className="text-gray-400 text-sm font-medium mb-2">Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                        </div>
                      )}

                  {/* Links */}
                  <div 
                    className="flex flex-col sm:flex-row gap-3 pt-2 relative z-50 pointer-events-auto" 
                    onClick={(e) => e.stopPropagation()}
                    onMouseDown={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                  >
                    {exp.github && (
                          <a
                        href={exp.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation()
                        }}
                        onMouseDown={(e) => {
                          e.stopPropagation()
                        }}
                        className="flex items-center justify-center gap-2 bg-zinc-900 dark:bg-zinc-800 hover:bg-zinc-800 dark:hover:bg-zinc-700 text-white px-4 py-2.5 rounded-lg transition-colors text-sm font-medium cursor-pointer relative z-50 pointer-events-auto"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                    {exp.live && (
                      <a
                        href={exp.live}
                            target="_blank"
                            rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation()
                        }}
                        onMouseDown={(e) => {
                          e.stopPropagation()
                        }}
                        className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg transition-colors text-sm font-medium cursor-pointer relative z-50 pointer-events-auto"
                          >
                        <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                      )}
                    {exp.video && (
                          <a
                        href={exp.video}
                            target="_blank"
                            rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation()
                        }}
                        onMouseDown={(e) => {
                          e.stopPropagation()
                        }}
                        className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-lg transition-colors text-sm font-medium cursor-pointer relative z-50 pointer-events-auto"
                          >
                        <Youtube className="w-4 h-4" />
                        Watch Video
                          </a>
                      )}
                    </div>
                </div>
              </ExpandableCard>
                </motion.div>
              ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ExperienceSection
