import tw, { css } from 'twin.macro'

const siteContainer = css`
  ${tw`min-h-screen bg-darkGray-minusOne text-gray-300`}
`

const siteInner = css`
  ${tw`container mx-auto`}
`

export { siteContainer, siteInner }
