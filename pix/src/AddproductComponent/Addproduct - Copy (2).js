import './Addproduct.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _categoryapiurl, _subcategoryapiurl } from '../ApiUrl';

function Addproduct() {
  const [file, setFile] = useState();
  const [catName, setCatName] = useState();
  const [subcatName, setSubCatName] = useState();
  const [productTitle, setProductTitle] = useState();
  const [productDescription, setProductDescription] = useState();
  const [basePrice, setBasePrice] = useState();
  const [output, setOutput] = useState();
  const [categoryDetails, setCategoryDetails] = useState([]);
  const [subCategoryDetails, setSubCategoryDetails] = useState([]);

  useEffect(() => {
    axios.get(_categoryapiurl + "fetch").then((result) => {
      console.log(result.data);
      setCategoryDetails(result.data);
    });
  }, []);

  useEffect(() => {
    if (catName) {
      axios.get(_subcategoryapiurl + "fetch/" + catName).then((result) => {
        console.log(result.data);
        setSubCategoryDetails(result.data);
      });
    }
  }, [catName]);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var formData = new FormData();
    formData.append('catnm', catName);
    formData.append('subcatnm', subcatName);
    formData.append('subcaticon', file);
    const config = { 'content-type': 'multipart/form-data' };

    axios.post(_subcategoryapiurl + "save", formData, config).then((response) => {
      setCatName("");
      setSubCatName("");
      setOutput("Subcategory added successfully.");
    });
  };

  return (
    <div className="mica">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>Add product</h1>
            <font color="blue">{output}</font>
            <form onSubmit={handleSubmit}>
              <label>
                Product Title:
                <input
                  type="text"
                  value={productTitle}
                  onChange={(e) => setProductTitle(e.target.value)}
                />
              </label>
              <br />
              <br />
              <label>Category Name:</label>
              <select value={catName} onChange={(e) => setCatName(e.target.value)}>
                <option value="">Select a category</option>
                {categoryDetails.map((category) => (
                  <option key={category._id} value={category.catname}>
                    {category.catname}
                  </option>
                ))}
              </select>
              <br />
              <br />
              <label>Subcategory Name:</label>
              <select value={subcatName} onChange={(e) => setSubCatName(e.target.value)}>
                <option value="">Select a subcategory</option>
                {subCategoryDetails.map((subcategory) => (
                  <option key={subcategory._id} value={subcategory.subcatnm}>
                    {subcategory.subcatnm}
                  </option>
                ))}
              </select>
              <br />
              <br />
              <label>
                Product Description:
                <textarea
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                ></textarea>
              </label>
              <br />


              <label>Product Price:<input type="text" value={basePrice}
                  onChange={e => setBasePrice(e.target.value)} />
              </label>
              <br /><br />

              <label>Product Icon:<input type="file" onChange={handleChange} />
              </label>
              <br /><br />

              <input type="submit" value="Add Product" />

            </form>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Addproduct;
