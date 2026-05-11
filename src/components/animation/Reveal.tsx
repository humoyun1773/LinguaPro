import React from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'

type RevealProps = HTMLMotionProps<'div'> & {
  delay?: number
  distance?: number
  once?: boolean
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  distance = 22,
  once = true,
  ...props
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: distance,
        scale: 0.985,
        clipPath: 'inset(0 0 18% 0 round 24px)',
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        clipPath: 'inset(0 0 0% 0 round 24px)',
      }}
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
