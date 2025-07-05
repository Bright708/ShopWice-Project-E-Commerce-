import React from 'react';
import { Link } from 'react-router-dom';



const SignUP = () => {
    return (
        <form className='signupform'>
            <label htmlFor="signUO">Sign Up Here</label>
            <div className="input useremail">
            <h3>Email:</h3>
            <input type='e-mail' name="Email" id="email" placeholder='Enter your email' required/>
            </div>
            <div className="input userpassword">
            <h3>Password:</h3>
            <input type="password" name="Password" id="password" placeholder='Enter your password' required />
            </div>
            <button className='submit' type="submit">Sign Up</button>
            <div className="loginlink">
                <p>Already have an account? <Link className='link' to={"/"}>Login</Link></p>
            </div>
            
        </form>
    )
}

export default SignUP
