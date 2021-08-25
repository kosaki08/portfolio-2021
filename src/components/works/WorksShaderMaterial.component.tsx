import { Texture, Vector2 } from 'three'
import { ReactThreeFiber } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'

import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'

type Props = {
  uTexture: THREE.Texture
  ref: React.Ref<React.ReactNode>
  wireframe?: boolean
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      worksShaderMaterial: ReactThreeFiber.Object3DNode<
        Props,
        typeof WorksShaderMaterial
      >
    }
  }
}

const WorksShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uTexture: new Texture(),
    uProgress: 0,
    uMousePosition: new Vector2(0, 0),
  },
  vertexShader,
  fragmentShader
)

export default WorksShaderMaterial
