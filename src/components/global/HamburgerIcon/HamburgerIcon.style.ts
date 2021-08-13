import tw, { css } from 'twin.macro'

const hamburgerHeight = 22
const hamburgerWidth = hamburgerHeight * 1.618
const spanHeight = hamburgerHeight / 3

const button = css`
  ${tw`fixed top-8 right-4 z-50 cursor-pointer focus:outline-none md:(top-10 right-16)`}

  height: ${hamburgerHeight}px;
  width: ${hamburgerWidth}px;

  &:hover span {
    ${tw`w-full`}
  }
`

const line = css`
  ${tw`absolute block right-0 h-0.5 bg-white duration-300 ease-in-out origin-center`}

  height: ${spanHeight};

  &:first-of-type {
    ${tw`top-0 w-full`}
  }

  &:nth-of-type(2) {
    ${tw`top-2`}

    width: calc(100% - .5rem);
  }

  &:last-of-type {
    ${tw`top-4 w-4`}

    width: calc(100% - 1rem);
  }
`

const menuOpenButton = css`
  &:hover span:nth-of-type(2) {
    ${tw`w-0`}
  }
`

const menuOpenLine = css`
  ${tw`w-full`}

  &:first-of-type {
    ${tw`top-1/2`}

    transform: rotate(225deg);
  }

  &:nth-of-type(2) {
    ${tw`w-0 hover:w-0`}
  }

  &:last-of-type {
    ${tw`top-1/2 w-full`}

    transform: rotate(135deg);
  }
`

export { button, line, menuOpenButton, menuOpenLine }
