import "./Featured.css";

function Featured() {
  return (
    <div className="featured-items mica">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <div className="line-dec" />
              <h1>Featured Items</h1>
            </div>
          </div>
          <div className="col-md-12">
            <div className="owl-carousel owl-theme">
              <a href="single-product.html">
                <div className="featured-item">
                  <img src="assets/images/item-01.jpg" alt="Item 1" />
                  <h4>Proin vel ligula</h4>
                  <h6>$15.00</h6>
                </div>
              </a>
              <a href="single-product.html">
                <div className="featured-item">
                  <img src="assets/images/item-02.jpg" alt="Item 2" />
                  <h4>Erat odio rhoncus</h4>
                  <h6>$25.00</h6>
                </div>
              </a>
              <a href="single-product.html">
                <div className="featured-item">
                  <img src="assets/images/item-03.jpg" alt="Item 3" />
                  <h4>Integer vel turpis</h4>
                  <h6>$35.00</h6>
                </div>
              </a>
              <a href="single-product.html">
                <div className="featured-item">
                  <img src="assets/images/item-04.jpg" alt="Item 4" />
                  <h4>Sed purus quam</h4>
                  <h6>$45.00</h6>
                </div>
              </a>
              <a href="single-product.html">
                <div className="featured-item">
                  <img src="assets/images/item-05.jpg" alt="Item 5" />
                  <h4>Morbi aliquet</h4>
                  <h6>$55.00</h6>
                </div>
              </a>
              <a href="single-product.html">
                <div className="featured-item">
                  <img src="assets/images/item-06.jpg" alt="Item 6" />
                  <h4>Urna ac diam</h4>
                  <h6>$65.00</h6>
                </div>
              </a>
              <a href="single-product.html">
                <div className="featured-item">
                  <img src="assets/images/item-04.jpg" alt="Item 7" />
                  <h4>Proin eget imperdiet</h4>
                  <h6>$75.00</h6>
                </div>
              </a>
              <a href="single-product.html">
                <div className="featured-item">
                  <img src="assets/images/item-05.jpg" alt="Item 8" />
                  <h4>Nullam risus nisl</h4>
                  <h6>$85.00</h6>
                </div>
              </a>
              <a href="single-product.html">
                <div className="featured-item">
                  <img src="assets/images/item-06.jpg" alt="Item 9" />
                  <h4>Cras tempus</h4>
                  <h6>$95.00</h6>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
