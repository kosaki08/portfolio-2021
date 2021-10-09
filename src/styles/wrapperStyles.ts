import tw, { css } from 'twin.macro'

import settings from '../settings'

const pageWrapper = css`
  ${tw`min-h-screen`}
  ${tw`lg:(pt-28 pb-20)`}

  @media (max-height: ${settings.threshold.height}px) {
    ${tw`pt-0 pb-0`}
  }

  header {
    ${tw`pb-20`}
    ${tw`md:(pb-36)`}
  }
`

const svgTitleWrapper = css`
  ${tw`h-0`}

  svg {
    ${tw`absolute w-full h-full top-0 left-0`}
  }
`

export { pageWrapper, svgTitleWrapper }
