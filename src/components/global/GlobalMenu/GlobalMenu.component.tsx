import { FC } from 'react'
import Link from 'next/link'

interface Props {
  menuOpen: boolean
}

const GlobalMenu: FC<Props> = ({ menuOpen }) => {
  if (!menuOpen) {
    return null
  }

  return (
    <div>
      <nav>
        <Link href="/" passHref>
          <a>Home</a>
        </Link>
        <Link href="/about" passHref>
          <a>About</a>
        </Link>
        <Link href="/works" passHref>
          <a>Works</a>
        </Link>
        <Link href="/contact" passHref>
          <a>Contact</a>
        </Link>
      </nav>
    </div>
  )
}

export default GlobalMenu
