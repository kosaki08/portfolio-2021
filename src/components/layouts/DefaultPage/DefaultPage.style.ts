import tw, { css } from 'twin.macro'

const titleWrapper = css`
  ${tw`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
`

const entryContent = css`
  ${tw`max-w-screen-md mx-4`}
  ${tw`md:(mx-auto)`}
`

const footerElem = css`
  ${tw`pt-5`}
  ${tw`md:(pt-32)`}
`

export { titleWrapper, entryContent, footerElem }
