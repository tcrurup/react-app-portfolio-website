import "./BlogPost.css"

function BlogPost(props){

    let element = document.createElement("div")
    element.setAttribute('class', 'blog-post')
    element.innerHTML = props.content
    
    return <div className="blog-post">
        {props.content}
    </div>
}
export default BlogPost