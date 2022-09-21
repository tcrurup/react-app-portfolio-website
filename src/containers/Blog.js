import { Outlet } from 'react-router-dom'

function Blog(props){
    return <div className="blog-container">
        This is a blog
        <Outlet />
    </div>
}

export default Blog