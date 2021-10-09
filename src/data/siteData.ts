import {
  WorksPageTitleSVG,
  AboutPageTitleSVG,
  ContactPageTitleSVG,
} from '../components/global/PageTitle.component'
import { dataTypes } from '../types/dataTypes'

const siteData: dataTypes = {
  pages: {
    works: {
      title: 'Works',
      titleImg: WorksPageTitleSVG,
      path: '/works',
      mvImgPath: '/works/mv_works.jpg',
      nextPage: { key: 'about' },
      seo: {
        title: 'Works',
        description: 'This is my works page',
      },
    },
    about: {
      title: 'About',
      titleImg: AboutPageTitleSVG,
      path: '/about',
      mvImgPath: '/about/mv_about.jpg',
      nextPage: { key: 'contact' },
      seo: {
        title: 'About',
        description: 'This is my about page',
      },
    },
    contact: {
      title: 'Contact',
      titleImg: ContactPageTitleSVG,
      path: '/contact',
      mvImgPath: '/contact/mv_contact.jpg',
      nextPage: null,
      seo: {
        title: 'Contact',
        description: 'This is my contact page',
      },
    },
  },
  worksItem: {
    utAim: {
      title: '株式会社 UTエイム Webパンフレット',
      mvImgPath: '/ut-aim/ut_aim_1.png',
      tag: 'Web / Development',
      slug: 'ut-aim',
      nextPage: {
        key: 'osozakuraImageDesign',
      },
      seo: {
        title: '株式会社 UTエイム Webパンフレット',
        description: '株式会社 UTエイム Webパンフレット',
      },
    },
    osozakuraImageDesign: {
      title: '日本ワイン専門店 遅桜 イメージデザイン',
      mvImgPath: '/osozakura-image-design/osozakura_image_design_4.jpg',
      tag: 'Web / Paper / Design',
      slug: 'osozakura-image-design',
      nextPage: {
        key: 'shizukaBox',
      },
      seo: {
        title: '日本ワイン専門店 遅桜 イメージデザイン',
        description: '日本ワイン専門店 遅桜 イメージデザイン',
      },
    },
    shizukaBox: {
      title: 'Shizuka Box パンフレット',
      mvImgPath: '/shizuka-box/shizuka_box_3.png',
      tag: 'Paper / Design',
      slug: 'shizuka-box',
      nextPage: {
        key: 'osozakura',
      },
      seo: {
        title: 'Shizuka Box パンフレット',
        description: 'Shizuka Box パンフレット',
      },
    },
    osozakura: {
      title: '日本ワイン専門店 遅桜',
      mvImgPath: '/osozakura/osozakura_0.jpg',
      tag: 'Web / Design / Development / WordPress',
      slug: 'osozakura',
      nextPage: {
        key: 'happylife',
      },
      seo: {
        title: '日本ワイン専門店 遅桜',
        description: '日本ワイン専門店 遅桜',
      },
    },
    happylife: {
      title: '株式会社 犬の専門店 HappyLife',
      mvImgPath: '/happylife/happylife_2.jpg',
      tag: 'Web / E-Commerce / Design / Development / WordPress',
      slug: 'happy-life',
      nextPage: { key: 'utAim' },
      seo: {
        title: '株式会社 犬の専門店 HappyLife',
        description: '株式会社 犬の専門店 HappyLife',
      },
    },
  },
}

export default siteData
