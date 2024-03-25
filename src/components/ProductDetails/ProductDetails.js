import React, { useState, useEffect } from "react"
import EmptyFile from "../../common/Empty/EmptyFile"
import Sdata from "../Products/Sdata"
import { useParams, useLocation,useHistory} from "react-router-dom"
import "./ProductDetails.css"
import ImageSlider from "../Home/Product/Product"
import { useDispatch, useSelector,} from "react-redux"
import toast from "react-hot-toast"
import Api from "../../Api/Api"
import { addtocart } from "../../Store/Slice/Cartslice"

const ProductDeatils = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const location = useLocation();
  const history=useHistory()
  const dispatch = useDispatch()
  const { data } = location.state;
  const aadata = useSelector((state) => state.cartdata.cartdata);
  const userdata = useSelector((state) => state.auth.user)

  //console.log("data",data)
  const [img, setImg] = useState()
  // useEffect(() => {
  //   let item = Sdata.find((item) => item.id === parseInt(id))
  //   if (item) {
  //     setItem(item)
  //     setImg(item.image)
  //   }
  // }, [id])

  // const hoverHandler = (image, i) => {
  //   setImg(image);

  // };

  // const keyname = img && Object.keys(img)


  const cartadd = async (product) => {
   
    //setLoader(true)
    try {
      const slicedata = { ...aadata, CustomerEmail: userdata?.email, CustomerFirstName: userdata?.firstname, CustomerMobileNumber: userdata?.phoneNO };

      const addproduct = {
        "ProductID": product?._id,
        "Image": product?.productImage,
        "ProductName": product?.productName,   
        "MRP": product?.productPrice,   
        "Qty": 1,
        "SubTotal": 0,  
        "Amount": 0
      };

      // Ensure a new array is created
      slicedata.Products = slicedata.Products.map(product => ({ ...product }));

      const existingProductIndex = slicedata.Products.findIndex(product => product.ProductID === addproduct.ProductID);


      if (existingProductIndex !== -1) {
        // Product with the same ProductID already exists, increment Qty
        slicedata.Products[existingProductIndex] = {
          ...slicedata.Products[existingProductIndex],
          Qty: slicedata.Products[existingProductIndex].Qty + 1
        };
      } else {
        // Product with the same ProductID doesn't exist, add the new product
        slicedata.Products.push(addproduct);
      }



      //console.log("cartdata",slicedata)
     // return false

      const res = await Api.cart(slicedata);
      //  console.log("res",res)
      if (res.code == 0) {
        const resdata = res.data;
        const keysToRemove = ["_v", "_id", "createdAt", "updatedAt"];


        const modifiedCart = Object.fromEntries(
          Object.entries(resdata).filter(([key]) => !keysToRemove.includes(key))
        );
        // console.log("modifiedCart", modifiedCart)
        dispatch(addtocart({ datacart: modifiedCart }));
        // setLoader(false)

        toast.success("Item successfully added to your cart")
        history.push("/cart")
      } else {
        console.error("API call failed");
        // setLoader(false)

        toast.error("Oops! Something went wrong")
      }

    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("Oops! Something went wrong")
      //setLoader(false)
    }
  };


  return (
    <>
      {data ? (
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
                      <img src={data?.productImage} alt='' className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className='side-content'>
                    <h2 className="mb-2">{data?.productName}</h2>
                    {/* <h5>{item.subtitle}</h5> */}
                    {/* <div dangerouslySetInnerHTML={{ __html: item.para }}></div> */}
                    <div>{data?.productDescription}</div>
                    <div className="add-to-cart mt-3">

                      <button className=" cart-btn" onClick={() => cartadd(data)}>Add to cart</button>

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