import tw, { css } from 'twin.macro'

const nextPageItem = css`
  a {
    ${tw`relative block w-full`}
    height: 30rem;
  }

  a::before {
    ${tw`content absolute top-0 left-0 w-full h-full bg-black opacity-75 z-10`}
  }

  strong {
    ${tw`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-2xl font-fjalla uppercase`}
    letter-spacing: .8rem;
  }
`

export { nextPageItem }
