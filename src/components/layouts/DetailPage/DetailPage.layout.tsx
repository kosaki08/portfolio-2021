import { FC } from 'react'

type Props = {
  children: React.ReactNode
}

const DetailPageLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  )
}

export default DetailPageLayout
