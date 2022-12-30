import React from "react"
import styles from "./styles/todo styles/todo.module.css"

const todo = () => {
  return (
    <>
      <section className={styles.actions}>
        <input type="text" name="" id="" />
        <button className={styles.btn}>Add task</button>
      </section>
      <section className="taskContainer">
        <div className="task">
          <h3 className="taskTitle">Buy Something</h3>
          <button className="actionBtn">Edit</button>
          <button className="actionBtn">Delete</button>
        </div>

        <div className="task">
          <h3 className="taskTitle">Buy Something</h3>
          <button className="actionBtn">Edit</button>
          <button className="actionBtn">Delete</button>
        </div>

        <div className="task">
          <h3 className="taskTitle">Buy Something</h3>
          <button className="actionBtn">Edit</button>
          <button className="actionBtn">Delete</button>
        </div>
      </section>
    </>
  )
}

export default todo
