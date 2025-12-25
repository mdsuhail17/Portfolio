'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'



const ExperienceSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  const experiences = [
    {
      id: 1,
      title: 'E-Commerce Website (Full-Stack Project)',
      company: 'React.js | Spring Boot | Tailwind CSS | MySQL',
      period: 'Sept 2025 – Present',
      description: 'Built a responsive e-commerce web app with authentication, product catalog, cart, and order management.',
      achievements: [
        'Designed REST APIs',
        'Integrated frontend & backend',
        'Implemented secure database operations'
      ],
      color: 'from-blue-500 to-purple-600',
      icon: '🛒'
    },
    {
      id: 2,
      title: 'School Management System (Backend Project)',
      company: 'Spring Boot | Spring Security | MySQL',
      period: 'Jun 2025 – Jul 2025',
      description: 'Built a backend system with admin & student login, course/class management, holidays, and profiles.',
      achievements: [
        'Implemented Spring Security for authentication',
        'Role-based access control',
        'MySQL integration'
      ],
      color: 'from-green-500 to-teal-600',
      icon: '🏫'
    },
    {
      id: 3,
      title: 'Software Development Intern',
      company: 'Kodemapa',
      period: 'Oct 2024 – Jan 2025',
      description: 'Contributed to Clynicare, a healthcare service platform, focusing on frontend development.',
      achievements: [
        'Built booking flow and authentication UI',
        'Created reusable components',
        'Integrated frontend with backend APIs'
      ],
      color: 'from-orange-500 to-red-600',
      icon: '💼'
    },
    {
      id: 4,
      title: 'Smart India Hackathon 2023 – Grand Finalist',
      company: 'Detecting Unexpected Poly Pulley Failure',
      period: '2023',
      description: 'Developed a solution for detecting unexpected poly pulley failures, reaching the grand finale at the national-level competition.',
      achievements: [],
      color: 'from-yellow-500 to-orange-600',
      icon: '🏆'
    },
    {
      id: 5,
      title: 'Education',
      company: '',
      period: 'Jul 2019 – May 2025',
      description: 'Rao Bahadur Y. Mahabaleswarappa Engineering College\nBachelor of Engineering in Computer Science | GPA: 8.3\nJan 2022 – May 2025\n\nHSK Polytechnic, Ballari\nDiploma in Computer Science | GPA: 8.1\nJul 2019 – May 2022',
      achievements: [],
      color: 'from-purple-500 to-pink-600',
      icon: '🎓'
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  const timelineVariants = {
    hidden: { height: 0 },
    visible: {
      height: '100%',
      transition: {
        duration: 2,
        ease: 'easeOut',
        delay: 0.5
      }
    }
  }

  return (
    <section id="experience" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              My professional journey and career milestones
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-gray-700 h-full">
              <motion.div
                variants={timelineVariants}
                className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
              />
            </div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:flex-row`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                    className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} z-10 flex items-center justify-center`}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-white rounded-full"
                    />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`glass rounded-2xl p-6 w-full md:w-5/12 ${
                      index % 2 === 0 ? 'md:mr-auto md:ml-16' : 'md:ml-auto md:mr-16'
                    } ml-16 relative group`}
                  >
                    {/* Background Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <motion.h3
                            className="text-xl font-bold text-white mb-1"
                          >
                            {exp.title}
                          </motion.h3>
                          <motion.p
                            className="text-blue-400 font-semibold mb-2"
                          >
                            {exp.company}
                          </motion.p>
                          <motion.span
                            className="text-sm text-gray-400 bg-white/10 px-3 py-1 rounded-full"
                          >
                            {exp.period}
                          </motion.span>
                        </div>
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                          className="text-3xl"
                        >
                          {exp.icon}
                        </motion.div>
                      </div>

                      {/* Description */}
                      <div className="text-gray-300 mb-4 leading-relaxed">
                        {exp.title === 'Education' ? (
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-white font-semibold mb-1">Rao Bahadur Y. Mahabaleswarappa Engineering College</h4>
                              <p className="text-blue-300">Bachelor of Engineering in Computer Science | GPA: 8.3</p>
                              <p className="text-gray-400 text-sm">Jan 2022 – May 2025</p>
                            </div>
                            <div>
                              <h4 className="text-white font-semibold mb-1">HSK Polytechnic, Ballari</h4>
                              <p className="text-blue-300">Diploma in Computer Science | GPA: 8.1</p>
                              <p className="text-gray-400 text-sm">Jul 2019 – May 2022</p>
                            </div>
                          </div>
                        ) : (
                          <p>{exp.description}</p>
                        )}
                      </div>

                      {/* Achievements */}
                      {exp.achievements.length > 0 && (
                        <div className="space-y-2 mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.div
                              key={achIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ delay: 1 + index * 0.2 + achIndex * 0.1 }}
                              className="flex items-center text-sm text-gray-300"
                            >
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: achIndex * 0.3 }}
                                className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"
                              />
                              {achievement}
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {/* Project Links for E-Commerce */}
                      {exp.id === 1 && (
                        <div className="flex gap-3 mt-4">
                          <a
                            href="https://github.com/mdsuhail17/E-Commerce-Website-using-React-Spring-Boot-and-Mysql"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/50 px-3 py-2 rounded-lg transition-colors text-white text-sm"
                          >
                            GitHub
                          </a>
                          <a
                            href="https://ecommerce-frontend-rho-lime.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-blue-600/50 hover:bg-blue-700/50 px-3 py-2 rounded-lg transition-colors text-white text-sm"
                          >
                            Live Demo
                          </a>
                        </div>
                      )}

                      {/* Project Links for School Management */}
                      {exp.id === 2 && (
                        <div className="flex gap-3 mt-4">
                          <a
                            href="https://github.com/mdsuhail17/FullStack-Project-Java-Spring-Boot--School-Management-"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/50 px-3 py-2 rounded-lg transition-colors text-white text-sm"
                          >
                            GitHub
                          </a>
                          <a
                            href="https://crazystore.onrender.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-blue-600/50 hover:bg-blue-700/50 px-3 py-2 rounded-lg transition-colors text-white text-sm"
                          >
                            Live Demo
                          </a>
                        </div>
                      )}

                      {/* Certificate Link for Smart India Hackathon */}
                      {exp.id === 4 && (
                        <div className="flex gap-3 mt-4">
                          <a
                            href="https://drive.google.com/file/d/16u_kkYu6remySuLKkqNUwfNGAFk0Rgcs/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-yellow-600/50 hover:bg-yellow-700/50 px-3 py-2 rounded-lg transition-colors text-white text-sm"
                          >
                            Certificate
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Floating Elements */}
                    <motion.div
                      animate={{ y: [-3, 3, -3], opacity: [0.3, 0.7, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.8 }}
                      className="absolute top-3 right-3 w-1 h-1 bg-blue-400 rounded-full"
                    />
                    <motion.div
                      animate={{ y: [3, -3, 3], opacity: [0.5, 0.9, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.6 }}
                      className="absolute bottom-3 left-3 w-0.5 h-0.5 bg-purple-400 rounded-full"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>


        </motion.div>
      </div>

      {/* Background Decorations */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-20 w-24 h-24 border border-blue-500/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-20 left-20 w-20 h-20 border border-purple-500/10 rounded-full"
      />
    </section>
  )
}

export default ExperienceSection
