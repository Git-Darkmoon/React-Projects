/* eslint-disable react/prop-types */
function SingleColor({ color, index }) {
  const { hex, weight } = color

  const iconClass = "copy-icon fa-solid fa-copy"

  return (
    <article className="color">
      <div className="color-visualize" style={{ backgroundColor: `#${hex}` }}>
        <i
          className={
            index < 10 ? `darkFont ${iconClass}` : `lightFont ${iconClass}`
          }
        ></i>
      </div>
      <h3>#{hex}</h3>
      <h4>{weight}%</h4>
    </article>
  )
}

export default SingleColor
