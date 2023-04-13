import React, { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import Font from 'react-font'
const LoginComponent = () => {
    const [email, setEmail] = useState(true)
    const [password, setPassword] = useState(true)
    const [password2, setPassword2] = useState(true)

    const turnEmail = () =>{
      setEmail(false);
    }
    const turnPassword = () =>{
      setPassword(false);
    }
    const turnPassword2 = () =>{
      setPassword2(false);
    }
    
  return (
    
    
      <Font family='Poppins' weight={700}>
        <form action='/index' method='GET'>
        <div className='loginComponent'>
        <a href='/' className='backArrow'><BiArrowBack/></a>
        <main>
          
        <p><span className='stellar'>Stellar</span></p>
        
        <h1 className='account'><span>Login To your account</span></h1>
        <p>{email ===true ? <b className='email' onMouseOver={turnEmail} >Enter your Email Address</b> : <input name='email' required type='email' className='email' placeholder='Email Address'/>}</p>
        <p>{password ===true ? <b className='password' onMouseOver={turnPassword}>Enter your Password</b> : <input required type='password' name='password' className='email' placeholder='Password'/>}</p>
        
        <div className='rem'><input type='checkbox'/><p className='remember'>Remember Me</p></div>
        <p><input type="submit" value="Log in" className='signIn btn'/></p>
        <div className='rem'><input type='checkbox'/><p className='remember'>Keep me Logged in</p></div>
        <p><a href='/register' className='have-an-account'>Don't have an account?</a></p>
        </main>
        
    </div>
    </form>
    </Font>
    
  )
}

export default LoginComponent;