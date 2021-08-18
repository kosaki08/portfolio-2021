import { FC, memo } from 'react'
import HomeImageMesh from './HomeImageMesh.component'
import HomeEffect from './HomeEffect.component'

const HomeMesh: FC = () => {
  return (
    <>
      <HomeImageMesh />
      <HomeEffect />
    </>
  )
}

export default memo(HomeMesh)
