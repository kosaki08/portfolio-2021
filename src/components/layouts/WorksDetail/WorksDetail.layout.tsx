import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { pageWrapper } from '../../../styles/wrapperStyles'
import { worksDetailContents } from './WorksDetail.style'
import { nextPageItem } from '../../../styles/nextPageItem'
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
  const nextPageData = nextItemKey && worksItem[nextItemKey]

  if (!worksData) {
    throw new Error('No Page Data')
  }

  return (
    <div css={pageWrapper}>
      <header className="pb-20">
        <div>
          <h1>{worksData.title}</h1>
          <p>{worksData.tag}</p>
        </div>
        <div className="relative">
          <div>
            <Image src={worksData.mvImgPath} alt="メインビジュアル" />
          </div>
        </div>
      </header>
      <div css={worksDetailContents}>{children}</div>

      {nextPageData && (
        <footer css={nextPageItem}>
          <Link href={nextPageData.slug} passHref>
            <a>
              <Image
                src={nextPageData.mvImgPath}
                alt={nextPageData.title}
                layout="fill"
                objectFit="cover"
              />
              <strong>Next Portfolio</strong>
            </a>
          </Link>
        </footer>
      )}
    </div>
  )
}

export default WorksDetailPageLayout
