import type { AppProps } from 'next/app'
import { GlobalStyles } from 'twin.macro'
import { AnimatePresence } from 'framer-motion'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
      <GlobalStyles />
    </>
  )
}

export default MyApp
