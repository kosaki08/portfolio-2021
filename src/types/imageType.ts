interface BoundsType {
  top: number
  left: number
  right: number
  bottom: number
  width: number
  height: number
  x: number
  y: number
}

interface DefaultImageType {
  src: string
  bounds: BoundsType
  isHover: boolean
}

export type { DefaultImageType }
