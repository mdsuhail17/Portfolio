'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { OrbitingCircles } from '../../components/ui/orbiting-circles'
import { TechIcons } from '../../components/ui/tech-icons'

const SkillsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
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
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Orbiting Circles Skills Display */}
          <motion.div
            variants={itemVariants}
            className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden rounded-lg"
          >
            {/* Center Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
              className="relative z-10 w-24 h-24 rounded-full glass flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="text-3xl font-bold text-gradient"
              >
                Skills
              </motion.div>
            </motion.div>

            {/* First Orbit - Java and JavaScript */}
            <OrbitingCircles
              className="size-[55px] border-none bg-transparent"
              radius={110}
              duration={20}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex items-center justify-center w-full h-full rounded-full bg-gradient-to-r from-red-500/30 to-orange-500/30 backdrop-blur-none border border-red-500/20"
              >
                <TechIcons.java />
              </motion.div>
            </OrbitingCircles>

            <OrbitingCircles
              className="size-[55px] border-none bg-transparent"
              radius={110}
              duration={20}
              delay={0.5}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex items-center justify-center w-full h-full rounded-full bg-gradient-to-r from-yellow-500/30 to-yellow-600/30 backdrop-blur-none border border-yellow-500/20"
              >
                <TechIcons.javascript />
              </motion.div>
            </OrbitingCircles>

            {/* Second Orbit - React, Spring Boot, MySQL */}
            <OrbitingCircles
              className="size-[60px] border-none bg-transparent"
              radius={200}
              duration={25}
              reverse
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex items-center justify-center w-full h-full rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 backdrop-blur-none border border-blue-500/20"
              >
                <TechIcons.react />
              </motion.div>
            </OrbitingCircles>

            <OrbitingCircles
              className="size-[60px] border-none bg-transparent"
              radius={200}
              duration={25}
              delay={8.3}
              reverse
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex items-center justify-center w-full h-full rounded-full bg-gradient-to-r from-green-500/30 to-green-600/30 backdrop-blur-none border border-green-500/20"
              >
                <TechIcons.springboot />
              </motion.div>
            </OrbitingCircles>

            <OrbitingCircles
              className="size-[60px] border-none bg-transparent"
              radius={200}
              duration={25}
              delay={16.6}
              reverse
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex items-center justify-center w-full h-full rounded-full bg-gradient-to-r from-blue-600/30 to-blue-800/30 backdrop-blur-none border border-blue-600/20"
              >
                <TechIcons.mysql />
              </motion.div>
            </OrbitingCircles>

            {/* Third Orbit - AWS, Docker */}
            <OrbitingCircles
              className="size-[50px] border-none bg-transparent"
              radius={290}
              duration={30}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex items-center justify-center w-full h-full rounded-full bg-gradient-to-r from-orange-500/30 to-orange-600/30 backdrop-blur-none border border-orange-500/20"
              >
                <TechIcons.aws />
              </motion.div>
            </OrbitingCircles>

            <OrbitingCircles
              className="size-[50px] border-none bg-transparent"
              radius={290}
              duration={30}
              delay={15}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex items-center justify-center w-full h-full rounded-full bg-gradient-to-r from-blue-500/30 to-blue-600/30 backdrop-blur-none border border-blue-500/20"
              >
                <TechIcons.docker />
              </motion.div>
            </OrbitingCircles>

            {/* Fourth Orbit - GitHub, Git, Postman, VS Code, IntelliJ, Eclipse */}
            <OrbitingCircles
              className="size-[42px] border-none bg-transparent"
              radius={380}
              duration={35}
              reverse
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex items-center justify-center w-full h-full rounded-full bg-gradient-to-r from-white/20 to-gray-200/20 backdrop-blur-none border border-white/30"
              >
                <TechIcons.github />
              </motion.div>
            </OrbitingCircles>

            <OrbitingCircles
              className="size-[42px] border-none bg-transparent"
              radius={380}
              duration={35}
              delay={5.8}
              reverse
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex items-center justify-center w-full h-full rounded-full bg-gradient-to-r from-red-500/30 to-red-600/30 backdrop-blur-none border border-red-500/20"
              >
                <TechIcons.git />
              </motion.div>
            </OrbitingCircles>

            <OrbitingCircles
              className="size-[42px] border-none bg-transparent"
              radius={380}
              duration={35}
              delay={11.6}
              reverse
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex items-center justify-center w-full h-full rounded-full bg-gradient-to-r from-orange-500/30 to-orange-600/30 backdrop-blur-none border border-orange-500/20"
              >
                <TechIcons.postman />
              </motion.div>
            </OrbitingCircles>

            <OrbitingCircles
              className="size-[42px] border-none bg-transparent"
              radius={380}
              duration={35}
              delay={17.4}
              reverse
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex items-center justify-center w-full h-full rounded-full bg-gradient-to-r from-blue-500/30 to-blue-600/30 backdrop-blur-none border border-blue-500/20"
              >
                <TechIcons.vscode />
              </motion.div>
            </OrbitingCircles>

            <OrbitingCircles
              className="size-[42px] border-none bg-transparent"
              radius={380}
              duration={35}
              delay={23.2}
              reverse
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex items-center justify-center w-full h-full rounded-full bg-gradient-to-r from-red-500/30 to-pink-500/30 backdrop-blur-none border border-red-500/20"
              >
                <TechIcons.intellij />
              </motion.div>
            </OrbitingCircles>

            <OrbitingCircles
              className="size-[42px] border-none bg-transparent"
              radius={380}
              duration={35}
              delay={29}
              reverse
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex items-center justify-center w-full h-full rounded-full bg-gradient-to-r from-purple-500/30 to-indigo-500/30 backdrop-blur-none border border-purple-500/20"
              >
                <TechIcons.javaeclipse />
              </motion.div>
            </OrbitingCircles>

            {/* Fifth Orbit - ChatGPT, Windsurf, Amazon Q */}
            <OrbitingCircles
              className="size-[38px] border-none bg-transparent"
              radius={470}
              duration={40}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex items-center justify-center w-full h-full rounded-full bg-gradient-to-r from-green-500/30 to-teal-500/30 backdrop-blur-none border border-green-500/20"
              >
                <TechIcons.chatgpt />
              </motion.div>
            </OrbitingCircles>

            <OrbitingCircles
              className="size-[38px] border-none bg-transparent"
              radius={470}
              duration={40}
              delay={13.3}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex items-center justify-center w-full h-full rounded-full bg-gradient-to-r from-blue-500/30 to-indigo-500/30 backdrop-blur-none border border-blue-500/20"
              >
                <TechIcons.windsurf />
              </motion.div>
            </OrbitingCircles>

            <OrbitingCircles
              className="size-[38px] border-none bg-transparent"
              radius={470}
              duration={40}
              delay={26.6}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex items-center justify-center w-full h-full rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 backdrop-blur-none border border-blue-400/40"
              >
                <TechIcons.amazonq />
              </motion.div>
            </OrbitingCircles>
          </motion.div>

        </motion.div>
      </div>

      {/* Background decorations */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-10 right-10 w-20 h-20 border border-blue-500/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360, scale: [1, 0.9, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-10 left-10 w-16 h-16 border border-purple-500/20 rounded-full"
      />
    </section>
  )
}

export default SkillsSection
