import React from 'react'
import '../../assets/css/pages/Home/brands.css'
const Brands = () => {
  return (
    //Slider
    //     <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
    //   <div class="carousel-inner">
    //     <div class="carousel-item active" data-bs-interval="10000">
    //       <img src="..." class="d-block w-100" alt="..."/>
    //     </div>
    //     <div class="carousel-item" data-bs-interval="2000">
    //       <img src="..." class="d-block w-100" alt="..."/>
    //     </div>
    //     <div class="carousel-item">
    //       <img src="..." class="d-block w-100" alt="..."/>
    //     </div>
    //   </div>
    //   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span class="visually-hidden">Previous</span>
    //   </button>
    //   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span class="visually-hidden">Next</span>
    //   </button>
    // </div>
    <section className='brands'>
      <h1>Brands</h1>
      <section>
        <img src={require('../../assets/images/Home/Brands/58429476a6515b1e0ad75acd.png')} className='img' />
        <img src={require('../../assets/images/Home/Brands/Apple Logo.png')} className='img' />
        <img src={require('../../assets/images/Home/Brands/Dior_Logo_2022.svg.png')} className='img' />
        <img src={require('../../assets/images/Home/Brands/5842951fa6515b1e0ad75ad0.png')} className='img' />
        <img src={require('../../assets/images/Home/Brands/hewlett-packard-logo-black-and-white.png')} className='img' />
        <img src={require('../../assets/images/Home/Brands/Levis Logo.png')} className='img' />
        <img src={require('../../assets/images/Home/Brands/Gucci-Logo-Transparent-Image.png')} className='img' />
        <img src={require('../../assets/images/Home/Brands/Samsung Logo.png')} className='img' />


      </section>
    </section>
  )
}

export default Brands