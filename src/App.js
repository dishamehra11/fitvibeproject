import './App.css';
import Header from './assets/Components/Header';
import Footer from './assets/Components/Footer';
//  PG   
import Home from './assets/PG/Home';
import AboutUs from './assets/PG/AboutUs';
import Ourservices from './assets/PG/Ourservices';
import Blogs from './assets/PG/Blog';
import Shop from './assets/PG/Shop';
import Appointment from "./assets/PG/Appoinment";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/AboutUs" element={<AboutUs />}></Route>
        <Route path="/Ourservices" element={<Ourservices />}></Route>
        <Route path="/Blogs" element={<Blogs />}></Route>
        <Route path="/Shop" element={<Shop />}></Route>
        <Route path="/Appointment" element={<Appointment />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
