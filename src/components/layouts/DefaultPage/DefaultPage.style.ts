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

const header = css`
  ${tw`pb-20`}
`

const defaultPageMVInner = css`
  ${tw`relative block w-full`}
  height: 16rem;

  @media screen and (min-width: ${settings.sizes.md}px) {
    height: 30rem;
  }

  @media screen and (min-width: ${settings.sizes
      .lg}px) and (min-height: ${settings.threshold.height}px) {
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2), 0 3px 30px rgba(0, 0, 0, 0.3),
      0 30px 40px rgba(0, 0, 0, 0.5);
  }
`

const entryContent = css`
  ${tw`max-w-screen-md mx-4 pb-12`}
  ${tw`md:(mx-auto pb-24)`}
`

const footerElem = css`
  ${tw`pt-5`}
  ${tw`md:(pt-32)`}
`

export { titleWrapper, header, defaultPageMVInner, entryContent, footerElem }
