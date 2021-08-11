import { FC } from 'react'
import Link from 'next/link'

import DefaultPageLayout from '../components/layouts/default-page-layout'

const Home: FC = () => {
  return (
    <DefaultPageLayout title="Hello World">
      <div>
        <Link href="/about">
          <a>View Works</a>
        </Link>
      </div>
    </DefaultPageLayout>
  )
}

export default Home
