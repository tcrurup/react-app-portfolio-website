import { useState } from 'react'
import './CreateBlogPost.css'
import  blogInfo from "../utilities/blogInfo.js"

function CreateBlogPost(props){

    const [content, setContent] = useState("")

    const data = {
        "kind" : "blogger#post",
        "blog" : {
            "id" : `${blogInfo.id}`
        },
        "title": "A New Post",
        "content" : content
    }
    
    const options = {
        method: "POST",
        headers: {
            "Authorization" : `Bearer ${props.accessToken}`,
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data) 
    }

    const handleChange = event => {
        setContent(event.target.value)
    }

    const handlePostSubmit = () =>{
        console.log()
        fetch(`${blogInfo.base}${blogInfo.id}/posts/`, options)
    }

    return <div>
        <textarea id='blog-text-area' onChange={handleChange}>
            {content}
        </textarea>
        <button onClick={handlePostSubmit}>Submit Post</button>
    </div>
}
export default CreateBlogPost