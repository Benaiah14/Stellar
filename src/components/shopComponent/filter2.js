import React from 'react'
import '../../assets/css/'
const Filter2 = ({
    color1,
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
    onChange7,
    filter
}) => {
    return (
        <form action='/checkout' method='GET' className='filter filter2'>
            <div>
                <b className='fil'>Filter</b>
                <b>Sort by:</b>
                <select>
                    <option>Popular</option>
                </select>
            </div>
            <div className='gender'>
                <h1>Gender</h1>
                <section className='men'>
                    <div>
                        <input type='checkbox' />
                        <b>Men</b>
                    </div>
                    <p>1234</p>
                </section>
                <section className='women'>
                    <div>
                        <input type='checkbox' />

                        <b>Women</b>
                    </div>
                    <p>123</p>
                </section>
                <section className='Unisex'>
                    <div>
                        <input type='checkbox' />
                        <b>Unisex</b>
                    </div>
                    <p>3456</p>
                </section>
            </div>
            <div className='size'>
                <h1>Size</h1>
                <div>
                    <p style={{ backgroundColor: color1 }} onClick={onChange1}>ADULT</p>
                    <p style={{ backgroundColor: color2 }} onClick={onChange2}>KIDS</p>

                </div>
            </div>
            <div className='size'>
                <h1>Color</h1>
                <div>
                    <p className='c'></p>
                    <p className='c2'></p>
                    <p className='c3'></p>
                    <p className='c4'></p>
                    <p className='c5'></p>
                    <p className='c6'></p>
                    <p className='c7'></p>
                    <p className='c8'></p>
                    <p className='c9'></p>
                    <p className='c10'></p>
                </div>
            </div>
            <div className='price'>
                <h1>Price</h1>
                <section className='under30'>
                    <div>
                        <input type='checkbox' />
                        <b>Under 30$</b>
                    </div>
                    <b>1234</b>
                </section>
                <section className='p30-50'>
                    <div>
                        <input type='checkbox' />
                        <b>$30-$50</b>
                    </div>
                    <p>123</p>
                </section>
                <section className='p50-100'>
                    <div>
                        <input type='checkbox' />
                        <b>$50-$100</b>
                    </div>
                    <p>3456</p>
                </section>
                <section className='unselected'>
                    <div>
                        <input type='checkbox' />
                        <b>Unselected</b>
                    </div>
                    <p>8000</p>
                </section>
                <section className='p50-100'>
                    <div>
                        <input type='checkbox' />
                        <b>Above $100</b>
                    </div>
                    <p>78</p>
                </section>
            </div>
            <p><input type='submit' value='CHECKOUT' className='checkout' /></p>
        </form>
    )
}

export default Filter2