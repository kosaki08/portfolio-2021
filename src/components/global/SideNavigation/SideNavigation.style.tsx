import tw, { css } from 'twin.macro'

const sideNavRoot = css`
  ${tw`relative z-10`}
`

const sideNavListItem = css`
  ${tw`fixed uppercase`}

  writing-mode: vertical-rl;
  font-family: 'Fjalla One', sans-serif;

  &::before {
    ${tw`content absolute bg-white `}
  }
`

const sideNavWorks = css`
  ${tw`top-2/4 transform -translate-y-1/2 right-10`}

  &::before {
    ${tw`top-2/4 -right-10 transform -translate-y-1/2 h-px w-6`}
  }
`

const sideNavAbout = css`
  ${tw`right-10 bottom-6`}

  &::before {
    ${tw`left-2/4 -top-16 transform -translate-x-1/2 w-px h-8 duration-200 ease-in-out`}
  }

  &:hover::before {
    ${tw`h-10`}
  }
`

const sideNavContact = css`
  ${tw`top-2/4 transform -translate-y-1/2 left-10`}

  &::before {
    ${tw`top-2/4 -left-10 transform -translate-y-1/2 h-px w-6`}
  }
`

export {
  sideNavRoot,
  sideNavListItem,
  sideNavWorks,
  sideNavAbout,
  sideNavContact,
}
