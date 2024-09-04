import LogRocket from "logrocket";
import { useEffect, useState } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"
import { LOG_ROCKET_PROJECT_ID } from "./Home";

export function Login()  {
    const {handleLogin} = useOutletContext();
    const [email, setEmail] = useState("")

    function onInputChange(event) {
        setEmail(event.target.value)
    }

    function handleSubmit() {
        handleLogin(email)
    }
    return <div>
        <label>Email</label>
        <input type="email" onChange={(event) => onInputChange(event)} />
        <button onClick={handleSubmit}>Login</button>
    </div>
}