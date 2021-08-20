import { atom } from 'jotai'
import { initialImageState } from '../utils/initialStates'
import type { HomeStateType } from '../types/HomeStateType'

const HomeStateAtom = atom<HomeStateType>({
  mvImg: initialImageState,
})

export { HomeStateAtom }
