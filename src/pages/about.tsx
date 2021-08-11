import { FC } from 'react'
import tw, { css } from 'twin.macro'
import DefaultPageLayout from '../components/layouts/default-page-layout'

const Home: FC = () => {
  return (
    <DefaultPageLayout title="About Me">
      <p css={[description]}>This is about page.</p>
    </DefaultPageLayout>
  )
}

const description = css`
  ${tw`text-2xl leading-6 text-center mt-6`}
`

export default Home
