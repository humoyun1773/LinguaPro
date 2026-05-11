import React from 'react'
import { motion } from 'framer-motion'

type StaggerTextProps = {
  text: string
  className?: string
  once?: boolean
  delay?: number
}

export const StaggerText: React.FC<StaggerTextProps> = ({
  text,
  className,
  once = true,
  delay = 0,
}) => {
  const words = text.split(' ')

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.4 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.04,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block mr-[0.28em]"
          variants={{
            hidden: { opacity: 0, y: 18, rotateX: -14 },
            visible: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}
