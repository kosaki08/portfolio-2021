import { FC } from 'react'
import tw, { css } from 'twin.macro'
import DefaultPageLayout from '../components/layouts/default-page-layout'

const Contact: FC = () => {
  return (
    <DefaultPageLayout title="Contact">
      <p css={[description]}>This is contact page.</p>
    </DefaultPageLayout>
  )
}

const description = css`
  ${tw`text-2xl leading-6 text-center mt-6`}
`

export default Contact
