import Card from "../components/Card";
import data from "../Modules/receipe.json";
import Cover from "../components/Cover";
import Footer from "../components/Footer";
import Promo from "../components/Promo";
import Feedback from "../components/Feedback";
export default function Home() {
  return (
    <>
      <Cover />
      <div>
        <div className="paddings">
          <h1 className="headText">Receipes</h1>
          <h3 className="secText">Latest Receipe</h3>
          <div className="my-8 grid  md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((receipe) => (
              <div key={receipe.id}>
                <Card receipe={receipe} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Promo />
      <Feedback />
      <Footer />
    </>
  );
}
