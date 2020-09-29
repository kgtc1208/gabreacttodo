import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import Todo from './Todo'

export default function Form(props) {
  const setInputHandler = (e) => {
    props.setInput(e.target.value)
  }

  const setTodoHandler = (e) =>{
    e.preventDefault()
    props.setTodo([
      ...props.todo,
      {text: props.input, completed: false, id: Math.random() * 1000}
    ])
    props.setInput("")
  }

  const filterHandler = (e) =>{
    props.setfilter(e.target.value)
  }

    return (
      <div>
        <form>
          <input type="text" className="todo-input" onChange={setInputHandler} />
          <button className="todo-button" type="submit" onClick={setTodoHandler}>
            <FontAwesomeIcon icon={faPlusSquare} className="icon"/>
          </button>
          <div className="select">
            <select name="todos" className="filter-todo" onChange={filterHandler}>
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </form>
      </div>
    )
}
