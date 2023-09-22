import Card from "./Card";
import data from "../Modules/receipe.json";
export default function Home() {
  return (
    <div className="font-display">
      <div className="main px-24">
        <h1 className="text-red-700 text-4xl lg:text-6xl">Receipes</h1>
        <h3 className="text-green-700 text-xl font-semibold mt-10 pb-2 border-b border-green-100">
          Latest Receipe
        </h3>

        <div className="mt-8 grid  md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((receipe) => (
            <div key={receipe.id}>
              <Card receipe={receipe} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
