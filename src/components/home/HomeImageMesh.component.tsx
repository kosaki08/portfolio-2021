import { FC, memo, useRef } from 'react'
import { LinearFilter, Texture, TextureLoader, Vector3 } from 'three'
import { extend, useLoader, useFrame } from '@react-three/fiber'

import HomeShaderMaterial from './HomeShaderMaterial.component'
import useWindowSize from '../../hooks/useWindowSize.hook'

extend({ HomeShaderMaterial })

type UniformRef = {
  uTime: number
  uTexture: Texture
  uProgress: number
}

type Ref = THREE.Mesh & UniformRef

const ImagesMesh: FC = () => {
  const ref = useRef({} as Ref)
  const { windowSize } = useWindowSize()

  useFrame(({ clock }) => {
    ref.current.uTime = clock.getElapsedTime()
  })

  const image = document.querySelector('.home-mv-img') as HTMLImageElement

  const imgSrc = image.src
  const texture = useLoader(TextureLoader, imgSrc) as Texture
  texture.minFilter = LinearFilter
  texture.generateMipmaps = false
  texture.needsUpdate = true
  ref.current.uTexture = texture

  const bounds = image.getBoundingClientRect()
  const scales = new Vector3(bounds.width, bounds.height, 1)
  const position = new Vector3(
    bounds.left - windowSize.windowWidth / 2 + bounds.width / 2,
    -bounds.top + windowSize.windowHeight / 2 - bounds.height / 2,
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
