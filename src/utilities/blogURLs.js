import blogInfo from "./blogInfo";

export default (() => {
    return {
        blog: `${blogInfo.base}${blogInfo.id}?key=${blogInfo.apiKey}`,
        posts: `${blogInfo.base}${blogInfo.id}/posts?key=${blogInfo.apiKey}`
    }
})();