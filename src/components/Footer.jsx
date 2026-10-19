import React from 'react';
import { Phone, MessageCircle, MapPin, Heart, ArrowUp } from 'lucide-react';
import { STORE_CONFIG, PRODUCTS } from '../data/products';
import './Footer.css';

export default function Footer({ onOpenCart }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-root">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <div className="footer-logo-wrap">
              <img
                src="/assets/thatha_mascot_seal.png"
                alt="Mascot"
                className="footer-mascot-img"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/assets/brand_ribbon_logo.png"
                alt="தாத்தா தேங்காய் பால்"
                className="footer-ribbon-logo"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="footer-brand-tagline">
              {STORE_CONFIG.taglineTamil}
            </p>
            <p className="footer-desc">
              Pure, traditional, cold-extracted first-press coconut milk prepared with devotion in Gobichettipalayam. Delivered chilled in sustainable glass bottles.
            </p>
            <div className="footer-gold-accent-line" />

            {/* Social Media Channels */}
            <div className="footer-social-row">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn btn-instagram"
                title="Follow us on Instagram"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" className="footer-social-svg" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn btn-linkedin"
                title="Connect on LinkedIn"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="footer-social-svg" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn btn-facebook"
                title="Like us on Facebook"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" className="footer-social-svg" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${STORE_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn btn-whatsapp"
                title="Chat on WhatsApp"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="footer-social-svg" fill="currentColor">
                  <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.768.461 3.488 1.336 5.008L2 22l5.101-1.336a10.007 10.007 0 004.93 1.287h.005c5.534 0 10.029-4.495 10.029-10.031C22.065 6.495 17.57 2 12.031 2zm0 18.328h-.004a8.318 8.318 0 01-4.242-1.157l-.304-.18-3.15.826.84-3.072-.198-.315a8.278 8.278 0 01-1.267-4.398c0-4.59 3.734-8.325 8.329-8.325 2.224 0 4.316.867 5.888 2.439a8.28 8.28 0 012.436 5.892c0 4.59-3.735 8.325-8.328 8.325zm4.566-6.233c-.25-.125-1.48-.73-1.71-.813-.23-.083-.396-.125-.562.125-.167.25-.646.813-.792.98-.146.166-.292.187-.542.062s-1.058-.39-2.015-1.244c-.744-.664-1.246-1.485-1.392-1.735-.146-.25-.016-.385.11-.51.112-.112.25-.292.375-.438.125-.146.167-.25.25-.417.083-.167.042-.313-.02-.438s-.563-1.355-.772-1.855c-.203-.488-.41-.422-.563-.43l-.48-.008c-.166 0-.437.063-.666.313-.23.25-.875.855-.875 2.085s.896 2.418 1.02 2.585c.125.167 1.763 2.692 4.27 3.775.597.258 1.064.412 1.428.528.6.191 1.146.164 1.577.1.48-.072 1.48-.604 1.688-1.188.208-.583.208-1.083.146-1.188-.063-.104-.23-.167-.48-.292z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn btn-x"
                title="Follow on Twitter / X"
                aria-label="Twitter / X"
              >
                <svg viewBox="0 0 24 24" className="footer-social-svg" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#hero">Home</a></li>
              <li><a href="#products">Our Products</a></li>
              <li><a href="#story">Our Story & Heritage</a></li>
              <li><a href="#process">Cold-Press Process</a></li>
              <li><a href="#delivery">Delivery & FAQ</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Products Column */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Product Variants</h4>
            <ul className="footer-links-list">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <a href="#products">
                    {p.name} ({p.variant}) — 1L: ₹{p.price} • ½L: ₹{p.priceHalf}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Direct Contact</h4>
            <div className="footer-contact-list">
              <a href={`tel:${STORE_CONFIG.phone}`} className="footer-contact-link">
                <Phone size={16} />
                <span>Call: {STORE_CONFIG.displayPhone}</span>
              </a>

              <a
                href={`https://wa.me/${STORE_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link"
              >
                <MessageCircle size={16} />
                <span>WhatsApp: {STORE_CONFIG.phone}</span>
              </a>

              <div className="footer-contact-item">
                <MapPin size={16} />
                <span>{STORE_CONFIG.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Gold Divider */}
        <div className="footer-divider-gold" />

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copy">
            © {new Date().getFullYear()} {STORE_CONFIG.brandNameEnglish} ({STORE_CONFIG.brandNameTamil}). All rights reserved.
          </div>

          <div className="footer-crafted-by">
            Made with <Heart size={14} className="heart-icon" /> for the authentic coconut culture of Tamil Nadu.
          </div>

          <button
            onClick={scrollToTop}
            className="footer-back-to-top"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
