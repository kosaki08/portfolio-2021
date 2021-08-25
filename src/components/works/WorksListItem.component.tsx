import Link from 'next/link'
import { FC, memo, useEffect } from 'react'
import { useAtom } from 'jotai'
import useMeasure from 'react-use-measure'

import { WorksListStateAtom } from '../../atoms/WorksListStateAtom'
import { worksItemType } from '../../types/dataTypes'
import {
  imageWrapper,
  description,
} from '../../components/works/WorksPage.style'

interface Props {
  item: {
    title: string
    href: string
    thumbPath: string
    tag: string
    itemKey: worksItemType
  }
}

const WorksListItem: FC<Props> = ({ item }) => {
  const [ref, bounds] = useMeasure()
  const [, setWorksList] = useAtom(WorksListStateAtom)

  useEffect(() => {
    setWorksList((others) => ({
      ...others,
      [item.itemKey]: { ...others[item.itemKey], bounds },
    }))
  }, [bounds, item, setWorksList])

  const handleMouseEnter = () => {
    setWorksList((others) => ({
      ...others,
      [item.itemKey]: { ...others[item.itemKey], isHover: true },
    }))
  }

  const handleMouseLeave = () => {
    setWorksList((others) => ({
      ...others,
      [item.itemKey]: { ...others[item.itemKey], isHover: false },
    }))
  }

  return (
    <li className="pb-16">
      <Link href={item.href} passHref>
        <a onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div css={imageWrapper}>
            <img src={item.thumbPath} alt={item.title} ref={ref} />
          </div>
          <h2 className="pb-1 text-sm md:text-base">{item.title}</h2>
          <p css={description}>{item.tag}</p>
        </a>
      </Link>
    </li>
  )
}

export default memo(WorksListItem)
