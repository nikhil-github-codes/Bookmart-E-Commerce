import React, { useState, useEffect } from "react"
import EmptyFile from "../../common/Empty/EmptyFile"
import Sdata from "../Products/Sdata"
import { useParams } from "react-router-dom"
import "./ProductDetails.css"
import ImageSlider from "../Home/Product/Product"


const ProductDeatils = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  const [img, setImg] = useState()
  useEffect(() => {
    let item = Sdata.find((item) => item.id === parseInt(id))
    if (item) {
      setItem(item)
      setImg(item.image)
    }
  }, [id])

  const hoverHandler = (image, i) => {
    setImg(image);

  };

  const keyname = img && Object.keys(img)


  return (
    <>
      {item ? (
        <section className='single-page top'>
          <div className='container'>


            <article className='content flex'>
              <div className='row'>
                <div className="col-md-6 mb-4">
                  <div className="row">
                    {/* <div className="col-3">
                      {item.images.map((image, i) => (
                        <div
                          className='img_wrap active'
                          key={i}
                          onMouseOver={() => hoverHandler(image, i)}
                        >
                          <img src={image} alt="" className="img-fluid" />
                        </div>
                      ))}
                    </div> */}
                    <div className='col-12'>
                      <img src={img[keyname]} alt='' className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className='side-content'>
                    <h2 className="mb-2">{item.singletitle}</h2>
                    <h5>{item.subtitle}</h5>
                    <div dangerouslySetInnerHTML={{ __html: item.para }}></div>
                    <div className="add-to-cart mt-3">

                      <button className=" cart-btn">Add to cart</button>

                    </div>
                  </div>
                </div>

              </div>



            </article>


          </div>
        </section>
      ) : (
        <EmptyFile />
      )}

    </>
  )
}

export default ProductDeatils