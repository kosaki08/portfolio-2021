import { FC } from 'react'

import SiteContainer from '../../containers/SiteContainer/SiteContainer.container'
import WorksDetailPageLayout from '../../components/layouts/WorksDetail/WorksDetail.layout'

const ShizukaBox: FC = () => {
  return (
    <SiteContainer title="Shizuka Box">
      <WorksDetailPageLayout pageKey="shizukaBox">
        <p>Shizuka Boxの紹介文が入ります</p>
        <img src="/shizuka-box/shizuka_box_1.png" alt="Shizuka Box 制作例" />
        <img src="/shizuka-box/shizuka_box_2.png" alt="Shizuka Box 制作例" />
      </WorksDetailPageLayout>
    </SiteContainer>
  )
}

export default ShizukaBox
