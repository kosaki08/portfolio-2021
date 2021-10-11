import tw, { css } from 'twin.macro'

const footerElem = css`
  ${tw`py-12 px-6 bg-darkGray-main z-10`}
  ${tw`md:(py-16)`}
`

const copyright = css`
  ${tw`text-xs text-center text-darkGray-text`}
`

export { footerElem, copyright }
