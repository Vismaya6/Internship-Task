import React from "react";

const HackSphereLanding = () => {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
        body, html {
          margin: 0; padding: 0;
          font-family: 'Poppins', sans-serif;
          background: #f0f4f8;
          color: #222;
          scroll-behavior: smooth;
        }
        .container {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        header.hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 2rem 1rem;
        }
        header.hero h1 {
          font-size: 3rem;
          margin: 0 0 0.5rem;
          letter-spacing: 2px;
        }
        header.hero p.tagline {
          font-size: 1.5rem;
          margin-bottom: 1.2rem;
          font-weight: 500;
          opacity: 0.9;
        }
        header.hero p.details {
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
          font-weight: 300;
          letter-spacing: 1.1px;
        }
        header.hero button.cta {
          background-color: #ff6363;
          border: none;
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 40px;
          color: white;
          cursor: pointer;
          box-shadow: 0 6px 12px rgba(255, 99, 99, 0.4);
          transition: background-color 0.3s ease, transform 0.3s ease;
        }
        header.hero button.cta:hover {
          background-color: #ff4343;
          transform: scale(1.05);
        }

        section.about {
          background: white;
          padding: 3rem 1rem;
          text-align: center;
          color: #333;
          border-radius: 8px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          margin: 4rem auto;
          max-width: 700px;
        }
        section.about h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #4a4a4a;
        }
        section.about p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #555;
        }

        footer {
          text-align: center;
          padding: 2rem 1rem;
          font-size: 0.9rem;
          color: #999;
          background: #222;
        }

        @media (max-width: 600px) {
          header.hero h1 {
            font-size: 2.2rem;
          }
          header.hero p.tagline {
            font-size: 1.2rem;
          }
          header.hero p.details {
            font-size: 1rem;
          }
          header.hero button.cta {
            padding: 0.85rem 2rem;
            font-size: 1rem;
          }
        }
      `}</style>

      <header className="hero">
        <h1>HackSphere 2025</h1>
        <p className="tagline">Code. Create. Conquer.</p>
        <p className="details">June 20–22, 2025 – Online</p>
        <button className="cta" onClick={() => alert("Register functionality coming soon!")}>
          Register Now
        </button>
      </header>

      <section className="about container" aria-label="About HackSphere 2025">
        <h2>About HackSphere 2025</h2>
        <p>
          HackSphere 2025 is a global 48-hour hackathon designed to bring together developers,
          designers, and creators from all corners of the world. Collaborate, innovate, and
          showcase your skills in a fast-paced, fun, and friendly environment.
        </p>
        <p>
          Whether you're a coding wizard, a design guru, or a creative thinker, this is your
          chance to build something amazing and connect with like-minded talents worldwide.
        </p>
      </section>

      <footer>
        © 2025 HackSphere. All rights reserved.
      </footer>
    </>
  );
};

export default function App() {
  return <HackSphereLanding />;
}
