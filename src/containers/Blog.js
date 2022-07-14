import { useState } from 'react'
import BlogPost from '../components/BlogPost';
import CreateBlogPost from '../components/CreateBlogPost';

function Blog(props){

    const [posts, setPosts] = useState([])
    
    const url = (() => {
        
        const blogID = '1993198064947039865'
        const base = 'https://www.googleapis.com/blogger/v3/blogs'
        const apiKey = 'AIzaSyAMTNEpSJ9smokrxlSJceEFvYR23YheyfI'

        return {
            blog: `${base}/${blogID}?key=${apiKey}`,
            posts: `${base}/${blogID}/posts?key=${apiKey}`
        }
    })();
    
    const optionsAuth = {
        method: "GET",
        mode: 'cors',
        headers: {
            "Authorization" : `Bearer ${props.accessToken}`, 
            //"Content-Type": "application/json"
        }
    }

    const optionsAPI = {
        method: "GET",
        mode: 'cors',
    }

    function getBlogWithAPI(){
        console.log(url)
        fetch(url.blog)
        .then( response => response.json() )
        .then( data => console.log(data) )
    }

    function getPostsFromBlog(){
        fetch(url.posts)
        .then( response => response.json() )
        .then( data => setPosts(data.items) )
    }

    function getBlogWithAuth(){

        fetch('https://www.googleapis.com/blogger/v3/users/self/blogs', optionsAuth)
        .then( response => response.json() )
        .then( data => console.log(data) )
    }
    
    return <div className="blog-container">
        This is a blog
        <button onClick={getBlogWithAPI}>Get Blogs</button>
        <button onClick={getPostsFromBlog}>Get Posts</button>
        {posts.map(post => <BlogPost content={post.content}/>)}
        <CreateBlogPost />
    </div>
}

export default Blog