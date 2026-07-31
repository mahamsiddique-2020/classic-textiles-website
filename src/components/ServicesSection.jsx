import React from 'react';
import { Search, Cog, Palette, FlaskConical, ClipboardCheck, Truck } from 'lucide-react';
import './ServicesSection.css';

const services = [
  {
    id: 1,
    icon: Search,
    title: 'Sourcing & Quality Control',
    description: 'We identify and partner with pre-screened manufacturers ensuring reliable supply and consistent product quality.'
  },
  {
    id: 2,
    icon: Cog,
    title: 'Product Development',
    description: 'From initial concept to final approved sample, we handle every step keeping you updated throughout.'
  },
  {
    id: 3,
    icon: Palette,
    title: 'Design Creation',
    description: 'We develop innovative textile designs aligned with your brand vision and market requirements.'
  },
  {
    id: 4,
    icon: FlaskConical,
    title: 'Lab Testing',
    description: 'Every order undergoes strict lab testing and quality verification before it leaves the factory.'
  },
  {
    id: 5,
    icon: ClipboardCheck,
    title: 'Inline & Final Inspection',
    description: 'We conduct thorough inspections during production and before shipment to guarantee your quality standards.'
  },
  {
    id: 6,
    icon: Truck,
    title: 'Logistics & Shipment',
    description: 'We manage complete shipment coordination ensuring your orders are delivered on time without any hassle.'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge-subtitle">WHAT WE DO</span>
          <h2 className="section-title">Our Comprehensive Services</h2>
          <p className="section-description">
            End-to-end textile sourcing solutions tailored to deliver superior craftsmanship, rigorous inspection, and seamless delivery.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="service-card">
                <div className="service-icon-wrapper">
                  <IconComponent className="service-icon" />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <div className="service-card-border"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
