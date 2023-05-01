import { toast } from "react-toastify"

/* eslint-disable react/prop-types */
function SingleColor({ color, index }) {
  const { hex, weight } = color

  const iconClass = "copy-icon fa-solid fa-copy"

  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`)
        toast.success(`Color #${hex} copied !`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      } catch (error) {
        toast.error("Error copying color")
      }
    } else {
      toast.error("Clipboard access not available")
    }
  }
  return (
    <article className="color">
      <div
        className={`color-visualize ${index === 0 ? "sombrita" : ""}`}
        style={{ backgroundColor: `#${hex}` }}
        onClick={saveToClipboard}
      >
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
