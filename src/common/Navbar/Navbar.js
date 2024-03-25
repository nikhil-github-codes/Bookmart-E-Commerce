import React, { useState, useEffect } from "react";
import Avatar from 'react-avatar';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Divider } from "@mui/material";
import "./Navbar.css";
import logo from '../../images/logo.jpg';
import { Link } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import { Dropdown } from 'flowbite-react';
import { useDispatch } from "react-redux";
import { logout } from "../../Store/Slice/AuthSlice";
import User from "./user";
import Api from "../../Api/Api";
import { slugify } from "../../utils/utils";
const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [category, setcategory] = useState([])
  const dispatch = useDispatch()
  const onlogout = () => {
    localStorage.clear()
    dispatch(logout())
  }

  useEffect(() => {
    Api.categorylist().then(res => {

      if (res.status == "Success") {
        setcategory(res.data)
      }
    })
  }, [])
  // console.log("category", category)

  return (
    <>
      <Navbar bg="light" expand="lg">
        <div className="container">
          <Navbar.Brand href="/">
            <img src={logo} alt='Ascentia' className="img-fluid" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              {/* <Nav.Link href="/about">About us</Nav.Link> */}

              {/* Product dropdown */}
              <NavDropdown title="Books" id="basic-nav-dropdown">
                {/* <NavDropdown.Item href="/book/category1">Category 1</NavDropdown.Item>
                <NavDropdown.Item href="/book/category2">Category 2</NavDropdown.Item> */}
                {category.length > 0 && category.map((item, ind) => <><NavDropdown.Item key={ind} >
                  {/* {item?.categoryName} */}
                  {/* <Link to={`/book/${item?.categoryName}`}> */}
                  <NavDropdown.Item key={ind}>
                    <Link to={{ pathname: `/book/${slugify(item?.categoryName)}`, state: { id: item?._id } }}>
                      {item?.categoryName}
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown.Item></>)}
                {/* Add more items as needed */}
              </NavDropdown>

              {/* <Nav.Link href="/media">Media</Nav.Link> */}
              <Nav.Link href="/contact">Contact</Nav.Link>

              <User />

              {/* <NavDropdown   title={<Avatar size="30" name="John Doe" round={true} />}  id="avatar-dropdown" className="avatar-dropdown-toggle">
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="/settings">Cart</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/" onClick={()=>onlogout()}><Logout /> Logout</NavDropdown.Item>
              </NavDropdown> */}

              {/* <Dropdown
                // label={<Avatar alt="User settings" img="/images/people/profile-picture-5.jpg" rounded />}
                label={<Avatar size="30" name="John Doe" round={true} />}
                arrowIcon={false}
                inline
              >
                <Dropdown.Header>
                  <span className="block text-sm">Bonnie Green</span>
                  <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Sign out</Dropdown.Item>
              </Dropdown> */}

              {/* <Nav.Link href="/career">Career</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
