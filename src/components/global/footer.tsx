import { FC } from 'react'
import tw, { css } from 'twin.macro'

const Footer: FC = () => {
  return (
    <footer css={footerElem}>
      <div className="container">
        <p css={copyright}>
          &copy; Copyright Kazunori Osaki All Rights Resreved.
        </p>
      </div>
    </footer>
  )
}

const footerElem = css`
  ${tw`py-24 px-6 bg-darkGray-main`}
`

const copyright = css`
  ${tw`text-xs text-center text-darkGray-text`}
`

export default Footer
