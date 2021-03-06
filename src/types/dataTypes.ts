import { FC } from 'react'

export type pageTypes = 'works' | 'about' | 'contact'
export type worksItemType =
  | 'utAim'
  | 'osozakuraImageDesign'
  | 'shizukaBox'
  | 'osozakura'
  | 'happylife'

export interface dataTypes {
  pages: {
    works: pageDataTypes
    about: pageDataTypes
    contact: pageDataTypes
  }
  worksItem: {
    utAim: worksPageDataTypes
    osozakuraImageDesign: worksPageDataTypes
    shizukaBox: worksPageDataTypes
    osozakura: worksPageDataTypes
    happylife: worksPageDataTypes
  }
}

export interface pageDataTypes {
  title: string
  titleImg: FC
  path: string
  mvImgData: StaticImageData
  nextPage: {
    key: pageTypes
  } | null
  seo: {
    title: string
    description: string
  }
}

export interface worksPageDataTypes {
  title: string
  mvImgData: StaticImageData
  tag: string
  path: string
  nextPage: {
    key: worksItemType
  }
  seo: {
    title: string
    description: string
  }
  num: number
}

export interface nextPageItemDataTypes {
  title: string
  path: string
  mvImgData: StaticImageData
}
