export const cardMotion = {
  softLift: {
    rest: { y: 0, scale: 1, rotateX: 0, rotateY: 0 },
    hover: {
      y: -6,
      scale: 1.008,
      rotateX: -1.5,
      rotateY: 1.5,
      transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] },
    },
  },
  glassFloat: {
    rest: { y: 0, scale: 1 },
    hover: {
      y: -5,
      scale: 1.006,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
    },
  },
  tiltRight: {
    rest: { y: 0, rotate: 0, scale: 1 },
    hover: {
      y: -6,
      rotate: 0.35,
      scale: 1.008,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
    },
  },
  tiltLeft: {
    rest: { y: 0, rotate: 0, scale: 1 },
    hover: {
      y: -6,
      rotate: -0.35,
      scale: 1.008,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
    },
  },
}
