import Info from "./parts/info";

export default function Footer() {
  return (
    <>
      <Info />
      <div className="w3l-middlefooter-sec">
        <div className="container py-md-5 py-sm-4 py-3">
          <div className="row footer-info w3-agileits-info">
            <div className="col-md-3 col-sm-6 footer-grids">
              <h3 className="text-white font-weight-bold mb-3">Categories</h3>
              <ul>
                <li className="mb-3">
                  <a href="product.html">Sedan </a>
                </li>
                <li className="mb-3">
                  <a href="product.html">SUV</a>
                </li>
                <li className="mb-3">
                  <a href="product.html">Hatchback</a>
                </li>
                <li className="mb-3">
                  <a href="product2.html">Convertible</a>
                </li>
                <li className="mb-3">
                  <a href="product.html">Coupe</a>
                </li>
                <li>
                  <a href="product2.html">Minivan</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 footer-grids mt-sm-0 mt-4">
              <h3 className="text-white font-weight-bold mb-3">Quick Links</h3>
              <ul>
                <li className="mb-3">
                  <a href="about.html">About Us</a>
                </li>
                <li className="mb-3">
                  <a href="contact.html">Contact Us</a>
                </li>
                <li className="mb-3">
                  <a href="help.html">Help</a>
                </li>
                <li className="mb-3">
                  <a href="faqs.html">Faqs</a>
                </li>
                <li className="mb-3">
                  <a href="terms.html">Terms of use</a>
                </li>
                <li>
                  <a href="privacy.html">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 footer-grids mt-md-0 mt-4">
              <h3 className="text-white font-weight-bold mb-3">Get in Touch</h3>
              <ul>
                <li className="mb-3">
                  <i className="fas fa-map-marker"></i> 123 Sebastian, USA.</li>
                <li className="mb-3">
                  <i className="fas fa-mobile"></i> 333 222 3333 </li>
                <li className="mb-3">
                  <i className="fas fa-phone"></i> +222 11 4444 </li>
                <li className="mb-3">
                  <i className="fas fa-envelope-open"></i>
                  <a href="mailto:example@mail.com"> mail 1@example.com</a>
                </li>
                <li>
                  <i className="fas fa-envelope-open"></i>
                  <a href="mailto:example@mail.com"> mail 2@example.com</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 footer-grids w3l-agileits mt-md-0 mt-4">

              <h3 className="text-white font-weight-bold mb-3">Newsletter</h3>
              <p className="mb-3">Free Delivery on your first order!</p>
              <form action="#" method="post">
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Email" name="email" required />
                  <input type="submit" value="Go" />
                </div>
              </form>

              <div className="footer-grids  w3l-socialmk mt-3">
                <h3 className="text-white font-weight-bold mb-3">Follow Us on</h3>
                <div className="social">
                  <ul>
                    <li>
                      <a className="icon fb" href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a className="icon tw" href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a className="icon gp" href="#">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}