import React from 'react'
import ProductsSlider from '../Products/Products'

import ProductDeatils from '../ProductDetails/ProductDetails'
import ImageSlider from '../Home/Product/Product'
const ProductDetailsPage = () => {
  return (
    <>
      <ProductsSlider />
      <ProductDeatils />
      <section className='single-page top'>
        <div className='container'>
          <h3 className="mb-4">Related Books</h3>
          <ImageSlider />
        </div>
      </section>


      {/* <Faqs/> */}
    </>
  )
}

export default ProductDetailsPage