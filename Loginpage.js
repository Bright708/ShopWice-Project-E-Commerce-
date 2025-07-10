import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cartimg from './Images/43654.jpg';


const Loginpage = ({email,setEmail,password,setPassword,handleLogin,error,setError}) => {
    const [isLaptop, setIsLaptop] = useState('');
    useEffect(() =>{
        // Function to check screen width
        const checkScreenSize = () => {
          const width = window.innerWidth;
          setIsLaptop(width >= 1024);
        };
      
        // Run once on component mount
        checkScreenSize();
      
        // Re-run when window is resized
        window.addEventListener('resize', checkScreenSize);
      
        // Cleanup on component unmount
        return () => window.removeEventListener('resize', checkScreenSize);
      }, []);
    return (
        <>
        <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
    rel="stylesheet"
/>
            {isLaptop?(


<motion.div 
initial={{ opacity: 0, y: -50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
 className='laptopview'>
  <div className="portion-1">
    <div className="container">
      <h1>Shopwice</h1>
      <h3>Kindly enter your details to login</h3>

      <form>
        <label className="label" htmlFor="Email">Email</label><br />
        <input
          className="input-fields"
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          id="Email"
          name="Email"
          placeholder="Enter your email here ..."
          required
        /><br />

        <label className="label" htmlFor="Password">Password</label><br />
        <input
          className="input-fields"
          type="password"
          id="Password"
          value={password} 
          onChange={(e)=>setPassword(e.target.value)}
          name="Password"
          placeholder="Enter your password here ..."
          required
        /><br />

        <a id="forgot-password" href="#">Forgot password?</a><br />
        <button className="sign-in" type="submit">Sign in</button>
      </form>

      <p id="p-1">or</p>

      <button className="sign-in">
      <i class="ri-google-fill"></i>  Sign in with Google
      </button>

      <p>Are you new? <Link to={"/signup"}>Create An Account</Link></p>
    </div>
  </div> <br />
  <img className='cartimg' src={Cartimg} alt="cart image"style={{width:'700px', height:'auto'}}/>

</motion.div>
  
  ):(

        <motion.form
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        
        className='Loginform' onSubmit={handleLogin}>

            
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
                <p>OR </p>
                <button ><i class="ri-google-fill"></i> Sign In with Google </button>
            </div>
            
        </motion.form>
  )
  }
        </>
    
    )
}

export default Loginpage
