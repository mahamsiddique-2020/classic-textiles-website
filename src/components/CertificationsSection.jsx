import React from 'react';
import { ShieldCheck } from 'lucide-react';
import './CertificationsSection.css';

import cert1 from '../assets/images/cert1.png';
import cert2 from '../assets/images/cert2.png';
import cert3 from '../assets/images/cert3.png';
import cert4 from '../assets/images/cert4.png';

const certificates = [
  {
    id: 1,
    title: 'ISO 9001:2015 Quality Management System',
    issuer: 'International Organization for Standardization (ISO)',
    image: cert1
  },
  {
    id: 2,
    title: 'OEKO-TEX® Standard 100',
    issuer: 'Tested for Harmful Substances & Product Safety',
    image: cert2
  },
  {
    id: 3,
    title: 'SEDEX Member Ethical Trade Audit',
    issuer: 'Supplier Ethical Data Exchange (SEDEX)',
    image: cert3
  },
  {
    id: 4,
    title: 'Global Organic Textile Standard (GOTS)',
    issuer: 'Certified Organic Textile Production',
    image: cert4
  }
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="certs-section">
      <div className="container">

        <div className="section-header text-center">
          <span className="badge-subtitle">
            OUR ACHIEVEMENTS
          </span>

          <h2 className="section-title">
            Certifications & Compliance
          </h2>

          <p className="section-description">
            We are committed to international quality, sustainability, and ethical manufacturing standards. Our sourcing partners comply with globally recognized certifications, ensuring every product meets the highest expectations for quality, safety, and responsible production.
          </p>
        </div>

        <div className="cert-boxes-4-grid">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="cert-image-card"
            >
              <div className="cert-image-frame">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="cert-uploaded-preview"
                />
              </div>

              <div className="cert-card-info">
                <div className="cert-header-badge">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span>Verified Standard</span>
                </div>

                <h3 className="cert-card-title">
                  {cert.title}
                </h3>

                <p className="cert-card-issuer">
                  {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}