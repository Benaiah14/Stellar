import React from 'react'


import '../../assets/css/pages/Home/featured.css'
import Font from 'react-font'

const Featured = () => {
    return (
        <section className='feature'>
          <div className='it'><h1>Featured Picks</h1><img src={require('../../assets/images/Home/Offered Items/swiper.png')} className='swiper' /></div>

            <section className='under'>
                <div>

                    <img src={require('../../assets/images/Home/featured-picks/DenimShirt (1).jpg')} />
                    <div>
                        <div className='d1'><p>Denim Shirt</p><h1>$23.99</h1>
                        </div>
                        <img src={require('../../assets/images/Home/featured-picks/shop.JPG')} className='img1 ' />
                    </div>
                </div>
                <div>
                    <img src={require('../../assets/images/Home/featured-picks/OakleySunglasses.jpg')} className='img' />
                    <div>
                    <div className='o1'><p>Oakley Sunglasses</p><h1>$11.99</h1></div>
                    
                <img src={require('../../assets/images/Home/featured-picks/shop.JPG')} className='img2' />
                </div>
                </div>
                <div>
                    <img src={require('../../assets/images/Home/featured-picks/FemalesDiorShirt.jpg')} className='img' />
                    <div><div><p>Females Dior Shirt</p><h1>$72.99</h1></div>
                    <img src={require('../../assets/images/Home/featured-picks/shop.JPG')} className='img3' />
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Featured;