import "./BlogPost.css"
import blogPaths from "../utilities/blogPaths"

function BlogPost(props){

    let element = document.createElement("div")
    element.setAttribute('class', 'blog-post')
    element.innerHTML = props.content
    
    const options = {
        method: "DELETE",
        mode: "cors",
        headers: {
            "Authorization":`Bearer ${props.accessToken}` 
        }
    }

    const deletePost = () => {
        fetch(`${blogPaths.posts}${props.id}`, options)
        .then ( response => response.json() )
        .then ( data => console.log(data) ) 
    }
    
    return <div className="blog-post">
        {props.content}
        <button onClick={deletePost.bind(this)}>DELETE POST</button>
    </div>
}
export default BlogPost