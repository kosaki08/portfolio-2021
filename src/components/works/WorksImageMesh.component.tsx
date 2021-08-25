import { FC, memo, useEffect, useRef } from 'react'
import { LinearFilter, Texture, TextureLoader, Vector3 } from 'three'
import { extend, useFrame, useLoader, useThree } from '@react-three/fiber'
import { useAtom } from 'jotai'

import { WorksListStateAtom } from '../../atoms/WorksListStateAtom'
import WorksShaderMaterial from './WorksShaderMaterial.component'
import useWindowSize from '../../hooks/useWindowSize.hook'
import { worksItemType } from '../../types/dataTypes'

extend({ WorksShaderMaterial })

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

interface Props {
  itemKey: worksItemType
}

const WorksImageMesh: FC<Props> = ({ itemKey }) => {
  const ref = useRef({} as Ref)
  const { windowSize } = useWindowSize()
  const { mouse } = useThree()
  const [worksListState] = useAtom(WorksListStateAtom)

  useEffect(() => {
    ref.current.uMousePosition = mouse
    ref.current.uProgress = worksListState[itemKey].isHover ? 1.0 : 0.0
  }, [worksListState, mouse, windowSize, itemKey])

  useFrame(({ clock }) => {
    ref.current.uTime = clock.getElapsedTime()
  })

  const texture = useLoader(TextureLoader, worksListState[itemKey].src)

  texture.minFilter = LinearFilter
  texture.generateMipmaps = false
  texture.needsUpdate = true
  ref.current.uTexture = texture

  const scale = new Vector3(
    worksListState[itemKey].bounds.width,
    worksListState[itemKey].bounds.height,
    1
  )

  const position = new Vector3(
    worksListState[itemKey].bounds.left -
      windowSize.windowWidth / 2 +
      worksListState[itemKey].bounds.width / 2,
    -worksListState[itemKey].bounds.top +
      windowSize.windowHeight / 2 -
      worksListState[itemKey].bounds.height / 2,
    0
  )

  return (
    <mesh position={position} scale={scale}>
      <planeBufferGeometry args={[1, 1, 32, 32]} />
      <worksShaderMaterial uTexture={texture} ref={ref} />
    </mesh>
  )
}

export default memo(WorksImageMesh)
