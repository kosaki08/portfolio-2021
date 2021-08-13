import { FC } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { nav, ul, li, linkElem } from './GlobalMenu.style'
import { navVariants, ulVariants, liVariants } from './GlobalMenu.motion'

interface Props {
  menuOpen: boolean
  handleButtonClick: () => void
}

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/works', label: 'Works' },
  { href: '/contact', label: 'Contact' },
]

const GlobalMenu: FC<Props> = ({ menuOpen, handleButtonClick }) => {
  return (
    <motion.nav
      initial="closed"
      animate={menuOpen ? 'open' : 'closed'}
      variants={navVariants}
      css={nav}
      style={{ visibility: menuOpen ? 'visible' : 'hidden' }}
    >
      <motion.ul variants={ulVariants} css={ul}>
        {links.map((link) => (
          <motion.li
            initial="closed"
            variants={liVariants}
            animate={menuOpen ? 'open' : 'closed'}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            key={link.href}
            css={li}
          >
            <Link href={link.href} passHref>
              <a css={linkElem} onClick={handleButtonClick}>
                {link.label}
              </a>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  )
}

export default GlobalMenu
