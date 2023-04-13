import React from 'react'
import Slider from './slider'
import Brands from './Brands'
import Services from './services'
import CuratedPicks from './curatedPicks'
import Featured from './Featured'
const HomeComponent = () => {
  return (
    <div>
     <Slider />
    <Brands />
    <Services />
  <CuratedPicks />
  <Featured />
    </div>
  )
}

export default HomeComponent