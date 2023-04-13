import React from 'react'
import '../../assets/css/pages/Home/services.css'

const Services = () => {
    return (
        <section>
            <div className='header'>
                <h1 className='h'>We Provide best <br />Customer Experience</h1>
                <p className='p'>We ensure our customers have the best shopping experience</p>
            </div>

            <article className='main'>
                <section className='services'>
                    <p><b>Original products</b></p>
                    <p>We provide money back guarantee if the products are not original</p>
                </section>
                <section className='services'>
                    <p><b>Satisfaction Guaranteed</b></p>
                    <p>Exchange the products you've purchased if it does not fit you</p>
                </section>
                <section className='services'>
                    <p><b>New Arrival Everyday</b></p>
                    <p>We update our collections almost everyday</p>
                </section>
                <section className='services'>
                    <p><b>Fast and free shipping</b></p>
                    <p>We offer fast and free shipping for our Loyal customers</p>
                </section>
            </article>
        </section>
    )
}

export default Services