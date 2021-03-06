import { FC } from 'react'

import SiteContainer from '../containers/SiteContainer/SiteContainer.container'
import DefaultPageLayout from '../components/layouts/DefaultPage/DefaultPage.layout'
import { detailPageDefaultText } from '../styles/detailPageStyles'

const About: FC = () => {
  return (
    <SiteContainer title="About Me">
      <DefaultPageLayout pageKey="about">
        <div css={detailPageDefaultText}>
          <h2>ウェブ制作</h2>
          <p>
            これまでウェブサイトの制作では、有名企業のサイト制作からQ＆Aサイト、通販サイト、会員制サイト、素材ダウンロードサイトなど幅広く制作してきました。
            どのような案件でも、見やすく分かりやすい、ユーザーフレンドリーなサイト制作を心がけています。
            <br />※
            当サイトはNext.js（React.js）で制作しています。Vue.jsやWordPress、HTMLサイトの制作についてもおまかせ下さい。
          </p>
          <h2>SEO対策</h2>
          <p>
            SEO関連では、新鮮で信頼性のある情報の入手に力を入れています。以前SEO対策を担当したウェブサイトでは、競合性が高いキーワードで、広告を使わずに検索結果6位から1位にすることができました。
          </p>
          <h2>デザイン</h2>
          <p>
            現在デザイン関連のお仕事では、主にウェブサイトの設計やデザインを請け負っています。ウェブ以外の媒体では、地方公共団体が外国人向けに配布する多言語パンフレットや製品紹介のリーフレット、食品のパッケージデザインなど、幅広く行ってきました。
          </p>
          <h2>サイト運営</h2>
          <p>
            これまで個人プロジェクトとして50〜100万PVほどのメディアサイトなど様々なサイトの立ち上げなどを行ってきましたので、運用を見据えたサイト制作やサポートが可能です。
          </p>
          <h2>ディープラーニング</h2>
          <p>
            <li>2017年 Udacity Deep Learning NanoDegree 取得</li>
            <li>2018年～ 一般社団法人 人工知能学会 個人正会員</li>
            <li>
              2019年 一般社団法人 日本ディープラーニング協会 ジェネラリスト
            </li>
            <li>
              2019年 一般社団法人 日本ディープラーニング協会 第1回ハッカソン
              チーム・ニューラルポケットとして GPU EATER賞 受賞
            </li>
          </p>
        </div>
      </DefaultPageLayout>
    </SiteContainer>
  )
}

export default About
