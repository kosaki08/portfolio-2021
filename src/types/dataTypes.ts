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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  titleImg: any
  mvImgPath: string
  nextPage: {
    path: string
    label: string
  } | null
  seo: {
    title: string
    description: string
  }
}

export interface worksPageDataTypes {
  title: string
  mvImgPath: string
  tag: string
  nextPage: {
    path: string
    label: string
  }
  seo: {
    title: string
    description: string
  }
}
