import illustration from "./assets/portalPic.png"

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h2 className="hero-title">Rick & Morty API</h2>
        <h3 className="hero-body">
          Find your favorites rick and morty <br />
          characters.
        </h3>
      </div>
      <div className="hero-right">
        <img src={illustration} alt="" />
      </div>
    </section>
  )
}

export default Hero
