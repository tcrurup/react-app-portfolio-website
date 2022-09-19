import { useState } from 'react'
import './CreateBlogPost.css'

function CreateBlogPost(props){

    const [content, setContent] = useState("")

    const handleChange = event => {
        setContent(event.target.value)
    }

    return <div>
        <textarea id='blog-text-area' onChange={handleChange}>
            {content}
        </textarea>
    </div>
}
export default CreateBlogPost