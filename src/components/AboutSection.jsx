import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import './AboutSection.css';
import aboutImage from '../assets/images/about.jpg';

export default function AboutSection() {
  const highlights = [
    {
      title: 'Verified Supplier Network',
      desc: 'Partnered with top pre-screened manufacturers across Pakistan, China, India, and Bangladesh.'
    },
    {
      title: 'Rigorous Inspection Standards',
      desc: 'Dedicated quality control inspectors inspecting raw materials, inline production, and finished goods.'
    },
    {
      title: 'Zero Quality Compromise',
      desc: 'Strict lab testing and defect identification before any shipment leaves the facility.'
    },
    {
      title: 'Seamless Logistics',
      desc: 'End-to-end supply chain coordination ensuring on-time delivery without administrative burden.'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        <div className="about-grid">

          <div className="about-image-wrapper">
            <div className="about-large-image-box">
              <img
                src={aboutImage}
                alt="Classic Tex Inspection & Sourcing"
                className="about-uploaded-img"
              />
              <div className="about-image-gradient-overlay"></div>
            </div>

            <div className="about-experience-badge">
              <span className="exp-number">100%</span>
              <span className="exp-text">Quality Inspected & Guaranteed</span>
            </div>
          </div>

          <div className="about-content">
            <span className="badge-subtitle">ABOUT CLASSIC TEX</span>

            <h2 className="about-title">
              Your Sourcing & <br />
              <span className="text-highlight">Quality Control Partner</span>
            </h2>

            <p className="about-description">
              <strong>CLASSIC TEX</strong> is Pakistan's leading textile sourcing and quality control company.
              We ensure every product you source comes from reliable and verified suppliers meeting all required quality standards.
              At <strong>Classic Tex</strong>, quality is never compromised at any stage.
            </p>

            <div className="about-highlights-grid">
              {highlights.map((item, index) => (
                <div key={index} className="highlight-item">
                  <div className="highlight-icon">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>

                  <div className="highlight-text">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-cta">
              <a href="#services" className="btn-primary">
                Explore Our Services
              </a>

              <div className="quality-guarantee-note">
                <ShieldCheck className="w-5 h-5 text-accent" />
                <span>Certified Quality Control Assurance</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}