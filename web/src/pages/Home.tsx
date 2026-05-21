import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="container page-wrapper">
      <div className="card" style={{ padding: '3rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '1rem', background: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--accent)))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Welcome to UltimateHealth
        </h1>
        <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
          Your comprehensive platform for modern health tracking, personalized articles, and intelligent medical guidance.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/articles" className="btn btn-primary">
            Read Articles
          </Link>
          <Link to="/profile" className="btn btn-secondary">
            View My Profile
          </Link>
        </div>
      </div>

      <div style={{ marginTop: '4rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Core Features</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div className="card">
            <h3 style={{ marginBottom: '0.5rem', color: 'hsl(var(--primary))' }}>Personalized Articles</h3>
            <p>Read health, fitness, and nutrition articles specifically curated for your lifestyle and goals.</p>
          </div>
          <div className="card">
            <h3 style={{ marginBottom: '0.5rem', color: 'hsl(var(--accent))' }}>Smart Trackers</h3>
            <p>Log and review your biometric data, exercise metrics, and sleep quality via simple interactive dashboards.</p>
          </div>
          <div className="card">
            <h3 style={{ marginBottom: '0.5rem', color: 'hsl(var(--primary))' }}>Secure & Admin Controlled</h3>
            <p>Role-based access controls ensure that patient profiles remain strictly private and visible only to verified administrators.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
