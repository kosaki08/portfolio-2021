import { FC } from 'react'

import SiteContainer from '../../containers/SiteContainer/SiteContainer.container'
import WorksDetailPageLayout from '../../components/layouts/WorksDetail/WorksDetail.layout'

const OsozakuraEC: FC = () => {
  return (
    <SiteContainer title="UT エイム Webパンフレット">
      <WorksDetailPageLayout pageKey="utAim">
        <p>This is Works/UT エイム image design page.</p>
      </WorksDetailPageLayout>
    </SiteContainer>
  )
}

export default OsozakuraEC
