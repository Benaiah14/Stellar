import React from 'react'
import '../../assets/css/pages/Home/footer.css'
const Footer = () => {
    return (
        <footer className='footer'>
            <div>
                <div>
                    <h1>Stellar</h1>
                    <p>Specialist in Providing you High Quality Products ranging from Fashion to Tech and lot's more</p>
                </div>
                <div className='links'>
                    <section className='s1'>
                        <h1>SHOP</h1>
                        <ul>
                            <li>Curated Picks</li>
                            <li>Featured Products</li>
                            <li>Hot Today</li>
                        </ul>
                    </section>
                    <section className='s2'>
                        <h1>COMPANY</h1>
                        <ul>
                            <li>About us</li>
                            <li>Contact Us</li>
                            <li>Affiliations</li>
                        </ul>
                    </section>
                    <section className='s3'>
                        <h1>SUPPORT</h1>
                        <ul>
                            <li>FAQ'S</li>
                            <li>Cookies Policy</li>
                            <li>Terms of use</li>
                        </ul>
                    </section>
                </div>
            </div>
            <div className='payment'>
                <h1>PAYMENT METHODS</h1>
                <img src={require('../../assets/images/Home/footer/Mastercard-Logo.wine.png')} />
                <img src={require('../../assets/images/Home/footer/1156727_finance_payment_paypal_icon.png')} />
                <img src={require('../../assets/images/Home/footer/3057653_media_payment_social_visa_icon.png')} />
            </div>
            <div className='copyWrite'>
                <p>Copyright 2023 Stellar. All right Reserved Developed by <a href='https://appotg.com'>APPOTG</a></p>
            </div>
        </footer>
    )
}

export default Footer