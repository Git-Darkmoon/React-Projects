/* eslint-disable react/prop-types */
import { useGlobalContext } from "./Context"
import { FaTimes } from "react-icons/fa"

function ModalDetails() {
  const { selectedCharacter, isModalOpen, closeModal } = useGlobalContext()
  const { image, name, status, species, gender, origin, location } =
    selectedCharacter

  return (
    <div className={`modal-overlay ${isModalOpen && "show-modal"}`}>
      <article className="modal-container">
        <h2 className="modal-title">{name}</h2>
        <img className="modal-container__img" src={image} alt={name} />
        <p className="modal-container__info">
          <span>Name:</span> {name} <br />
          <span>Status:</span> {status} <br />
          <span>Species:</span> {species} <br />
          <span>Gender:</span> {gender} <br />
          <span>Origin:</span> {origin?.name} <br />
          <span>Location:</span> {location?.name} <br />
        </p>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </article>
    </div>
  )
}

export default ModalDetails
