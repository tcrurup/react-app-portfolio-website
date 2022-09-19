import blogInfo from "./blogInfo";

export default (() => {
    return {
        blog: `${blogInfo.base}${blogInfo.ID}?key=${blogInfo.apiKey}`,
        posts: `${blogInfo.base}${blogInfo.ID}/posts?key=${blogInfo.apiKey}`
    }
})();