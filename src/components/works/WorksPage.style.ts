import tw, { css } from 'twin.macro'

const listItem = css`
  ${tw`pb-16`}
`

const imageWrapper = css`
  ${tw`pb-4`}
  & > div {
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2), 0 3px 30px rgba(0, 0, 0, 0.3),
      0 30px 40px rgba(0, 0, 0, 0.5);
  }
`

const description = css`
  ${tw`text-xs text-darkGray-text`}
  ${tw`md:(text-sm)`}
`

export { listItem, imageWrapper, description }
