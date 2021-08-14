import { FC } from 'react'

import SiteContainer from '../containers/SiteContainer/SiteContainer.container'
import DefaultPageLayout from '../components/layouts/DefaultPage/DefaultPage.layout'
import { detailPageDefaultText } from '../styles/detailPageStyles'

const Contact: FC = () => {
  return (
    <SiteContainer title="Contact">
      <DefaultPageLayout pageKey="contact">
        <div css={detailPageDefaultText}>
          <p>
            お仕事のご依頼やご質問等ついては、以下のメールアドレスまでご連絡ください。
            <br />
            通常3営業日以内に返信しております。
            <br />
          </p>
          <p>claudioropez.k@gmail.com</p>
        </div>
      </DefaultPageLayout>
    </SiteContainer>
  )
}

export default Contact
