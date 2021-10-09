import {
  WorksPageTitleSVG,
  AboutPageTitleSVG,
  ContactPageTitleSVG,
} from '../components/global/PageTitle.component'
import { dataTypes } from '../types/dataTypes'

import MVWorks from '../assets/images/main-visual/mv_works.jpg'
import MVAbout from '../assets/images/main-visual/mv_about.jpg'
import MVContact from '../assets/images/main-visual/mv_contact.jpg'

import MVHappyLife from '../assets/images/main-visual/happylife_0.jpg'
import MVOsozakura from '../assets/images/main-visual/osozakura_0.jpg'
import MVOsozakuraImageDesign from '../assets/images/main-visual/osozakura_image_design_1.jpg'
import MVShizukaBox from '../assets/images/main-visual/shizuka_box_1.png'
import MVUtAim from '../assets/images/main-visual/ut_aim_1.png'

const siteData: dataTypes = {
  pages: {
    works: {
      title: 'Works',
      titleImg: WorksPageTitleSVG,
      path: '/works',
      mvImgPath: MVWorks,
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
      mvImgPath: MVAbout,
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
      mvImgPath: MVContact,
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
      mvImgPath: MVUtAim,
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
      mvImgPath: MVOsozakuraImageDesign,
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
      mvImgPath: MVShizukaBox,
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
      mvImgPath: MVOsozakura,
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
      mvImgPath: MVHappyLife,
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
