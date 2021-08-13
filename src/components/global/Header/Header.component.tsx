import { FC, useState } from 'react'

import SiteTitle from './SiteTitle.component'
import GlobalMenu from '../GlobalMenu/GlobalMenu.component'
import HamburgeruIcon from '../HamburgerIcon/HamburgerIcon.component'

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleButtonClick = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header>
      <SiteTitle />
      <GlobalMenu handleButtonClick={handleButtonClick} menuOpen={menuOpen} />
      <HamburgeruIcon
        handleButtonClick={handleButtonClick}
        menuOpen={menuOpen}
      />
    </header>
  )
}

export default Header
