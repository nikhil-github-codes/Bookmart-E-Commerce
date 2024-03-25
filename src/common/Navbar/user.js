import React, { useEffect, useState } from "react";
import { DropdownToggle, DropdownMenu, Dropdown } from "reactstrap";
import { Link,useHistory} from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../Store/Slice/AuthSlice";
import { Logout, Settings } from "@mui/icons-material"
import Avatar from "./Avatar";
import "./Navbar.css";
import { IconButton } from "@mui/material";
const User = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const history=useHistory();
    const toggle = () => setOpen((prevState) => !prevState);

    const handleSignout = () => {
        dispatch(logout());
        localStorage.clear();
        history.push('/')
    };




    return (
        <Dropdown isOpen={open} toggle={toggle}>

            <DropdownToggle
                tag="a"
                href="#toggle"
                className="dropdown-toggle"
                onClick={(ev) => {
                    ev.preventDefault();
                }}
            >
                <div className="user-toggle">
                    <div className="user-info d-none d-md-block">
                        <div className="user-status">
                            <Avatar size={30} text="J" bgColor="#007bff" textColor="#fff" />
                        </div>
                        {/* <Avatar size="30" name="John Doe" round={true} /> */}
                    </div>
                </div>
                {/* <Avatar size="30" name="John Doe" round={true} /> */}
                {/* Hide the dropdown icon */}
                <style>
                    {`.dropdown-toggle::after {
                    display: none;
                }`}
                </style>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-md dropdown-menu-s1" style={{ marginTop: "3px", marginRight: "-73px" }}>
                {/* <div className="dropdown-inner user-card-wrap d-none d-md-block">
                    <div className="user-card sm">
                        <div className="user-info">
                            <span className="lead-text">Status Online/Offline</span>
                        </div>
                    </div>
                </div> */}
                <div className="dropdown-inner">
                    <ul className="link-list">
                        <li className="link-item" onClick={toggle}>
                            <Link to="/profile">
                                <i className="icon user-alt"></i>
                                <span>Profile</span>
                            </Link>
                        </li>
                        <li className="link-item" onClick={toggle}>
                            <Link to="/cart">
                                <i className="icon setting-alt"></i>
                                <span>Cart</span>
                            </Link>
                        </li>

                        <li className="link-item" onClick={toggle}>
                            <Link to="#">
                                <i className="icon activity-alt"></i>
                                <span>Settings</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr class="hr hr-blurry" />
                <div className="dropdown-inner">
                    <ul className="link-list">
                        <li className="link-item" onClick={handleSignout}>
                            {/* <IconButton onClick={()=>handleSignout()}> */}
                                {/* <Link to="#"> */}
                                {/* <i className="icon signout"></i> */}
                                <Logout className="icon" />
                                <span>Logout</span>
                                {/* </Link> */}
                            {/* </IconButton> */}

                        </li>
                    </ul>
                </div>
            </DropdownMenu>
        </Dropdown>
    );
};

export default User;
