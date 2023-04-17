import React from 'react'
import Font from 'react-font'
import '../../assets/css/pages/Home/curatedPicks.css'
import { IoMdArrowForward } from 'react-icons/io'
const CuratedPicks = () => (
    <section className='curatedPick'>
        <Font family='Poppins' weight={900}><h1>Curated Picks</h1></Font>
        <main className='curatedPicks'>
            <div className='img i1'>
                <a href='#' className='anchor'>Best Seller <IoMdArrowForward /></a>
            </div>
            <div className='img i2'>
                <a href='#' className='anchor'>Shop Men <IoMdArrowForward /></a>
            </div>
            <div className='img i3'>
                <a href='#' className='anchor'>Shop Women <IoMdArrowForward /></a>
            </div>
            <div className='img i4'>
                <a href='#' className='anchor'>Shop Kids <IoMdArrowForward /></a>
            </div>
        </main>
    </section>
)

export default CuratedPicks