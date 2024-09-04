import './App.css';
import { useEffect, useState } from 'react';
import LogRocket from 'logrocket';
import { Outlet, useNavigate } from 'react-router-dom';
import { Login } from './components/Login';

export const LOG_ROCKET_PROJECT_ID = 'uzwjb5/demo';
function App() {
  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    LogRocket.init(LOG_ROCKET_PROJECT_ID)
}, [])

useEffect(() => {
  if (userEmail == null) {
    console.log("No session")
    LogRocket.startNewSession(); 
  }
}, [userEmail])

function handleLogin(email) {
  sessionStorage.setItem('Email', email);
  setUserEmail(email);
  // LogRocket.startNewSession();
  navigate('/home')
}
function handleLogout() {
  sessionStorage.removeItem('Email');
  setUserEmail(null);
  // LogRocket.startNewSession();
  navigate('/')
}
  return (
    <div>
      <Outlet context={{ handleLogin, handleLogout }}  />
    </div>
  )
}

export default App;
