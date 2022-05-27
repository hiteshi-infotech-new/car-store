export default function Suggestions({ data }: any) {
  return (
    <>
      <div className="join-w3l1 py-sm-5 py-4">
        <div className="container py-xl-4 py-lg-2">
          <div className="row">
            {data.map((item: any, idx: number) => (
              <div key={`sugg_${idx}`} className={`col-lg-6 ${idx > 0 ? 'mt-lg-0 mt-5' : ''}`}>
                <div className="join-agile text-left p-4">
                  <div className="row">
                    <div className="col-sm-7 offer-name">
                      <h4 className="mt-2 mb-3">{item.name}</h4>
                    </div>
                    <div className="col-sm-5 offerimg-w3l">
                      <img src={item.url} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}