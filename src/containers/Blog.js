function Blog(props){

    const url = (() => {
        
        const blogID = '1993198064947039865'
        const base = 'https://www.googleapis.com/blogger/v3/blogs/'
        const apiKey = 'AIzaSyAMTNEpSJ9smokrxlSJceEFvYR23YheyfI'

        return {
            blog: `${base}${blogID}?key=${apiKey}`
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
        headers: {
            
        }
    }

    function getBlogWithAPI(){
        console.log(url)
        fetch(url.blog)
        .then( response => response.json() )
        .then( data => console.log(data) )
    }

    function getPostsFromBlog(){

    }

    function getBlogWithAuth(){

        fetch('https://www.googleapis.com/blogger/v3/users/self/blogs', optionsAuth)
        .then( response => response.json() )
        .then( data => console.log(data) )
    }
    
    return <div className="blog-container">
        This is a blog
        <button onClick={getBlogWithAPI}></button>
    </div>
}

export default Blog