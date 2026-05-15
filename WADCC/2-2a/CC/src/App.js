import React, { useState } from 'react';
import './App.css';

/**
 * App Component - Main application component for AWS Amplify React App
 * This component renders the complete application with Navbar, Hero, Features, and Footer sections
 */
function App() {
  // State to track button click count
  const [clickCount, setClickCount] = useState(0);

  /**
   * Handle button click event
   * Increments the click counter and shows an alert
   */
  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
    alert(`🎉 Button clicked ${clickCount + 1} time(s)! You're awesome!`);
  };

  return (
    <div className="App">
      {/* ============================================
          NAVBAR SECTION
          ============================================ */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo and branding */}
          <a href="#home" className="navbar-logo">
            <span>⚡</span>
            AWS Amplify
          </a>

          {/* Navigation links */}
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section id="home" className="hero">
        <div className="hero-content">
          {/* Main heading */}
          <h1>Welcome to AWS Amplify</h1>

          {/* Subtitle */}
          <p>Build, deploy, and scale amazing web applications with ease</p>

          {/* Success message as per requirements */}
          <div className="success-message">
            ✅ Successfully Deployed on AWS Amplify 🚀
          </div>

          {/* Interactive button with hover effect */}
          <button className="btn" onClick={handleButtonClick}>
            Get Started Now
          </button>

          {/* Secondary button */}
          <a href="#features" className="btn btn-secondary">
            Learn More
          </a>
        </div>
      </section>

      {/* ============================================
          FEATURES SECTION
          ============================================ */}
      <section id="features" className="features">
        <h2>Why Choose AWS Amplify?</h2>

        {/* Features grid - displays 3 feature cards */}
        <div className="features-grid">
          {/* Feature Card 1: Fast Deployment */}
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>
              Deploy your application in seconds with automated continuous
              integration and continuous deployment (CI/CD) pipelines. Get your
              app live faster than ever before.
            </p>
          </div>

          {/* Feature Card 2: Scalability */}
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Highly Scalable</h3>
            <p>
              Handle millions of requests with automatic scaling. AWS Amplify
              ensures your application stays responsive and available, even
              during traffic spikes.
            </p>
          </div>

          {/* Feature Card 3: Secure */}
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Enterprise Security</h3>
            <p>
              Built-in security features including SSL/TLS encryption, DDoS
              protection, and compliance with industry standards. Your data is
              always protected.
            </p>
          </div>

          {/* Feature Card 4: Easy Integration */}
          <div className="feature-card">
            <div className="feature-icon">🔗</div>
            <h3>Easy Integration</h3>
            <p>
              Seamlessly integrate with AWS services like Cognito for
              authentication, Lambda for serverless computing, and DynamoDB for
              database management.
            </p>
          </div>

          {/* Feature Card 5: Cost Effective */}
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Cost Effective</h3>
            <p>
              Pay only for what you use with AWS Amplify's flexible pricing
              model. No hidden charges, no minimum commitment required.
            </p>
          </div>

          {/* Feature Card 6: Developer Friendly */}
          <div className="feature-card">
            <div className="feature-icon">👨‍💻</div>
            <h3>Developer Friendly</h3>
            <p>
              Intuitive CLI tools, excellent documentation, and a supportive
              community. Building with AWS Amplify is enjoyable and
              straightforward.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          FOOTER SECTION
          ============================================ */}
      <footer id="contact" className="footer">
        <div className="footer-content">
          {/* Footer heading */}
          <h2 style={{ marginBottom: '1rem' }}>AWS Amplify React App</h2>

          {/* Footer divider */}
          <div className="footer-divider"></div>

          {/* Footer links */}
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="https://aws.amazon.com/amplify/" target="_blank" rel="noopener noreferrer">
              AWS Amplify Docs
            </a>
            <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
              React Documentation
            </a>
          </div>

          {/* Copyright information */}
          <p>
            &copy; 2024 AWS Amplify React Application. Made with ❤️ using React
            and AWS Amplify.
          </p>

          {/* Additional info */}
          <p style={{ fontSize: '0.85rem', marginTop: '1rem', opacity: 0.8 }}>
            Click count: <strong>{clickCount}</strong> times
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
