import React from 'react'
import '../../assets/css/pages/Shop/navbar.css'
const Navbar = () => {
    return (
        <div className='navShop'>
            <div><a href='/'><h1>Stellar</h1></a></div>
            <div className='right'>
                <div className='categories-wrapper'>
                <b className='categories'>FAQ</b>
                <b className='categories'>Hot Today</b>
                <b className='categories'>Curated Picks</b>
                <b className='categories'>Featured Products</b>
                </div>
                <div className='img-wrapper'>
                    <img src={require('../../assets/images/Shop/Navbar/like.JPG')} className='img' />
                    <a href='/cart'><img src={require('../../assets/images/Shop/Navbar/checkout.JPG')} className='img' /></a>
                </div>
                <div className='user-wrapper'>
                    <img src={require('../../assets/images/Shop/Navbar/user.JPG')} className='user' />
                </div>
            </div>
        </div>
    )
}

export default Navbar;