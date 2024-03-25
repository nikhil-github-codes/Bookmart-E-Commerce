import React, { useEffect } from 'react'
import HomeSlider from '../Home/HomeSlider/HomeSlider'
import HomeAbout from '../Home/HomeAbout/HomeAbout'
import Product from '../Home/Product/Product'
import Product_prepare from '../Home/Product_prepare/Product_prepare'
import ImageSlider from '../Home/Product/Product'
import Api from '../../Api/Api'
function Home() {

  useEffect(()=>{

    Api.getuser().then(res=>{
       console.log("res=>",res)
    })
  },[])

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