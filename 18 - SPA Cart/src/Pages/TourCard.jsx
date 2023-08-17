function TourCard({ image, name, price }) {
  return (
    <article className="tourCard" data-price={`$ ${price}`}>
      <img
        src={image}
        alt={name}
        className="tour-img"
        width={300}
        height={300}
      />
      <h2 className="tour-name">{name.split(" ").slice(0, 3).join(" ")}</h2>
      {/* <h4 className="tour-price">$ {price}</h4> */}
      <div className="btns-container">
        <button className="tourBtn" id="details">
          Details
        </button>
        <button className="tourBtn" id="addCart">
          Add to cart
        </button>
      </div>
    </article>
  )
}
export default TourCard
