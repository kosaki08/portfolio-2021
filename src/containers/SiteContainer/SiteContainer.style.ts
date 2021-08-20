import tw, { css } from 'twin.macro'

const siteContainer = css`
  ${tw`flex flex-col min-h-screen bg-darkGray-plusOne text-gray-300`}
`

const contentWrapper = css`
  ${tw`relative flex-1 z-10`}
`

export { siteContainer, contentWrapper }
