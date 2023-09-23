import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter,Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Footer />
    </>
  );
}

export default App;
