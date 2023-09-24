import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-2xl flexColCenter items-center paddings h-screen">
      <h1>
        <span className="text-red-600 text-4xl">404</span>, Page Not Found
      </h1>
      <Link to="/" className="btn">
        go to home page
      </Link>
    </div>
  );
}
