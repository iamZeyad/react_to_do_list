import About from "./containers/About";
import Home from "./containers/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <header>
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/containers/About" element={<About />} />
          </Routes>
        </main>
        <footer>
          <p>For any issues please contact zabdullahalamoudi@stu.kau.edu.sa</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}