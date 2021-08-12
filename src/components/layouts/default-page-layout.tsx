import { FC } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import NextNprogress from 'nextjs-progressbar'

import Header from '../global/Header/Header.component'
import Footer from '../global/footer'
import SideNav from '../global/SideNav/SideNav.component'
import { siteContainer, siteInner } from './default-page-layout.style'
import settings from '../../settings'

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
            <motion.h1
              layoutId="title"
              className="text-6xl center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: settings.transitionDelay }}
            >
              {title}
            </motion.h1>
            <div>{children}</div>
          </main>
        </div>
        <Footer />
        <SideNav />
        <NextNprogress
          color="#29D"
          startPosition={0.3}
          stopDelayMs={200}
          height={2}
          showOnShallow={true}
        />
      </div>
    </>
  )
}

export default DefaultPageLayout
