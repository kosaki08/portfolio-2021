import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import useWindowSize from '../../../hooks/useWindowSize.hook'
import {
  sideNavRoot,
  sideNavListItem,
  sideNavWorks,
  sideNavAbout,
  sideNavContact,
} from './SideNavigation.style'
import settings from '../../../settings'

const links = [
  { href: '/works', label: 'Works', css: sideNavWorks },
  { href: '/about', label: 'About', css: sideNavAbout },
  { href: '/contact', label: 'Contact', css: sideNavContact },
]

const SideNav: FC = () => {
  const { pathname } = useRouter()
  const { windowSize } = useWindowSize()

  if (
    windowSize.windowWidth < settings.sizes.md ||
    windowSize.windowHeight < settings.threshold.height
  ) {
    return null
  }

  return (
    <aside css={sideNavRoot}>
      <nav>
        <ul>
          {links
            .filter((link) => link.href !== pathname)
            .map((link) => (
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
