import tw, { css } from 'twin.macro'

import settings from '../../../settings'

const worksDetailHeader = css`
  ${tw`relative max-w-7xl mx-auto`}
  ${tw`pb-20`}

  & > div {
    ${tw`md:(flex)`}
  }

  h1 {
    width: calc(100% - 3.1875rem - 1rem);
  }

  & > span {
    ${tw`absolute text-4xl font-montserrat font-black`}

    right: 1rem;
    bottom: 6rem;
    color: #4a4a4a;

    @media (min-width: ${settings.sizes.md}px) {
      ${tw`text-9xl `}
      bottom: 3rem;
      right: 1.5rem;
    }

    @media (min-width: ${settings.sizes.lg}px) {
      bottom: 6rem;
      right: 7rem;
    }
  }

  .works-detail-mv,
  .works-detail-titles {
    ${tw`md:(w-1/2)`}
  }

  .works-detail-mv {
    ${tw`mb-6 mx-4`}
    ${tw`md:(pb-0)`}

    & > div {
      box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2), 0 3px 30px rgba(0, 0, 0, 0.3),
        0 30px 40px rgba(0, 0, 0, 0.5);
    }
  }

  .works-detail-titles {
    ${tw`px-4`}
    ${tw`md:(flex flex-col justify-center items-start pl-16)`}

    h1 {
      ${tw`md:(mb-4 text-4xl font-bold)`}
    }

    p {
      color: #4a4a4a;
    }
  }
`

const worksDetailContents = css`
  p {
    ${tw`max-w-5xl mb-16 mx-4 text-sm`}
    ${tw`md:(mb-20)`}
    ${tw`lg:(mx-auto)`}

    line-height: 1.75;
  }

  p.img,
  p.img-full {
    ${tw`mb-16`}
    ${tw`md:(mb-36)`}
  }

  p.img {
    ${tw`md:(mx-auto)`}
  }

  p.img-full {
    ${tw`max-w-none mx-0`}

    img {
      ${tw`w-full`}
    }
  }

  img {
    ${tw`mx-auto`}

    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2), 0 3px 30px rgba(0, 0, 0, 0.3),
        0 30px 40px rgba(0, 0, 0, 0.5);
  }
`

export { worksDetailHeader, worksDetailContents }
