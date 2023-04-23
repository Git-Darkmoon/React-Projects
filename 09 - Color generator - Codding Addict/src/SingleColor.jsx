import { toast } from "react-toastify"

function SingleColor({ index, color }) {
  const { hex, weight } = color

  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`)
        toast.success(`Copied #${hex} to clipboard`)
      } catch (error) {
        toast.error("Failed to copy color to clipboard")
      }
    }
  }

  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <p className="percent-value">{index > 10 ? `-${weight}` : weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  )
}

export default SingleColor
