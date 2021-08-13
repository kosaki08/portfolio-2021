import { FC } from 'react'

import {
  button,
  line,
  menuOpenButton,
  menuOpenLine,
} from './HamburgerIcon.style'

interface Props {
  handleButtonClick: () => void
  menuOpen: boolean
}

const HamburgeruIcon: FC<Props> = ({ handleButtonClick, menuOpen }) => {
  return (
    <button
      css={[button, menuOpen && menuOpenButton]}
      onClick={handleButtonClick}
    >
      <span css={[line, menuOpen && menuOpenLine]} />
      <span css={[line, menuOpen && menuOpenLine]} />
      <span css={[line, menuOpen && menuOpenLine]} />
    </button>
  )
}

export default HamburgeruIcon
