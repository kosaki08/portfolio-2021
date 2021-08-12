import { FC } from 'react'
import Link from 'next/link'

import useWindowSize from '../../../hooks/useWindowSize.hook'
import {
  sideNavListItem,
  sideNavWorks,
  sideNavAbout,
  sideNavContact,
} from './SideNav.style'
import settings from '../../../settings'

const links = [
  { href: '/works', label: 'Works', css: sideNavWorks },
  { href: '/about', label: 'About', css: sideNavAbout },
  { href: '/contact', label: 'Contact', css: sideNavContact },
]

const SideNav: FC = () => {
  const { windowSize } = useWindowSize()

  if (windowSize.windowWidth < settings.sizes.tablet) {
    return null
  }

  return (
    <aside>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.href} css={[sideNavListItem, link.css]}>
              <Link passHref href={link.href}>
                <a>{link.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default SideNav
