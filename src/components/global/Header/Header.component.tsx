import { FC, useState } from 'react'

import SiteTitle from './SiteTitle.component'
import GlobalMenu from '../GlobalMenu/GlobalMenu.component'
import HamburgeruIcon from '../HamburgerIcon/HamburgerIcon.component'

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <SiteTitle />
      <GlobalMenu menuOpen={menuOpen} />
      <HamburgeruIcon
        handleIconClick={() => setMenuOpen(!menuOpen)}
        menuOpen={menuOpen}
      />
    </header>
  )
}

export default Header
