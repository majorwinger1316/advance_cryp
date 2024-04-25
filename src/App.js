import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Test from "./pages/Test";
import AES from "./pages/AES";
import Caesar from "./pages/Caesar";
import RSA from "./pages/RSA";
import DES from "./pages/DES";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/test" exact element={<Test />} />
          <Route path="/AES" exact element={<AES />} />
          <Route path="/Caesar" exact element={<Caesar />} />
          <Route path="/RSA" exact element={<RSA />} />
          <Route path="/DES" exact element={<DES />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
