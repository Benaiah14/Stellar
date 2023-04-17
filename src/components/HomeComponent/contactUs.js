import React from 'react'
import '../../assets/css/pages/Home/contactUs.css'
import {IoMdMail} from 'react-icons/io'
const ContactUs = () => {
  return (
    <div className='contactUs'>
        <h1>Subscribe To Our NewsLetter to get update to our latest collections</h1>
        <p>Get 20% off on your first order just by subsribing to our news letter</p>
        <form action='/'>
            <input type='email' className='email' name='email' placeholder={'Enter your Mail'}/>
            <input type='submit' className='submit' value='Subsribe'/>
        </form>
    </div>
  )
}

export default ContactUs