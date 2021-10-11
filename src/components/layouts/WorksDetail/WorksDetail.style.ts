import tw, { css } from 'twin.macro'

const worksDetailHeader = css`
  ${tw`relative max-w-7xl mx-auto `}
  ${tw`pb-20`}

  & > div {
    ${tw`md:(flex)`}
  }

  & > span {
    ${tw`absolute text-9xl font-montserrat font-black`}

    bottom: 6rem;
    right: 7rem;
    color: #4a4a4a;
  }

  .works-detail-mv,
  .works-detail-titles {
    ${tw`md:(w-1/2)`}
  }

  .works-detail-mv {
    ${tw`md:(mb-10 pb-0)`}

    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2), 0 3px 30px rgba(0, 0, 0, 0.3),
      0 30px 40px rgba(0, 0, 0, 0.5);
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
