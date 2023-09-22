/* eslint-disable react/prop-types */
export default function Card({ receipe }) {
  return (
    <div className="font-display card">
      <img
        src={receipe.image}
        alt={receipe.name}
        className="w-full h-32 sm:h-48 object-cover"
      />
      <div className="p-4">
        <span className="text-lg text-gray-800 uppercase font-bold tracking-wider ">
          {receipe.name}
        </span>
        <span className="block text-gray-400">{receipe.desc}</span>
      </div>
      <div className="badge">
        <span>{receipe.calories}</span>
      </div>
    </div>
  );
}
