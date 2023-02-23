import './Addproduct.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';
import { _categoryapiurl, _subcategoryapiurl } from '../ApiUrl';

function Addproduct() {
  const [file, setFile] = useState()
  const [catName, setCatName] = useState();
  const [subcatName, setSubCatName] = useState();
  const [productTitle, setProductTitle] = useState();
  const [productDescription, setProductDescription] = useState();
  const [basePrice, setBasePrice] = useState();
  const [output, setOutput] = useState();
  const [cDetails, setCategoryDetails] = useState([]);

  const [sDetails, setSubCategoryDetails] = useState([]);


  useEffect(() => {
    setInterval(() => { axios.get(_categoryapiurl + "fetch").then((result) => {
        console.log(result.data);
        setCategoryDetails(result.data);
      });
    }, 1000);
  }, []);


  useEffect(() => {
    // Only fetch subcategories if a category is selected
    if (catName) {
      axios.get(_subcategoryapiurl + "fetch/" + catName).then((result) => {
        console.log(result.data);
        setSubCategoryDetails(result.data);
      });
    }
  }, [catName]);
  

  //  // Add this useEffect hook for fetching subcategories
  //  useEffect(() => {
  //   // Only fetch subcategories if a category is selected
  //   if (catName) {
  //     setInterval(() => { axios.get(_subcategoryapiurl + "fetch/" + catName).then((result) => {
  //         console.log(result.data);
  //         setSubCategoryDetails(result.data);
  //       });
  //     }, 1000);
  //   }
  //  }, [catName]); // This dependency array ensures that the hook runs only when catName changes

  const handleChange = (event) => {setFile(event.target.files[0])}

  const handleSubmit = (event) => {event.preventDefault();
    var formData = new FormData();
    formData.append('catnm', catName);
    formData.append('subcatnm', subcatName);
    formData.append('subcaticon', file);
    const config = {'content-type': 'multipart/form-data'};

    axios.post(_subcategoryapiurl + "save", formData, config).then((response) => {
      setCatName("");
      setSubCatName("");
      setOutput("SubCategory Added Successfully....");
    });
  }


  return (
    <div class="mica">

      <div class="container">
        <div class="row">
          <div class="col-lg-12">

            <h1>Add product</h1>
            <font color="blue">{output}</font>
            <form onSubmit={handleSubmit} >

              <label>Product Title:<input type="text" value={productTitle}
                  onChange={e => setProductTitle(e.target.value)} />
              </label>
              <br /><br />

              {/* <label>Category Name:</label>
              <select value={catName} onChange={e => setCatName(e.target.value)} >
                <option>Select Category</option>
                {cDetails.map((row) => (<option>{row.catname}</option>))}
              </select>
              <br /><br /> */}
              <select value={catName} onChange={e => setCatName(e.target.value)} >
  <option value="">Select Category</option>
  {cDetails.map((row) => (<option key={row._id} value={row.catname}>{row.catname}</option>))}
</select>


              <label>SubCategory Name:</label>
<select value={subcatName} onChange={e => setSubCatName(e.target.value)}>
  <option value="">Select SubCategory</option>
  {sDetails.map((item) => (
    <option value={item.subcatnm}>{item.subcatnm}</option>
  ))}
</select>
<br /><br />

              <label>Product Description:<textarea value={productDescription}
                  onChange={e => setProductDescription(e.target.value)} ></textarea>
              </label>
              <br /><br />

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
