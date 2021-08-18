interface HomeStateType {
  mvImg: {
    src: string
    bounds: {
      top: number
      left: number
      right: number
      bottom: number
      width: number
      height: number
      x: number
      y: number
    }
    isHover: boolean
  }
}

export type { HomeStateType }
