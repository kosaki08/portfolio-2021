import { FC } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import DefaultPageLayout from '../components/layouts/default-page-layout'

const Home: FC = () => {
  return (
    <DefaultPageLayout title="Create Next App">
      <div className={styles.grid}>
        <Link href="/about">
          <a className={styles.card}>
            <h3>About Me</h3>
            <p>About page description.</p>
          </a>
        </Link>
      </div>
    </DefaultPageLayout>
  )
}

export default Home
