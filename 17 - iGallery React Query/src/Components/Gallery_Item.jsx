import { useGlobalContext } from "../context"

function Gallery_Item(props) {
  const { userPrompt } = useGlobalContext()

  const { urls, description, alt_description } = props

  return (
    <article>
      <img src={urls?.regular} alt={alt_description} />
      <h3 className="card-title">
        {description?.slice(0, 10) ?? `Some ${userPrompt}`}
      </h3>
      <h5 className="card-subtitle">
        {alt_description?.slice(0, 50) ??
          `Just a pretty pic for ${userPrompt}  `}
      </h5>
    </article>
  )
}

export default Gallery_Item
