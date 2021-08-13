import { FC } from 'react'
import Link from 'next/link'
import tw, { css } from 'twin.macro'

const buttonWrapper = css`
  ${tw`text-center`}
`

const button = css`
  ${tw`inline-block py-2 px-6 text-xs uppercase border border-white duration-200 ease-in-out cursor-pointer tracking-titleSP`}
  ${tw`md:(py-3 px-10 text-sm border-2)`}
  ${tw`hover:(text-gray-800)`}

  background: linear-gradient(#fff 0 0) bottom / 100% var(--d, 0%) no-repeat;
  font-family: Montserrat, sans-serif;

  &:hover {
    --d: 100%;
  }
`

const HomeCTAButton: FC = () => {
  return (
    <div css={buttonWrapper}>
      <Link href="/works">
        <a css={button}>View Works</a>
      </Link>
    </div>
  )
}

export default HomeCTAButton
