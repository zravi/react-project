import "./About.css";
//import { useState } from "react";

function About() {
  return (
    <div>
      {/* About Page Starts Here */}
      <div className="about-page">
        <div className="mica">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <div className="line-dec" />
                <h1>About Us</h1>
              </div>
            </div>
            <div className="col-md-6">
              <div className="left-image">
                <img src="assets/images/about-us.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-content">
                <h4>Phasellus vel interdum elit</h4>
                <p><a href="">Photo Credit</a>{" "}
                  goes to Pexels website. Aliquam erat volutpat. Pellentesque
                  fringilla, ligula consectetur cursus scelerisque, leo elit
                  pellentesque sapien, et pharetra arcu elit vitae sem.
                  Suspendisse erat dui, condimentum in mi ac, varius tempor
                  sapien. Donec in justo sit amet ex aliquet maximus ac quis
                  erat.
                </p>
                <br />
                <p>
                  Donec fermentum tincidunt tellus quis fermentum. Proin eget
                  imperdiet purus. Nulla facilisi. Aliquam tincidunt porttitor
                  dui sed euismod. Duis est libero, rhoncus fermentum turpis id,
                  tempus fringilla ipsum. Nullam venenatis tincidunt neque vel
                  hendrerit. Suspendisse porta pretium porttitor.
                </p>
                <br />
                <p>
                  Sed purus quam, ultricies eu leo in, sollicitudin varius quam.
                  Proin dictum urna ac diam fermentum tempus. Pellentesque urna
                  urna, ullamcorper a tincidunt dignissim, venenatis in nisi.
                  Vivamus in volutpat tellus. Etiam fermentum luctus posuere.
                </p>
                <br />
                <p>
                  <a
                    rel="nofollow"
                    href="https://www.tooplate.com/view/2114-pixie"
                  >
                    Pixie HTML Template
                  </a>{" "}
                  can be converted into your desired CMS theme. You can use this
                  Bootstrap v4.1.3 layout for any online shop. Please tell your
                  friends about{" "}
                  <a rel="nofollow" href="https://www.facebook.com/tooplate/">
                    Tooplate
                  </a>
                  . Thank you.
                </p>
                <div className="share">
                  <h6>
                    Find us on:{" "}
                    <span>
                      <a href="#"><i className="fa fa-facebook" /></a>
                      <a href="#"><i className="fa fa-linkedin" /></a>
                      <a href="#"><i className="fa fa-twitter" /></a>
                    </span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Page Ends Here */}
    </div>
  );
}

export default About;
