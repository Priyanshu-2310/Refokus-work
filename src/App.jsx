import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Product from './components/Product'
import Products from './components/Products'
import Marquess from './components/Marquess'
import Cards from './components/Cards'
import Footer from './components/Footer'

import LocomotiveScroll from 'locomotive-scroll';



const App = () => {
const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='h-full w-full font-["Satoshi"] bg-[#1C1C1C] text-white'>
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquess />
      <Cards />
      <Footer />
    </div>
  )
}

export default App