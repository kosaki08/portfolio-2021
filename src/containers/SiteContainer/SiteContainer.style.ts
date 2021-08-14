import tw, { css } from 'twin.macro'

const siteContainer = css`
  ${tw`flex flex-col min-h-screen bg-darkGray-minusOne text-gray-300`}
`

const siteInner = css`
  ${tw`relative flex-1 z-10`}
`

export { siteContainer, siteInner }
