import "./Addcategory.css";
import { useState } from "react";
import axios from "axios";
import { _categoryapiurl } from "../ApiUrl";

function Addcategory() {
  const [file, setFile] = useState();
  const [catName, setCatName] = useState();
  const [output, setOutput] = useState();

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var formData = new FormData();
    formData.append("catnm", catName);
    formData.append("caticon", file);
    const config = {"content-type": "multipart/form-data",
    };
    axios.post(_categoryapiurl + "save", formData, config).then((response) => {
      setCatName("");
      setOutput("Category Added Successfully....");
    });
  };

  return (
    <div className=" mica">
      {/* content */}
      {/*section start */}
      <div className="adcatcont">
        <div className="row">
          <div className="col-md-6">
            <div className="section-heading">
              <div className="line-dec" />
      {/* content */}
      {/*add categoty start */}
            <h1>Add-Category</h1>
            <font color="blue">{output}</font>
            <form onSubmit={handleSubmit}>
              <label>Category Name:<br/><input type="text" value={catName}onChange={(e) => setCatName(e.target.value)}/></label>
              <br />
              <label>Category Icon:<br/><input type="file" class="btn btn-default" onChange={handleChange} /></label>
              <br />
              <input type="submit" className="btn btn-success" value="Add Category" />
            </form>
          </div>
        </div>
      </div>
      {/*add categoty start */}
    </div>
    </div>
  );
}

export default Addcategory;
