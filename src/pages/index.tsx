import { FC } from 'react'

import DefaultPageLayout from '../components/layouts/default-page-layout'
import HomeCTAButton from '../components/home/Button.component'

const Home: FC = () => {
  return (
    <DefaultPageLayout title="Hello World">
      <HomeCTAButton />
    </DefaultPageLayout>
  )
}

export default Home
