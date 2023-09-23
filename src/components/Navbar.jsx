export default function Navbar() {
  return (
    <nav className="font-display p-4 px-6 flexRow border-b border-gray-100 bg-gray-100">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold uppercase text-red-700 lg:text-2xl text-xl ">
          Foodecs
        </h1>
      </div>
      <div className="block md:hidden py-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
      <div className="hidden md:inline-block ">
        <ul className="text-gray-700 flexRow text-lg">
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
      </div>
    </nav>
  );
}
