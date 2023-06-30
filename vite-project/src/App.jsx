import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
// import Content from "./components/Content";
import IntroPost from "./components/IntroPost";
import Posts from "./components/Posts";
import Navbar from "./components/Navbar";
import { Login } from "./pages/Login";
import Contact from "./components/Contact";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
      
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/intropost" element={<IntroPost />} />
          <Route path="/post" element={<Posts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <div className="App">
          <Home />
        </div> */}
      </Router>
     
    </>
  );
}

export default App;
