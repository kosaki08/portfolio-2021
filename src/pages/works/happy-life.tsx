import { FC } from 'react'

import SiteContainer from '../../containers/SiteContainer/SiteContainer.container'
import WorksDetailPageLayout from '../../components/layouts/WorksDetail/WorksDetail.layout'

const HappyLife: FC = () => {
  return (
    <SiteContainer title="HappyLife">
      <WorksDetailPageLayout pageKey="happylife">
        <p>
          『犬の専門店
          HappyLife』様の通販機能付きウェブサイトをWordPressで制作させていただきました。
          <br />
          人も犬も楽しく一緒に暮らすお手伝いをしたいというお店の考えを、デザインに反映できるよう心がけました。
          <br />
          店舗には毎週のように新しい仔犬がやってくるため、仔犬紹介のための更新作業を少しでも減らしたいというご要望をいただいていたため、店舗スタッフの方でも簡単に更新できるよう運用のしやすさにも力を入れ、リニューアル前と比べて、更新にかかる作業時間をおよそ半分程度に短縮できた、リニューアルして良かったとの声をいただいております。
        </p>
        <p className="img">
          <img src="/happylife/happylife_1.png" alt="HappyLife制作例" />
        </p>
        <p className="img">
          <img src="/happylife/happylife_8.png" alt="HappyLife制作例" />
        </p>
        <p className="img">
          <img src="/happylife/happylife_2.png" alt="HappyLife制作例" />
        </p>
        <p className="img-full">
          <img src="/happylife/happylife_6.jpg" alt="HappyLife制作例" />
        </p>
        <p className="img">
          <img src="/happylife/happylife_5.png" alt="HappyLife制作例" />
        </p>
        <p className="img">
          <img src="/happylife/happylife_7.jpg" alt="HappyLife制作例" />
        </p>
        <p className="img">
          <img src="/happylife/happylife_3.png" alt="HappyLife制作例" />
        </p>
      </WorksDetailPageLayout>
    </SiteContainer>
  )
}

export default HappyLife
