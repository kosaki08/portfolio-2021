import { FC } from 'react'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'

import Header from '../global/Header/Header.component'
import Footer from '../global/footer'
import SideNav from '../global/SideNavigation/SideNavigation.component'
import BGLines from '../global/BGLines/BGLines.component'
import { siteContainer, siteInner } from './default-page-layout.style'

type Props = {
  title: string
  children?: React.ReactNode
}

const DefaultPageLayout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <div css={siteContainer}>
        <Header />
        <div css={siteInner}>
          <Head>
            <title>{title}</title>
          </Head>
          <main>
            <div>{children}</div>
          </main>
        </div>
        <Footer />
        <SideNav />
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

export default DefaultPageLayout
