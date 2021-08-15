import { FC } from 'react'
import tw, { css } from 'twin.macro'
import Image from 'next/image'

import SiteContainer from '../containers/SiteContainer/SiteContainer.container'
import MainVisual from '../components/home/MainVisual.component'
import HomeCTAButton from '../components/home/Button.component'
import TitleSVG from '../assets/images/title/txt_hello_world.svg'
import { pageWrapper } from '../styles/wrapperStyles'
import settings from '../settings'

const homeContents = css`
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
    <SiteContainer title="Hello World">
      <div css={pageWrapper} className="flex">
        <div className="opacity-0 invisible">
          <MainVisual />
        </div>
        <div css={homeContents}>
          <div className="pb-20">
            <Image src={TitleSVG} alt="Hello World!" draggable={false} />
          </div>
          <HomeCTAButton />
        </div>
      </div>
    </SiteContainer>
  )
}

export default Home
