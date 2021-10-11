import React, { FC } from 'react'
import Image from 'next/image'

import { mvWrapper } from '../../../styles/mvStyles'
import {
  titleWrapper,
  header,
  defaultPageMVInner,
  entryContent,
} from './DefaultPage.style'
import NextPageItem from '../../global/NextPageItem/NextPageItem.component'
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
  const nextPageRawData = nextPageKey && pages[nextPageKey]

  if (!pageData) {
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
    <div css={pageWrapper}>
      <header css={header}>
        <div className="relative">
          <div css={mvWrapper}>
            <div css={defaultPageMVInner}>
              <Image
                src={pageData.mvImgData}
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

      {nextPageData && <NextPageItem data={nextPageData} label="Next Page" />}
    </div>
  )
}

export default DefaultPageLayout
