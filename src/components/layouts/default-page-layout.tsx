import { FC } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import NextNprogress from 'nextjs-progressbar'

import Header from '../global/header'
import Footer from '../global/footer'
import settings from '../../settings'

type Props = {
  title: string
  children?: React.ReactNode
}

const DefaultPageLayout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Header />
      <div className="container">
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

        <Footer />
      </div>

      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        showOnShallow={true}
      />
    </>
  )
}

export default DefaultPageLayout
