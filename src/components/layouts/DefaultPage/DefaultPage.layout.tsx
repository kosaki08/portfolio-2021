import { FC } from 'react'
import Link from 'next/link'

import { mvWrapper, mvInner } from '../../../styles/mvStyles'
import { titleWrapper, entryContent, footerElem } from './DefaultPage.style'
import { pageWrapper, svgTitleWrapper } from '../../../styles/wrapperStyles'
import siteData from '../../../data/siteData'
import type { pageTypes } from '../../../types/dataTypes'

type Props = {
  children: React.ReactNode
  pageKey: pageTypes
}

const DefaultPageLayout: FC<Props> = ({ children, pageKey }) => {
  const { pages } = siteData
  const pageData = pages[pageKey]
  const nextPageKey = pageData.nextPage?.key
  const nextPageData = nextPageKey && pages[nextPageKey]

  if (!pageData) {
    throw new Error('No Page Data')
  }

  return (
    <div css={pageWrapper}>
      <header className="pb-20">
        <div className="relative">
          <div css={mvWrapper}>
            <div css={mvInner}>
              <img src={pageData.mvImgPath} alt="メインビジュアル" />
            </div>
          </div>
          <div css={[svgTitleWrapper, titleWrapper]}>
            <pageData.titleImg />
          </div>
        </div>
      </header>
      <div css={entryContent}>{children}</div>

      {nextPageData && (
        <footer css={footerElem}>
          <Link href={nextPageData.path} passHref>
            <a>
              <div>
                <img src={nextPageData.mvImgPath} alt={nextPageData.title} />
              </div>
              <div>Next Page</div>
            </a>
          </Link>
        </footer>
      )}
    </div>
  )
}

export default DefaultPageLayout
