import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { mvWrapper, mvInner } from '../../../styles/mvStyles'
import { titleWrapper, entryContent, footerElem } from './DefaultPage.style'
import { pageWrapper } from '../../../styles/wrapperStyles'
import data from '../../../data'
import type { pageTypes } from '../../../types/dataTypes'

type Props = {
  children: React.ReactNode
  pageKey: pageTypes
}

const DefaultPageLayout: FC<Props> = ({ children, pageKey }) => {
  const { pages } = data
  const pageData = pages[pageKey]

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
          <div css={titleWrapper}>
            <Image src={pageData.titleImg} alt={pageData.title} />
          </div>
        </div>
      </header>
      <div css={entryContent}>{children}</div>

      {pageData.nextPage && (
        <footer css={footerElem}>
          Next Page:
          <Link href={pageData.nextPage.path} passHref>
            <a>{pageData.nextPage.label}</a>
          </Link>
        </footer>
      )}
    </div>
  )
}

export default DefaultPageLayout
