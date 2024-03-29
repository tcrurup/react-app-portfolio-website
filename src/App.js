import './App.css';
import Homepage from './containers/Homepage';
import Blog from './containers/Blog';
import Resume from './containers/Resume';
import Contact from './containers/Contact';
import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
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

  return (<>
  <Routes>
    <Route element={<Layout /> } >
      <Route index element = {<Homepage/>} />
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
