import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { STORE_CONFIG } from '../data/products';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrolled = false;
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const next = window.scrollY > 30;
          if (next !== lastScrolled) {
            setIsScrolled(next);
            lastScrolled = next;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Products', href: '#products' },
    { name: 'Our Story', href: '#story' },
    { name: 'Our Process', href: '#process' },
    { name: 'Delivery & FAQ', href: '#delivery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="container navbar-container">
        {/* Brand Logo: Official Mascot Seal & Arched Ribbon Logo */}
        <a href="#hero" className="navbar-brand" title="தாத்தா தேங்காய் பால் - Home">
          <div className="brand-mascot-wrapper">
            <img
              src="/assets/thatha_mascot_seal.png"
              alt="தாத்தா தேங்காய் பால் Mascot"
              className="brand-mascot-img"
            />
          </div>
          <div className="brand-ribbon-wrapper">
            <img
              src="/assets/brand_ribbon_logo.png"
              alt="தாத்தா தேங்காய் பால் Logo"
              className="brand-ribbon-img"
            />
          </div>
        </a>

        {/* Center Desktop Navigation (Horizontal) */}
        <nav className="navbar-nav desktop-only">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <a href={link.href} className="nav-link">
                  {link.name}
                  <span className="nav-indicator" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions: Phone + 3-Bar Hamburger Menu */}
        <div className="navbar-actions">
          <a
            href={`tel:${STORE_CONFIG.phone}`}
            className="phone-quick-link"
            title="Call Us Directly"
          >
            <Phone size={15} />
            <span className="phone-number-text">{STORE_CONFIG.phone}</span>
          </a>

          {/* 3-Bar Hamburger Menu Button (Mobile Only) */}
          <button
            type="button"
            className="mobile-menu-btn mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (When 3-Bar Icon is Clicked) */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-backdrop" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <div className="mobile-drawer-brand">
                <img
                  src="/assets/thatha_mascot_seal.png"
                  alt="Mascot"
                  className="mobile-drawer-mascot"
                />
                <img
                  src="/assets/brand_ribbon_logo.png"
                  alt="Logo"
                  className="mobile-drawer-logo"
                />
              </div>
              <button
                type="button"
                className="mobile-drawer-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.name} className="mobile-nav-item">
                  <a
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mobile-drawer-footer">
              <a
                href={`tel:${STORE_CONFIG.phone}`}
                className="mobile-drawer-call-action"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone size={17} />
                <span>Call: {STORE_CONFIG.displayPhone}</span>
              </a>
              <a
                href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent('வணக்கம்! I would like to order fresh Thatha Thengai Paal in Gobi.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-drawer-wa-action"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MessageCircle size={17} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
