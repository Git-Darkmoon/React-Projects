import illustration from "../assets/portalPic.webp"

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h2 className="hero-title">Rick & Morty API</h2>
        <h3 className="hero-body">
          Find your favorites rick and morty characters. Each time you
          visit/refresh the page you will find different characters.
        </h3>
      </div>
      <div className="hero-right">
        <img
          src={illustration}
          alt="Rick and Morty coming from a green portal."
        />
      </div>
    </section>
  )
}

export default Hero
