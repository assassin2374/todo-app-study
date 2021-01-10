import { Fragment, useContext, useEffect, useState } from 'react';
import './TodoEdit'
import { useHistory, useParams } from "react-router-dom";
import { TodoListContext } from '../../context/TodoListContext'
import axios from 'axios';

const TodoEdit=()=>{
  const id = parseInt(useParams().id);
  const {todoList, setTodoList} = useContext(TodoListContext);
  //let todo = todoList.filter((todo) => todo.id === id)[0]
  const emptyTodo = {
      id:id,
      title:'',
      description:'',
  };
  const [todo, setTodo]=useState(emptyTodo)

  useEffect(()=>{
    const getTodo=async ()=>{
      const response = await axios.get(`todos/${id}`);
      setTodo(response.data)
    };
    getTodo();
  }, [id, setTodo]);
  
  const history = useHistory();

  const changeTitle=(e)=>{
    const newTodo = Object.assign({},todo);
    newTodo.title=e.target.value;
    setTodo(newTodo);
  }
  const changeDescription=(e)=>{
    const newTodo = Object.assign({},todo);
    newTodo.description=e.target.value;
    setTodo(newTodo);
  }

  const clickedSave=async()=>{
    if(todo.title==='' || todo.description==='')return;
    const newTodolist = todoList.slice();

    newTodolist.forEach((newTodo) => {
      if( newTodo.id === id ){
        newTodo.title = todo.title;
        newTodo.description = todo.description;
      }
    });

    const newTodo = newTodolist.find((todo)=>todo.id===id);
    await axios.put('todos', newTodo);

    setTodoList(newTodolist);
    history.push('/');
  }
  const clickedDelete=async()=>{
    const newTodolist = todoList.slice().filter((todo) => todo.id !== id);

    await axios.delete(`todos/${id}`);
    
    setTodoList(newTodolist);
    history.push('/');
  }

  return(
    <Fragment>
      <h1>ID {id}</h1>
        <input 
          className='todo-title-input' 
          type='text' 
          value={todo.title} 
          onChange={changeTitle} 
        />
        <textarea 
          className='todo-description-input' 
          type='text' 
          value={todo.description} 
          onChange={changeDescription} 
        />
      <button onClick={clickedSave}>保存</button>
      <button onClick={clickedDelete}>削除</button>
    </Fragment>
  );
}

export default TodoEdit