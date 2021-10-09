import tw, { css } from 'twin.macro'

import settings from '../settings'

const pageWrapper = css`
  ${tw`min-h-screen`}
  ${tw`lg:(pt-28)`}

  @media (max-height: ${settings.threshold.height}px) {
    ${tw`pt-0 pb-0`}
  }
`

const homePageWrapper = css`
  ${tw`lg:(pb-20)`}
`

const svgTitleWrapper = css`
  ${tw`h-0`}

  svg {
    ${tw`absolute w-full h-full top-0 left-0`}
  }
`

export { pageWrapper, homePageWrapper, svgTitleWrapper }
