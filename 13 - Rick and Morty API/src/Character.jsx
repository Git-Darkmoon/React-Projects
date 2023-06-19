// eslint-disable-next-line react/prop-types
function Character({ image, name, status, species }) {
  return (
    <article className="character-card">
      <section className="character-avatarContainer">
        <img className="character-avatarPic" src={image} alt="" />
      </section>
      <section className="character-info">
        <h2 className="character-name">{name}</h2>
        <div className="character-state">
          <div
            className={`character-stateIndicator ${
              status === "Alive" && "alive"
            } ${status === "Dead" && "dead"}`}
          ></div>
          <h4 className="character-stateInfo">
            {status} - {species}
          </h4>
        </div>
        <div className="btnContainer">
          <button className="characterDetailsBtn">Details</button>
        </div>
      </section>
    </article>
    // <div className="q"></div>
  )
}

export default Character
