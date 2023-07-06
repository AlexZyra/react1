import Button from './components/button';
import Input from './components/Input';
import RedDiv from './components/RedDiv';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>AAAAA REACT</p>
      <h1>Prikin tut react</h1>
      <Input />
      <Button txt="Hello" />
      <Button txt="Boo"></Button>
      <Button txt="LOL"></Button>
      <Button txt="Cancel"></Button>
      <Button txt="Submit"></Button>
      <RedDiv />
      
    </div>
  );
}

export default App;
