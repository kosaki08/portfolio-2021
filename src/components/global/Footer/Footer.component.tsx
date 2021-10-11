import { FC } from 'react'
import { useRouter } from 'next/router'

import { footerElem, copyright } from './Footer.style'

const Footer: FC = () => {
  const { pathname } = useRouter()

  if (pathname === '/') {
    return null
  }

  return (
    <footer css={footerElem}>
      <div className="container mx-auto">
        <p css={copyright}>
          &copy; Copyright Kazunori Osaki All Rights Resreved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
