import React from "react"
import { Link } from "react-router-dom"
//import Sdata from "./Sdata"
import { slugify } from "../../utils/utils"
const Cards = ({ item: { _id, productName, productImage, productDescription,productPrice },categoryname}) => {
 //  console.log("categoryname",categoryname)
  // const keyname=Object.keys(image)
  const data={_id, productName, productImage, productDescription,productPrice}
  return (
    <>
      <div className='items'>
        <div className='img'>
          <img src={productImage} alt='Gallery Image' />

          <Link to={{
            pathname: `/${categoryname}/${slugify(productName)}`,
            state: {"data":data}
          }}  className='blogItem-link'>
          <i className='fas fa-external-link-alt'></i>
        </Link>
      </div>
      <div className='ptitle'>
        <h3>{productName} </h3>
      </div>
      <div className='desc'>
        <p>{productDescription}</p>
      </div>

    </div >
    </>
  )
}

export default Cards