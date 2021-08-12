import { FC } from 'react'
import Link from 'next/link'

import tw, { css } from 'twin.macro'

const titleWrapper = css`
  ${tw`fixed top-10 left-2/4 transform -translate-x-1/2 w-full text-center`}
`

const h1 = css`
  ${tw`text-base uppercase font-black md:text-lg`}

  font-family: Montserrat, sans-serif;
  letter-spacing: 7px;
`

const titleLink = css`
  ${tw`relative`}

  &::before {
    ${tw`content absolute top-2/4 left-2/4 bg-white h-0.5 w-0 transform -translate-x-1/2 duration-500 ease-in-out`}
  }

  &:hover::before {
    ${tw`w-full`}
  }
`

const SiteTitle: FC = () => {
  return (
    <div css={titleWrapper}>
      <h1 css={h1}>
        <Link href="/" passHref>
          <a css={titleLink}>Kazunori Osaki</a>
        </Link>
      </h1>
    </div>
  )
}

export default SiteTitle
