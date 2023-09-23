import Card from "./Card";
import data from "../Modules/receipe.json";
export default function Home() {
  return (
    <div className="font-display">
      <div className="paddings">
        <h1 className="headText">Receipes</h1>
        <h3 className="secText">Latest Receipe</h3>
        <div className="mt-8 grid  md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((receipe) => (
            <div key={receipe.id}>
              <Card receipe={receipe} />
            </div>
          ))}
        </div>
        <h3 className="secText">Most Popular Receipe</h3>
      </div>
    </div>
  );
}
