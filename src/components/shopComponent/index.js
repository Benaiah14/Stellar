import React from 'react'
import Navbar from './Navbar'
import Filter from './filter'
import Main from './main'

const ShopComponent = ({ filter, onClick1, onClick2, onClick3, color1, color2, color3, color4, color5, color6, color7, onChange1, onChange2, onChange3, onChange4, onChange5, onChange6, onChange7 }) => {
  return (
    <div>
      <div>
        <Navbar />

      </div>
      <Main
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
        onClick1={onClick1}
        onClick2={onClick2}
        onClick3={onClick3}
        onChange7={onChange7}
        filter={filter}
      />
    </div>
  )
}

export default ShopComponent