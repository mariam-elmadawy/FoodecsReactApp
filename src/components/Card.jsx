/* eslint-disable react/prop-types */
export default function Card({ receipe }) {
  return (
    <div className="card">
      <img
        src={receipe.image}
        alt={receipe.name}
        className="w-full h-32 sm:h-48 object-cover"
      />
      <div className="p-4">
        <span className="text-lg text-gray-800 uppercase font-bold tracking-wider ">
          {receipe.name}
        </span>
        <p className="text-gray-400 my-3">{receipe.desc}</p>
        <a href="" className="bg-gray-200 my-5 px-2 py-1  rounded">
          View Receipe
        </a>
      </div>
      <div className="badge">
        <span>{receipe.calories}</span>
      </div>
    </div>
  );
}
