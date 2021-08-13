const navVariants = {
  open: {
    opacity: 1,
    transition: { visibility: 'visible' },
  },
  closed: { opacity: 0, transition: { visibility: 'hidden' } },
}

const ulVariants = {
  open: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const liVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export { navVariants, ulVariants, liVariants }
