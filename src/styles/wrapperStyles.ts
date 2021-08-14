import tw, { css } from 'twin.macro'

import settings from '../settings'

const pageWrapper = css`
  ${tw`min-h-screen`}
  ${tw`lg:(pt-28 pb-20)`}

  @media (max-height: ${settings.threshold.height}px) {
    ${tw`pt-0 pb-0`}
  }
`

export { pageWrapper }
