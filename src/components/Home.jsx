import LogRocket from "logrocket";
import { useEffect, useState } from "react"
import { useNavigate, useOutletContext } from "react-router-dom";


export function Home() {
    const { handleLogout } = useOutletContext(); 
    const userEmail = sessionStorage.getItem('Email');


    useEffect(() => {
        if(userEmail) {
            LogRocket.identify(userEmail, {});
        }
    }, [userEmail])

    function handleLogoutClick() {
        handleLogout()
    }
    return <div>
        {userEmail && `Welcome Home ${userEmail}!`}<br />
        <input type="text" placeholder="Type some text here...." />
        <button onClick={handleLogoutClick}>Logout</button>
    </div>
}