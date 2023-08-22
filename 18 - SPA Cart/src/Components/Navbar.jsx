import { NavLink } from "react-router-dom"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useGlobalContext } from "../context"
import airplane_img from "../assets/airplane_img.webp"

function Navbar() {
  const { cartItems, showItems, toggleShowCart, setCartItems } =
    useGlobalContext()

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h1>iTours</h1>
        </div>
        <ul className="linksList">
          <li>
            <NavLink to={"/"} className={"links"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"} className={"links"}>
              About
            </NavLink>
          </li>
          <li className="icon-container" data-items={cartItems.length}>
            <AiOutlineShoppingCart
              className="shopping-icon"
              onClick={toggleShowCart}
            />
          </li>
        </ul>
      </nav>
      <section className={`cart-container ${showItems && "showCart"}`}>
        <div className="cart-items">
          {cartItems.length === 0 && <h1>Empty Cart</h1>}
          {cartItems.map((eachItem) => {
            const { id, name, price } = eachItem

            return (
              <article className="cart-card" key={id}>
                <div className="left-info">
                  <img src={airplane_img} alt={name} />
                  <h1>{name.split(" ").slice(2, 3).join(" ")} Tour</h1>
                </div>
                <h4>${price}</h4>
              </article>
            )
          })}
        </div>
        <button className="btn clearBtn" onClick={() => setCartItems([])}>
          clear cart
        </button>
      </section>
    </>
  )
}
export default Navbar
