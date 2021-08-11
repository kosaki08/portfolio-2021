import { FC } from 'react'
import Link from 'next/link'

const Header: FC = () => {
  return (
    <header className="body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" passHref>
          <a className="flex title-font font-medium items-center mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Portfolio</span>
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" passHref>
            <a className="mr-5">Home</a>
          </Link>
          <Link href="/about" passHref>
            <a className="mr-5">About</a>
          </Link>
          <Link href="/contact" passHref>
            <a className="inline-flex items-center px-4 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Contact
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
