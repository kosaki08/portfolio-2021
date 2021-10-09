import { FC, useEffect } from 'react'
import tw, { css } from 'twin.macro'
import useMeasure from 'react-use-measure'
import { useAtom } from 'jotai'

import { HomeStateAtom } from '../../atoms/HomeStateAtom'
import { mvWrapper, mvInner } from '../../styles/mvStyles'

const homeMVWrapper = css`
  ${tw`absolute w-full transform`}

  z-index: -1;
`

const homeMVInner = css`
  img {
    object-position: 50% 80%;
    height: calc(100vh - 12rem);
  }
`

const homeMVImgSrc = '/home/mv_home.jpg'

const MainVisual: FC = () => {
  const [ref, bounds] = useMeasure()
  const [, setHomeState] = useAtom(HomeStateAtom)

  useEffect(() => {
    setHomeState((others) => ({
      ...others,
      mvImg: {
        ...others.mvImg,
        src: homeMVImgSrc,
        bounds,
      },
    }))
  }, [bounds, setHomeState])

  return (
    <div css={[mvWrapper, homeMVWrapper]}>
      <div css={[mvInner, homeMVInner]}>
        <img
          src={homeMVImgSrc}
          draggable="false"
          alt="Home page main visual"
          ref={ref}
        />
      </div>
    </div>
  )
}

export default MainVisual
