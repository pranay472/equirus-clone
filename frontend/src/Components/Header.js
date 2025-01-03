import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
import Navbar from './Navbar';

const Header = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      const scrollPercentage = (currentScroll / totalScroll) * 100;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="scroll-progress">
        <div 
          className="scroll-progress-bar" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="https://jamaappprod.s3.ap-south-1.amazonaws.com/Website/maxiompms/maxiompms.svg" alt="Equirus Wealth" />
        </Link>
        
        <Navbar />

        <div className="header-buttons">
          <button className="book-meeting">
            <span className="arrow-icon">↗</span>
            Book Meeting
          </button>
          <button className="login-btn">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
