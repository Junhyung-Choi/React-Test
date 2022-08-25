import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Login from './views/auth/Login';
import Signup from './views/auth/Signup';
import Logout from './views/auth/Logout';

function Home(){
  return(
    <div>
      <Link to = "/login">
        <h1> 로그인 페이지</h1>
      </Link>
      <Link to = "/signup">
        <h1> 회원가입 페이지</h1>
      </Link>
      <Link to = "/logout">
        <h1> 로그아웃 페이지</h1>
      </Link>
      <Link to = "/board">
        <h1> 게시판 </h1>
      </Link>
    </div>
  )
}

function Board(){
  const [post,setPost] = useState([]);
  const [data,setData] = useState([]);

  const getHandle = () => {
    axios.get("http://localhost:8000/board/")
    .then(res => {
      console.log(res.data);
      setPost([...res.data]);
    });
  };
  
  useEffect(() => {getHandle();},[])
  return (
    <div>
    <button onClick={() => {getHandle()}}> </button>
    {post.map((e,index) => (
      <div key = {index}>
      <span>
      {e.title}번, {e.context}
      </span>
      </div>
    ))}
    </div>
  ); 
}

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/signup" element = {<Signup/>}/>
          <Route path = "/logout" element = {<Logout/>}/>
          <Route path = "/board" element = {<Board/>}/>
          <Route path = "/" element = {<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
