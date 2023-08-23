import { Link } from "react-router-dom"
import { useGlobalContext } from "../context"

function TourCard({ id, image, name, price }) {
  const { handleAddToCart } = useGlobalContext()

  return (
    <article className="tourCard" data-price={`$ ${price}`}>
      <img
        src={image}
        alt={name}
        className="tour-img"
        width={300}
        height={300}
        loading="lazy"
      />
      <h2 className="tour-name">{name.split(" ").slice(0, 3).join(" ")}</h2>
      <div className="btns-container">
        <Link
          className="tourBtn"
          id="details"
          to={{
            pathname: `/tourInfo/${id}`,
          }}
        >
          Details
        </Link>
        <button
          className="tourBtn"
          id="addCart"
          onClick={() => {
            handleAddToCart(id)
          }}
        >
          Add to cart
        </button>
      </div>
    </article>
  )
}
export default TourCard
