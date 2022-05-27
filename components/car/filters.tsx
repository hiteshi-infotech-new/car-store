type Brand = {
  id: number,
  name: string,
  imageUrl: string
}

export default function Filters({ brands }: any) {
  return (
    <>
      <div className="col-lg-3 mt-lg-0 mt-4 p-lg-0">
        <div className="side-bar p-sm-4 p-3">
          <div className="search-hotel border-bottom py-2">
            <h3 className="agileits-sear-head mb-3">Brand</h3>
            <form action="#" method="post">
              <input type="search" placeholder="Search Brand..." name="search" required />
              <input type="submit" value=" " />
            </form>
            <div className="left-side py-2">
              <ul>
                {brands.map((brand: Brand, idx: number) => (
                  <li key={`brand_${idx}`}>
                    <input type="checkbox" className="checked" />
                    <span className="span">{brand.name}</span>
                  </li>  
                ))}
              </ul>
            </div>
          </div>
          {/* <!-- ram --> */}
          {/* <!-- price --> */}
          <div className="range border-bottom py-2">
            <h3 className="agileits-sear-head mb-3">Price</h3>
            <div className="w3l-range">
              <ul>
                <li>
                  <a href="#">Under ₦ 1,000</a>
                </li>
                <li className="my-1">
                  <a href="#">₦ 1,000 - ₦ 5,000</a>
                </li>
                <li>
                  <a href="#">₦ 5,000 - ₦ 10,000</a>
                </li>
                <li className="my-1">
                  <a href="#">₦ 10,000 - ₦ 20,000</a>
                </li>
                <li>
                  <a href="#">₦ 20,000 - ₦3 0,000</a>
                </li>
                <li className="mt-1">
                  <a href="#">Over ₦ 30,000</a>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- //price --> */}
          {/* <!-- discounts --> */}
          <div className="left-side border-bottom py-2">
            <h3 className="agileits-sear-head mb-3">Discount</h3>
            <ul>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">5% or More</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">10% or More</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">20% or More</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">30% or More</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">50% or More</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">60% or More</span>
              </li>
            </ul>
          </div>
          {/* <!-- //discounts --> */}
          {/* <!-- offers --> */}
          <div className="left-side border-bottom py-2">
            <h3 className="agileits-sear-head mb-3">Offers</h3>
            <ul>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">Exchange Offer</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">No Cost EMI</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">Special Price</span>
              </li>
            </ul>
          </div>
          {/* <!-- //offers --> */}
          {/* <!-- delivery --> */}
          <div className="left-side border-bottom py-2">
            <h3 className="agileits-sear-head mb-3">Cash On Delivery</h3>
            <ul>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">Eligible for Cash On Delivery</span>
              </li>
            </ul>
          </div>
          {/* <!-- //delivery --> */}
          {/* <!-- arrivals --> */}
          <div className="left-side border-bottom py-2">
            <h3 className="agileits-sear-head mb-3">New Arrivals</h3>
            <ul>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">Last 30 days</span>
              </li>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">Last 90 days</span>
              </li>
            </ul>
          </div>
          <div className="left-side py-2">
            <h3 className="agileits-sear-head mb-3">Availability</h3>
            <ul>
              <li>
                <input type="checkbox" className="checked" />
                <span className="span">Exclude Out of Stock</span>
              </li>
            </ul>
          </div>
          {/* <!-- //arrivals --> */}
        </div>
        {/* <!-- //product right --> */}
      </div>
    </>
  );
}