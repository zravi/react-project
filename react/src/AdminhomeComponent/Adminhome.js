import "./Adminhome.css";
//import { useState } from 'react';

function Adminhome() {
  return (
    <div className=" mica">
      {/* content */}
      {/*about section start */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <div className="line-dec" />
              <h1>Welcome , Admin panel</h1>
              <div >
                <a href="/manageusers">
                  <button className="btn btn-primary">manage users!</button>
                  
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*about section end */}
      </div>
    </div>
  );
}

export default Adminhome;
