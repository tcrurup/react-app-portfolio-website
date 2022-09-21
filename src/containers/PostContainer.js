import blogURLs from "../utilities/blogURLs"
import { useState, useEffect } from 'react'
import BlogPost from '../components/BlogPost';

function PostContainer(props){

    const [posts, setPosts] = useState([])
    useEffect(getPostsFromBlog, [])

    function getPostsFromBlog(){
        fetch(blogURLs.posts)
        .then( response => response.json() )
        .then( data => 
            data.items ? setPosts(data.items) : console.log("There were no posts found")
        )
    }

    return <div id="blog-post-container">
        This is the container for posts
        { posts.length ? posts.map(post => <BlogPost content={post.content} id={post.id} accessToken={props.accessToken}/> ) : <h3>There are no posts to display</h3> }
    </div>
}

export default PostContainer