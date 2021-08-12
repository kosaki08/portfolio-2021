import { FC } from 'react'

import SiteTitle from './SiteTitle.component'
import GlobalMenu from '../GlobalMenu/GlobalMenu.component'

const Header: FC = () => {
  return (
    <header>
      <SiteTitle />
      <GlobalMenu />
    </header>
  )
}

export default Header
