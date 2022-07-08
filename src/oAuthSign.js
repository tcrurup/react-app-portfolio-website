import credentials from "./credentials";

function oAuthSignIn(event = null){

    if(event){ event.preventDefault() }
    const url = "https://accounts.google.com/o/oauth2/v2/auth";
    const handleSubmit = e => e.preventDefault();

    let form = document.createElement("form")
    form.setAttribute("method", "POST");
    form.setAttribute("action", url);
    form.setAttribute("onSubmit", handleSubmit )

    
    
    const params = {
        "client_id": credentials.clientId,
        "redirect_uri": "http://localhost:3000",
        "scope": "https://www.googleapis.com/auth/blogger",
        "response_type": "token"
    }

    for( const p in params){
        let input = document.createElement("input");
        input.setAttribute("type", "hidden")
        input.setAttribute("name", p)
        input.setAttribute("value", params[p])
        form.appendChild(input)
    }

    document.body.appendChild(form);
    form.submit().then(console.log('test'));
}

export default oAuthSignIn;