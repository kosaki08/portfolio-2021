import { worksItemType } from '../types/dataTypes'

interface WorksListData {
  itemKey: worksItemType
  title: string
  href: string
  thumbPath: string
  tag: string
}

const worksListData: WorksListData[] = [
  {
    itemKey: 'utAim',
    title: '株式会社 UTエイム Webパンフレット',
    href: '/works/ut-aim',
    thumbPath: '/ut-aim/ut_aim_1.png',
    tag: 'Web / Development',
  },
  {
    itemKey: 'osozakuraImageDesign',
    title: '日本ワイン専門店 遅桜 イメージデザイン',
    href: '/works/osozakura-image-design',
    thumbPath: '/osozakura-image-design/osozakura_image_design_1.jpg',
    tag: 'Web / Paper / Design',
  },
  {
    itemKey: 'shizukaBox',
    title: 'Shizuka Box パンフレット',
    href: '/works/shizuka-box',
    thumbPath: '/shizuka-box/shizuka_box_3.png',
    tag: 'Paper / Design',
  },
  {
    itemKey: 'osozakura',
    title: '日本ワイン専門店 遅桜',
    href: '/works/osozakura',
    thumbPath: '/osozakura/osozakura_1.png',
    tag: 'Web / Design / Development / WordPress',
  },
  {
    itemKey: 'happylife',
    title: '株式会社 犬の専門店 HappyLife',
    href: '/works/happy-life',
    thumbPath: '/happylife/happylife_1.png',
    tag: 'Web / E-Commerce / Design / Development / WordPress',
  },
]

export { worksListData }
