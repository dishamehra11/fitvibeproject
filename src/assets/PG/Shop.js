import React, { useState } from "react";
import { Link } from "react-router-dom";

// 🔥 HERO SECTION BACKGROUND IMAGE IMPORT
import bg5 from "../images/bg3.webp";

// PRODUCTS IMAGES
import p1 from "../images/bench.jpg";
import p2 from "../images/cycle.jpg";
import p3 from "../images/watch.jpg";
import p4 from "../images/wear.jpg";
import p5 from "../images/kettle.jpg";
import p6 from "../images/shorts.jpg";
import p7 from "../images/tube.jpg";
import p8 from "../images/bottle.jpg";
import p9 from "../images/shoes.jpg";

const products = [
  { id: 1, name: "Bench With Barbell", price: 110, oldPrice: 180, image: p1, category: "Accessories" },
  { id: 2, name: "Cycling Fitness", price: 100, oldPrice: 140, image: p2, category: "Accessories" },
  { id: 3, name: "Fitness Tracker", price: 85, oldPrice: 90, image: p3, category: "Accessories" },
  { id: 4, name: "Gym Wear", price: 340, oldPrice: 350, image: p4, category: "Clothing" },
  { id: 5, name: "Kettlebell", price: 100, oldPrice: 150, image: p5, category: "Accessories" },
  { id: 6, name: "MMA Shorts", price: 85, oldPrice: 90, image: p6, category: "Clothing" },
  { id: 7, name: "Resistance Tube", price: 35, oldPrice: 45, image: p7, category: "Accessories" },
  { id: 8, name: "Shaker Bottle", price: 110, oldPrice: 220, image: p8, category: "Accessories" },
  { id: 9, name: "Shoes", price: 200, oldPrice: 250, image: p9, category: "Clothing" }
];

function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const filteredProducts = products
    .filter((p) => (category === "All" ? p : p.category === category))
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "low-high") return a.price - b.price;
      if (sort === "high-low") return b.price - a.price;
      return 0;
    });

  return (
    <>
      {/* 🔥 HERO SECTION */}
      <section
        className="shop-hero"
        style={{
          backgroundImage: `url(${bg5})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>Shop</h1>

          <nav className="d-block">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">Shop</li>
            </ul>
          </nav>
        </div>
      </section>

      {/* MAIN SHOP */}
      <div className="shop-wrapper">
        {/* Sidebar */}
        <div className="sidebar">
          <h3>Search</h3>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <h3>Categories</h3>
          <ul className="category-list">
            {["All", "Accessories", "Clothing"].map((cat) => (
              <li
                key={cat}
                className={category === cat ? "active" : ""}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Products Area */}
        <div className="shop-content">
          <div className="sorting-bar">
            <p>Showing {filteredProducts.length} results</p>

            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="default">Default sorting</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>

          <div className="product-grid">
            {filteredProducts.map((item) => (
              <div className="product-card" key={item.id}>
                <img src={item.image} alt={item.name} />

                <h4>{item.name}</h4>

                <p className="price">
                  <span className="old">${item.oldPrice}</span>
                  <span className="new">${item.price}</span>
                </p>

                <Link to={`/product/${item.id}`}>
                  <button className="shop-btn">View Product</button>
                </Link>


              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
