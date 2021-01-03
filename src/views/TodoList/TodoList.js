import {Fragment, useState} from 'react'
import './TodoList.css';
import TodoItem from '../../components/Todoitem';
import { useHistory } from "react-router-dom";

const sampleTodolist=[
  {
    id:0,
    title:'sample1',
    description:'sample01',
  },
  {
    id:1,
    title:'sample2',
    description:'sample02',
  },
  {
    id:2,
    title:'sample3',
    description:'sample03',
  }
  ];

const TodoList = () => {
  const [title, setTitle]= useState('');
  const [description, setDescription]= useState('');
  const [todoList, setTodoList]= useState(sampleTodolist);

  const history = useHistory();

  const changeTitle=(e)=>{
    setTitle(e.target.value);
  }
  const changeDescription=(e)=>{
    setDescription(e.target.value);
  }

  const clickedButton=(e)=>{
    const newTodolist=todoList.slice();
    let newId=Math.max(...todoList.map((todo)=>todo.id))+1;
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
