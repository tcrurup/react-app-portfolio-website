import Navbar from "./containers/Navbar"
import { Outlet } from 'react-router-dom'

function Layout(){

    return <div id ="app-container" className="App">
        <Navbar />
        <Outlet />
    </div>
}

export default Layout