import React, { useState } from "react"
import "./styles/Question.css"
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io"

const Question = ({ title, info }) => {
  const [readMore, setReadMore] = useState(false)

  return (
    <div className="wrapper">
      <div className="top-content">
        <h3>{title}</h3>
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </button>
      </div>
      <article className="content">{readMore ? info : ``}</article>
    </div>
  )
}

export default Question
