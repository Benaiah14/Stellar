import React from 'react'
import Slider from './slider'
import Brands from './Brands'
import Services from './services'
import CuratedPicks from './curatedPicks'
import Featured from './Featured'
import OfferedItems from './OfferedItems'
import Progress from '../common/progress'
import LimitedOffer from './limitedOffer'
import ContactUs from './contactUs'
import Footer from './Footer'
const HomeComponent = () => {
  return (
    <div>
      <Slider />
      <Brands />
      <OfferedItems />
      <Services />
      <CuratedPicks />
      <Featured />
      <Progress />
      <LimitedOffer />
      <ContactUs />
      <Footer />
    </div>
  )
}
export default HomeComponent