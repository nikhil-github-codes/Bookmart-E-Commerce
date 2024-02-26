import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../images/001.jpg";
import img2 from "../../images/002.jpg";
import img3 from "../../images/003.jpg";
import img4 from "../../images/004.jpg";
import bannerimg1 from '../../images/Criminal_Banner-1.jpg'
import bannerimg2 from '../../images/Criminal_Banner-2.jpg'

const sliders = [
  {
    id: 1,
    image_name_1: bannerimg1,
    image_name_2: "home1.png",
    text_1: "homeslider 1",
    text_2: "homeslider 2",
    link: "https://www.ebcwebstore.com/product_info.php?products_id=99107133",
    is_active: true
  },
  {
    id: 2,
    image_name_1: bannerimg2,
    image_name_2: "home2.png",
    text_1: "homeslider 2",
    text_2: "homeslider 3",
    link: "https://www.ebcwebstore.com/product_info.php?products_id=99107133",
    is_active: true
  },
  {
    id: 3,
    image_name_1: bannerimg1,
    image_name_2: "home3.png",
    text_1: "homeslider 3",
    text_2: "homeslider 3",
    link: "https://www.ebcwebstore.com/product_info.php?products_id=99107133",
    is_active: true
  },
  {
    id: 4,
    image_name_1: bannerimg2,
    image_name_2: "home4.png",
    text_1: "homeslider 1",
    text_2: "homeslider 1",
    link: "https://www.ebcwebstore.com/product_info.php?products_id=99107133",
    is_active: true
  }
]
const ProductsSlider = () => {
  return (

    <Carousel>
      {sliders.map((item, ind) => {
        return <Carousel.Item key={ind}>
          <img className="d-block w-100" src={item.image_name_1} />

        </Carousel.Item>



      })}

    </Carousel>
    // <Carousel>
    //   <Carousel.Item interval={1000}>
    //     <img  className="d-block w-100"  src={img1}  />

    //   </Carousel.Item>
    //   <Carousel.Item interval={500}>
    //     <img className="d-block w-100" src={img2} />

    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img className="d-block w-100" src={img3} />

    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img className="d-block w-100" src={img4} />

    //   </Carousel.Item>
    // </Carousel>
  );
}

export default ProductsSlider;