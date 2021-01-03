import {createContext, useState} from 'react'

export const TodoListContext = createContext({});

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
export const TodoListProvider=({ children })=>{
  const [todoList, setTodoList]= useState(sampleTodolist);
  return (
    <TodoListContext.Provider 
      value={
        {
          todoList,
          setTodoList
        }
      }
    >
      {children}
    </TodoListContext.Provider>
  );
}
