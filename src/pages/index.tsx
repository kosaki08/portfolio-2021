import { FC } from 'react'
import tw, { css } from 'twin.macro'

import Image from 'next/image'

import DefaultPageLayout from '../components/layouts/default-page-layout'
import MainVisual from '../components/home/MainVisual.component'
import HomeCTAButton from '../components/home/Button.component'
import TitleSVG from '../assets/images/title/txt_hello_world.svg'
import settings from '../settings'

const pageWrapper = css`
  ${tw`h-screen flex`}
  ${tw`lg:(pt-28 pb-20)`}

  @media (max-height: ${settings.threshold.height}px) {
    ${tw`pt-0 pb-0`}
  }
`

const contents = css`
  ${tw`flex justify-center items-center flex-col container mx-auto px-4`}

  & img {
    ${tw`pb-20`}
  }

  @media (min-width: ${settings.sizes.md}px) {
    max-width: calc(100% - 6rem * 2);
  }
`

const Home: FC = () => {
  return (
    <DefaultPageLayout title="Hello World">
      <div css={pageWrapper}>
        <MainVisual />
        <div css={contents}>
          <div className="pb-20">
            <Image src={TitleSVG} alt="Hello World!" draggable={false} />
          </div>
          <HomeCTAButton />
        </div>
      </div>
    </DefaultPageLayout>
  )
}

export default Home
