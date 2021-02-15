import Head from 'next/head'
import CardS from 'modules/card_small'
import LandingCss from 'styles/Landing.module.css'

type Card = {
  title: string,
  text: string,
  image_path: string,
};
type Cards = Array<Card>;
let card: Cards = [];
Array(3).fill().map(() => {
  card.push({
    title: "test title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image_path: "images/rachit-tank-2cFZ_FB08UM-unsplash.jpg"
  });
});

export default function Landing() {
  const h_image_path = 'images/dark-1869803_640_mod.png';
  const h_image_path_2 = 'images/catherine-avak-H3Hy89g-L90-unsplash.jpg';
  const h_image_path_3 = 'images/rachit-tank-2cFZ_FB08UM-unsplash.jpg';
  const icon_path_1 = 'images/iconfinder_document_file_paper_page-04_2850857.svg';
  const icon_path_2 = 'images/tyler-nix-PQeoQdkU9jQ-unsplash.jpg';

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={LandingCss.bg_base}>
        <section>
          <div className="container">
            <div className="d-flex justify-content-end">
              <h1 className={LandingCss.mincho.concat(" position-absolute p-5 text-light")}>
                目に見える価値以上を<br/>
                <br/>
                もたらしてくれる
              </h1>
            </div>
          </div>
          <img className="w-100" src={h_image_path} alt="header"></img>
        </section>

        <section>
          <div className="container">
            <div className="d-flex justify-content-start">
              <h1 className={LandingCss.mincho.concat(" position-absolute p-5")}>
              　「一生モノの時計に <br/>
                <br/>
                　　ようやく出会えました。」 <br/>
                <br/>
                　　(40代 経営者)
              </h1>
            </div>
          </div>
          <img className="w-100" src={h_image_path_2} alt="header"></img>
        </section>

        <section className={LandingCss.bg_galaxy}>
          <div className="container py-3">
            <h3 className="text-center text-light text-size-lg"> 最上位モデル Ocean 5500 </h3>
          </div>
        </section>

        <section className="my-3">
          <div className="container d-flex py-3 justify-content-center">
            <img className="w-75" src={h_image_path_3} alt="header"></img>
          </div>
        </section>

        <section>
            <h3 className="row justify-content-center py-3">
              <a href="#inquiry" className={LandingCss.btn_inquiry.concat(" d-block col-6 rounded py-3 text-center text-light font-weight-bold")}>
                  資料請求はこちらから
              </a>
            </h3>
        </section>

        <section className={LandingCss.bg_galaxy}>
          <div className="container py-3">
            <h3 className="text-center text-light text-size-lg"> 選ばれ続ける3つの理由 </h3>
          </div>
        </section>

        <section className="my-3">
          <div className="container w-50 p-3 rounded bg-light">
            <div className="row justify-content-start">
              <div className="col-md-4 col-12 p-3">
                <img className="w-100" src={icon_path_1} alt="header"></img>
                <p className="text-center"> 高精度なギミック </p>
              </div>
              <div className="col-md-4 col-12 p-3">
                <img className="w-100" src={icon_path_1} alt="header"></img>
                <p className="text-center"> 高いデザイン性 </p>
              </div>
              <div className="col-md-4 col-12 p-3">
                <img className="w-100" src={icon_path_1} alt="header"></img>
                <p className="text-center"> 資産としての価値 </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-4">
          <div className="container w-50 p-3 rounded bg-light">
            <div className="row justify-content-start my-5">
              <div className="col-4 ">
                <img className="w-100 img-thumbnail" src={icon_path_2} alt="header"></img>
                <h4 className={LandingCss.mincho.concat(" text-center")}> デザイナー <br/> John Smith </h4>
              </div>
              <div className="col-4 ">
                <h4 className="my-3"> 真似のできないものを創り出す </h4>
                <p className={LandingCss.mincho}>
                  制作にまつわるストーリーを伝えることで顧客に訴求します。ああああああああああああああああああああああああああああああ。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="my-3">
          <div className={LandingCss.bg_galaxy.concat(" bg-dark container py-3 text-light")}>
            <h3 className="text-center text-light text-size-lg"> 多数のメディアで紹介されました </h3>
          </div>
        </section>

        <section className="">
          <div className="container">
            <div className="row justify-content-start">
              {card.map((obj) => {
                return (
                  <div className="col-md-4 col-12 p-3">
                    <CardS
                      title={obj.title}
                      text={obj.text}
                      image_path={obj.image_path}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <hr className="my-5"/>

        <section>
          <div className="container py-3 d-flex justify-content-center">
            <div className="row w-50">
              <h2> お申込み </h2>
              <table className="table table-bordered">
                <tr>
                  <td className="p-3 bg-dark text-light align-middle text-center">
                    氏名
                  </td>
                  <td>
                    <input className="d-inline-block form-control col-6" type="text"/>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 bg-dark text-light align-middle text-center">
                    住所
                  </td>
                  <td>
                    <input className="d-inline-block form-control col-6" type="text"/>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </section>

        <section id="inquiry">
            <h3 className="row justify-content-center py-3">
              <a href="#" className={LandingCss.btn_inquiry.concat(" d-block col-6 rounded py-3 text-center text-light font-weight-bold")}>
                  資料請求
              </a>
            </h3>
        </section>

      </main>

      <footer className="">
      </footer>
    </div>
  )
}
