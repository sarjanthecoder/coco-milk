import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-clean-section">
      <div className="hero-image-container">
        <div className="hero-image-full-wrapper">
          {/* Responsive Picture: Desktop HD Widescreen vs Mobile Portrait */}
          <picture className="hero-picture-element">
            <source
              media="(max-width: 768px)"
              srcSet="/assets/hero_mobile.jpg"
            />
            <img
              src="/assets/hero_hd.jpg"
              alt="தாத்தா தேங்காய் பால் — Pure Traditional Coconut Milk"
              className="hero-full-pure-image"
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />
          </picture>

          {/* 3D Embossed Tamil Title Banner with Soft Light White Glow */}
          <div className="hero-title-overlay">
            <div className="hero-title-glow-aura" />
            <img
              src="/assets/hero_tamil_title_3d.png"
              alt="தேங்காயின் இயற்கை சுவை — Taste of Pure Coconut"
              className="hero-3d-tamil-banner"
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
