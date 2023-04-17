import React, { useEffect, useState } from 'react'
import '../../assets/css/Navigation/navbar.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { BiArrowBack } from 'react-icons/bi'
import Font from 'react-font'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Navbar = () => {

  const [start, setStart] = useState(true)
  const onClick = () => {
    setStart(false)
  }
  return (
    <Font family='Poppins' weight={400}>
      <nav>
        {start && (<div><header className='spacer30'></header>
          <div className='top'>
            <div> </div>
            <div className='top2'><p className='s10'>Sign up and GET 20% OFF for your first order</p>
              <a className='sign-up' href=''>Sign up now</a></div>
            <a className='top3' href='#' onClick={onClick}>X</a>
          </div></div>)}
        <div className='nav'><h2 className='stellar'>Stellar</h2>
          <a href='#' className='categories'>New & featured</a>
          <a className='categories' href='#'>Men </a>
          <a className='categories' href='#'>Woman</a>
          <a className='categories' href='#'>Kids</a>
          <a className='categories' href='#'>Accessories</a>
          <a className='categories' href='#'>Sales</a>

          <input type='search' placeholder='Search' className='search' />
          <a href='/shop'><AiOutlineShoppingCart /></a>
          <a href='/login'><BsFillPersonFill /></a>

        </div>
      </nav>
    </Font>
  )
}

export default Navbar;