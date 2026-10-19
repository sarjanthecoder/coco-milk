import React from 'react';
import { Leaf, Droplets, Sparkles, ShieldCheck } from 'lucide-react';
import './OurProcess.css';

export default function OurProcess() {
  const steps = [
    {
      step: '01',
      title: 'Handpicked Farm Coconuts',
      tamil: 'நேரடி பண்ணை தேங்காய்கள்',
      stage: 'Stage 01 • Grove Harvest',
      image: '/assets/process_step_01.jpg',
      alt: 'Thatha Thengai Paal - Step 01: Handpicked Farm Coconuts from Gobi Groves'
    },
    {
      step: '02',
      title: 'Traditional Grating & Cold Press',
      tamil: 'பாரம்பரிய மரச்செக்கு முறை',
      stage: 'Stage 02 • Cold Wood Extraction',
      image: '/assets/process_step_02.jpg',
      alt: 'Thatha Thengai Paal - Step 02: Traditional Grating and Gentle Cold Press'
    },
    {
      step: '03',
      title: 'Pure Natural Blending',
      tamil: 'தூய இயற்கை தயாரிப்பு',
      stage: 'Stage 03 • Natural Mesh Filtering',
      image: '/assets/process_step_03.jpg',
      alt: 'Thatha Thengai Paal - Step 03: Pure Natural Blending and Pot Filtering'
    },
    {
      step: '04',
      title: 'Chilled Glass Bottling & Free Delivery',
      tamil: 'பாதுகாப்பான கண்ணாடி பாட்டில்',
      stage: 'Stage 04 • Chilled Morning Delivery',
      image: '/assets/process_step_04.jpg',
      alt: 'Thatha Thengai Paal - Step 04: Chilled Glass Bottling and Doorstep Delivery'
    }
  ];

  return (
    <section id="process" className="stunning-process-section">
      {/* 100% In-Code Tropical Ambience Backdrop */}
      <div className="process-code-backdrop" aria-hidden="true">
        <div className="process-sun-burst" />
        <div className="process-bottom-glow" />
      </div>

      <div className="process-inner-container">
        {/* ==================================================================
            SECTION HEADER
            ================================================================== */}
        <div className="process-header-wrap text-center">
          <div className="process-eyebrow-pill">
            <Leaf size={16} className="eyebrow-svg-leaf" />
            <span className="eyebrow-text">OUR TIME-TESTED PROCESS</span>
            <Sparkles size={16} className="eyebrow-svg-sparkle" />
          </div>

          <h2 className="process-main-heading">
            Farm-to-Bottle Heritage
          </h2>

          <p className="process-tamil-subheading">
            மண்ணின் மணம் மாறாத மரபு முறை தயாரிப்பு முறை
          </p>

          <p className="process-desc-paragraph">
            From lush coconut groves in Gobichettipalayam straight into sterilized chilled glass bottles — 100% pure first-press extraction untouched by artificial preservatives.
          </p>

          <div className="process-divider-ornament">
            <span className="divider-h-line" />
            <Droplets size={16} className="divider-svg-droplets" />
            <span className="divider-h-line" />
          </div>
        </div>

        {/* ==================================================================
            STUNNING 4-COLUMN PROCESS GRID
            ================================================================== */}
        <div className="process-four-grid">
          {steps.map((item) => (
            <div
              key={item.step}
              id={`process-card-${item.step}`}
              className="process-four-card"
            >
              {/* Full Artwork Frame (Edge-to-Edge Fill) */}
              <div className="process-artwork-frame">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="process-artwork-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Bottom Stage Pill Capsule */}
              <div className="process-card-stage-pill">
                <span className="stage-num-badge">{item.step}</span>
                <span className="stage-text-label">{item.stage}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ==================================================================
            BOTTOM GUARANTEE STRIP
            ================================================================== */}
        <div className="process-guarantee-banner">
          <ShieldCheck size={24} className="guarantee-svg-shield" />
          <div className="guarantee-content-text">
            <strong>The Daily Morning Promise:</strong> Every single bottle of Thatha Thengai Paal is pressed fresh on the same morning it reaches your home. Zero reheated stock, zero chemical emulsifiers, and zero compromise on natural freshness.
          </div>
          <ShieldCheck size={24} className="guarantee-svg-shield" />
        </div>
      </div>
    </section>
  );
}
