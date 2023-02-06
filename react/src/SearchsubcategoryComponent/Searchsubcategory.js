import "./Searchsubcategory.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { _subcategoryapiurl } from "../ApiUrl";
import { Link, useParams } from "react-router-dom";

function Searchsubcategory() {
  const [scDetails, setSubCategoryDetails] = useState([]);
  //const [catnm , setCatName] = useState();
  const params = useParams();

  useEffect(() => {
    axios
      .get(_subcategoryapiurl + "fetch?catname=" + params.catname)
      .then((result) => {
        //console.log(result.data);
        setSubCategoryDetails(result.data);
      });
  }, []);

  return (
    <div className="mica">
      <div className="row">
        {/* content */}
        <div class="">
          <div className="line-dec" />
          <div className="col-md-6">
            <div className="section-heading">
              <h1>Category List : </h1>
              <center>
                <div id="categorymain category">
                  {scDetails.map((ele) => {const image ="/assets/uploads/subcaticons/" + ele.subcaticonname;
                    const path ="/viewads/" + ele.catname + "/" + ele.subcatname;
                    return (<Link to={path}>
                        <div className="categorypart category">
                          <img src={image} height="100" width="100" alt="" />
                          <br />
                          <b>{ele.subcatname}</b>
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
    </div>
  );
}

export default Searchsubcategory;
