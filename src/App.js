import logo from './logo.svg';
import './App.css';
import Homepage from './containers/Homepage';
import Navbar from "./containers/Navbar";
import { useState, useEffect } from "react"

function App() {

  const [token, setToken] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash);
    let token = params.get("#access_token")
    if(typeof token == "string" && token.length > 0){
        setToken(token)
    }
  })//Array left blank so useEffect only happens on mount

  return (
    <div className="App">
        <Navbar />
        <Homepage accessToken={ token } />
    </div>
  );
}

export default App;
