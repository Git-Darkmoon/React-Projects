/* eslint-disable react/prop-types */
function SingleColor({ color }) {
  const { hex, weight } = color

  return (
    <article className="color">
      <div
        className="color-visualize"
        style={{ backgroundColor: `#${hex}` }}
      ></div>
      <h3>#{hex}</h3>
      <h4>{weight}%</h4>
    </article>
  )
}

export default SingleColor
