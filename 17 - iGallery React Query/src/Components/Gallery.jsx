import SearchForm from "./SearchForm"
import PortraitsGallery from "./PortraitsGallery"
import SquaresGallery from "./SquaresGallery"

function Gallery() {
  return (
    <section className="gallery-container">
      <SearchForm />

      <div className="gallery-subtitle">
        <h2 className="subtitle-1">Amaze yourself</h2>
        <h4 className="subtitle-2">Our top picks for you</h4>
      </div>

      {/* Portraits section */}
      <PortraitsGallery />

      <div className="gallery-subtitle">
        <h2 className="subtitle-1">More for you</h2>
        <h4 className="subtitle-2">Incredible pictures just for you.</h4>
      </div>

      {/* Squares section */}
      <SquaresGallery />
    </section>
  )
}

export default Gallery
