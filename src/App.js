import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import Login from './Pages/Login/Login';
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div >
      {/* className="px-2 lg:px-20" */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
    );
}

export default App;
