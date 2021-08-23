import { FC } from 'react'
import tw, { css } from 'twin.macro'

import { HomePageTitleSVG } from '../global/PageTitle.component'
import { svgTitleWrapper } from '../../styles/wrapperStyles'

const homeSVGWrapper = css`
  ${tw`relative h-0`}

  width: 80vw;
  padding-bottom: 20vw;
`

const HomeTitle: FC = () => {
  return (
    <div css={[homeSVGWrapper, svgTitleWrapper]}>
      <HomePageTitleSVG />
    </div>
  )
}

export default HomeTitle
