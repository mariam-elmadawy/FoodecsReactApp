import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const data = localStorage.getItem("userData");

    if (data && data.length) {
      const userData = JSON.parse(data);
      const userLogged = userData.filter((d) => {
        return d.email === email && d.password === password;
      });
      localStorage.setItem("userLogged", JSON.stringify(userData));
      userLogged.length === 0 ? alert("invalid data try again") : navigate("/");
    }
  }
  return (
    <>
      <div className="flexColCenter items-center paddings h-screen bg-gray-300">
        <div className="min-h-96 max-w-[500px] w-full rounded shadow-md hover:shadow-lg bg-gray-800 flexColCenter">
          <form onSubmit={handleSubmit} className="flexCol p-8 text-gray-200">
            <h1 className="headText font-bold uppercase">Welcome to Foodecs</h1>
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
                don&apos;t have an account yet?
                <Link
                  to="/register"
                  className="font-bold text-gray-500 hover:text-red-500 ml-2"
                >
                  Sign Up
                </Link>
              </p>
            </div>
            <button className="btn my-2" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
