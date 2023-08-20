import { Link } from "react-router-dom"
import { toast } from "sonner"

function TourCard({ id, image, name, price }) {
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
          onClick={() => toast("Tour added to cart.")}
        >
          Add to cart
        </button>
      </div>
    </article>
  )
}
export default TourCard
