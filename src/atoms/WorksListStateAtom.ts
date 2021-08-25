import { atom } from 'jotai'

import { initialBounds } from '../utils/initialStates'
import { WorksStateType } from '../types/WorksStateType'

const WorksListStateAtom = atom<WorksStateType>({
  utAim: { src: '/ut-aim/ut_aim_1.png', isHover: false, bounds: initialBounds },
  osozakuraImageDesign: {
    src: '/osozakura-image-design/osozakura_image_design_1.jpg',
    isHover: false,
    bounds: initialBounds,
  },
  shizukaBox: {
    src: '/shizuka-box/shizuka_box_3.png',
    isHover: false,
    bounds: initialBounds,
  },
  osozakura: {
    src: '/osozakura/osozakura_1.png',
    isHover: false,
    bounds: initialBounds,
  },
  happylife: {
    src: '/happylife/happylife_1.png',
    isHover: false,
    bounds: initialBounds,
  },
})

export { WorksListStateAtom }
