import { useEffect, useState } from "react"

function Homepage(){

    const [token, setToken] = useState("")

    useEffect(() => {
        const params = new URLSearchParams(window.location.hash);
        let token = params.get("#access_token")
        if(typeof token == "string" && token.length > 0){
            setToken(token)
        }
    },
    [])//Array left blank so useEffect only happens on mount
    
    return <div>
        <button onClick={() => setToken("")} />
        { token }
    </div>
}

export default Homepage;