
import "./Manageusers.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { _userapiurl } from "../ApiUrl";
// import { Link } from "react-router-dom";

function Manageusers() {
  <script src="http://localhost:8097"></script>
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    axios.get(_userapiurl + "fetch?role=user").then((response) => {
        //const responseData=response.data;
        //console.log(responseData);
        setUserDetails(response.data);
      })
      .catch((err) => {console.log(err);
      });
  }, []);

  // verifiy block delete user function*/}-------------------------
  const manageUserStatus = (_id, s) => {
    //alert(_id+"----"+s);
    if (s === "verify") {
      axios.patch(_userapiurl + "update", { _id: _id, status: 1 })
        .then((result) => {window.location.reload();
        });
    } else if (s === "block") {
      axios.patch(_userapiurl + "update", { _id: _id, status: 0 })
        .then((result) => {window.location.reload();
        });
    } else {
      axios.delete(_userapiurl + "delete/" + _id).then((result) => {
        window.location.reload();
      });
    }
  };

  

  return (
         <div className="mica">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <div className="line-dec table "/>
              <center>
                <h1>View & Manage User Details</h1>
                <table className="table-bordered mo">
                  <tr>
                    <th>UserID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Mobile</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Gender</th>
                    <th>Info</th>
                    <th>Status</th>
                    <th>Acton</th>
                    <th>edit</th>
                  </tr>
                  {userDetails.map((row) => (
                    <tbody>
                    <tr>
                      <td>{row._id}</td>
                      <td>{row.name}</td>
                      <td>{row.email}</td>
                      <td>{row.password}</td>
                      <td>{row.mobile}</td>
                      <td>{row.address}</td>
                      <td>{row.city}</td>
                      <td>{row.gender}</td>
                      <td>{row.info}</td>
                      <td>{row.status === 0 && (
                          <a style={{color: "green" }}onClick={() => {manageUserStatus(row._id, "verify");}}>Verify User</a>
                        )}
                        {row.status === 1 && (
                          <a style={{ color: "orange" }}onClick={() => {manageUserStatus(row._id, "block");}}>Block User</a>
                        )}
                      </td>
                      <td>
                        <a style={{ color: "red" }}onClick={() => {manageUserStatus(row._id, "delete");}}>Delete User</a>
                      </td>
                    </tr>
                    </tbody>
                  ))}
                  
                </table>
              </center>
            </div>
          </div>
        </div>
        {/*MANAGE USERS */}
      </div>
    );
}

export default Manageusers;
