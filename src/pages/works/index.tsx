import { FC, memo } from 'react'

import SiteContainer from '../../containers/SiteContainer/SiteContainer.container'
import WorksListItem from '../../components/works/WorksListItem.component'
import DefaultPageLayout from '../../components/layouts/DefaultPage/DefaultPage.layout'
import { worksListData } from '../../data/worksListData'

const Works: FC = () => {
  return (
    <SiteContainer title="Works">
      <DefaultPageLayout pageKey="works">
        <ul>
          {worksListData.map((item) => (
            <WorksListItem key={item.title} item={item} />
          ))}
        </ul>
      </DefaultPageLayout>
    </SiteContainer>
  )
}

export default memo(Works)
