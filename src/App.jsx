import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Receipe from "./pages/Receipe";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/receipe/:id" Component={Receipe} />
      <Route path="*" Component={NotFound} />
      <Route path="/login" Component={Login} />
      <Route path="/register" Component={Register} />
      <Route />
    </Routes>
  );
}

export default App;
