import {
  WorksPageTitleSVG,
  AboutPageTitleSVG,
  ContactPageTitleSVG,
} from '../components/global/PageTitle.component'
import { dataTypes } from '../types/dataTypes'

import MVWorks from '../assets/images/main-visual/mv_works.jpg'
import MVAbout from '../assets/images/main-visual/mv_about.jpg'
import MVContact from '../assets/images/main-visual/mv_contact.jpg'

import MVHappyLife from '../assets/images/main-visual/mv_happylife.jpg'
import MVOsozakura from '../assets/images/main-visual/mv_osozakura.jpg'
import MVOsozakuraImageDesign from '../assets/images/main-visual/mv_osozakura_image_design.jpg'
import MVShizukaBox from '../assets/images/main-visual/mv_shizuka_box.png'
import MVUtAim from '../assets/images/main-visual/mv_ut_aim.png'

const siteData: dataTypes = {
  pages: {
    works: {
      title: 'Works',
      titleImg: WorksPageTitleSVG,
      path: '/works',
      mvImgData: MVWorks,
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
      mvImgData: MVAbout,
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
      mvImgData: MVContact,
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
      mvImgData: MVUtAim,
      tag: 'Web / Development',
      path: '/works/ut-aim',
      nextPage: {
        key: 'osozakuraImageDesign',
      },
      seo: {
        title: '株式会社 UTエイム Webパンフレット',
        description: '株式会社 UTエイム Webパンフレット',
      },
      num: 1,
    },
    osozakuraImageDesign: {
      title: '日本ワイン専門店 遅桜 イメージデザイン',
      mvImgData: MVOsozakuraImageDesign,
      tag: 'Web / Paper / Design',
      path: '/works/osozakura-image-design',
      nextPage: {
        key: 'shizukaBox',
      },
      seo: {
        title: '日本ワイン専門店 遅桜 イメージデザイン',
        description: '日本ワイン専門店 遅桜 イメージデザイン',
      },
      num: 2,
    },
    shizukaBox: {
      title: 'Shizuka Box パンフレット',
      mvImgData: MVShizukaBox,
      tag: 'Paper / Design',
      path: '/works/shizuka-box',
      nextPage: {
        key: 'osozakura',
      },
      seo: {
        title: 'Shizuka Box パンフレット',
        description: 'Shizuka Box パンフレット',
      },
      num: 3,
    },
    osozakura: {
      title: '日本ワイン専門店 遅桜',
      mvImgData: MVOsozakura,
      tag: 'Web / Design / Development / WordPress',
      path: '/works/osozakura',
      nextPage: {
        key: 'happylife',
      },
      seo: {
        title: '日本ワイン専門店 遅桜',
        description: '日本ワイン専門店 遅桜',
      },
      num: 4,
    },
    happylife: {
      title: '株式会社 犬の専門店 HappyLife',
      mvImgData: MVHappyLife,
      tag: 'Web / E-Commerce / Design / Development / WordPress',
      path: '/works/happy-life',
      nextPage: { key: 'utAim' },
      seo: {
        title: '株式会社 犬の専門店 HappyLife',
        description: '株式会社 犬の専門店 HappyLife',
      },
      num: 5,
    },
  },
} as const

export default siteData
