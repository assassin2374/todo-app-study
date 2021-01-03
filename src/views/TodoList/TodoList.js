import {Fragment, useContext, useState} from 'react'
import './TodoList.css';
import {TodoListContext} from '../../context/TodoListContext'
import TodoItem from '../../components/Todoitem';
import { useHistory } from "react-router-dom";


const TodoList = () => {
  const [title, setTitle]= useState('');
  const [description, setDescription]= useState('');
  const {todoList, setTodoList}= useContext(TodoListContext);

  const history = useHistory();

  const changeTitle=(e)=>{
    setTitle(e.target.value);
  }
  const changeDescription=(e)=>{
    setDescription(e.target.value);
  }

  const clickedButton=(e)=>{
    let newId = 0;
    if(todoList.length > 0){
      newId = Math.max(...todoList.map((todo)=>todo.id)) + 1;
    }
    const newTodolist=todoList.slice();
    const newTodo={
      id:newId++,
      title:title,
      description:description,
    };
    newTodolist.push(newTodo);
    setTodoList(newTodolist);
    setTitle('');
    setDescription('');
    console.log({todoList})
  }

  return (
    <Fragment>
      <div>
        <h1>Test</h1>
        <input 
          className='todo-title-input' 
          type='text' 
          value={title} 
          onChange={changeTitle} 
        />
        <textarea 
          className='todo-description-input' 
          type='text' 
          value={description} 
          onChange={changeDescription} 
        />
      </div>
      <div>
        <button 
          className='todo-add-button' 
          onClick={clickedButton} 
        >Click!!</button>
      </div>
      {todoList.map((todo)=>{
        return<TodoItem todo={todo} key={todo.id} onClick={()=> history.push(`/edit/${todo.id}`)}/>;
      })}
    </Fragment>
  );
}

export default TodoList;
