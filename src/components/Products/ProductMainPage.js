import React from "react"
import AllItem from "./AllItems"
import ProductsSlider from "./Products"
import ImageSlider from "../Home/Product/Product"

const ProductMainPage = () => {
  return (
    <div className="mainproduct">
      <ProductsSlider />
      <AllItem />
      <section className='single-page top'>
        <div className='container'>

          <h3 className="mb-4">Related Category</h3>
          <ImageSlider />
        </div>
      </section>

    </div>
  )
}

export default ProductMainPage