import ToDo from "./todo"
import styles from "./styles/Main App styles/App.module.css"

const App = () => {
  return (
    <>
      <h1 className={styles.title}>To Do Things</h1>
      <ToDo />
    </>
  )
}

export default App
