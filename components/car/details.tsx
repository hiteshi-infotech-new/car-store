import Image from "next/image";

export default function Details({ data }: any) {
  return (
    <>
      <div className="banner-bootom-w3-agileits py-5">
        <div className="container py-xl-4 py-lg-2">
          {/* <!-- tittle heading --> */}
          <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
            <span>C</span>ar{ ' ' }
            <span>D</span>etails</h3>
          {/* <!-- //tittle heading --> */}
          <div className="row">
            <div className="col-lg-5 col-md-8 single-right-left ">
              <div className="grid images_3_of_2">
                <div className="flexslider">
                  <ul className="slides">
                    {data.media.carMediaList.length > 0 ? data.media.carMediaList.map((img: any, idx: number) => (
                      <li key={`media_${idx}`} data-thumb={img.url}>
                        <div className="thumb-image">
                          <img src={img.url} data-imagezoom="true" className="img-fluid" alt={img.name} />
                        </div>
                      </li>
                    )) : ''}
                  </ul>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 single-right-left simpleCart_shelfItem">
              <h3 className="mb-3">{data.details.carName}</h3>
              <p className="mb-3">
                <span className="item_price">₦ {data.details.marketplacePrice}</span>
                <del className="mx-2 font-weight-light">₦ {data.details.marketplaceOldPrice}</del>
                <label>{data.details.insured ? 'Insured' : 'Not insured'}</label>
              </p>
              <div className="single-infoagile">
                <ul>
                  <li className="mb-3">
                    Mileage: {data.details.mileage} { ' ' } {data.details.mileageUnit}
                  </li>
                  <li className="mb-3">
                    Transmission: {data.details.transmission}
                  </li>
                  <li className="mb-3">
                    Fuel Type: {data.details.fuelType}
                  </li>
                  <li className="mb-3">
                    Selling Condition: {data.details.sellingCondition}
                  </li>
                </ul>
              </div>
              <div className="product-single-w3l">
                <ul className="my-3">
                  <li className="mb-1">
                    Interior Color: {data.details.interiorColor}
                  </li>
                  <li className="mb-1">
                    Exterior Color: {data.details.exteriorColor}
                  </li>
                  <li className="mb-1">
                    Engine Type: {data.details.engineType}
                  </li>
                  <li className="mb-1">
                    CC Measurement: {data.details.ccMeasurement}
                  </li>
                </ul>
                {data.details.hasFinancing ? (
                  <p className="my-sm-4 my-3">
                    <i className="fas fa-retweet mr-3"></i>Has financing
                  </p>
                ) : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}