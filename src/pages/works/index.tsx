import Link from 'next/link'
import { FC } from 'react'

import SiteContainer from '../../containers/SiteContainer/SiteContainer.container'
import DefaultPageLayout from '../../components/layouts/DefaultPage/DefaultPage.layout'
import {
  listItem,
  imageWrapper,
  description,
} from '../../components/works/WorksPage.style'

const data = [
  {
    title: '株式会社 UTエイム Webパンフレット',
    href: '/works/ut-aim',
    thumbPath: '/ut-aim/ut_aim_1.png',
    tag: 'Web / Development',
  },
  {
    title: '日本ワイン専門店 遅桜 イメージデザイン',
    href: '/works/osozakura-image-design',
    thumbPath: '/osozakura-image-design/osozakura_image_design_1.jpg',
    tag: 'Web / Paper / Design',
  },
  {
    title: '株式会社 犬の専門店 HappyLife',
    href: '/works/happy-life',
    thumbPath: '/happylife/happylife_1.png',
    tag: 'Web / E-Commerce / Design / Development / WordPress',
  },
  {
    title: '日本ワイン専門店 遅桜',
    href: '/works/osozakura',
    thumbPath: '/osozakura/osozakura_1.png',
    tag: 'Web / Design / Development / WordPress',
  },
]

const Works: FC = () => {
  return (
    <SiteContainer title="Works">
      <DefaultPageLayout pageKey="works">
        <ul>
          {data.map((item) => (
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
