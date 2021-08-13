import { FC } from 'react'
import { useRouter } from 'next/router'
import tw, { css } from 'twin.macro'

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

const footerElem = css`
  ${tw`py-24 px-6 bg-darkGray-main z-10`}
`

const copyright = css`
  ${tw`text-xs text-center text-darkGray-text`}
`

export default Footer
