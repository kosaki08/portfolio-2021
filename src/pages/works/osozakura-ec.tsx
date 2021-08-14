import { FC } from 'react'
import tw, { css } from 'twin.macro'
import SiteContainer from '../../containers/SiteContainer/SiteContainer.container'

const OsozakuraEC: FC = () => {
  return (
    <SiteContainer title="Osozakura EC">
      <p css={[description]}>This is Works/Osozakura EC page.</p>
    </SiteContainer>
  )
}

const description = css`
  ${tw`text-2xl leading-6 text-center mt-6`}
`

export default OsozakuraEC
