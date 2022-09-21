import logo from './logo.svg';
import './App.css';
import Homepage from './containers/Homepage';
import Blog from './containers/Blog';
import Resume from './containers/Resume';
import Contact from './containers/Contact';
import Navbar from "./containers/Navbar";
import { useState, useEffect } from "react"
import { Routes, Route, Outlet } from "react-router-dom"
import CreateBlogPost from './components/CreateBlogPost';
import PostContainer from './containers/PostContainer';
import Layout from './Layout'

function App() {

  const [token, setToken] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash);
    let token = params.get("#access_token")
    if(typeof token == "string" && token.length > 0){
        setToken(token)
    }
  }, [])//Array left blank so useEffect only happens on mount

  //NEED TO CLEAN UP THIS ROUTING ITS REALLY BAD
  //Instead have a base layout as the index and nest in all the rest.
  return (<>
  <Routes>
    <Route element={<Layout /> } >
      <Route element = {<Homepage/>} />
      <Route path = "/blog" element = {<Blog accessToken={ token }/>} >
        <Route path="posts" element = { <PostContainer />} />
        <Route path="posts/new" element = {<CreateBlogPost/>} />
      </Route>
      <Route path = "/resume" element = {<Resume />} />
      <Route path = "/contact" element = {<Contact/>} />
    </Route>
  </Routes>
  </>);
}

export default App;
