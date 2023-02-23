import "./Searchproduct.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { _categoryapiurl } from "../ApiUrl";
import { Link } from "react-router-dom";

function Searchproduct() {
  const [cDetails, setCategoryDetails] = useState([]);

  useEffect(() => {
    axios.get(_categoryapiurl + "fetch").then((result) => {
      //console.log(result.data);
      setCategoryDetails(result.data);
    });
  }, []);

  return (
    <div className="mica">
      <div class="container"></div>
      <div className="row">
        {/* content */}
        <div className="col-md-6">
          <div className="line-dec" />
          <div className="section-heading">
            <h1>Category List : </h1>
            <center>
              <div id="categorymain">
                {cDetails.map((ele) => {
                  const image = "/assets/uploads/caticons/" + ele.caticonname;
                  const path = "/viewsubcat/" + ele.catname;
                  return (
                    <Link to={path}>
                      <div className="categorypart">
                        <img src={image} height="100" width="100" alt="" />
                        <br />
                        <b>{ele.catname}</b>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchproduct;
