import Button from './components/Button';
import Input from './components/Input';
import RedDiv from './components/RedDiv';

import './App.css';

import List from './components/list';
import Form from './components/Form';
import { useState } from 'react';

function App() {
  const buttonText = 'Click here!';
  const users = ['User1', 'User2', 'User3', 'User4'];

  const handleSubmit = () => {
    console.log("sub");
  };

  const handleSave = () => {
    console.log("sav");
  }


  // Counter //

  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1)
  }

  const handleDecrement = () => {
    setCounter(counter - 1)
  }

  // Counter //d



  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>AAAAA REACT</p>
      <h1>Prikin tut react</h1>
      <Input />

      <Button>Click button</Button>
      <Button txt={buttonText} />
      <Button txt="Boo"></Button>
      <Button txt="LOL"></Button>
      <Button txt="Save" onClick={handleSave}></Button>
      <Button txt="Submit" onClick={handleSubmit}></Button>
      <RedDiv />
      <div>
        <List items={users} />
      </div>
      <div><Form></Form></div>


      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
}

export default App;
