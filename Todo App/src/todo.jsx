import React from "react"
import styles from "./styles/todo styles/todo.module.css"

const todo = () => {
  const AddTask = (task) => {
    ;<div className={styles.task}>
      <h3 className="taskTitle">{task}</h3>
      <div className={styles.btns}>
        <button className={styles.editBtn}>Edit</button>
        <button className={styles.delBtn}>Delete</button>
      </div>
    </div>
  }

  return (
    <>
      <form
        className={styles.actions}
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <input type="text" name="" id="taskDesired" />
        <button
          // type="submit"
          className={styles.btn}
          onClick={() => AddTask("comprar algo")}
        >
          Add task
        </button>
      </form>

      <section className={styles.taskContainer}>
        <div className={styles.task}>
          <h3 className="taskTitle">Buy Something</h3>
          <div className={styles.btns}>
            <button className={styles.editBtn}>Edit</button>
            <button className={styles.delBtn}>Delete</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default todo
