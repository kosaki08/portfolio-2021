import { FC } from 'react'
import tw, { css } from 'twin.macro'

import settings from '../../settings'

const MVWrapper = css`
  ${tw`absolute ml-28 w-full transform`}

  z-index: -1;

  @media screen and (max-width: ${settings.sizes.lg}px) {
    ${tw`ml-0`}
  }
`

const inner = css`
  img {
    ${tw`w-full h-screen object-cover`}
  }

  @media screen and (min-width: ${settings.sizes
      .lg}px) and (min-height: ${settings.threshold.height}px) {
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2), 0 3px 30px rgba(0, 0, 0, 0.3),
      0 30px 40px rgba(0, 0, 0, 0.5);
    height: calc(100% - 5rem);

    img {
      width: 100%;
      height: calc(100vh - 12rem);
      object-fit: cover;
      object-position: 50% 80%;
    }
  }
`

const MainVisual: FC = () => {
  return (
    <div css={MVWrapper}>
      <div css={inner}>
        <img
          src="/home/main-visual.jpg"
          loading="lazy"
          draggable="false"
          alt="Home page main visual"
        />
      </div>
    </div>
  )
}

export default MainVisual
