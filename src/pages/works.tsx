import { FC } from 'react'
import tw, { css } from 'twin.macro'
import DefaultPageLayout from '../components/layouts/default-page-layout'

const Works: FC = () => {
  return (
    <DefaultPageLayout title="Works">
      <p css={[description]}>This is works page.</p>
    </DefaultPageLayout>
  )
}

const description = css`
  ${tw`text-2xl leading-6 text-center mt-6`}
`

export default Works
