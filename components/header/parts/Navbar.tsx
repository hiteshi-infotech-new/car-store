import Link from "next/link";

export default function Navbar() {
  return (
    <>
      {/*<!-- navigation --> */}
      <div className="navbar-inner">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto text-center mr-xl-5">
                <li className="nav-item active mr-lg-2 mb-lg-0 mb-2">
                  <a className="nav-link" href="/">Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item mr-lg-2 mb-lg-0 mb-2">
                  <a className="nav-link" href="#">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.staging.myautochek.com/v1/inventory/make?popular=true`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } };
}