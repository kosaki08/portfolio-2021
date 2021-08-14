import Link from 'next/link'
import { FC } from 'react'
import tw, { css } from 'twin.macro'
import SiteContainer from '../../containers/SiteContainer/SiteContainer.container'

const Works: FC = () => {
  return (
    <SiteContainer title="Works">
      <p css={[description]}>This is works page.</p>

      <Link href="/works/osozakura" passHref>
        <a>Osozakura</a>
      </Link>
      <Link href="/works/osozakura-ec" passHref>
        <a>Osozakura EC</a>
      </Link>
      <Link href="/works/happy-life" passHref>
        <a>HappyLife</a>
      </Link>
    </SiteContainer>
  )
}

const description = css`
  ${tw`text-2xl leading-6 text-center mt-6`}
`

export default Works
