import Navbar from "./Navbar";
export default function Cover() {
  return (
    <div className="w-full bg-center bg-cover bg-hero">
      <div className=" w-full h-full bg-gray-900 bg-opacity-50 pb-12">
        <Navbar />
        <div className="text-center flexColCenter">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <span className="headText uppercase tracking-widest">
                Foodecs
              </span>
              <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">
                New Receipes Specially For you!
              </h2>
              <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum sit cum iure qui, nostrum at sapiente ducimus.
              </p>
              <a
                className="inline-block  btn text-gray-800 transition duration-200"
                href="#"
              >
                Start Now!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
