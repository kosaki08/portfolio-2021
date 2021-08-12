import { FC } from 'react'
import Link from 'next/link'

const GlobalMenu: FC = () => {
  return (
    <div className="hidden">
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
