"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Award, ExternalLink } from 'lucide-react'

interface EducationCard {
  id: string
  type: 'education' | 'certificate'
  title: string
  subtitle?: string
  period?: string
  gpa?: string
  description?: string
  description2?: string
  certificateLink?: string
}

const educationCards: EducationCard[] = [
  {
    id: '1',
    type: 'education',
    title: 'Education',
    subtitle: 'Rao Bahadur Y. Mahabaleswarappa Engineering College',
    period: 'Jan 2022 – May 2025',
    gpa: '8.3',
    description: 'HSK Polytechnic, Ballari - Diploma in Computer Science | GPA: 8.1 | Jul 2019 – May 2022'
  },
  {
    id: '2',
    type: 'certificate',
    title: 'Java Full Stack Developer with React & Spring Boot',
    subtitle: 'Udemy',
    description: 'Built a full-stack e-commerce platform using React (frontend) and Spring Boot + MySQL (backend REST APIs) with features like product catalog, cart, checkout, authentication, and order management. Deployed on AWS for scalable, production-grade hosting.',
    certificateLink: 'https://drive.google.com/file/d/1hR5VAneTVzoOWjhvxjFqV10Yr2Mr9ftY/view?usp=drive_link'
  },
  {
    id: '3',
    type: 'certificate',
    title: 'Master Spring 6, Spring Boot 3, REST, JPA, Hibernate',
    subtitle: 'Udemy',
    description: 'Developed a backend School Management System using Spring Boot with MVC Architecture and Thymeleaf for server-side rendering. Implemented authentication and RBAC using Spring Security, and deployed the database layer using MySQL on AWS RDS. Features include Admin/Student dashboards, course data, student profiles, and holiday calendars.',
    certificateLink: 'https://drive.google.com/file/d/1sqDTw-x2zEtrIRvOESW7F1GTg_oYQBV6/view'
  },
  {
    id: '4',
    type: 'certificate',
    title: 'Artificial Intelligence / LLM Engineering',
    subtitle: 'ESO AI',
    description: 'Building ESO AI, an educational platform powered by Next.js, Python, MongoDB, and ChromaDB, focused on learning and content retrieval from textbooks. Exploring LLMs and RAG (Retrieval Augmented Generation) to deliver accurate, context-aware answers and lecture generation for students and educators.',
    description2: 'Experimenting with prompt engineering, vector databases, and embedding-based search to improve AI understanding and response quality. Interested in scaling AI agents for real academic workflows and teacher productivity.',
    certificateLink: 'https://eso-ai-sohail.vercel.app/'
  }
]

export default function EducationCarousel() {
  // Duplicate cards for seamless infinite scroll
  const duplicatedCards = [...educationCards, ...educationCards]

  return (
    <div className="relative w-full overflow-hidden py-12 bg-white">
      <div className="mb-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-black">
          Education & Learning
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          style={{
            width: 'max-content',
          }}
        >
          {duplicatedCards.map((card, index) => (
            <motion.div
              key={`${card.id}-${index}`}
              className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[400px]"
            >
              <div className="min-h-[380px] sm:min-h-[400px] md:h-[400px] bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-2xl transition-shadow flex flex-col">
                {card.type === 'education' ? (
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="bg-blue-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                        <img
                          src="/educationicon.png"
                          alt="Education"
                          className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold text-black mb-3 sm:mb-4">
                          {card.title}
                        </h3>
                        
                        {/* First Education */}
                        <div className="mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-gray-200">
                          <h4 className="text-sm sm:text-base font-semibold text-black mb-1 sm:mb-2">
                            {card.subtitle}
                          </h4>
                          <p className="text-black text-xs sm:text-sm mb-1 sm:mb-2 text-center text-justify">
                            Bachelor of Engineering in Computer Science | GPA: {card.gpa}
                          </p>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-black">
                            {card.period && (
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span>{card.period}</span>
                              </div>
                            )}
                            {card.gpa && (
                              <div className="flex items-center gap-1">
                                <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span>GPA: {card.gpa}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Second Education */}
                        <div>
                          <h4 className="text-sm sm:text-base font-semibold text-black mb-1 sm:mb-2">
                            HSK Polytechnic, Ballari
                          </h4>
                          <p className="text-black text-xs sm:text-sm mb-1 sm:mb-2 text-center text-justify">
                            Diploma in Computer Science | GPA: 8.1
                          </p>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-black">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span>Jul 2019 – May 2022</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span>GPA: 8.1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col">
                    <div className="mb-3 sm:mb-4 flex-1 flex flex-col min-h-0">
                      <div className="mb-2 sm:mb-3">
                        <h3 className="text-base sm:text-lg font-semibold text-black mb-2 sm:mb-3">
                          {card.title}
                        </h3>
                        {card.subtitle === 'Udemy' && (
                          <div className="relative w-16 h-6 sm:w-20 sm:h-8 mb-2 sm:mb-3">
                            <img
                              src="/udemy.png"
                              alt="Udemy"
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 flex flex-col min-h-0">
                        <p className="text-xs sm:text-sm text-black leading-relaxed mb-2 sm:mb-3 text-center text-justify">
                          {card.description}
                        </p>
                        {card.description2 && (
                          <p className="text-xs sm:text-sm text-black leading-relaxed mb-2 sm:mb-3 text-center text-justify">
                            {card.description2}
                          </p>
                        )}
                      </div>
                      {card.certificateLink && (
                        <a
                          href={card.certificateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium transition-colors mt-auto no-underline focus:outline-none"
                        >
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                          {card.subtitle === 'Udemy' ? 'View Certificate' : 'View Project'}
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
