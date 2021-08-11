import { FC, memo } from 'react'
import tw, { css } from 'twin.macro'

const loading = css`
  &::before,
  &::after {
    ${tw`fixed content z-50`}
  }

  &::before {
    ${tw`inset-0 w-full h-full bg-gray-900`}
  }

  &::after {
    ${tw`top-2/4 left-2/4 opacity-40 bg-pink-400`}
    width: 60px;
    height: 60px;
    margin: -30px 0 0 -30px;
    border-radius: 50%;
    animation: loaderAnim 0.7s linear infinite alternate forwards;
  }

  @keyframes loaderAnim {
    to {
      ${tw`opacity-100`}
      transform: scale3d(0.5, 0.5, 1);
    }
  }
`

const Loading: FC = () => {
  return <div css={loading} />
}

export default memo(Loading)
