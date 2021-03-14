import Head from 'next/head'
import CardS from 'modules/card_small'
import HeaderG from 'modules/header_g'
import LandingCss from 'styles/Landing.module.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

type Card = {
  title: string,
  text: string,
  image_path: string,
};
type Page = {
  src: string,
  alt: string|undefined,
  label: string|undefined,
  description: string|undefined,
};

let cards: Array<Card> = [];
Array(3).fill().map(() => {
  cards.push({
    title: "test title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image_path: "images/rachit-tank-2cFZ_FB08UM-unsplash.jpg"
  });
});
let pages: Array<Page> = [];
Array(3).fill().map(() => {
  pages.push({
    src: "images/rachit-tank-2cFZ_FB08UM-unsplash.jpg"
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

      <HeaderG />

      <main className={LandingCss.bg_base}>
        <section>
          <Carousel className={LandingCss.carousel_item}>
            <Carousel.Item>
              <img className="w-100" src={h_image_path_2} alt="header"></img>
              <Carousel.Caption>
                <div className={LandingCss.carousel_caption}>
                  <div className="btn btn-info">info</div>
                  <div className="btn btn-info">info</div>
                  <p> description </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>

      </main>
    </div>
  )
}
