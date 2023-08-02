import './App.css';

import Button from './components/Button';
import Input from './components/Input';
import RedDiv from './components/RedDiv';
// import List from './components/list';
import Form from './components/Form';
import { useState, useEffect } from 'react';
import Box from './components/Box';

import Home from './components/Home';
import { createContext } from 'react';
export const Context = createContext(null);


// import { Route, Routes, NavLink, Link } from 'react-router-dom';
// import Home from './pages/Home';
// import Posts from './pages/Posts';
// import About from './pages/About';
// import Post from './pages/Post';
// import Admin from './pages/Admin';



function App() {
  // const buttonText = 'Click here!';
  // const users = ['User1', 'User2', 'User3', 'User4'];

  // const handleSubmit = () => {
  //   console.log("sub");
  // };

  // const handleSave = () => {
  //   console.log("sav");
  // }


  // Counter //

  // const [counter, setCounter] = useState(0);

  // const handleIncrement = () => {
  //   setCounter(counter + 1)
  // }

  // const handleDecrement = () => {
  //   setCounter(counter - 1)
  // }

  // Counter //

  // const [isAuth, setisAuth] = useState(false)

  // if (!isAuth) {
  //   return (
  //     <div>Please sigh in</div>
  //   )
  // } else {
  //   return <div>Hello user!</div>
  // }


  // const [error, serError] = useState(false);

  // const users = [
  //   { name: 'User1', id: 1 },
  //   { name: 'User2', id: 2 },
  //   { name: 'User3', id: 3 },
  //   { name: 'User4', id: 4 }
  // ];

  // const [isShow, setIsShow] = useState(true)

  //   return (
  //     <div>
  //       <ul>
  //         {/* {users.map((user, index) =>
  //           <li key={index}>{user.name}</li>
  //         )} */}

  //         {isShow && <Box />}

  //         <div>
  //           <button onClick={() => setIsShow(!isShow)}>Toggle</button>
  //         </div>
  //       </ul>
  //     </div>
  //   )

  
  //   return (
  //     <div>
  //       {/* <List /> */}
  //       {/* <Box /> */}
  //       {/* <nav className='navigation'>

  //       <NavLink to="/" element={<Home />}>Home</NavLink>
  //       <NavLink to="/about" element={<About />}>About</NavLink>
  //       <NavLink to="/posts" element={<Posts />}>Posts</NavLink>

  //     </nav>

  //     <Routes>
  //       <Route path='/' element={<Home />} />
  //       <Route path='/about' element={<About />} />
  //       <Route path='/posts' element={<Posts />} />
  //       <Route path='/products/:postId' element={<Post />} />

  //     </Routes> */}



  //     </div>
  //   )

  // return (
  //   <div className="App">
  //     {/* <h1>Hello World</h1>
  //     <p>AAAAA REACT</p>
  //     <h1>Prikin tut react</h1>
  //     <Input />

  //     <Button>Click button</Button>
  //     <Button txt={buttonText} />
  //     <Button txt="Boo"></Button>
  //     <Button txt="LOL"></Button>
  //     <Button txt="Save" onClick={handleSave}></Button>
  //     <Button txt="Submit" onClick={handleSubmit}></Button>
  //     <RedDiv />
  //     <div>
  //       <List items={users} />
  //     </div>
  //     <div><Form></Form></div> */}


  //     <div id="divCounter">
  //       <h2>Counter: {counter}</h2>
  //       <button onClick={handleIncrement}>+</button>
  //       <button onClick={handleDecrement}>-</button>
  //     </div>
  //     
  //   </div>
  // );
  
  
  
  
  const users = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
    { id: 4, name: "User 4" }
  ]

  const [title, setTitle] = useState("")
  const [todos, setTodos] = useState([])


  const handleCreateTodo = () => {
    const obj = {
      id: Date.now(),
      title: title,
      checked: false
    };
    setTodos((prevState) => [...prevState])
  }

  return (
    <div>
      {/* <Input value={title} onChange={setTitle} />
      <Button text="Create todo" onClick={handleCreateTodo} /> */}
      <Context.Provider value={{items: users}}>
        <Home/>
      </Context.Provider>
    </div>
  )
}

export default App;
