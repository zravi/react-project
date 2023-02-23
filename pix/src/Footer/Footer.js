import "./Footer.css";
//import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Footer() {
  const [FooterContent, setFooterContent] = useState();

  useEffect(() => {
    setInterval(() => {
      if (localStorage.getItem("role") === "admin") {
        setFooterContent(
<div>
{/* Sub Footer Starts Here */}
      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright-text">
                <p>
                  Copyright © 2019 Company Name - Design:{" "}
                  <a rel="nofollow" href="https://www.facebook.com/tooplate">
                    Tooplate
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sub Footer Ends Here */}
</div>
      
          

        );
      } else if (localStorage.getItem("role") === "user") {
        setFooterContent(
<div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="logo">
                <img src="assets/images/logo.png" alt="" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">How It Works ?</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12">
              <div className="social-icons">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-rss" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Ends Here */}
      {/* Sub Footer Starts Here */}
      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright-text">
                <p>
                  Copyright © 2019 Company Name - Design:{" "}
                  <a rel="nofollow" href="https://www.facebook.com/tooplate">
                    Tooplate
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sub Footer Ends Here */}
    </div>
          

        );
      } else {
        setFooterContent(
<div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="logo">
                <img src="assets/images/logo.png" alt="" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">How It Works ?</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12">
              <div className="social-icons">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-rss" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Ends Here */}
      {/* Sub Footer Starts Here */}
      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright-text">
                <p>
                  Copyright © 2019 Company Name - Design:{" "}
                  <a rel="nofollow" href="https://www.facebook.com/tooplate">
                    Tooplate
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sub Footer Ends Here */}
    </div>


        );
      }
    }, 2000);
  }, []);

  return (
    <div className="header_section">
      {/*header section start */}
      {FooterContent}

      {/*Footer section end */}
    </div>
  );
}

export default Footer;
