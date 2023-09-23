export default function About() {
  return (
    <>
      <div className="flexCol paddings">
        <div className="headText">Know More About Us!</div>
        <div className="text-gray-600 text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi fugiat
          adipisci dolorum nulla quam et, sunt cupiditate at, voluptates a,
          dolores eos! Aperiam iste cupiditate sunt laboriosam aut libero
          aliquam.
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-gray-400">
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
              accusamus in aliquam dolorem officia. Obcaecati dolor alias porro
              ipsa ex eveniet excepturi.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam in
              totam nam tenetur sed architecto. Veniam quisquam corrupti placeat
              fugit unde asperiores quidem doloribus, dicta autem! Laudantium
              officiis itaque vel?
            </p>
          </div>
          <div className="text-center flexColCenter">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Partners +120
              </h1>
              <p>Lorem, ipsum dolor.</p>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Customer +1000
              </h1>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Resturant +50
              </h1>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
