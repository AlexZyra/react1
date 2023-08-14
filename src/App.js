import './App.css';
import { useState, useEffect, useReducer, useMemo } from 'react';

import Button from './components/Button';
import Input from './components/Input';
import RedDiv from './components/RedDiv';
// import List from './components/list';
import Form from './components/Form';
import Box from './components/Box';

// import Home from './components/Home';
import { createContext } from 'react';
import Counter from './components/Counter';
import Item from './components/Item';
import EditForm from './components/EditForm';
import Widget from './components/Widget';
import { NavLink, Route, Router, Routes } from 'react-router-dom';
import Posts from './pages/Posts';
import Users from './pages/Users';
import Home from './pages/Home';
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




  // const users = [
  //   { id: 1, name: "User 1" },
  //   { id: 2, name: "User 2" },
  //   { id: 3, name: "User 3" },
  //   { id: 4, name: "User 4" }
  // ]




  // return (
  //   <div>
  //     <Counter />
  //   </div>

  // )

  // const [title, setTitle] = useState("")
  // const [todos, setTodos] = useState([])
  // const [editedTodo, setEditedTodo] = useState({})
  // const [isEditing, setIsEditing] = useState(false)


  // const handleCreateTodo = () => {
  //   const obj = {
  //     id: Date.now(),
  //     title: title,
  //     checked: false
  //   };
  //   setTodos([...todos, obj]);
  // }

  // const handleDeleteTodo = (id) => {
  //   const newArr = todos.filter((i) => i.id !== id);
  //   setTodos(newArr)
  // }

  // const handleCheckTodo = (id) => {
  //   setTodos((prevTodo) => prevTodo.map(t => (t.id === id ? { ...t, checked: !t.checked } : t)))
  // }

  // const handleUpdateTodo = (updatedTodo) => {

  //   const newArr = todos.map(todo => {
  //     if (todo.id === updatedTodo.id) {
  //       return {
  //         ...todo,
  //         title: updatedTodo.title
  //       }
  //     }

  //     return todo
  //   })

  //   setTodos(newArr)
  //   setIsEditing(false)
  // }

  // const enterEditMode = (todo) => {
  //   setEditedTodo(todo);
  //   setIsEditing(true);
  // }


  // return (
  //   <div className='app'>
  //     {isEditing && (
  //       <div>
  //         <EditForm onUpdate={handleUpdateTodo} editedTodo={editedTodo} />
  //       </div>
  //     )}

  //     <div>
  //       <Input value={title} onChange={setTitle} />
  //       <Button text="Create todo" onClick={handleCreateTodo} />
  //     </div>
  //     <div>
  //       {todos.length > 0 &&
  //         todos.map(i =>
  //           <Item
  //             key={i.id}
  //             item={i}
  //             onDelete={handleDeleteTodo}
  //             onCheck={handleCheckTodo}
  //             onEdit={enterEditMode}
  //           />)}
  //     </div>




  {/* <Context.Provider value={{items: users}}>
        <Home/>
      </Context.Provider> */}



  // </div>
  // )

  // const [count, setCount] = useState(0)

  // // const users = 

  // const memoUsers = useMemo(() => [
  //   {id: 1, name: "User 1"},
  //   {id: 2, name: "User 2"},
  //   {id: 3, name: "User 3"},
  //   {id: 4, name: "User 4"},
  //   {id: 5, name: "User 5"},
  // ], [])

  // return (
  //   <div className='app'>
  //     <h1>Count: {count}</h1>
  //     <Widget users={memoUsers}/>
  //     <button onClick={() => setCount(count + 1)}>Increment</button>
  //   </div>

  // )


  return (
    <div className='app'>
      <NavLink to='/' element={<Home />} className='link'>Home</NavLink>
      <NavLink to='/posts' element={<Posts />} className='link'>Posts</NavLink>
      <NavLink to='/users' element={<Users />} className='link'>Users</NavLink>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/posts' element={<Posts />}/>
        <Route path='/users' element={<Users />}/>
      </Routes>
    </div>
  )
}

export default App;
