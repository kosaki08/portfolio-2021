import Link from 'next/link'
import { FC } from 'react'

import SiteContainer from '../../containers/SiteContainer/SiteContainer.container'
import DefaultPageLayout from '../../components/layouts/DefaultPage/DefaultPage.layout'
import {
  listItem,
  imageWrapper,
  description,
} from '../../components/works/WorksPage.style'
import { worksListData } from '../../data/worksListData'

const Works: FC = () => {
  return (
    <SiteContainer title="Works">
      <DefaultPageLayout pageKey="works">
        <ul>
          {worksListData.map((item) => (
            <li key={item.href} css={listItem}>
              <Link href={item.href} passHref>
                <a>
                  <div css={imageWrapper}>
                    <img src={item.thumbPath} alt={item.title} />
                  </div>
                  <h2 className="pb-1 text-sm md:text-base">{item.title}</h2>
                  <p css={description}>{item.tag}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </DefaultPageLayout>
    </SiteContainer>
  )
}

export default Works
