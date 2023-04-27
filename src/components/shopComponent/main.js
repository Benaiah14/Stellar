import React from 'react'
import '../../assets/css/pages/Shop/main.css'
import Filter from './filter'
const Main = ({ color1,
    color2,
    color3,
    color4,
    color5,
    color6,
    color7,
    onChange1,
    onChange2,
    onChange3,
    onChange4,
    onChange5,
    onChange6, 
    onChange7
}) => {
    return (
        <div className='mainShop'>
            {<Filter 
            color1={color1}
            color2={color2}
            color3={color3}
            color4={color4}
            color5={color5}
            color6={color6}
            color7={color7}
            onChange1={onChange1}
            onChange2={onChange2}
            onChange3={onChange3}
            onChange4={onChange4}
            onChange5={onChange5}
            onChange6={onChange6}
            onChange7={onChange7}
            />}
            <div className='categories'>
                <img src={require('../../assets/images/Shop/main/211626_bag_icon.png')} />
                <img src={require('../../assets/images/Shop/main/2468546_boy_cloth_men_menwear_stuff_icon.png')} />
                <img src={require('../../assets/images/Shop/main/3058810.png')} />
                <img src={require('../../assets/images/Shop/main/6954982.png')} />
                <img src={require('../../assets/images/Shop/main/9040301_laptop_icon.png')} />
            </div>
            <div className='products'>
                <img src={require('../../assets/images/Shop/main/color #e0e0e0.png')} className='img' />
                <div>
                    <p><b>XXX XXXX<br />XXX XXXX XXX</b></p>
                    <p><b>$XX.XX</b></p>
                </div>
                <img src={require('../../assets/images/Shop/main/review.png')} />
            </div>
            <div className='products'>
                <img src={require('../../assets/images/Shop/main/color #e0e0e0.png')} className='img' />
                <div>
                    <p><b>XXX XXXX<br />XXX XXXX XXX</b></p>
                    <p><b>$XX.XX</b></p>
                </div>
                <img src={require('../../assets/images/Shop/main/review.png')} />
            </div>
            <div className='products'>
                <img src={require('../../assets/images/Shop/main/color #e0e0e0.png')} className='img' />
                <div>
                    <p><b>XXX XXXX<br />XXX XXXX XXX</b></p>
                    <p><b>$XX.XX</b></p>
                </div>
                <img src={require('../../assets/images/Shop/main/review.png')} />
            </div>
            <div className='products'>
                <img src={require('../../assets/images/Shop/main/color #e0e0e0.png')} className='img' />
                <div>
                    <p><b>XXX XXXX<br />XXX XXXX XXX</b></p>
                    <p><b>$XX.XX</b></p>
                </div>
                <img src={require('../../assets/images/Shop/main/review.png')} />
            </div>
            <div className='products'>
                <img src={require('../../assets/images/Shop/main/color #e0e0e0.png')} className='img' />
                <div>
                    <p><b>XXX XXXX<br />XXX XXXX XXX</b></p>
                    <p><b>$XX.XX</b></p>
                </div>
                <img src={require('../../assets/images/Shop/main/review.png')} />
            </div>
            <div className='products'>
                <img src={require('../../assets/images/Shop/main/color #e0e0e0.png')} className='img' />
                <div>
                    <p><b>XXX XXXX<br />XXX XXXX XXX</b></p>
                    <p><b>$XX.XX</b></p>
                </div>
                <img src={require('../../assets/images/Shop/main/review.png')} />
            </div>




        </div>

    )
}

export default Main;