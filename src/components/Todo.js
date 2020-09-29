import React from 'react'
import TodoItem from './TodoItem'

export default function Todo({ todo, settodo }) {
    return (
    <div className="todo-container">
        <ul className="todo-list">
            {todo.map(i =>(
                <TodoItem text={i.text} key={i.id} todo={todo} settodo={settodo} i={i} />
            ))}
        </ul>
    </div>
    )
}
