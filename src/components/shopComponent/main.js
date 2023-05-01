import React from 'react'
import '../../assets/css/pages/Shop/main.css'
import Filter from './filter'
import Filter2 from './filter2'
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
    onClick1,
    onClick2,
    onClick3,
    onChange7,
    filter
}) => {
    return (
        <div className='mainShop'>
            {filter ==='1'?<Filter 
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
            />:null}{filter==='2'?<Filter2
            color1={color1}
            color2={color2}
            color3={color3}
            filter={filter}
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
            />:null}
            <div className='categories'>
            {filter==='1'?<img src={require('../../assets/images/Shop/main/bad dark.png')} style={{width: '3rem'}} onClick={onClick1} />:<img src={require('../../assets/images/Shop/main/211626_bag_icon.png')} onClick={onClick1} />}
                <img src={require('../../assets/images/Shop/main/2468546_boy_cloth_men_menwear_stuff_icon.png')} onClick={onClick2}/>
                <img src={require('../../assets/images/Shop/main/3058810.png')} onClick={onClick3}/>
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