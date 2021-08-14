import { FC } from 'react'
import tw, { css } from 'twin.macro'
import SiteContainer from '../containers/SiteContainer/SiteContainer.container'

const Contact: FC = () => {
  return (
    <SiteContainer title="Contact">
      <p css={[description]}>This is contact page.</p>
    </SiteContainer>
  )
}

const description = css`
  ${tw`text-2xl leading-6 text-center mt-6`}
`

export default Contact
