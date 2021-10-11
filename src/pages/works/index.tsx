import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import SiteContainer from '../../containers/SiteContainer/SiteContainer.container'
import DefaultPageLayout from '../../components/layouts/DefaultPage/DefaultPage.layout'
import {
  listItem,
  imageWrapper,
  description,
} from '../../components/works/WorksPage.style'
import siteData from '../../data/siteData'

const Works: FC = () => {
  const { worksItem } = siteData

  return (
    <SiteContainer title="Works">
      <DefaultPageLayout pageKey="works">
        <ul>
          {Object.values(worksItem).map((item) => (
            <li key={item.title} css={listItem}>
              <Link href={item.path} passHref>
                <a>
                  <div css={imageWrapper}>
                    <Image src={item.mvImgData} alt={item.title} />
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
