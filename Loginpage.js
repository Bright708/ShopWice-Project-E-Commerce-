import React from 'react'
import { Link } from 'react-router-dom'

const Loginpage = () => {
    return (
        <form className='Loginform'>
            <label className='header'>
                <h1>Welcome <span>Back</span></h1>
                <p>Use your credentials to log into your account</p>
            </label>
            <div className="input useremail">
            <h3>Email:</h3>
            <input type='e-mail' name="Email" id="email" placeholder='Enter your email' required/>
            </div>
            <div className="input userpassword">
            <h3>Password:</h3>
            <input type="password" name="Password" id="password" placeholder='Enter your password' required />
            </div>
            <div className='userrememberme'>
               <section>
               <input type="checkbox" name="Remember Me" id="rememberme" />
               <p>Remember Me</p>
               </section>
               <p>Forgot password?</p>
            </div>
            <button  className='submit' type="submit">Sign In</button>
            <div className="signuplink">
                 <p>Dont't have an account? <Link className='link' to={"/signup"}>SignUp</Link></p>
            </div>
            
        </form>
    )
}

export default Loginpage
