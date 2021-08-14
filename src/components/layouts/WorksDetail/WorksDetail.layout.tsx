import { FC } from 'react'
import Link from 'next/link'

import { pageWrapper } from '../../../styles/wrapperStyles'
import data from '../../../data'
import type { worksItemType } from '../../../types/dataTypes'

type Props = {
  children: React.ReactNode
  pageKey: worksItemType
}

const WorksDetailPageLayout: FC<Props> = ({ children, pageKey }) => {
  const { worksItem } = data
  const worksData = worksItem[pageKey]

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
            <img src={worksData.mvImgPath} alt="メインビジュアル" />
          </div>
        </div>
      </header>
      <div>{children}</div>

      {worksData.nextPage && (
        <footer>
          Next Portfolio:
          <Link href={worksData.nextPage.path} passHref>
            <a>{worksData.nextPage.label}</a>
          </Link>
        </footer>
      )}
    </div>
  )
}

export default WorksDetailPageLayout
