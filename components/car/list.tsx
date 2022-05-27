import Image from "next/image";
import Filters from "./filters";
type Car = {
  id: string,
  title: string,
  imageUrl: string,
  marketplacePrice: number,
  marketplaceOldPrice: number
}

export default function List({ data }: any) {
  let organisedData: any[] = [];
  let temp: any[] = [];

  for (let index = 0; index < data.cars.length; index++) {
    if (temp.length === 3) {
      organisedData.push(temp);
      temp = [];
    } else {
      temp.push(data.cars[index]);
    }
  }

  return (
    <>
      <div className="ads-grid py-sm-5 py-4">
        <div className="container py-xl-4 py-lg-2">
          {/* <!-- tittle heading --> */}
          <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
            <span>C</span>ars
          </h3>
          {/* <!-- //tittle heading --> */}
          <div className="row">
            {/* <!-- product left --> */}
            <div className="agileinfo-ads-display col-lg-9">
              <div className="wrapper">
                {organisedData.map((items: [], idx: number) => (
                  <div key={`'items_'${idx}`} className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                    <div className="row">
                      {items.map((car: Car, index: number) => (
                        <div key={`car_${idx}`} className={`col-md-4 product-men ${[1, 2].includes(index) ? 'mt-md-0 mt-5' : ''}`}>
                          <div className="men-pro-item simpleCart_shelfItem">
                            <div className="men-thumb-item text-center">
                              <Image src={car.imageUrl || 'https://www.dfakto.com/wp-content/uploads/2018/06/demo-image-default.jpg' } alt="" layout="responsive" width="100%" height="100%" />
                              <div className="men-cart-pro">
                                <div className="inner-men-cart-pro">
                                  <a href="single.html" className="link-product-add-cart">Quick View</a>
                                </div>
                              </div>
                            </div>
                            <div className="item-info-product text-center border-top mt-4">
                              <h4 className="pt-1">
                                <a href="single.html">{car.title}</a>
                              </h4>
                              <div className="info-product-price my-2">
                                <span className="item_price">₦ {car.marketplacePrice}</span>
                                <del>₦ {car.marketplaceOldPrice}</del>
                              </div>
                              <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                  <a href={`/car/${car.id}`} className="button btn">View</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Filters brands={data.brands} />
          </div>
        </div>
      </div>
    </>
  );
}