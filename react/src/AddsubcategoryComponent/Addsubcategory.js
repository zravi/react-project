import "./Addsubcategory.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { _categoryapiurl, _subcategoryapiurl } from "../ApiUrl";

function Addsubcategory() {
  const [file, setFile] = useState();
  const [catName, setCatName] = useState();
  const [subcatName, setSubCatName] = useState();
  const [output, setOutput] = useState();
  const [cDetails, setCategoryDetails] = useState([]);

  useEffect(() => {
    setInterval(() => {
      axios.get(_categoryapiurl + "fetch").then((result) => {
        //console.log(result.data);
        setCategoryDetails(result.data);
      });
    }, 1000);
  }, []);

  const handleChange = (event) => {setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {event.preventDefault();
    var formData = new FormData();
    formData.append("catnm", catName);
    formData.append("subcatnm", subcatName);
    formData.append("subcaticon", file);
    const config = {
      "content-type": "multipart/form-data",
    };
    axios.post(_subcategoryapiurl + "save", formData, config).then((response) => {
        setCatName("");
        setSubCatName("");
        setOutput("SubCategory Added Successfully....");
      });
  };

  return (
    <div class="mica">
      {/* content */}
      {/*about section start */}
      <div className="adcatcont">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <div className="line-dec" />
              <h1>Add Sub Category</h1>
              <font color="blue">{output}</font>
              <form onSubmit={handleSubmit}>
                <label>Category Name:</label><br />
                <select value={catName}onChange={(e) => setCatName(e.target.value)}>
                  <option>Select Category</option>
                  {cDetails.map((row) => (
                  <option>{row.catname}</option>
                  ))}
                </select>
                <br />
                <label>Sub Category Name:<br />
                  <input type="text"value={subcatName}onChange={(e) => setSubCatName(e.target.value)}/>
                </label>
                <br />
                <label>Sub Category Icon:<br /><input type="file" onChange={handleChange} />
                </label>
                <br /><br />
                <input type="submit"id="button" value="Add Sub Category" />
              </form>
            </div>
          </div>
        </div>
        {/*about section end */}
      </div>
    </div>
  );
}

export default Addsubcategory;