import React from 'react'
import HomeSlider from '../Home/HomeSlider/HomeSlider'
import HomeAbout from '../Home/HomeAbout/HomeAbout'
import Product from '../Home/Product/Product'
import Product_prepare from '../Home/Product_prepare/Product_prepare'
import ImageSlider from '../Home/Product/Product'

function Home() {
  return (
    <>
      <HomeSlider/>
      <HomeAbout/>
      {/* <HomeSlider/> */}
      <ImageSlider/>
      {/* <Product/>
      <Product_prepare/> */}
    </>
  )
}

export default Home