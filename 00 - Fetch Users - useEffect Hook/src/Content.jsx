import style from "./styles/content.module.css"
import { useState, useEffect, React } from "react"

const Content = () => {
  const [users, setUsers] = useState([])

  const url = "https://jsonplaceholder.typicode.com/users"

  const getUsers = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <h1 className={style.title}>Users</h1>
      <section className={style.container}>
        {users.map((user) => {
          const { id, name, email, address } = user

          return (
            <div className={style.card} key={id}>
              <div className={style.data}>
                <div className={style.side_img}>
                  <img
                    src="https://stonegatesl.com/wp-content/uploads/2021/01/avatar-300x300.jpg"
                    alt=""
                  />
                </div>
                <div className={style.data_info}>
                  <h2 className={style.name}>{name}</h2>
                  <h4 className={style.mail}>{email}</h4>
                  <details>
                    <summary>Address</summary>
                    <p>
                      <span>Street: </span> {address.street}
                      <br />
                      <span>Suite: </span> {address.suite}
                      <br />
                      <span>City: </span> {address.city}
                      <br />
                      <span>Zipcode: </span> {address.zipcode}
                    </p>
                  </details>
                </div>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Content
