import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  let [open, setOpen] = useState(false);
  return (
    <nav className="px-12 md:flex justify-between items-center gap-4 relative">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold uppercase text-red-700 lg:text-2xl text-xl my-4">
          Foodecs
        </h1>
        <span
          className="cursor-pointer text-3xl text-white block md:hidden"
          onClick={() => setOpen(!open)}
        >
          <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
        </span>
      </div>
      <ul
        className={`text-gray-300 text-lg flex flex-col md:flex-row gap-4 text-center z-[-1] md:z-auto md:static  ${
          open ? "top-20 " : "top-[-400px] absolute "
        }`}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="login" className="btn">
          login
        </NavLink>
      </ul>
    </nav>
  );
}
