import { Link } from "react-router-dom";

export default function Promo() {
  return (
    <>
      <div className="w-full h-full bg-center bg-cover bg-promo">
        <div className="w-full h-full bg-gray-600 bg-opacity-40 py-12">
          <div className="text-center flexColCenter">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="mt-8 mb-6 text-4xl lg:text-5xl  ">
                  New Healthy Receipes Are Here!
                </h2>
                <p className="max-w-3xl mx-auto mb-10 text-lg text-white ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laborum sit cum iure qui, nostrum at sapiente ducimus.
                </p>
                <Link to="/" className="p-2 px-3 rounded bg-white">
                  Get Receipes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
