import React from 'react';
import { Link } from 'react-router-dom';
import '../components/header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="logo">TechTrends Ltd</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;
