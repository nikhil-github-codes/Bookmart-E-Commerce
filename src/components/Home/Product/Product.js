import React from 'react'
import WebpageVideo from '../../../Videos/WebpageVideo.mp4';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import '../../ProductDetails/ProductDetails.css"'


const ImageSlider = ({ data }) => {
  //  console.log("SliderData",data)
  // const sliderSettings = {
  //   dots: true, 
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   autoplay: true,
  // };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 320, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 425, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };


  const slides = [
    {
      image: 'https://s3.amazonaws.com/ebcwebstore/images/ebc-combo-of-new-criminal-major-bare-acts-Product_Image_01.01.2024.png',
      caption: 'Slide 1 Caption',
    },
    {
      image: 'https://s3.amazonaws.com/ebcwebstore/images/criminal-manual-containing-bnss-bns-bsa-2024-edition.jpg',
      caption: 'Slide 2 Caption',
    },
    {
      image: 'https://s3.amazonaws.com/ebcwebstore/images/a-7008.jpg',
      caption: 'Slide 1 Caption',
    },
    {
      image: 'https://s3.amazonaws.com/ebcwebstore/images/SCC-4-plus-1-red-signature-pack.png',
      caption: 'Slide 2 Caption',
    },


    {
      image: 'https://s3.amazonaws.com/ebcwebstore/images/ebc-combo-of-new-criminal-major-bare-acts-Product_Image_01.01.2024.png',
      caption: 'Slide 1 Caption',
    },
    {
      image: 'https://s3.amazonaws.com/ebcwebstore/images/criminal-manual-containing-bnss-bns-bsa-2024-edition.jpg',
      caption: 'Slide 2 Caption',
    },
    {
      image: 'https://s3.amazonaws.com/ebcwebstore/images/a-7008.jpg',
      caption: 'Slide 1 Caption',
    },
    {
      image: 'https://s3.amazonaws.com/ebcwebstore/images/SCC-4-plus-1-red-signature-pack.png',
      caption: 'Slide 2 Caption',
    },

  ];

  return (
    <div className="slider-container mb-2">
      <Slider {...sliderSettings}>
        {slides.map((slide, index) => (
          // <div key={index}>
          //   <img src={slide.image}alt={`Slide ${index + 1}`} />
          //   <div className="caption">{slide.caption}</div>
          // </div>
          // <div className="slidde" style={{ float: 'left', listStyle: 'none', position: 'relative', marginRight: '30px' }} aria-hidden="false">
          //   <div className="slid_img_div">
          //     <a href="https://www.ebcwebstore.com/product/ebc-combo-of-new-criminal-major-bare-acts?products_id=99107133">
          //       <img src={slide.image} className="slide_imge" style={{ boxShadow: '3px 3px 3px #747474' }} alt="EBC's Combo of New Criminal Major Bare Acts" />
          //     </a>
          //   </div>
          //   <div className="slid_title_div" style={{ width: '135px' }}>
          //     <a href="" className="title_elipsis" title="EBC's Combo of New Criminal Major Bare Acts">EBC's Combo of New Criminal Major Bare Acts</a>
          //   </div>
          //   <div className="slid_author_div">By EBC</div>
          //   <div className="rateing"><img src="https://s3.amazonaws.com/ebcwebstore/images/rate5.png" alt="Rating" /></div>
          //   {/* <div className="price">
          //     <small><i>Click on TITLE to choose available options.</i></small>
          //   </div> */}
          // </div>
          <div className='row'>
            <div className='col-12 d-flex justify-content-center'>

              <div className="slid_img_div">

                <img src={slide.image} className="slide_imge" style={{ boxShadow: '3px 3px 3px #747474' }} alt="EBC's Combo of New Criminal Major Bare Acts" />

              </div>
              {/* <div className='row'>

            
              </div> */}

            </div>
            <div className='col-12 d-flex justify-content-center'>

              <figure>
                {/* <blockquote class="blockquote">
                  <p>EBC's Combo of New Criminal Major Bare Acts.</p>
                </blockquote> */}
                <p>EBC's Combo of New Criminal Major Bare Acts.</p>
                <figcaption class="blockquote-footer">
                  <cite title="Source Title"> <span className='text-align-end'>By EBC</span></cite>
                </figcaption>
              </figure>

              {/* <p>EBC's Combo of New Criminal Major Bare Acts</p> */}

              {/* <div className="slid_author_div">By EBC</div> */}

            </div>


          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider


// function Product() {
//   return (
//       <video autoPlay loop muted style={{ width:"100%"}}>
//         <source src={WebpageVideo} type="video/mp4" />
//       </video>
//   )
// }

// export default Product