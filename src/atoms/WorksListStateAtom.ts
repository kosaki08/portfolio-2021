import { atom } from 'jotai'
import { initialImageState } from '../utils/initialStates'

const WorksListStateAtom = atom({
  mvImg: initialImageState,
})

export { WorksListStateAtom }
