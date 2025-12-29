import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// ✅ Blog data
const blogPosts = [
  {
    id: 1,
    title: "Functional Fitness : Train Life And Looks",
    date: "May 2, 2025",
    author: "Admin",
    image: require('../images/Blog1.jpg'),
  },
  {
    id: 2,
    title: "The Mind-Body Connection : Why It Matters",
    date: "Feb 24, 2025",
    author: "Admin",
    image: require('../images/Blog2.webp'),
  },
  {
    id: 3,
    title: "Bump, Breathe, Balance The Magic Of Prenatal Yoga",
    date: "Feb 24, 2025",
    author: "Admin",
    image: require('../images/Blog3.jpg'),
  },
];

function Blog() {
  return (
    <>
      <section className="blog-hero">
        <div className="overlay"></div>
        <div className="blog-content">
          <h1 className='page-title'>Latest Posts</h1>
          <nav className='d-block'>
            <ul className='breadcrumb'>
              <li className='breadcrumb-item'><Link to="/">Home</Link></li>
              <li className='breadcrumb-item'>Blog</li>
            </ul>
          </nav>
        </div>
      </section>

      <Container>
        <section>
          <div className="blog-layout">
            {/* LEFT SIDE BLOG LIST */}
            <div className="blog-left">
              {blogPosts.map((post) => (
                <div className="blog-card" key={post.id}>
                  <img src={post.image} alt={post.title} className="blog-img" />
                  <div className="blog-content">
                    <p className="meta">👤 {post.author} • {post.date}</p>
                    <h2 className='blog-title'>{post.title}</h2>
                    <p className="desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                    </p>
                    {/* ✅ Dynamic READ MORE button */}
                    <Link to={`/blog/${post.id}`}>
                      <button className="read-more">READ MORE →</button>
                    </Link>
                  </div>
                </div>
              ))}

              {/* PAGINATION (optional, static for now) */}
              <div className="pagination">
                <button className="active">1</button>
                <button>2</button>
                <button>3</button>
                <button>→</button>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="blog-right">
              <div className="sidebar-box">
                <h3>Search</h3>
                <div className="search-box">
                  <input type="text" placeholder="Search..." />
                  <button>Search</button>
                </div>
              </div>

              <div className="sidebar-box">
                <h3>Latest Posts</h3>
                {blogPosts.map((post) => (
                  <div className="latest-item" key={post.id}>
                    <img src={post.image} alt={post.title} />
                    <div>
                      <p>{post.title}</p>
                      <span>{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="sidebar-box">
                <h3>Categories</h3>
                <p>• Training</p>
              </div>

              <div className="sidebar-box ad-box">
                <h4>Book your yoga session Today!</h4>
                <button className="contact-btn">CONTACT US</button>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}

export default Blog;
