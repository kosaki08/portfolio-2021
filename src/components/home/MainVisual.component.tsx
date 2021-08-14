import { FC } from 'react'
import tw, { css } from 'twin.macro'

import { mvWrapper, mvInner } from '../../styles/mvStyles'

const homeMVWrapper = css`
  ${tw`absolute w-full transform`}

  z-index: -1;
`

const homeMVInner = css`
  img {
    object-position: 50% 80%;
  }
`

const MainVisual: FC = () => {
  return (
    <div css={[mvWrapper, homeMVWrapper]}>
      <div css={[mvInner, homeMVInner]}>
        <img
          src="/home/mv_home.jpg"
          loading="lazy"
          draggable="false"
          alt="Home page main visual"
        />
      </div>
    </div>
  )
}

export default MainVisual
