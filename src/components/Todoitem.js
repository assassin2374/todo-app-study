import React from 'react'
import './Todoitem.css';

const TodoItem=(props)=>{
  return(
    <div className='todo-item'>
      <div className='todo-item-title'>{props.todo.title}</div>
      <div className='todo-item-description'>{props.todo.description}</div>
    </div>
  )
}

export default TodoItem