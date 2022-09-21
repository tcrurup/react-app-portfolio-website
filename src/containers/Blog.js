import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import BlogPost from '../components/BlogPost';
import CreateBlogPost from '../components/CreateBlogPost';
import blogURLs from '../utilities/blogURLs';

function Blog(props){

    const [posts, setPosts] = useState([])
    
   // useEffect(getPostsFromBlog, [])//Array left blank so useEffect only happens on mount
    
    // const url = (() => {
        
    //     const blogID = '882558988348815947'
    //     const base = 'https://www.googleapis.com/blogger/v3/blogs'
    //     const apiKey = 'AIzaSyAGPPr7DXfT9FoUkG3HTXinDG2r_qcan3M'

    //     return {
    //         blog: `${base}/${blogID}?key=${apiKey}`,
    //         posts: `${base}/${blogID}/posts?key=${apiKey}`
    //     }
    // })();
    
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

    // function getBlogWithAPI(){
    //     console.log(url)
    //     fetch(url.blog)
    //     .then( response => response.json() )
    //     .then( data => console.log(data) )
    // }

    // function getPostsFromBlog(){
    //     fetch(url.posts)
    //     .then( response => response.json() )
    //     .then( data => 
    //         data.items ? setPosts(data.items) : console.log("There were no posts found")
    //     )
    // }

    function getBlogWithAuth(){

        fetch('https://www.googleapis.com/blogger/v3/users/self/blogs', optionsAuth)
        .then( response => response.json() )
        .then( data => console.log(data) )
    }

    function ifLoggedIn(){
        const token = props.accessToken
        if(token && token != ""){
            return <CreateBlogPost accessToken={props.accessToken} />
        }
    }
    
    return <div className="blog-container">
        This is a blog
        <Outlet />
        {console.log(posts)}
        { posts.length ? posts.map(post => <BlogPost content={post.content} id={post.id} accessToken={props.accessToken}/> ) : <h3>There are no posts to display</h3> }

        {ifLoggedIn()}
    </div>
}

export default Blog