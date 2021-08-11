import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import { GlobalStyles } from 'twin.macro'
import { AnimateSharedLayout } from 'framer-motion'

import Loading from '../components/global/loading'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)
  const { events } = useRouter()

  useEffect(() => {
    const handleStart = () => setLoading(true)
    const handleComplete = () => setLoading(false)

    events.on('routeChangeStart', handleStart)
    events.on('routeChangeComplete', handleComplete)
    events.on('routeChangeError', handleComplete)

    return () => {
      events.off('routeChangeStart', handleStart)
      events.off('routeChangeComplete', handleComplete)
      events.off('routeChangeError', handleComplete)
    }
  }, [])

  return (
    <>
      <AnimateSharedLayout>
        {loading && <Loading />}
        <Component {...pageProps} />
      </AnimateSharedLayout>
      <GlobalStyles />
    </>
  )
}

export default MyApp
