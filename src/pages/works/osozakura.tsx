import { FC } from 'react'
import tw, { css } from 'twin.macro'
import SiteContainer from '../../containers/SiteContainer/SiteContainer.container'

const Osozakura: FC = () => {
  return (
    <SiteContainer title="Osozakura">
      <p css={[description]}>This is Works/Osozakura page.</p>
    </SiteContainer>
  )
}

const description = css`
  ${tw`text-2xl leading-6 text-center mt-6`}
`

export default Osozakura
