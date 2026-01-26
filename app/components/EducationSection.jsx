'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import EducationCarousel from '../../components/ui/education-carousel'

const EducationSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="education" className="py-12 sm:py-16 md:py-20 px-5 relative overflow-hidden bg-white">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <EducationCarousel />
      </motion.div>
    </section>
  )
}

export default EducationSection
