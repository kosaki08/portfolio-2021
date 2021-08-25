import { FC, memo } from 'react'

import WorksImageMesh from './WorksImageMesh.component'
import { worksListData } from '../../data/worksListData'

const WorksMesh: FC = () => {
  return (
    <>
      {worksListData.map((item) => (
        <WorksImageMesh key={item.itemKey} itemKey={item.itemKey} />
      ))}
    </>
  )
}

export default memo(WorksMesh)
