import tw, { css } from 'twin.macro'

const siteContainer = css`
  ${tw`flex flex-col min-h-screen bg-darkGray-minusOne text-gray-300`}
`

const siteInner = css`
  ${tw`flex-1 container mx-auto pt-32`}
`

export { siteContainer, siteInner }
