export default (() => {
    const blogID = '1993198064947039865'
    const base = 'https://www.googleapis.com/blogger/v3/blogs'
    const apiKey = 'AIzaSyAMTNEpSJ9smokrxlSJceEFvYR23YheyfI'

    return {
        blog: `${base}/${blogID}?key=${apiKey}`,
        posts: `${base}/${blogID}/posts?key=${apiKey}`
    }
})();