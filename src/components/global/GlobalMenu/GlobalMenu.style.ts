import tw, { css } from 'twin.macro'

const nav = css`
  ${tw`fixed top-1/2 flex justify-center items-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen bg-darkGray-main z-40`}
  transition: visibility .2s ease-in-out;
`

const ul = css`
  ${tw`flex flex-col text-center`}
`

const li = css`
  ${tw`my-1`}
`

const linkElem = css`
  ${tw`block py-4 px-4 uppercase`}
`

export { nav, ul, li, linkElem }
