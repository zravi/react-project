import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { _userapiurl } from "../ApiUrl";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [output, setOutput] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (email === undefined) setOutput("*Email is required");
    else if (password === undefined) setOutput("*Password is required");
    else {
      let userDetails = { email: email, password: password };
      axios
        .post(_userapiurl + "login", userDetails)
        .then((response) => {
          if (response.data.token !== "error") {
            const responseData = response.data.userDetails;
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("_id", responseData._id);
            localStorage.setItem("name", responseData.name);
            localStorage.setItem("email", responseData.email);
            localStorage.setItem("password", responseData.password);
            localStorage.setItem("mobile", responseData.mobile);
            localStorage.setItem("address", responseData.address);
            localStorage.setItem("city", responseData.city);
            localStorage.setItem("gender", responseData.gender);
            localStorage.setItem("role", responseData.role);
            localStorage.setItem("info", responseData.info);
            responseData.role === "admin"
              ? navigate("/admin")
              : navigate("/user");
          } else {
            setOutput("Invalid user or verify your account....");
            setEmail("");
            setPassword("");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="mica">
      <div className="row">
        {/* content */}
        {/*about section start */}
        {/* <div className="addcat0"> */}
        <div className="col-md-6">
        <div className="line-dec" />
        <div className="section-heading">
          <h1>Welcome , Login page</h1>
          <p className="about_text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero sed
            deleniti culpa, reprehenderit, cum laudantium nulla facilis ipsa nam
            illum labore unde aliquid eos eligendi voluptates sint, ea quasi at
            alias quidem doloremque? Minus dicta officiis, omnis sint beatae
            tenetur nostrum obcaecati facilis enim magni nulla incidunt
            consequuntur eius in labore harum inventore sapiente provident quae
            asperiores tempore assumenda! Aut omnis tempore voluptatibus labore,
            assumenda officia sequi fuga earum, accusantium harum maxime quas.
          </p>
          </div>
        </div>

        {/* <div className="row"> */}
        <div className="col-md-6">
          <div className="section-heading">
            <div className="line-dec" />
            <h1>Login Here!!!</h1>
            <font style={{ color: "blue" }}>{output}</font>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="email">Email address:</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="form-group">
                <label for="pwd">Password:</label>
                <input type="password" className="form-control" value={password}onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <button type="submit" className="btn btn-success">Login</button>
            </form>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/*about section end */}
    </div>
  );
}

export default Login;
