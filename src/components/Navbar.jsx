import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="px-12 flexRow ">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold uppercase text-red-700 lg:text-2xl text-xl ">
          Foodecs
        </h1>
      </div>
      <div className="block md:hidden  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
          fill="white"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
      <div className="hidden md:inline-block ">
        <ul className="text-gray-300 flexRow text-lg">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="login" className="btn">
              login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
