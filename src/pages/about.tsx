import { FC } from 'react'
import tw, { css } from 'twin.macro'
import SiteContainer from '../containers/SiteContainer/SiteContainer.container'
import DefaultPageLayout from '../components/layouts/DefaultPage/DefaultPage.layout'

const About: FC = () => {
  return (
    <SiteContainer title="About Me">
      <DefaultPageLayout pageKey="about">
        <p css={[description]}>This is about page.</p>
      </DefaultPageLayout>
    </SiteContainer>
  )
}

const description = css`
  ${tw`text-2xl leading-6 text-center mt-6`}
`

export default About
