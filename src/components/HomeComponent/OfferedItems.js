import React from 'react'
import '../../assets/css/pages/Home/offeredItems.css'
import { IoMdArrowForward } from 'react-icons/io'
const OfferedItems = () => {
    return (
        <section className='offeredItems'>
            <div className='first'><h1>OFFERED ITEMS</h1></div>
            <div className='b'>
                <img src={require('../../assets/images/Home/Offered Items/211626_bag_icon.png')} className='img' />
                <img src={require('../../assets/images/Home/Offered Items/2468546_boy_cloth_men_menwear_stuff_icon.png')} className='img' />
                <img src={require('../../assets/images/Home/Offered Items/3058810.png')} className='img' />
                <img src={require('../../assets/images/Home/Offered Items/6954982.png')} className='img' />
                <img src={require('../../assets/images/Home/Offered Items/9040301_laptop_icon.png')} className='img' />
            </div>
            <div className='a'><a className='viewShop' href='/shop'>View shop <IoMdArrowForward /></a></div>
        </section>
    )
}

export default OfferedItems