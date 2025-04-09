import { Route, Routes } from "react-router-dom";
import { Home, About, Explorations, Research, Contact,  } from "./pages";
// import { Navbar } from "./components/Navbar"
// import {PreLoader} from "./components/PreLoader";

function App() {
  return (
    <div className="App">
        <Routes>
          {/* <PreLoader/> */}
          {/* <Navbar/> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/explorations" element={<Explorations />} />
          <Route path="/research" element={<Research />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
