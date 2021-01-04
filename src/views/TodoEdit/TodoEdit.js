import { Fragment, useContext, useState } from 'react';
import './TodoEdit'
import { useHistory, useParams } from "react-router-dom";
import { TodoListContext } from '../../context/TodoListContext'

const TodoEdit=()=>{
  const id = parseInt(useParams().id);
  const {todoList, setTodoList} = useContext(TodoListContext);
  const todo = todoList.filter((todo) => todo.id === id)[0]
  const [title, setTitle]= useState(todo.title);
  const [description, setDescription]= useState(todo.description);

  const history = useHistory();

  const changeTitle=(e)=>{
    setTitle(e.target.value);
  }
  const changeDescription=(e)=>{
    setDescription(e.target.value);
  }

  const clickedSave=()=>{
    if(title==='' || description==='')return;
    const newTodolist = todoList.slice();

    newTodolist.forEach((todo) => {
      if( todo.id === id ){
        todo.title = title;
        todo.description = description;
      }
    });
    setTodoList(newTodolist);
    history.push('/');
  }
  const clickedDelete=()=>{
    const newTodolist = todoList.slice().filter((todo) => todo.id !== id);
    setTodoList(newTodolist);
    history.push('/');
  }

  return(
    <Fragment>
      <h1>ID {id}</h1>
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
      <button onClick={clickedSave}>保存</button>
      <button onClick={clickedDelete}>削除</button>
    </Fragment>
  );
}

export default TodoEdit