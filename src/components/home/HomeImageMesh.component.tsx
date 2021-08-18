import { FC, memo, useEffect, useRef } from 'react'
import { LinearFilter, Texture, TextureLoader, Vector3 } from 'three'
import { extend, useLoader, useFrame, useThree } from '@react-three/fiber'
import { useAtom } from 'jotai'

import HomeShaderMaterial from './HomeShaderMaterial.component'
import useWindowSize from '../../hooks/useWindowSize.hook'
import { HomeStateAtom } from '../../atoms/HomeStateAtom'

extend({ HomeShaderMaterial })

interface UniformRef {
  uTime: number
  uTexture: Texture
  uProgress: number
  uMousePosition: {
    x: number
    y: number
  }
}

interface Ref extends THREE.Mesh, UniformRef {}

const ImagesMesh: FC = () => {
  const ref = useRef({} as Ref)
  const { windowSize } = useWindowSize()
  const { mouse } = useThree()
  const [homeState] = useAtom(HomeStateAtom)

  useEffect(() => {
    ref.current.uMousePosition = mouse
  }, [homeState, mouse])

  useFrame(({ clock }) => {
    ref.current.uTime = clock.getElapsedTime()
  })

  const texture = useLoader(TextureLoader, homeState.mvImg.src)
  texture.minFilter = LinearFilter
  texture.generateMipmaps = false
  texture.needsUpdate = true
  ref.current.uTexture = texture

  const scales = new Vector3(
    homeState.mvImg.bounds.width,
    homeState.mvImg.bounds.height,
    1
  )
  const position = new Vector3(
    homeState.mvImg.bounds.left -
      windowSize.windowWidth / 2 +
      homeState.mvImg.bounds.width / 2,
    -homeState.mvImg.bounds.top +
      windowSize.windowHeight / 2 -
      homeState.mvImg.bounds.height / 2,
    0
  )

  return (
    <mesh
      onPointerOver={() => (ref.current.uProgress = 1.0)}
      onPointerOut={() => (ref.current.uProgress = 0.0)}
      scale={scales}
      position={position}
    >
      <planeBufferGeometry args={[1, 1, 32, 32]} />
      <homeShaderMaterial uTexture={texture} ref={ref} />
    </mesh>
  )
}

export default memo(ImagesMesh)
