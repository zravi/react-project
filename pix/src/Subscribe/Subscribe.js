import "./Subscribe.css";

function Subscribe() {
  return (
    <div className="subscribe-form">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <div className="line-dec" />
              <h1>Subscribe on PIXIE now!</h1>
            </div>
          </div>
          <div className="col-md-8 offset-md-2">
            <div className="main-content">
              <p>
                Integer vel turpis ultricies, lacinia ligula id, lobortis augue.
                Vivamus porttitor dui id dictum efficitur. Phasellus vel
                interdum elit.
              </p>
              <div className="container">
                <form id="subscribe" action method="get">
                  <div className="row">
                    <div className="col-md-7">
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          className="form-control"
                          id="email"
                          onFocus="if(this.value == 'Your Email...') { this.value = ''; }"
                          onBlur="if(this.value == '') { this.value = 'Your Email...';}"
                          defaultValue="Your Email..."
                          required
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-5">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="button"
                        >
                          Subscribe Now!
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
