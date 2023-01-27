import React from "react"
import questionsData from "./data"
import Question from "./Question"
import "./styles/App.css"

const App = () => {
  return (
    <main className="container">
      <h2>Question and answers about login</h2>
      <div className="questions">
        {questionsData.map((eachQuestion) => {
          return <Question key={eachQuestion.id} {...eachQuestion} />
        })}
      </div>
    </main>
  )
}

export default App
