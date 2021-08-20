import tw, { css } from 'twin.macro'

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

export { worksDetailContents }
