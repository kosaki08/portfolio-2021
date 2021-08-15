import { FC } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import NextNprogress from 'nextjs-progressbar'
import { motion } from 'framer-motion'

import Header from '../../components/global/Header/Header.component'
import Footer from '../../components/global/footer'
import SideNav from '../../components/global/SideNavigation/SideNavigation.component'
import BGLines from '../../components/global/BGLines/BGLines.component'
import { siteContainer, contentWrapper } from './SiteContainer.style'

type Props = {
  title: string
  children?: React.ReactNode
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 80 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 },
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
          <motion.main
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: 'linear' }}
          >
            {children}
          </motion.main>
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

export default DefaultPageContainer
