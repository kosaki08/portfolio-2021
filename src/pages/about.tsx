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
            ウェブサイトの制作は、有名企業のサイト制作からQ＆Aサイト、通販サイト、会員制サイト、素材ダウンロードサイトなど幅広く制作してきました。
            <br />
            どのような案件でも、見やすく分かりやすい、ユーザーフレンドリーなサイト制作を心がけています。
            <br />※
            当サイトはNext.js（React.js）で制作しています。ReactやWordPress、HTMLサイト等の制作についてもおまかせ下さい。
          </p>
          <h2>SEO対策</h2>
          <p>
            SEO関連では特に、新鮮で信頼性のある情報の入手に力を入れており、担当させていただく案件には効果的と思えるSEO対策を実施しています。以前SEO対策を担当したウェブサイトでは、競合性が高いキーワードで、広告を使わずに検索結果6位から1位にすることができました。
          </p>
          <h2>デザイン</h2>
          <p>
            現在デザイン関連のお仕事では、主にウェブサイトの設計やデザインを請け負っています。ウェブ以外の媒体では、地方公共団体が外国人向けに配布する多言語パンフレットや製品紹介のリーフレット、食品のパッケージデザインなど、幅広く行ってきました。
          </p>
          <h2>サイト運営</h2>
          <p>
            50〜100万PVほどのメディアサイトや企業SNSの立ち上げ経験がありますので、運用を見据えた制作やコンサルティングが可能です。お客様にはこれまでの経験から得られたノウハウなどもお伝えしています。
          </p>
          <h2>ディープラーニング</h2>
          <p>
            2017年にはUdacity Deep Learning Nano Degreeを修了しました。
            <br />
            修了時の試験ではディープラーニングによる回帰分析（需要予測）や画像のラベル付け（分類）、フランス語から英語への翻訳、顔画像の生成などを主にTensorFlowで行いました。
            <br />※ 一般社団法人 人工知能学会 個人正会員
            <br />※ 一般社団法人 日本ディープラーニング協会 ジェネラリスト
            <br />※ 一般社団法人 日本ディープラーニング協会 第1回ハッカソン
            チーム・ニューラルポケットとして GPU EATER賞 受賞
          </p>
          <h2>その他</h2>
          <p>
            React.jsやVue.js、Docker、AWSなどの技術にも積極的に取り組んでいます。
          </p>
        </div>
      </DefaultPageLayout>
    </SiteContainer>
  )
}

export default About
