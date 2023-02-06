
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import Nav from "./Nav/Nav";
//import Banner from "./Banner/Banner";

import Content from "./ContentComponent/Content";
import About from "./AboutComponent/About";
import Contact from "./ContactComponent/Contact";
import Service from "./ServiceComponent/Service";
import Register from "./RegisterComponent/Register";
import Login from "./LoginComponent/Login";
import Adminhome from "./AdminhomeComponent/Adminhome";
import Manageusers from "./ManageusersComponent/Manageusers";
import Addcategory from "./AddcategoryComponent/Addcategory";
import Userhome from "./UserhomeComponent/Userhome";
import Addsubcategory from './AddsubcategoryComponent/Addsubcategory';
import Searchproduct from './SearchproductComponent/Searchproduct';
import Searchsubcategory from './SearchsubcategoryComponent/Searchsubcategory';

import EPAdmin from './EPAdminComponent/EPAdmin';
import Addproduct from './AddproductComponent/Addproduct';
import Verifyuser from './VerifyuserComponent/Verifyuser';

import Logout from "./LogoutComponent/Logout";

import Featured from "./Featured/Featured";
import Subscribe from "./Subscribe/Subscribe";
import Footer from "./Footer/Footer";
import EPUser from "./EPUser/EPUser";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      {/* Page Content */}
      {/* Banner Starts Here */}
      {/* <Banner /> */}
      {/* Banner Ends Here */}

      <Routes>
        <Route path="/" element={<Content />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin" element={<Adminhome />}></Route>
        <Route path="/manageusers" element={<Manageusers />}></Route>
        <Route path="/addcat" element={<Addcategory />} ></Route>

        <Route path="/addsubcategory" element={<Addsubcategory />} ></Route>
        <Route path="/searchproduct" element={<Searchproduct />} ></Route>
        <Route path="/viewsubcat/:catname" element={<Searchsubcategory />} ></Route>

        <Route path="/epadmin" element={<EPAdmin />} ></Route>
        <Route path="/Addproduct" element={<Addproduct />} ></Route>
        <Route path="/verifyuser/:email" element={<Verifyuser />} ></Route>

        <Route path="/epuser" element={<EPUser />} ></Route>

        <Route path="/user" element={<Userhome />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>

      {/* Featured Starts Here */}
      <Featured />
      {/* Featred Ends Here */}
      {/* Subscribe Form Starts Here */}
      <Subscribe />
      {/* Subscribe Form Ends Here */}
      {/* Footer Starts Here */}
      <Footer />
    </div>
  );
}

export default App;
