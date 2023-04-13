import React from 'react'

import '../../assets/css/pages/Home/curatedPicks.css'
import '../../assets/css/pages/Home/featured.css'
import Font from 'react-font'

const Featured = () => {
    return (
        <section className='feature'>
            <Font family='Poppins' weight={900}><h1>Featured Picks</h1></Font>
            <main className='featured'>
                <div className='img i1 a1'>

                </div>
                <div className='img i2 a2'>

                </div>
                <div className='img i3 a3'>

                </div>

            </main>
            <section className='under'>
                <div>
                    <div className='d1'><p>Denim Shirt</p><h1>$23.99</h1></div>
                    <img src={require('../../assets/images/Home/featured-picks/shop.JPG')} className='img1 '/>
                </div>
                <div>
                    <div className='o1'><p>Oakley Sunglasses</p><h1>$11.99</h1></div>
                    <img src={require('../../assets/images/Home/featured-picks/shop.JPG')} className='img2'/>
                </div>
                <div>
                    <div><p>Females Dior Shirt</p><h1>$72.99</h1></div>
                    <img src={require('../../assets/images/Home/featured-picks/shop.JPG')} className='img3'/>
                </div>
            </section>
        </section>
    )
}

export default Featured;