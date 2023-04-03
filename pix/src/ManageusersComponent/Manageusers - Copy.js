import './Manageusers.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _userapiurl } from '../ApiUrl';

function Manageusers() {

  const [userDetails, setUserDetails] = useState([]);
  const [editUserDetails, setEditUserDetails] = useState({});
  const [showEditModal, setShowEditModal] = useState(false);
  const [output, setOutput] = useState();

  // const [editUser, setEditUser] = useState({});
  // const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get(_userapiurl + "fetch?role=user").then((response) => {
      setUserDetails(response.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  const manageUserStatus = (_id, s) => {
    var updateDetails;
    if (s === "verify") {
      updateDetails = { "condition": { "_id": _id }, "set": { "status": 1 } };
      axios.patch(_userapiurl + "update", updateDetails).then((result) => {
        window.location.reload();
      })
    }
    else if (s === "block") {
      updateDetails = { "condition": { "_id": _id }, "set": { "status": 0 } };
      axios.patch(_userapiurl + "update", updateDetails).then((result) => {
        window.location.reload();
      })
    }
    else {
      axios.delete(_userapiurl + "delete/" + _id).then((result) => {
        window.location.reload();
      })
    }
  };

  //  ============================================================


  const handleSaveEditUser = () => {
    // axios.patch(_userapiurl + "update", editUserDetails).then((result) => {
    //   setShowEditModal(false);
    //   window.location.reload();
    // })
    var updateDetails = { "condition": { "_id": editUserDetails._id }, "set": editUserDetails };
    axios.patch(_userapiurl + "update", updateDetails).then((response) => {
      setOutput("Profile Edited Successfully....");
      setShowEditModal(false);
      window.location.reload();
    })
      .catch((err) => {
        console.log(err);
      });
  }
  //  ============================================================
  // const handleSaveEditUser = () => {
  //   // axios.patch(_userapiurl + "update", editUserDetails).then((result) => {
  //   //   setShowEditModal(false);
  //   //   window.location.reload();
  //   // })
  //   var updateDetails = { "condition": { "_id": editUserDetails._id }, "set": editUserDetails };
  //   axios.patch(_userapiurl + "update", updateDetails).then((response) => {
  //     setOutput("Profile Edited Successfully....");
  //     setShowEditModal(false);
  //     window.location.reload();
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }

  const handleCancelEditUser = () => {
    setShowEditModal(false);
  }

  return (
    <div className="mica table-responsive-sm ">
      <center>
        <h1 style={{ fontSize: '18px', fontWeight: 'bold' }}>View & Manage User Details</h1>

        <table className="table table-responsive">
          <thead>
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
              <th>action</th>

            </tr>
          </thead>
          <tbody>
            {userDetails.map((row) => (
              <tr key={row._id}>
                <td>{row._id}</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.password}</td>
                <td>{row.mobile}</td>
                <td>{row.address}</td>
                <td>{row.city}</td>
                <td>{row.gender}</td>
                <td>{row.info}</td>
                <td>{row.status === 0 && (<button className="btn btn-primary" onClick={() => { manageUserStatus(row._id, "verify") }}>Verify User</button>)}
                  {row.status === 1 && (<button className="btn btn-danger" onClick={() => { manageUserStatus(row._id, "block") }}>Block User</button>)}
                  <hr></hr>
                  <button className="btn btn-dark" onClick={() => { manageUserStatus(row._id, "delete") }}>Delete User</button><hr></hr>
                  <button className="btn btn-success" onClick={() => { setEditUserDetails(row); setShowEditModal(true); }}>Edit User</button></td>

              </tr>
            ))}

          </tbody>

        </table>
        <hr style={{ "border": "1px solid purple" }} />
      </center>

      {/* modal code-------------------- */}

      {showEditModal && (
        <>
        <div className="modal-wrapper" onClick={handleCancelEditUser}></div>

        <div ><div className="modal-container row "><h2>Edit User</h2><div className="col-md-12">

          <font style={{ color: "blue" }}>{output}</font>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={editUserDetails.name || ''} onChange={(e) => setEditUserDetails({ ...editUserDetails, name: e.target.value })} />
          </div>


          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" value={editUserDetails.email || ''} onChange={(e) => setEditUserDetails({ ...editUserDetails, email: e.target.value })} />
          </div>

          <div className="form-group">
            <label htmlFor="password">password</label>
            <input type="text" className="form-control" id="password" name="password" value={editUserDetails.password || ''} onChange={(e) => setEditUserDetails({ ...editUserDetails, password: e.target.value })} />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input type="text" className="form-control" id="mobile" name="mobile" value={editUserDetails.mobile || ''} onChange={(e) => setEditUserDetails({ ...editUserDetails, mobile: e.target.value })} />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea type="text" rows="5" className="form-control" id="address" name="address" value={editUserDetails.address || ''} onChange={(e) => setEditUserDetails({ ...editUserDetails, address: e.target.value })} />
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <select type="text" className="form-control" id="city" name="city" value={editUserDetails.city || ''} onChange={(e) => setEditUserDetails({ ...editUserDetails, city: e.target.value })} >
              <option>Select City</option>
              <option>Indore</option>
              <option>Ujjain</option>
              <option>Bhopal</option>
            </select>
          </div>


          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select className="form-control" id="gender" name="gender" value={editUserDetails.gender || ''} onChange={(e) => setEditUserDetails({ ...editUserDetails, gender: e.target.value })}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="info">Info</label>
            <textarea className="form-control" id="info" name="info" rows="3" value={editUserDetails.info || ''} onChange={(e) => setEditUserDetails({ ...editUserDetails, info: e.target.value })}></textarea>
          </div>

          <div className="modal-buttons">
            <button style={{ margin: "5px" }} className="btn btn-primary" onClick={handleSaveEditUser}>Save</button>

            <button style={{ margin: "5px" }} className="btn btn-secondary" onClick={handleCancelEditUser}>Cancel</button>
          </div>
        </div>
        </div>
          {/* modal code ends-------------------------- */}
        </div>
        </>
      )}
    </div>
  );
}
export default Manageusers;
