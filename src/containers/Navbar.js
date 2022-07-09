import "./Navbar.css"
import oAuthSignIn from '../oAuthSign.js';
import { Link } from "react-router-dom";

function Navbar(){
    return <nav id="navbar">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
    </nav>
}
export default Navbar