
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
import PageNotFound from "./404/PageNotFound";

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
        <Route path="/" element={<Content />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Adminhome />} />
        <Route path="/manageusers" element={<Manageusers />} />
        <Route path="/addcat" element={<Addcategory />} />
        <Route path="/addsubcategory" element={<Addsubcategory />} />
        <Route path="/searchproduct" element={<Searchproduct />} />
        <Route path="/viewsubcat/:catname" element={<Searchsubcategory />} />
        <Route path="/epadmin" element={<EPAdmin />} />
        <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/verifyuser/:email" element={<Verifyuser />} />
        <Route path="/epuser" element={<EPUser />} />
        <Route path="/user" element={<Userhome />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<PageNotFound />} />
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
