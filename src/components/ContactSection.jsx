import React, { useState } from 'react';
import { Phone, MessageCircle, User, MessageSquare, Send, ArrowRight, CheckCircle2 } from 'lucide-react';
import { STORE_CONFIG } from '../data/products';
import './ContactSection.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    // Build enquiry text for WhatsApp direct delivery
    const query = `வணக்கம் தாத்தா தேங்காய் பால்! 👋\n\nI have an enquiry / order request:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Message: ${formData.message || 'I would like to order fresh Thatha Thengai Paal in Gobichettipalayam.'}`;
    const url = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(query)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="clone-contact-section">
      {/* Background Palm Leaf Accents */}
      <div className="contact-ambient-backdrop" aria-hidden="true">
        <div className="ambient-sun-burst" />
        <div className="ambient-leaf-left" />
        <div className="ambient-leaf-right" />
      </div>

      <div className="contact-clone-container">
        {/* ==================================================================
            TWO-COLUMN EXACT CLONE GRID
            ================================================================== */}
        <div className="contact-clone-grid">
          {/* ==============================================================
              LEFT CARD: BRAND & QUICK ACTIONS
              ============================================================== */}
          <div className="contact-clone-left-card">
            {/* Top Artwork Area with Hotspot to WhatsApp */}
            <div className="left-card-artwork-frame">
              <img
                src="/assets/contact_card_master.jpg"
                alt="தாத்தா தேங்காய் பால் - Order Now 8637655722"
                className="left-card-artwork-img"
                loading="lazy"
                decoding="async"
              />
              {/* Clickable Banner Hotspot */}
              <a
                href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent('வணக்கம்! I would like to order fresh Thatha Thengai Paal in Gobi.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="banner-overlay-hotspot"
                title="Click to Order on WhatsApp: 8637655722"
                aria-label="Order on WhatsApp"
              />
            </div>

            {/* Bottom 2 Interactive Pill Buttons Side-by-Side */}
            <div className="left-card-action-pills">
              {/* Click to Call Now */}
              <a
                href={`tel:${STORE_CONFIG.phone}`}
                className="action-pill-btn pill-btn-call"
                id="contact-call-btn"
              >
                <div className="pill-btn-icon-bubble bubble-phone">
                  <Phone size={18} />
                </div>
                <div className="pill-btn-text-col">
                  <span className="pill-btn-micro-label">CLICK TO CALL NOW</span>
                  <span className="pill-btn-bold-val">{STORE_CONFIG.displayPhone}</span>
                </div>
                <ArrowRight size={17} className="pill-btn-arrow-icon" />
              </a>

              {/* Chat Directly on WhatsApp */}
              <a
                href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent('வணக்கம்! I would like to order fresh Thatha Thengai Paal.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="action-pill-btn pill-btn-wa"
                id="contact-wa-btn"
              >
                <div className="pill-btn-icon-bubble bubble-wa">
                  <MessageCircle size={18} />
                </div>
                <div className="pill-btn-text-col">
                  <span className="pill-btn-micro-label">CHAT DIRECTLY ON</span>
                  <span className="pill-btn-bold-val">WhatsApp Orders</span>
                </div>
                <ArrowRight size={17} className="pill-btn-arrow-icon" />
              </a>
            </div>

            {/* Real Social Media Channels */}
            <div className="contact-social-bar">
              <span className="social-bar-label">FOLLOW & CONNECT WITH US</span>
              <div className="social-icons-row">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${STORE_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-brand-btn brand-whatsapp"
                  title="WhatsApp"
                  aria-label="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" className="social-svg-logo" fill="currentColor">
                    <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.768.461 3.488 1.336 5.008L2 22l5.101-1.336a10.007 10.007 0 004.93 1.287h.005c5.534 0 10.029-4.495 10.029-10.031C22.065 6.495 17.57 2 12.031 2zm0 18.328h-.004a8.318 8.318 0 01-4.242-1.157l-.304-.18-3.15.826.84-3.072-.198-.315a8.278 8.278 0 01-1.267-4.398c0-4.59 3.734-8.325 8.329-8.325 2.224 0 4.316.867 5.888 2.439a8.28 8.28 0 012.436 5.892c0 4.59-3.735 8.325-8.328 8.325zm4.566-6.233c-.25-.125-1.48-.73-1.71-.813-.23-.083-.396-.125-.562.125-.167.25-.646.813-.792.98-.146.166-.292.187-.542.062s-1.058-.39-2.015-1.244c-.744-.664-1.246-1.485-1.392-1.735-.146-.25-.016-.385.11-.51.112-.112.25-.292.375-.438.125-.146.167-.25.25-.417.083-.167.042-.313-.02-.438s-.563-1.355-.772-1.855c-.203-.488-.41-.422-.563-.43l-.48-.008c-.166 0-.437.063-.666.313-.23.25-.875.855-.875 2.085s.896 2.418 1.02 2.585c.125.167 1.763 2.692 4.27 3.775.597.258 1.064.412 1.428.528.6.191 1.146.164 1.577.1.48-.072 1.48-.604 1.688-1.188.208-.583.208-1.083.146-1.188-.063-.104-.23-.167-.48-.292z"/>
                  </svg>
                  <span className="social-name-tag">WhatsApp</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-brand-btn brand-instagram"
                  title="Instagram"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" className="social-svg-logo" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                  <span className="social-name-tag">Instagram</span>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-brand-btn brand-facebook"
                  title="Facebook"
                  aria-label="Facebook"
                >
                  <svg viewBox="0 0 24 24" className="social-svg-logo" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="social-name-tag">Facebook</span>
                </a>

                {/* Twitter / X */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-brand-btn brand-x"
                  title="Twitter (X)"
                  aria-label="Twitter / X"
                >
                  <svg viewBox="0 0 24 24" className="social-svg-logo" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span className="social-name-tag">Twitter (X)</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-brand-btn brand-linkedin"
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" className="social-svg-logo" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z"/>
                  </svg>
                  <span className="social-name-tag">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* ==============================================================
              RIGHT CARD: SEND A QUICK MESSAGE FORM
              ============================================================== */}
          <div className="contact-clone-right-card">
            {/* Top Right Decorative Coconut Corner */}
            <img
              src="/assets/coconut_corner_clean.png"
              alt="Fresh Coconut Decoration"
              className="form-coconut-corner-decor"
              aria-hidden="true"
            />

            {/* Top Chat Badge Icon */}
            <div className="form-chat-badge-icon">
              <MessageSquare size={22} className="chat-badge-svg" />
            </div>

            {/* Form Heading & Subtitle */}
            <h2 className="form-main-heading">Send a Quick Message</h2>
            <p className="form-sub-paragraph">
              Have a question or request for custom orders?<br />
              Let us know below, we'll get back to you shortly.
            </p>

            {submitted ? (
              <div className="form-success-wrapper">
                <CheckCircle2 size={42} className="success-check-icon" />
                <h3 className="success-heading">Message Sent to WhatsApp!</h3>
                <p className="success-paragraph">
                  Thank you for reaching out to Thatha Thengai Paal. Our Gobi team will respond to you right away.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="send-another-btn"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="quick-message-form">
                {/* Your Name */}
                <div className="quick-input-group">
                  <label htmlFor="quick-name" className="quick-label">
                    Your Name *
                  </label>
                  <div className="quick-input-box">
                    <User size={18} className="input-prefix-icon" />
                    <input
                      id="quick-name"
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="quick-text-input"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="quick-input-group">
                  <label htmlFor="quick-phone" className="quick-label">
                    Phone Number *
                  </label>
                  <div className="quick-input-box">
                    <Phone size={18} className="input-prefix-icon" />
                    <input
                      id="quick-phone"
                      type="tel"
                      required
                      placeholder="Enter 10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="quick-text-input"
                    />
                  </div>
                </div>

                {/* Message / Requirements */}
                <div className="quick-input-group">
                  <label htmlFor="quick-message" className="quick-label">
                    Message / Requirements
                  </label>
                  <div className="quick-textarea-box">
                    <MessageSquare size={18} className="textarea-prefix-icon" />
                    <textarea
                      id="quick-message"
                      rows="3"
                      placeholder="Tell us what you need (daily morning subscription, party bulk quantity, etc.)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="quick-textarea-input"
                    />
                  </div>
                </div>

                {/* Full-Width WhatsApp Send Button */}
                <button
                  type="submit"
                  className="quick-submit-pill-btn"
                  id="contact-submit-btn"
                >
                  <Send size={18} className="submit-plane-icon" />
                  <span>Send Enquiry via WhatsApp</span>
                  <ArrowRight size={18} className="submit-arrow-icon" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
