export type pageTypes = 'works' | 'about' | 'contact'

export interface dataTypes {
  pages: {
    works: pageDataTypes
    about: pageDataTypes
    contact: pageDataTypes
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
