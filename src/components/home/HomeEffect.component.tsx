import { FC, memo } from 'react'
import {
  EffectComposer,
  Bloom,
  Vignette,
  Glitch,
} from '@react-three/postprocessing'
import { Vector2 } from 'three'

const HomeEffect: FC = () => {
  return (
    <EffectComposer>
      <Glitch
        duration={new Vector2(0.01, 0.4)}
        strength={new Vector2(0.8, 0.9)}
      />
      <Bloom luminanceThreshold={0} luminanceSmoothing={1.0} height={500} />
      <Vignette eskil={false} offset={0.1} darkness={1.2} />
    </EffectComposer>
  )
}

export default memo(HomeEffect)
