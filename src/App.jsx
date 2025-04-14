import LoadingScreen from "./components/LoadingScreen";
import "./App.css";
import "./index.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Project from "./components/sections/Project";
function App() {
  const [isloading, setIsLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isloading && <LoadingScreen onComplete={() => setIsLoading(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isloading ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Project />
      </div>
    </>
  );
}

export default App;
