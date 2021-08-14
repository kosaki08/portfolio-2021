import { FC } from 'react'
import tw, { css } from 'twin.macro'
import SiteContainer from '../containers/SiteContainer/SiteContainer.container'

const Home: FC = () => {
  return (
    <SiteContainer title="About Me">
      <p css={[description]}>This is about page.</p>
    </SiteContainer>
  )
}

const description = css`
  ${tw`text-2xl leading-6 text-center mt-6`}
`

export default Home
