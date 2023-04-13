import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from '../pages/entrance/login'
import Register from '../pages/entrance/Register'
const Router = () => {
  return (
    
    
        <Routes>
            <Route path='/login'element={<Login />}/>
            <Route path='/register'element={<Register />}/>
            
        </Routes>
    
  )
}

export default Router