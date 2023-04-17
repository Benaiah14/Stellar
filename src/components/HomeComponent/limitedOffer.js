import React from 'react'
import { IoMdArrowForward } from 'react-icons/io';
import '../../assets/css/pages/Home/limitedOffer.css'
const LimitedOffer = () => {
  return (
    <div className='limitedOffer'>
        <img src={require('../../assets/images/Home/unnamed.jpg')} className='img'/>
        <div>
            <h1 className='hfirst'>Limited Offer</h1>
            <h1 className='hsecond'>35% Off This Friday and get special gift</h1>
            <a href='/shop'>Order Now <IoMdArrowForward /></a>
        </div>
    </div>
  )
}

export default LimitedOffer;