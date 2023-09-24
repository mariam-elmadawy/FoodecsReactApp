import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const userData = [{ name, email, password }];
    localStorage.setItem("userData", JSON.stringify(userData));
    console.log(email, password);
    navigate("/login");
    // alert(`welcome ${name}`);
  }

  return (
    <>
      <div className="flexColCenter items-center paddings h-screen bg-gray-300">
        <div className="min-h-96 max-w-[500px] w-full rounded shadow-md hover:shadow-lg bg-gray-800 flexColCenter">
          <form onSubmit={handleSubmit} className="flexCol p-8 text-gray-200">
            <h1 className="headText font-bold uppercase">Welcome to Foodecs</h1>
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                id="name"
                className="rounded-full p-1 bg-gray-400 text-white mt-2 focus:bg-gray-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                className="rounded-full p-1 bg-gray-400 text-white mt-2 focus:bg-gray-500 focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="pass">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="pass"
                name="pass"
                className="rounded-full p-1 bg-gray-400 
              text-white mt-2 focus:bg-gray-500 focus:outline-none "
              />
            </div>
            <div className="mx-3">
              <input type="checkbox" id="check" className="mr-2" />
              Remember me
              <p>
                you have an account ?
                <Link
                  to="/login"
                  className="font-bold text-gray-500 hover:text-red-500 ml-2"
                >
                  Login
                </Link>
              </p>
            </div>
            <button className="btn my-2" type="submit">
              Signup
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
