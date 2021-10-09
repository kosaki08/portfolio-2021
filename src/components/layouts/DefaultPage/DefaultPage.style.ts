import tw, { css } from 'twin.macro'
import settings from '../../../settings'

const titleWrapper = css`
  ${tw`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}

  width: 80vw;
  padding-bottom: 30vw;

  @media screen and (min-width: ${settings.sizes.lg}px) {
    width: 40rem;
  }
`

const entryContent = css`
  ${tw`max-w-screen-md mx-4`}
  ${tw`md:(mx-auto)`}
`

const footerElem = css`
  ${tw`pt-5`}
  ${tw`md:(pt-32)`}
`

export { titleWrapper, entryContent, footerElem }
