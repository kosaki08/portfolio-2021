import { FC } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import NextNprogress from 'nextjs-progressbar'

import Header from '../../components/global/Header/Header.component'
import Footer from '../../components/global/footer'
import SideNav from '../../components/global/SideNavigation/SideNavigation.component'
import BGLines from '../../components/global/BGLines/BGLines.component'
import GlobalCanvas from '../../components/global/GlobalCanvas/GlobalCanvas.component'
import { siteContainer, contentWrapper } from './SiteContainer.style'

type Props = {
  title: string
  children?: React.ReactNode
}

const DefaultPageContainer: FC<Props> = ({ title, children }) => {
  const { pathname } = useRouter()

  return (
    <>
      <div
        css={siteContainer}
        className={pathname === '/' ? 'overflow-hidden' : ''}
      >
        <Header />
        <div css={contentWrapper}>
          <Head>
            <title>{title}</title>
          </Head>
          <div>{children}</div>
        </div>
        <Footer />
        <SideNav />
        <GlobalCanvas />
        <BGLines />
        <NextNprogress
          color="rgb(110, 25, 111)"
          startPosition={0.3}
          stopDelayMs={200}
          height={7}
          showOnShallow={true}
        />
      </div>
    </>
  )
}

export default DefaultPageContainer
