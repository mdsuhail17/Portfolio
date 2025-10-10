"use client"

import React, { useCallback, useEffect, useMemo, useState, useRef } from "react"
import { AnimatePresence, motion, useInView } from "framer-motion"
import { 
  Code, 
  Database, 
  Server, 
  Globe, 
  Coffee, 
  Zap,
  ArrowRight,
  Sparkles,
  Star,
  CheckCircle
} from "lucide-react"

const shuffleArray = (array) => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const distributeLogos = (allLogos, columnCount) => {
  const shuffled = shuffleArray(allLogos)
  const columns = Array.from({ length: columnCount }, () => [])

  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo)
  })

  const maxLength = Math.max(...columns.map((col) => col.length))
  columns.forEach((col) => {
    while (col.length < maxLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)])
    }
  })

  return columns
}

const TechCarouselColumn = React.memo(({ logos, index, currentTime }) => {
  const cycleInterval = 2000
  const columnDelay = index * 200
  const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length)
  const currentIndex = Math.floor(adjustedTime / cycleInterval)
  const CurrentIcon = useMemo(() => logos[currentIndex].icon, [logos, currentIndex])

  return (
    <motion.div
      className="relative h-16 w-32 overflow-hidden rounded-lg bg-white/50 border border-gray-200/50 backdrop-blur-sm"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${logos[currentIndex].id}-${currentIndex}`}
          className="absolute inset-0 flex flex-col items-center justify-center p-2"
          initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
          animate={{
            y: "0%",
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
              mass: 1,
              bounce: 0.2,
              duration: 0.5,
            },
          }}
          exit={{
            y: "-20%",
            opacity: 0,
            filter: "blur(6px)",
            transition: {
              type: "tween",
              ease: "easeIn",
              duration: 0.3,
            },
          }}
        >
          <CurrentIcon className="h-8 w-8 text-blue-600 mb-1" />
          <span className="text-xs font-medium text-gray-800/80 text-center">
            {logos[currentIndex].name}
          </span>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
})

function TechCarousel({ columnCount = 3, logos }) {
  const [logoSets, setLogoSets] = useState([])
  const [currentTime, setCurrentTime] = useState(0)

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100)
  }, [])

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100)
    return () => clearInterval(intervalId)
  }, [updateTime])

  useEffect(() => {
    const distributedLogos = distributeLogos(logos, columnCount)
    setLogoSets(distributedLogos)
  }, [logos, columnCount])

  return (
    <div className="flex gap-4 justify-center">
      {logoSets.map((logos, index) => (
        <TechCarouselColumn
          key={index}
          logos={logos}
          index={index}
          currentTime={currentTime}
        />
      ))}
    </div>
  )
}

function ServiceItem({ icon, secondaryIcon, title, description, delay }) {
  return (
    <motion.div
      className="flex flex-col group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="flex items-center gap-3 mb-3"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div
          className="text-blue-600 bg-blue-600/10 p-3 rounded-lg transition-colors duration-300 group-hover:bg-blue-600/20 relative"
          whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
        >
          {icon}
          {secondaryIcon}
        </motion.div>
        <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
      </motion.div>
      <motion.p
        className="text-sm text-gray-600 leading-relaxed pl-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>
      <motion.div
        className="mt-3 pl-12 flex items-center text-blue-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
      >
        <span className="flex items-center gap-1">
          Learn more <ArrowRight className="w-3 h-3" />
        </span>
      </motion.div>
    </motion.div>
  )
}



export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const techLogos = [
    { name: "Java", id: 1, icon: Coffee, category: "Backend" },
    { name: "Spring Boot", id: 2, icon: Zap, category: "Framework" },
    { name: "React", id: 3, icon: Code, category: "Frontend" },
    { name: "JavaScript", id: 4, icon: Code, category: "Language" },
    { name: "Docker", id: 5, icon: Server, category: "DevOps" },
    { name: "AWS", id: 6, icon: Globe, category: "Cloud" },
    { name: "MySQL", id: 7, icon: Database, category: "Database" },
    { name: "GitHub", id: 8, icon: Code, category: "Version Control" },
    { name: "Postman", id: 9, icon: Zap, category: "API Testing" },
    { name: "VS Code", id: 10, icon: Code, category: "IDE" },
    { name: "IntelliJ", id: 11, icon: Code, category: "IDE" },
    { name: "Eclipse", id: 12, icon: Code, category: "IDE" },
    { name: "ChatGPT", id: 13, icon: Sparkles, category: "AI Tool" },
    { name: "Windsurf", id: 14, icon: Globe, category: "AI Tool" },
    { name: "Amazon Q", id: 15, icon: Star, category: "AI Tool" },
  ]

  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-blue-600/60" />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces using React with modern styling libraries like Tailwind CSS and Bootstrap. Focused on creating seamless user experiences with attention to performance, accessibility, and clean design.",
    },
    {
      icon: <Server className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-blue-600/60" />,
      title: "Backend Development",
      description: "Developing robust server-side applications with Java and Spring Boot. Implementing RESTful APIs and scalable architectures to deliver efficient and maintainable backend solutions.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-blue-600/60" />,
      title: "Database Design",
      description: "Designing and managing MySQL databases, with a focus on schema optimization, query performance, and data integrity. Experienced in integrating databases with backend applications.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-blue-600/60" />,
      title: "Cloud Deployment",
      description: "Deploying applications to AWS with containerization using Docker. Experienced in hosting web applications on Vercel and deploying databases/services via Railway.",
    },
  ]



  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full py-24 px-4 bg-gradient-to-b from-gray-50 to-white text-gray-900 overflow-hidden relative"
    >
      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="flex flex-col items-center mb-12" variants={itemVariants}>
          <motion.span
            className="text-blue-600 font-medium mb-2 flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Coffee className="w-4 h-4" />
            JAVA FULL STACK DEVELOPER
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-center">About Me</h2>
          <motion.div
            className="w-24 h-1 bg-blue-600"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.p className="text-center max-w-3xl mx-auto mb-16 text-gray-600 text-lg" variants={itemVariants}>
          I'm a passionate Java Full Stack Developer with expertise in building scalable web applications. 
          From crafting intuitive frontends with React to developing robust backends with Spring Boot, 
          I deliver end-to-end solutions that drive business success.
        </motion.p>

        {/* Tech Stack Carousel */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h3 className="text-2xl font-semibold text-center mb-8">My Tech Stack</h3>
          <TechCarousel columnCount={4} logos={techLogos} />
        </motion.div>

        {/* Services Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16" variants={itemVariants}>
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              icon={service.icon}
              secondaryIcon={service.secondaryIcon}
              title={service.title}
              description={service.description}
              delay={index * 0.2}
            />
          ))}
        </motion.div>



        {/* CTA Section */}
        <motion.div
          className="bg-white border border-gray-200 p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-medium mb-2">Ready to build something amazing?</h3>
            <p className="text-gray-600">Let's discuss your next project and bring your ideas to life.</p>
          </div>
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = 'mailto:mdsuhail.code@gmail.com'}
          >
            Get In Touch <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}