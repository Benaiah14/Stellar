import React, { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import Font from 'react-font'
const RegisterComponent = ({ turnEmail,
  turnPassword,
  turnPassword2,
  email,
  password,
  password2 }) => {


  return (

    <Font family='Poppins' weight={700}>
      <form action='/index' method='GET'>
        <div className='registerComponent'>
          <a href='/' className='backArrow'><BiArrowBack /></a>
          <main>

            <p><span className='stellar'>Stellar</span></p>

            <h1 className='account'><span>Create an account</span></h1>
            <p>{email === true ? <b className='email' onMouseOver={turnEmail} >Enter your Email Address</b> : <input name='email' required type='email' className='email' placeholder='Email Address' />}</p>
            <p>{password === true ? <b className='password' onMouseOver={turnPassword}>Enter your Password</b> : <input required type='password' name='password' className='email' placeholder='Password' />}</p>
            <p>{password2 === true ? <b className='password2' onMouseOver={turnPassword2}>Re-enter Password</b> : <input required type='password' name='password2' className='email' placeholder='Confirm password' />}</p>
            <div className='rem'><input type='checkbox' /><p className='remember'>Remember Me</p></div>
            <p><input type="submit" value="Sign in" className='signIn btn' /></p>
            <a href='/login' className='have-an-account'>Already have an account?</a>
          </main>

        </div>
      </form>
    </Font>

  )
}

export default RegisterComponent;