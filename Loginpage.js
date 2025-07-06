import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const Loginpage = ({email,setEmail,password,setPassword,handleLogin,error,setError}) => {
    return (
        <motion.form
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        
        className='Loginform' onSubmit={handleLogin}>

            <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
    rel="stylesheet"
/>
            <header><h1><span>SHOPWICE</span></h1></header>
            <label className='header'>
                <h1>Welcome Back</h1>
                <p>Use your credentials to log into your account</p>
            </label>
            {error && <p style={{color:"red" ,marginTop:"10px"}} className='error'>{error}</p>}
            <div className="input useremail">
            <h3>Email:</h3>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="Email" id="email" placeholder='Enter your email ' required />
            </div>
            <div className="input userpassword">
            <h3>Password:</h3>
            <input  type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="Password" id="password" placeholder='Enter your password' required />
            </div>
            <div className='userrememberme'>
               <section>
               <input type="checkbox" name="Remember Me" id="rememberme" />
               <p>Remember Me</p>
               </section>
               <p>Forgot password?</p>
            </div>
            <button  className='submit' type="submit">Log In</button>
            <div className="signuplink">
                 <p>Don't have an account? <Link className='link' to={"/signup"}>Sign Up</Link></p>
            </div>
            <div className="googlelink">
                <hr className='line'/>
                <p>OR </p>
                <hr className='line'/>
                <button ><i class="ri-google-fill"></i> Sign In with Google </button>
            </div>
            
        </motion.form>
    
    )
}

export default Loginpage
