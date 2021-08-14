import tw, { css } from 'twin.macro'

export const detailPageContainer = css`
  ${tw`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`}
`

export const detailPageDescription = css`
  ${tw`leading-6 text-center py-6`}
`

export const detailPageDefaultText = css`
  p {
    ${tw`text-sm pb-4`}
  }
`
