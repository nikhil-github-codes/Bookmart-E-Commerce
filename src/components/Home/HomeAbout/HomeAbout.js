import React from "react"
import "./HomeAbout.css"
import aboutus from '../../../images/abouts-2.png'
const HomeAbout = () => {
  return (
    <>
      <section className='aboutSection'>
        <div className='container'>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={aboutus} alt='' className='img-fluid' />
            </div>
            <div className="col-md-6">
              <div className="ps-sm-5">
                <h1>About Us</h1>
                <p>
                At BookMart, we bring the joy of reading to your fingertips. Dive into a world of captivating stories, informative guides, and literary wonders, all conveniently accessible from the comfort of your own home.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeAbout