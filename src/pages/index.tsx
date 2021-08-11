import { FC } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import DefaultPageLayout from '../components/layouts/default-page-layout'

const Home: FC = () => {
  return (
    <DefaultPageLayout title="Create Next App">
      <div className={styles.grid}>
        <Link href="/waving-image">
          <a className={styles.card}>
            <h3>Simplex 3D Noise Waving Image &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </Link>

        <Link href="/playground/particle-from-model">
          <a className={styles.card}>
            <h3>Particle From Model</h3>
            <p>Particle From Model page description.</p>
          </a>
        </Link>

        <Link href="/index-page">
          <a className={styles.card}>
            <h3>Playground</h3>
            <p>Playground page description.</p>
          </a>
        </Link>

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
