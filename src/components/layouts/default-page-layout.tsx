import { FC } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import NextNprogress from 'nextjs-progressbar'

import Header from '../global/header'
import styles from '../../styles/ThreeJSPage.module.css'
import settings from '../../settings'

type Props = {
  title: string
  children?: React.ReactNode
}

const DefaultPageLayout: FC<Props> = ({ title, children }) => {
  const { pathname } = useRouter()

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Head>
          <title>{title}</title>
        </Head>
        <main className={styles.main}>
          <motion.h1
            layoutId="title"
            className={styles.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: settings.transitionDelay }}
          >
            {title}
          </motion.h1>
          <div className={styles.inner}>{children}</div>
        </main>
        {pathname !== '/' && (
          <footer className={styles.footer}>
            <Link href="/" passHref>
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: settings.transitionDelay }}
                layoutId="footer-link"
                className="underline hover:no-underline"
              >
                Go back to Home
              </motion.a>
            </Link>
          </footer>
        )}
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
