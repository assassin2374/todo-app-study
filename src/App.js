import {Fragment, useState} from 'react'
import './App.css';

const App = () => {
  const [text, setText]= useState('');

  const changeText=(e)=>{
    setText(e.target.value);
  }

  const clickedButton=(e)=>{
    alert(text)
  }

  return (
    <Fragment>
      <h1>test</h1>
      <input type='text' value={text} onChange={changeText} />
      <br />
      <button onClick={clickedButton} >Click!!</button>
      <br />
    </Fragment>
  );
}

export default App;
