import "./Nav.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

//import Auth from '../AuthComponent/Auth';
//---conditional rendering-----
function Nav() {
  const [NavContent, setNavContent] = useState();
  const[trackID,setTrackID]=useState();//tracking---

  useEffect(() => {
    setInterval(() => {
      setTrackID(localStorage.getItem("email"));//tracking---
      if (localStorage.getItem("role") === "admin") {
        setNavContent(
          <div>
            {/* content start */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
              <div className="container">
                <a className="navbar-brand" href="#"><img src="assets/images/logo.png" alt="" /></a>
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
                    <li className="nav-item active">
                      <a className="nav-link"><Link to="/admin">Admin-Home</Link></a>
                    </li>
                    <li className="nav-item">
                      <a class="nav-link"><Link to="/manageusers">Manage-users</Link></a>
                    </li>
                    <li className="nav-item">
                      <a class="nav-link"><Link to="/addcat">Add-Category</Link></a>
                    </li>
                    <li className="nav-item">
                      <a class="nav-link"><Link to="/addsubcategory">Add-sub-Category</Link></a>
                    </li>
                    <li className="nav-item">
                    <a class="nav-link"><Link to="/epadmin" >Edit-Profile</Link></a> 
                    </li>
                    <li className="nav-item">
                      <a className="nav-link"><Link to="/logout">Logout</Link></a>
                    </li>                    
                  </ul>
                </div>
              </div>
            </nav>
            {/* content end */}
          </div>
        );
      } else if (localStorage.getItem("role") === "user") {
        setNavContent(
          <div>
            {/* content start*/}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
              <div className="container">
                <a className="navbar-brand" href="#">
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
                    <li className="nav-item active">
                      <a className="nav-link"><Link to="/user">User-Home</Link></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link"><Link to="/searchproduct">Search-Product</Link></a>
                    </li>
                    <li className="nav-item">
                    <a class="nav-link"><Link to="/addproduct" >Add-Product</Link></a>
                    </li>
                    <li className="nav-item">
                    <a class="nav-link"><Link to="/epuser" >Edit-Profile</Link></a> 
                    </li>
                    <li className="nav-item">
                      <a className="nav-link"><Link to="/logout">Logout</Link></a>
                    </li>
                  </ul>                  
                </div>
              </div>
            </nav>
            {/* content end*/}
          </div>
        );
      } else {
        setNavContent(
          <div>
            {/* content start*/}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
              <div className="container">
                <a className="navbar-brand" href="#">
                  <img src="assets/images/logo.png" alt="" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarResponsive"
                  aria-controls="navbarResponsive"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link">
                        <Link to="/">Home</Link>
                        <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link"><Link to="/about">About</Link></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link"><Link to="/contact">Contact</Link></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link"><Link to="/service">Service</Link></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link"><Link to="/register">Register</Link></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link"><Link to="/login">Login</Link></a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* content end*/}
          </div>
        );
      }
    }, 2000);
  }, []);

  return (
    <div className="header_section">
      
      {/* <Auth /> */}
      {/*header section start */}
      {NavContent}
      <span style={{color: "red"}}>{trackID}</span>{/* tracking------ */}

      {/*header section end */}
    </div>
  );
}

export default Nav;
