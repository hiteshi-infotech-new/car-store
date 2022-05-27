export default function Banner({ img }: any) {
  return (
    <>
      <div className="page-head_agile_info_w3l"  style={{background: `url(${img})`}}></div>
      <div className="services-breadcrumb">
        <div className="agile_inner_breadcrumb">
          <div className="container">
            <ul className="w3_short">
              <li>Home
                <i>|</i>
              </li>
              <li>Cars</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}