import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { mvWrapper } from '../../../styles/mvStyles'
import {
  titleWrapper,
  header,
  defaultPageMVInner,
  entryContent,
} from './DefaultPage.style'
import { nextPageItem } from '../../../styles/nextPageItem'
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
      <header css={header}>
        <div className="relative">
          <div css={mvWrapper}>
            <div css={defaultPageMVInner}>
              <Image
                src={pageData.mvImgPath}
                alt="メインビジュアル"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div css={[svgTitleWrapper, titleWrapper]}>
            <pageData.titleImg />
          </div>
        </div>
      </header>
      <div css={entryContent}>{children}</div>

      {nextPageData && (
        <footer css={nextPageItem}>
          <Link href={nextPageData.path} passHref>
            <a>
              <Image
                src={nextPageData.mvImgPath}
                alt={nextPageData.title}
                layout="fill"
                objectFit="cover"
              />
              <strong>Next Page</strong>
            </a>
          </Link>
        </footer>
      )}
    </div>
  )
}

export default DefaultPageLayout
