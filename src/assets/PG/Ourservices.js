// import React from "react";
// import { Link } from 'react-router-dom';
// const Ourservices = () => {
//   return (
//     <>
//        <section
//             className="service-hero">
//             <div className="overlay"></div>
    
//             <div className="hero-content" >
//               <h1>Our Services</h1>
    
//               <nav className='d-block'>
//                 <ul className='breadcrumb'>
//                   {/* <FaGreaterThan size={8}/> */}
//                    <li className='breadcrumb-item'><Link to="/">Home </Link> </li>
//                   <li className='breadcrumb-item'>Our Services</li> 
//                 </ul>
//               </nav>
       
//             </div >
//           </section >
//     </>
//   );
// };

// export default Ourservices;



import React from "react";
import { Link } from "react-router-dom";
// import "./OurServices.css";

const servicesData = [
  {
    image: "/images/lifestyle.jpg",
    title: "Lifestyle Coaching",
    icon: "🏃‍♀️",
  },
  {
    image: "/images/recovery.jpg",
    title: "Recovery & Regeneration",
    icon: "💪",
  },
  {
    image: "/images/mental.jpg",
    title: "Mental Wellness",
    icon: "🧘‍♀️",
  },
  {
    image: "/images/nutrition.jpg",
    title: "Nutrition Coaching",
    icon: "🥗",
  },
  {
    image: "/images/group.jpg",
    title: "Group Fitness",
    icon: "🔥",
  },
  {
    image: "/images/personal.jpg",
    title: "Personal Training",
    icon: "🏋️",
  },
];

function OurServices() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="service-hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>Our Services</h1>

          <nav className="d-block">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">Our Services</li>
            </ul>
          </nav>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="services-section">
        <div className="services-grid">
          {servicesData.map((item, index) => (
            <div key={index} className="service-card">
              <img src={item.image} alt={item.title} className="service-img" />

              <div className="service-icon">{item.icon}</div>

              <h3 className="service-title">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default OurServices;


