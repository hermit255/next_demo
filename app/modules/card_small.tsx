type Card = {
  title: string,
  text: string,
  image_path: string,
};

export default function CardSmall(card: Card) {
  return (
    <div className="card w-100 zoom">
      <img className="card-img-top" src={card.image_path} alt="Card image"></img>
      <div className="card-body">
        <h5 className="card-title"> {card.title} </h5>
        <p className="card-text"> {card.text} </p>
        <p className="text-center">
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </p>
      </div>
    </div>
  )
}
