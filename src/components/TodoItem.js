import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function TodoItem({ text, todo, settodo, i }) {
    const deleteHandler = ()=>{
        settodo(todo.filter(el => el.id !== i.id))
    }

    const checkHandler = ()=>{
        settodo(todo.map(el =>{
            if(el.id === i.id){
                return { ...el, completed: !el.completed}
            }
            return el
        }))

        }
    
    return (
        <div className="todo">
            <li className={`todo-item ${i.completed? "completed" : ''}`}>{text}</li>
            <div className="buttons">
                <button className="check" onClick={checkHandler}>
                    <FontAwesomeIcon icon={faCheck} />
                </button>
                <button className="delete" onClick={deleteHandler}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    )
}
