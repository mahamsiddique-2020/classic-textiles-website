import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <div className="footer-logo-icon">CT</div>
              <div>
                <span className="footer-logo-title">CLASSIC TEX</span>
                <span className="footer-logo-sub">SOURCING & QUALITY CONTROL</span>
              </div>
            </div>
            <p className="footer-about-text">
              Classic Tex is Pakistan's premier textile sourcing and quality control partner, ensuring every fabric and finished product meets international standards.
            </p>
            <div className="footer-quality-badge">
              <ShieldCheck className="w-4 h-4 text-accent" />
              <span>Verified Global Supply Network</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#products">Our Products</a></li>
              <li><a href="#certifications">Certifications</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Addresses */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact Details</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span><strong>Head Office:</strong> 23-B New Graden Block, Saeed Colony # 2 Faisalabad-Pakistan.</span>
              </div>
              <div className="footer-contact-item">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Ph: +92 3008650916 | Mob: +92 3118160916</span>
              </div>
              <div className="footer-contact-item">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span><a href="mailto:siddique@classictex.pk">siddique@classictex.pk</a></span>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-col">
            <h4 className="footer-heading">Newsletter</h4>
            <p className="newsletter-text">Subscribe to receive updates on textile market trends and new product developments.</p>
            
            {subscribed ? (
              <div className="newsletter-success">
                <span>✓ Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                />
                <button type="submit" aria-label="Subscribe">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Classic Tex. All Rights Reserved.</p>
          <p className="footer-tagline">Textile Sourcing & Quality Control Partner</p>
        </div>
      </div>
    </footer>
  );
}
