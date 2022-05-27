import Image from "next/image";

export default function Mid() {
    return (
        <>
            {/*<!-- header-bottom--> */}
            <div className="header-bot">
                <div className="container">
                    <div className="row header-bot_inner_wthreeinfo_header_mid">
                        {/* <!-- logo --> */}
                        <div className="col-md-3 logo_agile">
                            <h1 className="text-center">
                                <a href="index.html" className="font-weight-bold font-italic">
                                    <Image src={'/images/logo2.png'} className="img-fluid" layout="fill"/>Electro Store
                                </a>
                            </h1>
                        </div>
                        {/* <!-- //logo -->
                        <!-- header-bot --> */}
                        <div className="col-md-9 header mt-4 mb-md-0 mb-4">
                            <div className="row">
                                {/* <!-- search --> */}
                                <div className="col-10 agileits_search">
                                    <form className="form-inline" action="#" method="post">
                                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" required />
                                        <button className="btn my-2 my-sm-0" type="submit">Search</button>
                                    </form>
                                </div>
                                {/* <!-- //search -->
                                <!-- cart details --> */}
                                <div className="col-2 top_nav_right text-center mt-sm-0 mt-2">
                                    <div className="wthreecartaits wthreecartaits2 cart cart box_1">
                                        <form action="#" method="post" className="last">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="display" value="1" />
                                            <button className="btn w3view-cart" type="submit" name="submit" value="">
                                                <i className="fas fa-cart-arrow-down"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                {/* <div className="col-2 top_nav_right mt-sm-0 mt-2">
                                    <div className="wthreecartaits wthreecartaits2 cart cart box_1">
                                        <button type="submit" className="btn w3view-cart" data-toggle="modal" data-target=".bd-example-modal-sm">
                                            <i className="fas fa-cart-arrow-down"></i>
                                        </button>
                                        <div className="modal fade bd-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-sm">
                                                <div className="PopUp-modl">
                                                    <p>Your shopping cart is empty</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <!-- //cart details --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- shop locator (popup) -->
            <!-- //header-bottom -->*/}
        </>
    );
}