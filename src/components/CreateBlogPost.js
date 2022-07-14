import { useState } from 'react'
import './CreateBlogPost.css'

function CreateBlogPost(){

    const [content, setContent] = useState("")

    const handleChange = event => {
        console.log(event.target.value)
    }

    return <div>
        <textarea id='blog-text-area' onChange={handleChange}>
            {content}
        </textarea>
    </div>
}
export default CreateBlogPost