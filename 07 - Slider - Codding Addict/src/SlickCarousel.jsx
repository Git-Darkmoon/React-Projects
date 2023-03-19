import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import { FaQuoteRight } from "react-icons/fa"
import data from "./data"
import Slider from "react-slick"

function SlickCarousel() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  }

  return (
    <section className="slick-container">
      <Slider {...settings}>
        {data.map((person) => {
          const { id, image, name, title, quote } = person
          return (
            <article key={id}>
              <img className="person-img" src={image} alt={name} />
              <h3 className="name">{name}</h3>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          )
        })}
      </Slider>
    </section>
  )
}

export default SlickCarousel
