// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import "./ProductDetails.css";

// // ✅ IMPORT IMAGES
// import bench from "../images/bench.jpg";
// import cycle from "../images/cycle.jpg";
// import watch from "../images/watch.jpg";
// import p4 from "../images/wear.jpg";
// import p5 from "../images/kettle.jpg";
// import p6 from "../images/shorts.jpg";
// import p7 from "../images/tube.jpg";
// import p8 from "../images/bottle.jpg";
// import p9 from "../images/shoes.jpg";


// const products = [
//    {
//     id: 1,
//     name: "Bench With Barbell",
//     price: 110,
//     oldPrice: 180,
//     image: bench,
//   },
//   {
//     id: 2,
//     name: "Cycling Fitness",
//     price: 100,
//     oldPrice: 140,
//     image: cycle,
//   },
//   {
//     id: 3,
//     name: "Fitness Tracker",
//     price: 85,
//     oldPrice: 90,
//     image: watch,
//   },
//   {
//     id: 4,
//     name: "Gym Wear",
//     price: 340,
//     oldPrice: 350,
//     image: p4,
//   },
//   {
//     id: 5,
//     name: "Kettlebell",
//     price: 100,
//     oldPrice: 150,
//     image: p5,
//   },
//   {
//     id: 6,
//     name: "MMA Shorts",
//     price: 85,
//     oldPrice: 90,
//     image: p6,
//   },
//   {
//     id: 7,
//     name: "Resistance Tube",
//     price: 35,
//     oldPrice: 45,
//     image: p7,
//   },
//   {
//     id: 8,
//     name: "Shaker Bottle",
//     price: 110,
//     oldPrice: 220,
//     image: p8,
//   },
//   {
//     id: 9,
//     name: "Shoes",
//     price: 200,
//     oldPrice: 250,
//     image: p9,
//   },
// ];

// export default function ProductDetails() {
//   const { id } = useParams();
//   const product = products.find((p) => p.id === Number(id));
//   const [qty, setQty] = useState(1);

//   if (!product) return <h2>Product not found</h2>;

//   const addToCart = () => {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const found = cart.find((p) => p.id === product.id);

//     if (found) {
//       found.qty += qty;
//     } else {
//       cart.push({ ...product, qty });
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));
//     alert("Added to cart");
//   };

//   return (
//     <>
//       <section className="pd-hero">
//         <h1>{product.name}</h1>
//       </section>

//       <section className="pd-wrapper">
//         <div className="pd-image">
//           <span className="sale">Sale!</span>
//           <img src={product.image} alt={product.name} />
//         </div>

//         <div className="pd-info">
//           <p className="pd-price">
//             <span className="old">${product.oldPrice}</span>
//             <span className="new">${product.price}</span>
//           </p>

//           <div className="pd-cart">
//             <input
//               type="number"
//               min="1"
//               value={qty}
//               onChange={(e) => setQty(+e.target.value)}
//             />
//             <button onClick={addToCart}>ADD TO CART</button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }




// import { useState } from "react";
// import bench from "../images/bench.jpg";
// import { Link } from "react-router-dom";

// // 🔹 RELATED PRODUCT IMAGES
// import shoes from "../images/shoes.jpg";
// import tube from "../images/tube.jpg";
// import bottle from "../images/bottle.jpg";
// import kettle from "../images/kettle.jpg";

// import "./ProductDetails.css";

// export default function ProductDetails() {
//   const [qty, setQty] = useState(1);
//   const [activeTab, setActiveTab] = useState("desc");

//   const product = {
//     name: "Bench With Barbell",
//     price: 110,
//     oldPrice: 180,
//     image: bench,
//     description:
//       "Welcome to your one-stop destination for all things health, fitness, and wellness! We offer a carefully curated selection of premium products designed to support your journey toward a healthier lifestyle.",
//     features: [
//       "Top-quality fitness equipment",
//       "Perfect for home & gym workouts",
//       "Trusted wellness brand",
//       "Durable & long-lasting material",
//     ],
//   };

//   const addToCart = () => {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     cart.push({ ...product, qty });
//     localStorage.setItem("cart", JSON.stringify(cart));
//     alert("Product added to cart");
//   };

//   return (
//     <>
//       {/* HERO */}
//       <section className="pd-hero">
//         <h1>{product.name}</h1>
//         <p> <Link to="/">Home</Link> &gt; Product &gt; {product.name}</p>
//       </section>

//       {/* PRODUCT */}
//       <section className="pd-wrapper">
//         <div className="pd-image">
//           <span className="sale">Sale!</span>
//           <img src={product.image} alt={product.name} />
//         </div>

//         <div className="pd-info">
//           <p className="pd-price">
//             <span className="old">${product.oldPrice}</span>
//             <span className="new">${product.price}</span>
//           </p>

//           <p className="pd-text">{product.description}</p>

//           <ul className="pd-list">
//             {product.features.map((item, i) => (
//               <li key={i}>{item}</li>
//             ))}
//           </ul>

//           <div className="pd-cart">
//             <input
//               type="number"
//               min="1"
//               value={qty}
//               onChange={(e) => setQty(+e.target.value)}
//             />
//             <button onClick={addToCart}>ADD TO CART</button>
//           </div>
//         </div>
//       </section>

//       {/* TABS */}
//       <section className="pd-tabs">
//         <div className="tab-buttons">
//           <button
//             className={activeTab === "desc" ? "active" : ""}
//             onClick={() => setActiveTab("desc")}
//           >
//             Description
//           </button>
//           <button
//             className={activeTab === "info" ? "active" : ""}
//             onClick={() => setActiveTab("info")}
//           >
//             Additional information
//           </button>
//         </div>

//         <div className="tab-content">
//           {activeTab === "desc" ? (
//             <p>
//               This bench is ideal for strength training and full-body workouts.
//               Designed for durability and comfort.
//             </p>
//           ) : (
//             <p>
//               Weight: 25kg <br />
//               Material: Steel <br />
//               Usage: Home & Gym
//             </p>
//           )}
//         </div>
//       </section>
//       {/* ✅ RELATED PRODUCTS WITH PRICE */}
//       <section className="pd-related">
//         <h2>Related products</h2>

//         <div className="related-grid">
//           <div className="card">
//             <img src={shoes} alt="Shoes" />
//             <p className="rp-name">Shoes</p>
//             <p className="rp-price">
//               <span className="old">$250</span>
//               <span className="new">$200</span>
//             </p>
//           </div>

//           <div className="card">
//             <img src={tube} alt="Skipping Rope" />
//             <p className="rp-name">Skipping Rope</p>
//             <p className="rp-price">
//               <span className="old">$45</span>
//               <span className="new">$35</span>
//             </p>
//           </div>

//           <div className="card">
//             <img src={bottle} alt="Shaker Bottle" />
//             <p className="rp-name">Shaker Bottle</p>
//             <p className="rp-price">
//               <span className="old">$220</span>
//               <span className="new">$110</span>
//             </p>
//           </div>

//           <div className="card">
//             <img src={kettle} alt="Kettlebell" />
//             <p className="rp-name">Kettlebell</p>
//             <p className="rp-price">
//               <span className="old">$150</span>
//               <span className="new">$100</span>
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetails.css";

// ✅ IMAGES
import bench from "../images/bench.jpg";
import cycle from "../images/cycle.jpg";
import watch from "../images/watch.jpg";
import p4 from "../images/wear.jpg";
import p5 from "../images/kettle.jpg";
import p6 from "../images/shorts.jpg";
import p7 from "../images/tube.jpg";
import p8 from "../images/bottle.jpg";
import p9 from "../images/shoes.jpg";

const products = [
  { id: 1, name: "Bench With Barbell", price: 110, oldPrice: 180, image: bench, description: "Top-quality fitness equipment for home & gym.", features: ["Top-quality fitness equipment","Perfect for home & gym workouts","Trusted wellness brand","Durable & long-lasting material"], additionalInfo: { weight: "25kg", material: "Steel", usage: "Home & Gym" } },
  { id: 2, name: "Cycling Fitness", price: 100, oldPrice: 140, image: cycle, description: "High performance cycling machine.", features: ["Smooth resistance","Sturdy frame","Comfortable seat","Track your calories"], additionalInfo: { weight: "20kg", material: "Steel & Plastic", usage: "Home & Gym" } },
  { id: 3, name: "Fitness Tracker", price: 85, oldPrice: 90, image: watch, description: "Track your fitness activity accurately.", features: ["Heart rate monitor","Step counter","Sleep tracking","Water resistant"], additionalInfo: { batteryLife: "7 days", waterproof: "Yes", compatibility: "iOS & Android" } },
  { id: 4, name: "Gym Wear", price: 340, oldPrice: 350, image: p4, description: "Comfortable and stylish gym wear.", features: ["Breathable material","Flexibility","Durable stitching","Easy to wash"], additionalInfo: { material: "Polyester & Spandex", sizes: "S, M, L, XL", gender: "Unisex" } },
  { id: 5, name: "Kettlebell", price: 100, oldPrice: 150, image: p5, description: "Perfect for strength training.", features: ["Ergonomic handle","Cast iron","Durable","Multiple weights"], additionalInfo: { weight: "10kg", material: "Cast Iron", usage: "Home & Gym" } },
  { id: 6, name: "MMA Shorts", price: 85, oldPrice: 90, image: p6, description: "Lightweight and durable MMA shorts.", features: ["Flexible fabric","Breathable","Quick-dry","Perfect for training"], additionalInfo: { material: "Polyester", sizes: "S, M, L, XL", gender: "Men" } },
  { id: 7, name: "Resistance Tube", price: 35, oldPrice: 45, image: p7, description: "Resistance tubes for workouts.", features: ["Multiple resistance levels","Portable","Durable","Versatile exercises"], additionalInfo: { length: "1.5m", resistance: "Light, Medium, Heavy", material: "Rubber" } },
  { id: 8, name: "Shaker Bottle", price: 110, oldPrice: 220, image: p8, description: "Mix your protein drinks easily.", features: ["Leak-proof","BPA free","Portable","Easy to clean"], additionalInfo: { capacity: "600ml", material: "Plastic BPA-free", dishwasherSafe: "Yes" } },
  { id: 9, name: "Shoes", price: 200, oldPrice: 250, image: p9, description: "Comfortable and stylish shoes.", features: ["Breathable","Cushioned","Lightweight","Durable sole"], additionalInfo: { sizes: "6-12", material: "Mesh & Rubber", gender: "Unisex" } },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("desc");

  if (!product) return <h2>Product not found</h2>;

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const found = cart.find((p) => p.id === product.id);
    if (found) found.qty += qty;
    else cart.push({ ...product, qty });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart");
  };

  // Related products (exclude current product)
  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="pd-hero">
        <h1>{product.name}</h1>
        <p><Link to="/">Home</Link> &gt; Product &gt; {product.name}</p>
      </section>

      {/* PRODUCT */}
      <section className="pd-wrapper">
        <div className="pd-image">
          <span className="sale">Sale!</span>
          <img src={product.image} alt={product.name} />
        </div>

        <div className="pd-info">
          <p className="pd-price">
            <span className="old">${product.oldPrice}</span>
            <span className="new">${product.price}</span>
          </p>

          <p className="pd-text">{product.description}</p>

          <ul className="pd-list">
            {product.features.map((item, i) => <li key={i}>{item}</li>)}
          </ul>

          <div className="pd-cart">
            <input type="number" min="1" value={qty} onChange={(e) => setQty(+e.target.value)} />
            <button onClick={addToCart}>ADD TO CART</button>
          </div>
        </div>
      </section>

      {/* TABS */}
      <section className="pd-tabs">
        <div className="tab-buttons">
          <button className={activeTab === "desc" ? "active" : ""} onClick={() => setActiveTab("desc")}>Description</button>
          <button className={activeTab === "info" ? "active" : ""} onClick={() => setActiveTab("info")}>Additional information</button>
        </div>
        <div className="tab-content">
          {activeTab === "desc" ? (
            <p>{product.description}</p>
          ) : (
            <div>
              {Object.entries(product.additionalInfo).map(([key, value]) => (
                <p key={key}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}</p>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="pd-related">
        <h2>Related products</h2>
        <div className="related-grid">
          {related.map((item) => (
            <Link to={`/product/${item.id}`} className="card" key={item.id}>
              <div className="sale" style={{ display: item.oldPrice > item.price ? "block" : "none" }}>Sale!</div>
              <img src={item.image} alt={item.name} />
              <p className="rp-name">{item.name}</p>
              <p className="rp-price">
                {item.oldPrice > item.price && <span className="old">${item.oldPrice}</span>}
                <span className="new">${item.price}</span>
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
