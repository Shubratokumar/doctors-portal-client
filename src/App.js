import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import Login from './Pages/Login/Login';
import NotFound from "./Pages/NotFound/NotFound";
import Appointment from "./Pages/Appointment/Appointment";

function App() {
  return (
    <div className="max-w-7xl mx-auto" >
      {/* className="px-2 lg:px-20" */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
    );
}

export default App;
