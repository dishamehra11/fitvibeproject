import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container } from "react-bootstrap";

// ✅ Full Blog Data
const blogPosts = [
  {
    id: 1,
    title: "Functional Fitness : Train Life And Looks",
    date: "May 2, 2025",
    author: "Admin",
    image: require("../images/Blog1.jpg"),
    content: `
Functional fitness focuses on training your body for everyday activities. Unlike traditional workouts that isolate muscles, functional fitness emphasizes movements that improve overall strength, balance, and flexibility.

Key benefits include:
- Enhanced strength for daily activities like lifting and bending.
- Improved balance and coordination to reduce risk of injuries.
- Better posture and core stability.
- Increased flexibility and mobility.
- Boosted overall fitness combining cardio, strength, and flexibility.

Sample Functional Fitness Exercises:
- Squats & Lunges
- Push-ups & Pull-ups
- Plank Variations
- Medicine Ball Throws
- Kettlebell Swings
- Resistance Band Workouts

Incorporating functional fitness into your routine helps you look fit and improves your day-to-day physical performance. It’s practical and efficient for a stronger, healthier lifestyle.
    `,
  },
  {
    id: 2,
    title: "The Mind-Body Connection : Why It Matters",
    date: "Feb 24, 2025",
    author: "Admin",
    image: require("../images/Blog2.webp"),
    content: `
The mind and body are deeply connected. Maintaining mental wellness is as important as physical health. Stress, anxiety, and negative emotions can impact your body, affecting energy, sleep, and overall health.

Benefits of a strong mind-body connection:
- Reduces stress and anxiety.
- Improves focus, productivity, and mental clarity.
- Supports healthy physical habits.
- Enhances emotional resilience.
- Boosts overall well-being.

Techniques to strengthen mind-body connection:
- Meditation & mindfulness practices.
- Yoga and gentle stretching.
- Deep breathing exercises.
- Journaling and reflection.
- Balanced nutrition and sleep routines.

By nurturing the mind-body connection, you can achieve optimal health, reduce the risk of illness, and enhance your quality of life.
    `,
  },
  {
    id: 3,
    title: "Bump, Breathe, Balance: The Magic Of Prenatal Yoga",
    date: "Feb 24, 2025",
    author: "Admin",
    image: require("../images/Blog3.jpg"),
    content: `
Prenatal yoga helps expecting mothers maintain physical balance, flexibility, and mental peace. It is a safe form of exercise during pregnancy that supports both the mother and baby.

Benefits of prenatal yoga:
- Reduces stress and anxiety during pregnancy.
- Relieves back pain and improves posture.
- Increases flexibility and muscle tone.
- Prepares the body for labor with breathing and relaxation techniques.
- Promotes better sleep and mental clarity.

Recommended prenatal yoga practices:
- Gentle stretching and poses.
- Deep breathing exercises.
- Meditation and mindfulness.
- Core strengthening and pelvic floor exercises.
- Balance and stability poses.

Prenatal yoga encourages a calm mind, a healthy body, and a positive connection between mother and baby, creating a more joyful pregnancy journey.
    `,
  },
];

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogPosts.find((b) => b.id === Number(id));

  if (!blog) return <h2>Blog post not found</h2>;

  return (
    <>
      {/* HERO */}
      <section className="blog-hero">
        <div className="overlay"></div>
        <div className="blog-content">
          <h1 className="page-title">{blog.title}</h1>
          <nav className="d-block">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/blog">Blog</Link></li>
              <li className="breadcrumb-item">{blog.title}</li>
            </ul>
          </nav>
        </div>
      </section>

      {/* BLOG CONTENT */}
      <Container>
        <section className="blog-details">
          <img src={blog.image} alt={blog.title} className="blog-details-img" />
          <p className="meta">👤 {blog.author} • {blog.date}</p>
          <div className="blog-full-content">
            {blog.content.split("\n").map((line, index) => {
              if (line.startsWith("- ")) {
                return <li key={index}>{line.replace("- ", "")}</li>;
              }
              return line.trim() !== "" ? <p key={index}>{line}</p> : null;
            })}
          </div>
        </section>
      </Container>
    </>
  );
}
