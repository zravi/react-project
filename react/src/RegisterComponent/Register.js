import "./Register.css";
import { useState } from "react";
import axios from "axios";
import { _userapiurl } from "../ApiUrl";

function Register() {
  const [output, setOutput] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [gender, setGender] = useState();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let userDetails = {
      name: name,
      email: email,
      password: password,
      mobile: mobile,
      address: address,
      city: city,
      gender: gender,
    };

    axios
      .post(_userapiurl + "save", userDetails)
      .then((response) => {
        //console.log(response);
        setOutput(response.data.result);
        setName("");
        setEmail("");
        setPassword("");
        setAddress("");
        setCity("");
        setMobile("");
        //alert("Its done.....");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mica">
      <div className="row">
        {/* content */}

        <div className="col-md-6">
          <div className="line-dec" />
          <div className="section-heading">
            <h1>Welcome , Register page</h1>
            <p className="about_text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero sed
              deleniti culpa, reprehenderit, cum laudantium nulla facilis ipsa
              nam illum labore unde aliquid eos eligendi voluptates sint, ea
              quasi at alias quidem doloremque? Minus dicta officiis, omnis sint
              beatae tenetur nostrum obcaecati facilis enim magni nulla incidunt
              consequuntur.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="section-heading">
            <div className="line-dec" />
            <h1>Register Here!!!</h1>
            <font style={{ color: "blue" }}>{output}</font>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="name">Name:</label>
                <input type="text"className="form-control"value={name}onChange={(e) => setName(e.target.value)}/>
              </div>
              <div className="form-group">
                <label for="email">Email address:</label>
                <input type="email"className="form-control"value={email}onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="form-group">
                <label for="pwd">Password:</label>
                <input type="password"className="form-control"value={password}onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className="form-group">
                <label for="mobile">Mobile:</label>
                <input type="text"className="form-control"value={mobile}onChange={(e) => setMobile(e.target.value)}/>
              </div>
              <div className="form-group">
                <label for="address">Address:</label>
                <textarea rows="3"className="form-control"value={address}onChange={(e) => setAddress(e.target.value)}></textarea>
              </div>
              <div className="form-group">
                <label for="city">City:</label>
                <select className="form-control"value={city}onChange={(e) => setCity(e.target.value)}>
                  <option>Select City</option>
                  <option>Indore</option>
                  <option>Ujjain</option>
                  <option>Bhopal</option>
                </select>
              </div>
              <div className="form-group">
                <label for="gender">Gender :</label>
                <br></br>
                Male{" "}
                <input type="radio"value="male"name="gender"onChange={(e) => setGender(e.target.value)}/>&nbsp;&nbsp; Female{" "}
                <input type="radio"value="female"name="gender"onChange={(e) => setGender(e.target.value)}/>&nbsp;&nbsp;
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
