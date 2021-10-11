import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { nextPageItem } from './NextPageItem.style'
import type { nextPageItemDataTypes } from '../../../types/dataTypes'

interface Props {
  data: nextPageItemDataTypes
  label: string
}

const NextPageItem: FC<Props> = ({ data, label }) => {
  return (
    <footer css={nextPageItem}>
      <Link href={data.path} passHref>
        <a>
          <Image
            src={data.mvImgData}
            alt={data.title}
            layout="fill"
            objectFit="cover"
          />
          <strong>{label}</strong>
        </a>
      </Link>
    </footer>
  )
}

export default NextPageItem
