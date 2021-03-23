import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import axios from 'axios'
import { parseString } from "xml2js"

type Props = {
  none: 'string'
}

export default function Law ( props:Props ) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          API
        </h1>

        <div>
          <pre className="container d-none"> {JSON.stringify(props.list, null, 4)} </pre>
        </div>

        <h2> {props.law.LawNum} {props.law.LawBody.LawTitle} </h2>
        <h3> 目次 </h3>
        <ul>
          {props.law.LawBody.TOC.TOCChapter.map( tocChapter => {
            return (
              <li>
                <h4>
                  {tocChapter.ChapterTitle}
                  { tocChapter.ArticleRange && tocChapter.ArticleRange }
                </h4>
                <ul>
                  { tocChapter.TOCSection &&
                    tocChapter.TOCSection.map( sec => {
                      return (
                        <li>
                         {sec.SectionTitle}
                         {sec.ArticleRange}
                        </li>
                    )})
                  }
                </ul>
              </li>
            )
          })}
        </ul>

        <h3> TOC </h3>
          <ul>
            {props.law.LawBody.MainProvision.Chapter.map( chapter => {
              return (
                <li>
                  <h4> { chapter.ChapterTitle } </h4>
                  <div>
                    { chapter.Article && chapter.Article.map( article => {
                      return (
                        <div>
                          {article.ArticleTitle} {article.ArticleCaption}
                        </div>
                    )})}
                  </div>
                </li>
            )})}
          </ul>
          <ul>
            <li>
              {props.law.LawBody.SupplProvision.SupplProvision}
            </li>
          </ul>

        <div>
          <pre className="container"> {JSON.stringify(props.law, null, 4)} </pre>
        </div>

        <div>
          <pre className="container d-none"> {JSON.stringify(props.article, null, 4)} </pre>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

type LawData = {
  LawNum: string
  LawBody: LawBody
}
type LawBody = {
  LawTitle: string
  TOC: Toc
}
type Toc = {
  TOCLabel: string
  TOCChapter: Array<TocChapter>
  TOCSupplProvision: string | undefined
}
type TocChapter = {
  ChapterTitle: string
  ArticleRange: string
}
// 章
type Chapter  = {
  ChapterTitle: string
  Section: Array<Section> | undefined
  Article: Array<Article> | undefined
}
// 節
type Section  = {
  SectionTitle: string
  Article: Array<Article>
}
// 条
type Article  = {
  ArticleTitle: string
  ArticleCaption: string | undefined
  Paragraph: Array<Paragraph> | undefined
}
type Paragraph  = {
  ParagraphNum: number
  ParagraphSentence: string
  ParagraphCaption: string | undefined
  Item: Array<Item> | undefined
}
type Item = {
  ItemTitle: string
  ItemSentence: string
}

// e-Gov 法令 API https://elaws.e-gov.go.jp/file/houreiapi_shiyosyo.pdf
const version = '1.0'

// 法令名一覧取得 API
// categories
// 1 全法令
// 2 憲法・法律 法令名一覧取得
// 3 政令・勅令 法令名一覧取得
// 4 府省令・規則 法令名一覧取得
// e.g. https://elaws.e-gov.go.jp/api/1.0/lawlists/4
const category = '2'
const url_list = `https://elaws.e-gov.go.jp/api/${version}/lawlists/${category}`

// 法令取得 API
// lawId: 502AC0000000053, lawNum: 令和二年法律第五十三号
// e.g. https://elaws.e-gov.go.jp/api/1.0/lawdata/502AC0000000053
const lawId_law = '502AC0000000053'
const lawNum_law = '令和二年法律第五十三号'
const url_law = `https://elaws.e-gov.go.jp/api/${version}/lawdata/${lawId_law || lawNum_law}`

// 条文内容取得 API
// e.g. https://elaws.e-gov.go.jp/api/1.0/articles;lawId=502AC0000000053;article=1;paragraph=1;appdxTable=
// alternative xに関する法律
const lawId_article = '502AC0000000053'
const lawNum_article = '令和二年法律第五十三号'
// required x条
const article = '1'
// optional x項
const paragraph = '1'
// optional 別表
const appdxTable = ''
const url_article = `https://elaws.e-gov.go.jp/api/${version}/articles;lawId=${lawId_article};article=${article};paragraph=${paragraph};appdxTable=${appdxTable}`

const api = axios.create({
  'Cache-Control': 'max-age=60*60*24*10',
})
const limit = 3

Law.getInitialProps = async () => {
  const parseOptions = {
    // Watch https://github.com/Leonidas-from-XIV/node-xml2js#options for detail.
    explicitArray: false,
    ignoreAttrs: true,
  }

  const res_list = await api.get(url_list)
  const res_law = await api.get(url_law)
  const res_article = await api.get(url_article)

  let data_list
  let data_law
  let data_article

  parseString(res_list.data, parseOptions, (err, result) => {
    data_list = (result.DataRoot.ApplData).LawNameListInfo.slice(- limit)
  })
  parseString(res_law.data, parseOptions, (err, result) => {
    data_law = (result.DataRoot.ApplData).LawFullText.Law
  })
  parseString(res_article.data, parseOptions, (err, result) => {
    data_article = (result.DataRoot.ApplData)
  })
  let typeGuardtest: string
  typeGuardtest = 2

  return {
    list: data_list,
    law: data_law,
    article: data_article,
    typeGuardtest: typeGuardtest,
  }
}

