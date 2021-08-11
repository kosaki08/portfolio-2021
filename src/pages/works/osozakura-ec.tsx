import { FC } from 'react'
import tw, { css } from 'twin.macro'
import DefaultPageLayout from '../../components/layouts/default-page-layout'

const OsozakuraEC: FC = () => {
  return (
    <DefaultPageLayout title="Osozakura EC">
      <p css={[description]}>This is Works/Osozakura EC page.</p>
    </DefaultPageLayout>
  )
}

const description = css`
  ${tw`text-2xl leading-6 text-center mt-6`}
`

export default OsozakuraEC
