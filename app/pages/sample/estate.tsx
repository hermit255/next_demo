import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import axios from 'axios'

export default function Estate ( props ) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          土地総合情報システムAPI
        </h1>

        <pre> {JSON.stringify(props.estate, null, 4)} </pre>

        <table>
          <thead> <tr>
            {Array.from({length: columns.length}).map((v, k) => {
              return (
                <td> {(props.columns[k]).jp} </td>
              )
            })}
          </tr> </thead>
          <tbody>
            {props.estate.map(item => {
              return(
                <tr>
                  {Array.from({length: columns.length}).map((v, k) => {
                    return (
                      <td> {item[(props.columns[k]).name]} </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>

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

// 土地総合情報システム https://www.land.mlit.go.jp/webland/api.html
const url = 'https://www.land.mlit.go.jp/webland/api/TradeListSearch?from=20151&to=20152&city=13101'
const api = axios.create({
  'Cache-Control': 'max-age=60*60*24*10',
})
const limit = 10
const columns = [
  {name: 'Type' , jp: '取引の種類'},
  {name: 'Region', jp: '地区'},
  {name: 'MunicipalityCode', jp: '市区町村コード'},
  {name: 'Prefecture', jp: '都道府県名'},
  {name: 'Municipality', jp: '市区町村名'},
  {name: 'DistrictName', jp: '地区名'},
  {name: 'TradePrice', jp: '取引価格（総額）'},
  {name: 'PricePerUnit', jp: '坪単価'},
  {name: 'FloorPlan', jp: '間取り'},
  {name: 'Area', jp: '面積（平方メートル）'},
  {name: 'UnitPrice', jp: '取引価格（平方メートル単価）'},
  {name: 'LandShape', jp: '土地の形状'},
  {name: 'Frontage', jp: '間口'},
  {name: 'TotalFloorArea', jp: '延床面積(平方メートル)'},
  {name: 'BuildingYear', jp: '建築年'},
  {name: 'Structure', jp: '建物の構造'},
  {name: 'Use', jp: '用途'},
  {name: 'Purpose', jp: '今後の利用目的'},
  {name: 'Direction', jp: '前面道路：方位'},
  {name: 'Classification', jp: '前面道路：種類'},
  {name: 'Breadth', jp: '前面道路：幅員（ｍ）'},
  {name: 'CityPlanning', jp: '都市計画'},
  {name: 'CoverageRatio', jp: '建ぺい率（％）'},
  {name: 'FloorAreaRatio', jp: '容積率（％）'},
  {name: 'Period', jp: '取引時点'},
  {name: 'Renovation', jp: '改装'},
  {name: 'Remarks', jp: '取引の事情等'},
]

Estate.getInitialProps = async () => {
  const res = await api.get(url)
  const data = await res.data.data.slice(- limit)
  return {
    estate: data,
    columns: columns,
  }
}
