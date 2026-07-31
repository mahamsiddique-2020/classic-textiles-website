import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronRight } from 'lucide-react';
import logo from '../assets/images/logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Our Products', href: '#products' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Notification Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <span className="top-item">
              <Mail className="w-3.5 h-3.5 text-accent" />
              <a href="mailto:siddique@classictex.pk">siddique@classictex.pk</a>
            </span>
            <span className="top-divider">|</span>
            <span className="top-item">
              <Phone className="w-3.5 h-3.5 text-accent" />
              <a href="tel:+92 3008650916">+92 300
              8650916
              </a>
            </span>
          </div>
          <div className="top-bar-right">
            <span>Faisalabad, Pakistan</span>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="main-nav-bar">
        <div className="container main-nav-container">
          {/* Logo */}
<a href="#home" className="brand-logo">
  <img
    src={logo}
    alt="Classic Tex Logo"
    className="brand-logo-image"
  />

  <div className="logo-text-group">
    <span className="logo-title">CLASSIC TEX</span>
    <span className="logo-subtitle">
      TEXTILE SOURCING & QUALITY CONTROL
    </span>
  </div>
</a>

          {/* Desktop Navigation */}
          <nav className="desktop-menu">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-item-link">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="header-action">
            <a href="#contact" className="btn-primary header-btn">
              Let's Talk <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer animate-fade-in">
          <nav className="mobile-menu-list">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-nav-item"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary mobile-cta-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              Let's Talk
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
