import WorksTitle from '../assets/images/title/txt_works.svg'
import AboutTitle from '../assets/images/title/txt_about.svg'
import ContactTitle from '../assets/images/title/txt_contact.svg'
import { dataTypes } from '../types/dataTypes'

const siteData: dataTypes = {
  pages: {
    works: {
      title: 'Works',
      titleImg: WorksTitle,
      mvImgPath: '/works/mv_works.jpg',
      nextPage: { path: '/about', label: 'About' },
      seo: {
        title: 'Works',
        description: 'This is my works page',
      },
    },
    about: {
      title: 'About',
      titleImg: AboutTitle,
      mvImgPath: '/about/mv_about.jpg',
      nextPage: { path: '/contact', label: 'Contact' },
      seo: {
        title: 'About',
        description: 'This is my about page',
      },
    },
    contact: {
      title: 'Contact',
      titleImg: ContactTitle,
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
      nextPage: {
        path: '/works/osozakura-image-design',
        label: '日本ワイン専門店 遅桜 イメージデザイン',
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
      nextPage: {
        path: '/works/happy-life',
        label: '株式会社 犬の専門店 HappyLife',
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
      nextPage: { path: '/works/osozakura', label: '日本ワイン専門店 遅桜' },
      seo: {
        title: 'Shizuka Box パンフレット',
        description: 'Shizuka Box パンフレット',
      },
    },
    osozakura: {
      title: '日本ワイン専門店 遅桜',
      mvImgPath: '/osozakura/osozakura_0.jpg',
      tag: 'Web / Design / Development / WordPress',
      nextPage: {
        path: '/works/happy-life',
        label: '株式会社 犬の専門店 HappyLife',
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
      nextPage: { path: '/contact', label: 'Contact' },
      seo: {
        title: '株式会社 犬の専門店 HappyLife',
        description: '株式会社 犬の専門店 HappyLife',
      },
    },
  },
}

export default siteData
