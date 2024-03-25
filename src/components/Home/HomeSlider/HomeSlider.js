import React from "react";
import { Carousel } from "react-bootstrap";
import './HomeSlider.css'
import bannerimg1 from '../../../images/Criminal_Banner-1.jpg'
import bannerimg2 from '../../../images/Criminal_Banner-2.jpg'
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
    image_name_1:bannerimg1,
    image_name_2: "home3.png",
    text_1: "homeslider 3",
    text_2: "homeslider 3",
    link: "https://www.ebcwebstore.com/product_info.php?products_id=99107133",
    is_active: true
  },
  {
    id: 4,
    image_name_1:bannerimg2,
    image_name_2: "home4.png",
    text_1: "homeslider 1",
    text_2: "homeslider 1",
    link: "https://www.ebcwebstore.com/product_info.php?products_id=99107133",
    is_active: true
  }
]




const Products = () => {
  return (
    <div className="slide-wrap">
      <Carousel controls={false} className="mainslider firstSlider">
        {sliders.map((slider) => {
          // return <Mcard key={item.id} item={item} />
          return <Carousel.Item interval={300000} className="carouselitem" key={slider.id}>
            <a >
              {/* <img className="d-block w-100 slider-img" src={`images/sliders/${slider.image_name_1}`} alt={slider.text_1} /> */}
              <img className="slider-img2" src={slider.image_name_1} alt={slider.text_1} />
            </a>
            <div className="btnhome">
              <a href={slider.link} className='slider-btn homebutton'>
                Shop Now</a>
            </div>
          </Carousel.Item>
        })}
      </Carousel>
      {/* <Carousel fade className="mainslider subslider carousel slide top-to-bottom">
        {sliders.map((slider) => {
         
          return <Carousel.Item interval={300000} className="carouselitem" key={slider.id}>
            <a >
              
              <img className="slider-img2" src={`images/sliders/${slider.image_name_2}`} alt={slider.text_2} />
            </a>
            <div className="btnhome">
              <a href={slider.link} className='slider-btn homebutton'>
                Shop Now</a>
            </div>
          </Carousel.Item>
        })}
      </Carousel> */}
    </div>
  );
}

export default Products;