import { FC } from 'react'
import Link from 'next/link'

const Header: FC = () => {
  return (
    <header className="body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" passHref>
          <a className="flex title-font font-medium items-center mb-4 md:mb-0">
            <span className="ml-3 text-xl">Kazunori Osaki</span>
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" passHref>
            <a className="mr-5">Home</a>
          </Link>
          <Link href="/about" passHref>
            <a className="mr-5">About</a>
          </Link>
          <Link href="/works" passHref>
            <a className="mr-5">Works</a>
          </Link>
          <Link href="/contact" passHref>
            <a>Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
