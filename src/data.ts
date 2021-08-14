import WorksTitle from './assets/images/title/txt_works.svg'
import AboutTitle from './assets/images/title/txt_about.svg'
import ContactTitle from './assets/images/title/txt_contact.svg'
import { dataTypes } from './types/dataTypes'

const data: dataTypes = {
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
}

export default data
