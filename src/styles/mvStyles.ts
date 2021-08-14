import tw, { css } from 'twin.macro'

import settings from '../settings'

const mvWrapper = css`
  ${tw`ml-0`}

  @media screen and (min-width: ${settings.sizes
    .lg}px) and (min-height: ${settings.threshold.height}px) {
    ${tw`ml-28`}
  }
`

const mvInner = css`
  img {
    ${tw`w-full object-cover`}
    height: calc(100vh - 12rem);
  }

  @media screen and (min-width: ${settings.sizes
      .lg}px) and (min-height: ${settings.threshold.height}px) {
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2), 0 3px 30px rgba(0, 0, 0, 0.3),
      0 30px 40px rgba(0, 0, 0, 0.5);
    height: calc(100% - 5rem);
  }
`

export { mvWrapper, mvInner }
