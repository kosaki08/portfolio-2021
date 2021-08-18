import { FC, useEffect, useRef } from 'react'
import tw, { css } from 'twin.macro'
import Image from 'next/image'
import { useAtom } from 'jotai'

import SiteContainer from '../containers/SiteContainer/SiteContainer.container'
import MainVisual from '../components/home/MainVisual.component'
import HomeCTAButton from '../components/home/Button.component'
import TitleSVG from '../assets/images/title/txt_hello_world.svg'
import { HomeStateAtom } from '../atoms/HomeStateAtom'
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
  const ref = useRef<HTMLDivElement>(null)
  const [, setHomeState] = useAtom(HomeStateAtom)

  useEffect(() => {
    let item1: HTMLDivElement | void
    let item2: HTMLDivElement | void

    const handleMouseEnter = () => {
      setHomeState((others) => ({
        ...others,
        ...{ mvImg: { ...others.mvImg, isHover: true } },
      }))
    }

    const handleMouseLeave = () => {
      setHomeState((others) => ({
        ...others,
        ...{ mvImg: { ...others.mvImg, isHover: false } },
      }))
    }

    if (ref.current) {
      item1 = ref.current.addEventListener('mouseenter', handleMouseEnter)
      item2 = ref.current.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (item1) {
        item1.removeEventListener('mouseenter', handleMouseEnter)
      }
      if (item2) {
        item2.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [setHomeState])

  return (
    <SiteContainer title="Hello World">
      <div css={pageWrapper} className="flex" ref={ref}>
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
