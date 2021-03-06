import tw, { css } from 'twin.macro'
import settings from '../../../settings'

const nextPageItem = css`
  a {
    ${tw`relative block w-full overflow-hidden`}
    height: 16rem;

    &:hover img {
      ${tw`transform scale-125`}
    }

    &:hover strong {
      letter-spacing: 0.5rem;
    }

    @media screen and (min-width: ${settings.sizes.md}px) {
      height: 30rem;
    }
  }

  img {
    transition: all 5s linear;
  }

  a::before {
    ${tw`content absolute top-0 left-0 w-full h-full bg-black opacity-75 z-10`}
  }

  strong {
    ${tw`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-2xl font-fjalla uppercase duration-1000`}
    letter-spacing: .8rem;
  }
`

export { nextPageItem }
