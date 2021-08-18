import { FC, memo, Suspense } from 'react'
import { useRouter } from 'next/router'
import { Canvas } from '@react-three/fiber'
import { Html, Stats } from '@react-three/drei'
import tw, { css } from 'twin.macro'

import HomePageMesh from '../../home/HomeMesh.component'
import useWindowSize from '../../../hooks/useWindowSize.hook'

const canvasWrapper = css`
  ${tw`fixed inset-0`}
  z-index: 1;
`

const Loading: FC = () => (
  <Html>
    <p>Loading...</p>
  </Html>
)

const perspective = 800

const GlobalCanvas: FC = () => {
  const { asPath } = useRouter()
  const { windowSize } = useWindowSize()

  const fov =
    (180 * (2 * Math.atan(windowSize.windowHeight / 2 / perspective))) / Math.PI

  return (
    <div css={canvasWrapper}>
      <Canvas
        camera={{
          fov: fov,
          position: [0, 0, perspective],
          near: 0.1,
          far: 1000,
        }}
      >
        <Suspense fallback={<Loading />}>
          {asPath === '/' && <HomePageMesh />}
        </Suspense>
        {asPath.includes('#debug') && <Stats />}
      </Canvas>
    </div>
  )
}

export default memo(GlobalCanvas)
