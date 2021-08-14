import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import tw, { css } from 'twin.macro'

import { mvWrapper, mvInner } from '../../../styles/mvStyles'
import { pageWrapper } from '../../../styles/wrapperStyles'
import data from '../../../data'

type Props = {
  children: React.ReactNode
}

const titleWrapper = css`
  ${tw`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
`

const DefaultPageLayout: FC<Props> = ({ children }) => {
  const {
    pages: { works },
  } = data

  return (
    <div css={pageWrapper}>
      <header className="pb-20">
        <div className="relative">
          <div css={mvWrapper}>
            <div css={mvInner}>
              <img src={works.mvImgPath} alt="メインビジュアル" />
            </div>
          </div>
          <div css={titleWrapper}>
            <Image src={works.titleImgPath} alt={works.title} />
          </div>
        </div>
      </header>
      <div>{children}</div>
      <footer>
        Next Page:
        <Link href={works.nextPage.path} passHref>
          <a>{works.nextPage.label}</a>
        </Link>
      </footer>
    </div>
  )
}

export default DefaultPageLayout