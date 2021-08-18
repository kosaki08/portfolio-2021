import { atom } from 'jotai'
import type { HomeStateType } from '../types/HomeStateType'

const HomeStateAtom = atom<HomeStateType>({
  mvImg: {
    src: '',
    bounds: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: 0,
      height: 0,
      x: 0,
      y: 0,
    },
    isHover: false,
  },
})

export { HomeStateAtom }
