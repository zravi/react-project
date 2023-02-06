import "./EPAdmin.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { _userapiurl } from "../ApiUrl";

function EPAdmin() {
  const [output, setOutput] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [gender, setGender] = useState();
  //const [userDetails , setUserDetails] = useState([]);

  useEffect(() => {
    var email = localStorage.getItem("email");
    axios
      .get(_userapiurl + "fetch?email=" + email)
      .then((response) => {
        //setUserDetails(response.data[0]);
        var userDetails = response.data[0];
        setName(userDetails.name);
        setEmail(userDetails.email);
        setPassword(userDetails.password);
        setAddress(userDetails.address);
        setCity(userDetails.city);
        setMobile(userDetails.mobile);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let updateDetails = {
      condition: { email: email },
      set: {
        name: name,
        password: password,
        mobile: mobile,
        address: address,
        city: city,
        gender: gender,
      },
    };
    axios
      .patch(_userapiurl + "update", updateDetails)
      .then((response) => {
        setOutput("Profile Edited Successfully....");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div class="mica">
      {/* content */}
      {/*about section start */}
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2>Edit Profile Here!!!</h2>
            <font style={{ color: "blue" }}>{output}</font>
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="name">Name:</label>
                <input
                  type="text"
                  class="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="email">Email address:</label>
                <input
                  type="email"
                  class="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="pwd">Password:</label>
                <input
                  type="password"
                  class="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="mobile">Mobile:</label>
                <input
                  type="text"
                  class="form-control"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label for="address">Address:</label>
                <textarea
                  rows="5"
                  class="form-control"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></textarea>
              </div>
              <div class="form-group">
                <label for="city">City:</label>
                <select
                  class="form-control"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option>Select City</option>
                  <option>Indore</option>
                  <option>Ujjain</option>
                  <option>Bhopal</option>
                </select>
              </div>
              <div class="form-group">
                <label for="gender">Gender:</label>
                Male{" "}
                <input
                  checked
                  type="radio"
                  value="male"
                  name="gender"
                  onChange={(e) => setGender(e.target.value)}
                />
                &nbsp;&nbsp; Female{" "}
                <input
                  type="radio"
                  value="female"
                  name="gender"
                  onChange={(e) => setGender(e.target.value)}
                />
                &nbsp;&nbsp;
              </div>
              <button type="submit" class="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {/*about section end */}
    </div>
  );
}

export default EPAdmin;
