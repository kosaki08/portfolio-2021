import { FC } from 'react'
import tw, { css } from 'twin.macro'

const root = css`
  ${tw`fixed top-0 w-full h-full z-0`}

  & > div {
    ${tw`absolute w-px h-full bg-darkGray-plusOne`}

    &:first-of-type {
      ${tw`left-1/3 md:(left-1/4)`}
    }

    &:nth-of-type(2) {
      ${tw`left-2/3 md:(left-2/4)`}
    }

    &:nth-of-type(3) {
      ${tw`left-full md:(left-3/4)`}
    }

    &:last-of-type {
      ${tw`hidden md:(left-full)`}
    }
  }
`

const BGLines: FC = () => {
  return (
    <div css={root}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

export default BGLines
