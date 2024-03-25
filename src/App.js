import "@fontsource/montserrat";
import "./App.css"
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './common/Navbar/Navbar'
import Footer from "./common/Footer/Footer"
import Career from "./components/Career/Career"
import Home from "./components/Pages/Home"

// import Products from "./components/Products/ProductHome"
import ProductMainPage from "./components/Products/ProductMainPage";

import Media from "./components/Media/Media"
import Contact from "./components/Contact/Contact"
import About from "./components/About/About"
import { useState } from "react";
import ProductDetailsPage from "./components/Pages/Productdetailpage";
import Registration from "./Auth/Registration";
import Login from "./Auth/Login";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Cart from "./components/cart/cart";

function App() {
  const isLoggedIn=useSelector((state)=>state.auth.auth)
  
  useEffect(() => {
    // Accessing scss variable "--background-color"
    // and "--text-color" using plain JavaScript
    // and changing the same according to the state of "darkTheme"
    const root = document.documentElement;
    root?.style.setProperty(
      "--font-family", "Montserrat"
      //darkTheme ? "#262833" : "#fff"
    );
    root?.style.setProperty("--font-family", "Montserrat");
  
  }, []);
  const pathname = window.location.pathname;

  //const isHome = pathname === "/";
  

  return (
    <>

      {isLoggedIn?
        <Router>
          
          <Header />

          <Switch>
            <Route path='/' component={Home} exact></Route>
            <Route path='/registration' component={Registration} exact></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/career' component={Career}></Route>

            <Route path='/book/:category' component={ProductMainPage}></Route>
            <Route path='/:category/:bookname' component={ProductDetailsPage} ></Route>
            <Route path='/media' component={Media}></Route>
            <Route path='/contact' component={Contact}></Route>
            <Route path='/cart' component={Cart}></Route>




          </Switch>
        
          <Footer />
        </Router>
        :
        <>
          <Router>
           

            <Switch>
              <Route path='/' component={Login} exact></Route>
              {/* <Route path='/' component={Login} exact></Route> */}
              <Route path='/registration' component={Registration} exact></Route>
              




            </Switch>
          
          </Router>
        </>
      }
      <Toaster position="top-right" />
    </>
  )
}

export default App