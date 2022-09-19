import logo from './logo.svg';
import './App.css';
import Homepage from './containers/Homepage';
import Blog from './containers/Blog';
import Resume from './containers/Resume';
import Contact from './containers/Contact';
import Navbar from "./containers/Navbar";
import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"

function App() {

  const [token, setToken] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash);
    let token = params.get("#access_token")
    if(typeof token == "string" && token.length > 0){
        setToken(token)
    }
  }, [])//Array left blank so useEffect only happens on mount

  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route 
            path = "/"
            element = {<Homepage/>}
          />
          <Route 
            path = "/blog"
            element = {<Blog accessToken={ token }/>}
          />
          <Route 
            path = "/resume"
            element = {<Resume />}
          />
          <Route 
            path = "/contact"
            element = {<Contact/>}
          />
          
        </Routes>
        
    </div>
  );
}

export default App;
