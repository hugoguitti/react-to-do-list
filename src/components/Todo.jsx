import React from 'react'

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className='todo'>
        <div
            className='content'
            style={{ textDecoration: todo.isCompleted ? 'line-through': ''}}
        >
            <p>{todo.title}</p>
            <p className='category'>
            ({todo.category})
            </p>
        </div>
        <div>
            <button
                className='complete'
                onClick={() => completeTodo(todo.id)}
            >{todo.isCompleted ? 'Uncomplete' : 'Complete' }</button>
            <button
                className='remove'
                onClick={() => removeTodo(todo.id)}
            >x</button>
        </div>
    </div>
  )
}

export default Todo