import React, { useState } from 'react';
import { MapPin, Phone, Mail, Smartphone, Send, CheckCircle } from 'lucide-react';
import './ContactSection.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge-subtitle">GET IN TOUCH</span>
          <h2 className="section-title">Let's Start a Partnership</h2>
          <p className="section-description">
            Reach out to our team to discuss your textile sourcing requirements, request sample developments, or receive a fast quotation.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Official Contact Info */}
          <div className="contact-info-card">
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-sub">Our team is ready to assist you with inquiries & inquiries.</p>

            <div className="info-blocks-wrapper">
              {/* Head Office Block */}
              <div className="info-block">
                <div className="info-icon">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div className="info-text">
                  <span className="info-label">Head Office</span>
                  <p>Office: 23-B New Graden Block, Saeed Colony # 2 Faisalabad-Pakistan.</p>
                </div>
              </div>

              {/* Phone Block */}
              <div className="info-block">
                <div className="info-icon">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div className="info-text">
                  <span className="info-label">Phone</span>
                  <a href="tel:+923008650916" className="info-link">+92 300 865 0916</a>
                </div>
              </div>

              {/* Email Block */}
              <div className="info-block">
                <div className="info-icon">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div className="info-text">
                  <span className="info-label">Email Address</span>
                  <a href="mailto:siddique@classictex.pk" className="info-link">siddique@classictex.pk</a>
                </div>
              </div>

              {/* Mobile Block */}
              <div className="info-block">
                <div className="info-icon">
                  <Smartphone className="w-5 h-5 text-accent" />
                </div>
                <div className="info-text">
                  <span className="info-label">Mobile</span>
                  <a href="tel:+923118160916" className="info-link">+92 311 816 0916</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-card">
            <h3 className="form-card-title">Send Us a Message</h3>
            <p className="form-card-sub">Fill out the form below and we will get back to you within 24 hours.</p>

            {submitted ? (
              <div className="form-success-alert">
                <CheckCircle className="w-10 h-10 text-accent mb-2" />
                <h4>Thank You!</h4>
                <p>Your message has been sent successfully to siddique@classictex.pk. Our team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. John Smith"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Your Company Name"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+92 3008650916"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message / Order Requirements *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Tell us about your textile sourcing needs, specifications, and volume..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary form-submit-btn">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
