import React, { useState } from 'react'
import RegisterComponent from '../../components/entranceComponent/registerComponent'
import '../../assets/css/entrance/register.css'
const Register = () => {
  const [email, setEmail] = useState(true)
  const [password, setPassword] = useState(true)
  const [password2, setPassword2] = useState(true)
  

  const turnEmail = () => {
    setEmail(false);
  }
  const turnPassword = () => {
    setPassword(false);
  }
  const turnPassword2 = () => {
    setPassword2(false);
  }
  return (
  
    <RegisterComponent
      turnEmail={turnEmail}
      turnPassword={turnPassword}
      turnPassword2={turnPassword2}
      email={email}
      password={password}
      password2={password2}
    />
  )
}

export default Register