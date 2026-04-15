import React from 'react'
import Hero from './Hero'
import LeftSection from './LeftSection'
import kite from '../../assets/images/kite.png'

function Product() {
  return (
    <div>
      <Hero />
<LeftSection 
  imageSrc={kite}
  title="Kite"
  description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, and an elegant UI. Enjoy the Kite experience seamlessly on your Android and iOS devices."
  trydemo="#"
  learnmore="#"
/>    </div>
  )
}

export default Product



