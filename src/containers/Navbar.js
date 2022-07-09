import "./Navbar.css"
import oAuthSignIn from '../oAuthSign.js';

function Navbar(){
    return <nav>
        <a onClick={oAuthSignIn}>Log In</a>
    </nav>
}
export default Navbar