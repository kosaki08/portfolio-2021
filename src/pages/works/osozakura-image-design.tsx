import { FC } from 'react'

import SiteContainer from '../../containers/SiteContainer/SiteContainer.container'
import WorksDetailPageLayout from '../../components/layouts/WorksDetail/WorksDetail.layout'

const OsozakuraEC: FC = () => {
  return (
    <SiteContainer title="Osozakura image design">
      <WorksDetailPageLayout pageKey="osozakuraImageDesign">
        <p>
          日本ワイン専門店『西麻布
          遅桜』様のイメージデザインを制作させていただきました。
          <br />
          『日本各地の銘品の縁（ENISHI）をつなぐ』をコンセプトに、日本生まれの高品質ワインを紹介するお店でしたので、日本のこころを大事にしたい、というお店の考えやワインへのこだわりを、デザインを通して伝えられるよう心がけました。
        </p>
        <img
          src="/osozakura-image-design/osozakura_image_design_2.jpg"
          alt="遅桜イメージデザイン"
        />
        <img
          src="/osozakura-image-design/osozakura_image_design_1.jpg"
          alt="遅桜イメージデザイン"
        />
        <img
          src="/osozakura-image-design/osozakura_image_design_3.jpg"
          alt="遅桜イメージデザイン"
        />
      </WorksDetailPageLayout>
    </SiteContainer>
  )
}

export default OsozakuraEC
