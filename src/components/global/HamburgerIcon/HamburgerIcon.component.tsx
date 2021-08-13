import { FC } from 'react'

import {
  button,
  line,
  menuOpenButton,
  menuOpenLine,
} from './HamburgerIcon.style'

interface Props {
  handleIconClick: () => void
  menuOpen: boolean
}

const HamburgeruIcon: FC<Props> = ({ handleIconClick, menuOpen }) => {
  return (
    <button
      css={[button, menuOpen && menuOpenButton]}
      onClick={handleIconClick}
    >
      <span css={[line, menuOpen && menuOpenLine]} />
      <span css={[line, menuOpen && menuOpenLine]} />
      <span css={[line, menuOpen && menuOpenLine]} />
    </button>
  )
}

export default HamburgeruIcon
