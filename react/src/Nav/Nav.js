import "./Nav.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Auth from '../AuthComponent/Auth';
//---conditional rendering-----
function Nav() {
  const [NavContent, setNavContent] = useState();
  const[trackID,setTrackID]=useState();//tracking---

  useEffect(() => {
    setInterval(() => {
      setTrackID(localStorage.getItem("email"));//tracking---
      if (localStorage.getItem("role") === "admin") {
        setNavContent(
          <>
            {/* content start */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
              <div className="container">
                <a className="navbar-brand" href="/admin">
                <img src="assets/images/logo.png" alt="" /></a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarResponsive"
                  aria-controls="navbarResponsive"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active nav-link"><Link to="/admin">Admin-Home</Link></li>
                    <li className="nav-item nav-link"><Link to="/manageusers">Manage-users</Link></li>
                    <li className="nav-item nav-link"><Link to="/addcat">Add-Category</Link></li>
                    <li className="nav-item nav-link"><Link to="/addsubcategory">Add-sub-Category</Link></li>
                    <li className="nav-item nav-link"><Link to="/epadmin" >Edit-Profile</Link></li>
                    <li className="nav-item nav-link"><Link to="/logout">Logout</Link></li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* content end */}
          </>
        );
      } else if (localStorage.getItem("role") === "user") {
        setNavContent(
          <>
            {/* content start*/}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
              <div className="container">
                <a className="navbar-brand" href="/user">
                  <img src="assets/images/logo.png" alt="" /></a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarResponsive"
                  aria-controls="navbarResponsive"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" /></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active nav-link"><Link to="/user">User-Home</Link></li>
                    <li className="nav-item nav-link"><Link to="/searchproduct">Search-Product</Link></li>
                    <li className="nav-item nav-link"><Link to="/addproduct" >Add-Product</Link></li>
                    <li className="nav-item nav-link"><Link to="/epuser" >Edit-Profile</Link></li>
                    <li className="nav-item nav-link"><Link to="/logout">Logout</Link></li>        
                  </ul>                  
                </div>
              </div>
            </nav>
            {/* content end*/}
          </>
        );
      } else {
        setNavContent(
          <>
            {/* content start*/}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
              <div className="container">
                <a className="navbar-brand" href="/">
                  <img src="assets/images/logo.png" alt="" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarResponsive"
                  aria-controls="navbarResponsive"
                  aria-expanded="false"
                  aria-label="Toggle navigation"><span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active nav-link"><Link to="/">Home</Link>
                        <span className="sr-only">(current)</span>                      
                    </li>
                    <li className="nav-item nav-link"><Link to="/about">About</Link></li>
                    <li className="nav-item nav-link"><Link to="/contact">Contact</Link></li>
                    <li className="nav-item nav-link"><Link to="/service">Service</Link></li>
                    <li className="nav-item nav-link"><Link to="/register">Register</Link></li>
                    <li className="nav-item nav-link"><Link to="/login">Login</Link></li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* content end*/}
          </>
        );
      }
    }, 2000);
  }, []);

  return (
    <div className="header_section">
      
      <Auth />
      {/*header section start */}
      {NavContent}
      <span style={{color: "red"}}>{trackID}</span>{/* tracking------ */}

      {/*header section end */}
    </div>
  );
}

export default Nav;
