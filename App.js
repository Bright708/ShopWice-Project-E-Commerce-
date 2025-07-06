import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loginpage from "./Loginpage";
import SignUP from './SignUP';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
 /*  const[checked,setChecked]=useState(false); */
  const handleLogin = (e) => {
    e.preventDefault();
    
    //Emailf and password validation logic
    if (!email || !password) {
     setError('Email and password are required');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format');
      return;
    }
    
    setIsLoggedIn(true);
    setError('');
  };
  
  return (
    <div className="App">
      <Routes>

      <Route path="/" element={<Loginpage handleLogin={handleLogin} email={email} setEmail={setEmail} password={password} setPassword={setPassword} error={error} setError={setError}/>}/>
      <Route path="/signup" element={<SignUP/>}/>
      </Routes>
    </div>
  );
}

export default App;
