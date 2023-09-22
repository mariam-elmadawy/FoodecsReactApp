export default function Navbar() {
  return (
    <nav className="font-display p-4 px-6 flex justify-between border-b border-gray-100 bg-gray-100">
      <div className="icon">
        <h1 className="font-semibold uppercase text-red-700 lg:text-2xl text-xl ">
          Foodecs
        </h1>
      </div>
      <ul className="text-gray-700 flex gap-4  text-lg">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="" className="btn">
            login
          </a>
        </li>
      </ul>
    </nav>
  );
}
