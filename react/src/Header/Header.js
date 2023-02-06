import "./Header.css";
//import Auth from "../AuthComponent/Auth";

function Header() {

  return (
        
     <div id="pre-header">       
      {/* <Auth/> */}
      {/* Pre Header */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <p>{localStorage.getItem("email")}</p>
            {/* <span>Suspendisse laoreet magna vel diam lobortis imperdiet</span> */}
          </div>
        </div>
      </div>
      {/* Navigation */}
      </div>
  );
}

export default Header;
