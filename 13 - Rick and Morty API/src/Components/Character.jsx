import { useGlobalContext } from "./Context"

/* eslint-disable react/prop-types */
function Character(characterDetails) {
  const { image, name, status, species } = characterDetails

  // Destructuring variables coming from globalContext.
  // selectedCharacter is used in ModalDetails.jsx
  const { openModal, setSelectedCharacter } = useGlobalContext()

  return (
    <article className="character-card">
      <picture className="character-avatarContainer">
        <img
          className="character-avatarPic "
          src={image}
          alt={name + ": character"}
          width="300"
          height="300"
          loading="lazy"
        />
      </picture>
      <section className="character-info">
        <h2 className="character-name">{name}</h2>
        <div className="character-state">
          <div
            className={`character-stateIndicator ${
              status === "Alive" && "alive"
            } ${status === "Dead" && "dead"}`}
          ></div>
          <h3 className="character-stateInfo">
            {status} - {species}
          </h3>
        </div>
        <div className="btnContainer">
          {/* The setSelectedCharacter function updates the 
          state with the selected character details,
          while the openModal function triggers the
           display of the modal component. */}
          <button
            className="character-DetailsBtn"
            onClick={() => {
              setSelectedCharacter(characterDetails)
              openModal()
            }}
          >
            Details
          </button>
        </div>
      </section>
    </article>
  )
}

export default Character
