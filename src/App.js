// import './App.css';
// import { Routes, Route, Navigate } from "react-router-dom";

// import Header from './assets/Components/Header';
// import Footer from './assets/Components/Footer';

// // PAGES
// import Home from './assets/PG/Home';
// import AboutUs from './assets/PG/AboutUs';
// import Ourservices from './assets/PG/Ourservices';
// import Blog from './assets/PG/Blog';
// import Shop from './assets/PG/Shop';
// import Appointment from "./assets/PG/Appoinment";
// import Login from "./assets/PG/Login";
// import Register from "./assets/PG/Register";

// // COMPONENT PAGES
// import Team from './assets/Components/Team';
// import ContactUs from './assets/Components/ContactUs';
// import TestimonialSection from './assets/Components/TestimonialSection';

// // ✅ PROTECTED ROUTE COMPONENT
// const ProtectedRoute = ({ children }) => {
//   const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
//   return isLoggedIn ? children : <Navigate to="/login" />;
// };

// function App() {
//   return (
//     <>
//       <Header />

//       <Routes>

//         {/* PUBLIC ROUTES */}
//         <Route path="/" element={<Home />} />
//         <Route path="/aboutus" element={<AboutUs />} />
//         <Route path="/ourservices" element={<Ourservices />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/team" element={<Team />} />
//         <Route path="/contact" element={<ContactUs />} />
//         <Route path="/testimonial" element={<TestimonialSection />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* 🔐 PROTECTED ROUTE */}
//         <Route
//           path="/appointment"
//           element={
//             <ProtectedRoute>
//               <Appointment />
//             </ProtectedRoute>
//           }
//         />

//         {/* FALLBACK */}
//         <Route path="*" element={<Navigate to="/" />} />

//       </Routes>

//       <Footer />
//     </>
//   );
// }

// export default App;

import './App.css';
import { Routes, Route } from "react-router-dom";

import Header from './assets/Components/Header';
import Footer from './assets/Components/Footer';

import Home from './assets/PG/Home';
import AboutUs from './assets/PG/AboutUs';
import Ourservices from './assets/PG/Ourservices';
import Blog from './assets/PG/Blog';
import Shop from './assets/PG/Shop';
import Appointment from "./assets/PG/Appoinment";

import Team from './assets/Components/Team';
import ContactUs from './assets/Components/ContactUs';
import TestimonialSection from './assets/Components/TestimonialSection';

import Login from "./assets/Components/auth/Login";
import Register from "./assets/Components/auth/Register";

import ProductDetails from "./assets/Components/ProductDetails";
import BlogDetails from './assets/Components/BlogDetails';

import ProtectedRoute from "./assets/Components/ProtectedRoute";

function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Ourservices" element={<Ourservices />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/testimonial" element={<TestimonialSection />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/blog/:id" element={<BlogDetails />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 🔐 PROTECTED ROUTE */}
        <Route
          path="/Appointment"
          element={
            <ProtectedRoute>
              <Appointment />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;










// import About from "./assets/Components/About";
// import OurServices from "./assets/Components/OurServices";
// import LandingSection from "./assets/Components/LandingSection";
// import OurTeam from "./assets/Components/OurTeam";
// import InnerHappinessSection from "./assets/Components/InnerHappinessSection";
// import TestimonialSection from "./assets/Components/TestimonialSection";
// import Blogs from "./assets/Components/Blogs";
// import { useNavigate } from "react-router-dom";
// import { useEffect , useState } from "react";

// // Auth
// import AuthModal from "./assets/Components/auth/AuthModal";
// import Login from "./assets/Components/auth/Login";
// import Register from "./assets/Components/auth/Register";

// function Home() {
//   const navigate = useNavigate();

//   const [showAuth, setShowAuth] = useState(false);
//   const [isLogin, setIsLogin] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const loggedIn = localStorage.getItem("isLoggedIn");
//     if (loggedIn === "true") {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   return (
//     <>
//     <Home/>
//       {/* ================= HERO SECTION ================= */}
//       <section className="hero2">
//         <div>
//           <p className="hero-subtitle">YOUR WELLNESS JOURNEY</p>

//           <div className="hero-title">
//             <h1>
//               Personalized Wellness <br /> for Real Results
//             </h1>
//           </div>

//           <div>
//             {!isLoggedIn ? (
//               <button
//                 className="btn-primary"
//                 onClick={() => setShowAuth(true)}
//               >
//                 GET STARTED →
//               </button>
//             ) : (
//               <button
//                 className="btn-primary"
//                 onClick={() => navigate("/appointment")}
//               >
//                 BOOK APPOINTMENT →
//               </button>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* ================= AUTH MODAL ================= */}
//       {showAuth && (
//         <AuthModal onClose={() => setShowAuth(false)}>
//           {isLogin ? (
//             <Login
//               onSuccess={() => {
//                 localStorage.setItem("isLoggedIn", "true");
//                 setIsLoggedIn(true);
//                 setShowAuth(false);
//               }}
//               switchToRegister={() => setIsLogin(false)}
//             />
//           ) : (
//             <Register switchToLogin={() => setIsLogin(true)} />
//           )}
//         </AuthModal>
//       )}

//       {/* ================= MAIN CONTENT ================= */}
//       <About />
//       <OurServices />
//       <LandingSection />
//       <OurTeam />
//       <InnerHappinessSection />
//       <TestimonialSection />
//       <Blogs />
//     </>
//   );
// }

// export default Home;
