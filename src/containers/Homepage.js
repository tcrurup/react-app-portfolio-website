function Homepage(){

    const params = new URLSearchParams(window.location.hash);

    return <div>
        {params.get("#access_token")}
       
    </div>
}

export default Homepage;