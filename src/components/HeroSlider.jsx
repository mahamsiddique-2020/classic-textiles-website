import React, { useState, useEffect }
 from 'react';
 import hero1 from '../assets/images/hero1.png';
import hero2 from '../assets/images/hero2.png';
import hero3 from '../assets/images/hero3.png';
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Award,
  Globe,
  ArrowRight
} from 'lucide-react';
import './HeroSlider.css';

const initialSlides = [
  {
    id: 1,
    tagline: 'TEXTILE SOURCING EXCELLENCE',
    title: 'Your Trusted',
    highlightTitle: 'Sourcing Partner',
    description:
      'Sourcing premium textiles from verified suppliers across Pakistan, China, India & Bangladesh.',
    badgeIcon: Globe,
    stats: 'Global Supplier Network',
    image: hero1
    // Example for local image:
    // image: '/images/hero1.jpg'
  },
  {
    id: 2,
    tagline: 'NO COMPROMISE ON QUALITY',
    title: 'Every Meter',
    highlightTitle: 'Inspected',
    description:
      'Our inspectors examine every fabric roll during production, catching defects before they reach your doorstep.',
    badgeIcon: ShieldCheck,
    stats: '100% Quality Inspected',
    image: hero2
    // image: '/images/hero2.jpg'
  },
  {
    id: 3,
    tagline: 'QUALITY TESTED & VERIFIED',
    title: 'Lab Certified.',
    highlightTitle: 'Quality Guaranteed.',
    description:
      'We test every fabric before stitching to ensure your specifications are fully met.',
    badgeIcon: Award,
    stats: 'Lab Certified Testing',
    image: hero3
    // image: '/images/hero3.jpg'
  }
];

export default function HeroSlider() {
  const [slides] = useState(initialSlides);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];
  const BadgeIcon = slide.badgeIcon;

  return (
    <section id="home" className="hero-slider-section">
      <div className="hero-bg-overlay"></div>
      <div className="hero-pattern"></div>

      <div className="container hero-container">
        <div className="hero-content-wrapper" key={currentSlide}>
          {/* Left Text */}
          <div className="hero-left-content animate-fade-in-up">
            <span className="badge-subtitle">
              <BadgeIcon className="inline-icon" /> {slide.tagline}
            </span>

            <h1 className="hero-title">
              {slide.title}
              <br />
              <span className="hero-highlight">{slide.highlightTitle}</span>
            </h1>

            <p className="hero-description">
              {slide.description}
            </p>

            <div className="hero-actions">
              <a href="#products" className="btn-primary">
                Our Products <ArrowRight className="w-4 h-4" />
              </a>

              <a href="#contact" className="btn-outline">
                Contact Us
              </a>
            </div>

            <div className="hero-stat-pill">
              <div className="stat-dot"></div>
              <span>{slide.stats}</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="hero-right-visual animate-fade-in">
            <div className="large-hero-image-box">
              <img
                src={slide.image}
                alt={slide.highlightTitle}
                className="hero-uploaded-img"
              />

              <div className="image-box-gradient-overlay"></div>

              <div className="image-box-badge">
                <span className="badge-company">CLASSIC TEX</span>
                <span className="badge-spec">
                  Premium Textile Sourcing
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="hero-nav-controls">
          <button
            className="nav-btn prev-btn"
            onClick={prevSlide}
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="slide-indicators">
            {slides.map((_, idx) => (
              <button
                key={idx}
                className={`indicator-dot ${
                  currentSlide === idx ? 'active' : ''
                }`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            className="nav-btn next-btn"
            onClick={nextSlide}
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}