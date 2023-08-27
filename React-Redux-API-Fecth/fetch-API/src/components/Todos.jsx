import {React, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import { getTodos } from "../main-services/action/todo-action"

const Todos = () => {
  const {todos, isLoading, error} = useSelector((state)=> state)
  const dispatch = useDispatch()

useEffect(()=>{
  dispatch(getTodos())

}, [])
  
  return (
    <div>
      <h2>Todos  </h2>
      {isLoading && <h3>Loading...</h3>}
      
      {error && <h3>{error.message}</h3>}

      <span>
        {todos && todos.map((todo)=>{
          const {id, title} = todo
          return (
            <article key={id}>
              <h4>{id}</h4>
              <h4>{title}</h4>

            </article>
          )
        })}
      </span>
    </div>
  )
}

export default Todos