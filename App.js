import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loginpage from "./Loginpage";
import SignUP from './SignUP';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [signup, setSignup] = useState(false);
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
    if(email!==JSON.parse(localStorage.getItem('userinfo'))[0] || password!==JSON.parse(localStorage.getItem('userinfo'))[1]){
      setError('Enter correct email and password');
      return;
    }
    
    setIsLoggedIn(true);
    setError('');
  };
  const handlesignup = (e) => {
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
    setSignup(true);
    setError('');
     
    localStorage.setItem('userinfo',JSON.stringify([email,password]))

  }
  
  return (
    <div className="App">
      <Routes>

      <Route path="/" element={<Loginpage handleLogin={handleLogin} email={email} setEmail={setEmail} password={password} setPassword={setPassword} error={error} setError={setError}/>}/>
      <Route path="/signup" element={<SignUP handlesignup={handlesignup} email={email}setEmail={setEmail} password={password} setPassword={setPassword} error={error} setError={setError}/>}/>
      </Routes>
    </div>
  );
}

export default App;
