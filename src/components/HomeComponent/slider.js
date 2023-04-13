import React from 'react'
import { IoMdArrowForward } from 'react-icons/io'
import '../../assets/css/pages/Home/slider.css'
const Slider = () => {
  return (
    <header className='upper'>
        <img src={require('../../assets/images/Home/header/model.png')} className='img'/>
      <div>
        <h1 className='level'>Level Up Your <br />Style with our <br />Summer <br />Collections</h1>
        <a className='shopNow' href='/shop'>Shop Now <IoMdArrowForward /></a>
      </div>
    </header>
  )
}

export default Slider