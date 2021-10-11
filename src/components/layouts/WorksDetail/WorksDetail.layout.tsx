import { FC } from 'react'
import Image from 'next/image'

import NextPageItem from '../../global/NextPageItem/NextPageItem.component'
import {
  pageWrapper,
  worksItemPageWrapper,
} from '../../../styles/wrapperStyles'
import { worksDetailHeader, worksDetailContents } from './WorksDetail.style'
import { pad } from '../../../utils/formatNumber'
import siteData from '../../../data/siteData'
import type { worksItemType } from '../../../types/dataTypes'

type Props = {
  children: React.ReactNode
  pageKey: worksItemType
}

const WorksDetailPageLayout: FC<Props> = ({ children, pageKey }) => {
  const { worksItem } = siteData
  const worksData = worksItem[pageKey]
  const nextItemKey = worksData.nextPage?.key
  const nextPageRawData = nextItemKey && worksItem[nextItemKey]

  if (!worksData) {
    throw new Error('No Page Data')
  }

  let nextPageData
  if (nextPageRawData) {
    nextPageData = {
      title: nextPageRawData.title,
      path: nextPageRawData.path,
      mvImgData: nextPageRawData.mvImgData,
    }
  }

  return (
    <div css={[pageWrapper, worksItemPageWrapper]}>
      <header css={worksDetailHeader}>
        <div>
          <div className="works-detail-mv">
            <Image src={worksData.mvImgData} alt="メインビジュアル" />
          </div>
          <div className="works-detail-titles">
            <h1>{worksData.title}</h1>
            <p>{worksData.tag}</p>
          </div>
        </div>
        <span>{`.${pad(worksData.num)}`}</span>
      </header>
      <div css={worksDetailContents}>{children}</div>

      {nextPageData && (
        <NextPageItem data={nextPageData} label="Next Portfolio" />
      )}
    </div>
  )
}

export default WorksDetailPageLayout
