import React from 'react';
import { Award, Leaf, Droplet, Droplets, Sparkles, ShieldCheck, CheckCircle2, HeartHandshake, MapPin } from 'lucide-react';
import { STORE_CONFIG } from '../data/products';
import './OurStory.css';

export default function OurStory() {
  return (
    <section id="story" className="story-section">
      <div className="container">
        {/* Story Intro Header & Master Reference Artwork Layout */}
        <div className="story-editorial-grid">
          <div className="story-editorial-text">
            <div className="story-eyebrow-chip">
              <MapPin size={16} className="eyebrow-pin-symbol" />
              <span>ROOTED IN HERITAGE</span>
            </div>

            <h2 className="story-editorial-title">
              Crafted in Gobichettipalayam,
              <br />
              <span className="title-highlight">With Respect for Tradition</span>
            </h2>

            <div className="story-leaf-flourish">
              <span className="flourish-line" />
              <Leaf size={18} className="flourish-leaf-icon" />
              <span className="flourish-line" />
            </div>

            {/* Poetic Tamil Quote Card with Literary Typography */}
            <div className="story-poetic-quote-card">
              <span className="poetic-quote-mark start-quote">❝</span>
              <p className="story-poetic-tamil-text">
                எங்கள் ஊர் தென்னை மரங்களின் இயற்கை சுவையை, எந்த ரசாயன கலப்பும் இல்லாமல் தூய வடிவில் உங்களிடம் கொண்டு சேர்ப்பதே தாத்தா தேங்காய் பாலின் நோக்கம்.
              </p>
              <div className="quote-card-footer">
                <span className="poetic-quote-mark end-quote">❞</span>
                <div className="quote-footer-badge">
                  <Leaf size={15} className="badge-leaf" />
                  <span>இயற்கை தூய்மை</span>
                  <Droplets size={15} className="badge-drop" />
                </div>
              </div>
            </div>

            {/* Generously Spaced Literary Storytelling Paragraphs */}
            <div className="story-paragraphs-wrapper">
              <p className="story-literary-paragraph">
                Nestled along the verdant agricultural belt of the Bhavani river in western Tamil Nadu, Gobichettipalayam is celebrated for having some of India’s richest and sweetest coconuts. For generations, traditional households in this soil enjoyed thick, unadulterated coconut milk extracted cold by hand every dawn.
              </p>

              <p className="story-literary-paragraph">
                <strong>தாத்தா தேங்காய் பால் (Thatha Thengai Paal)</strong> was founded to keep this authentic culture alive. We do not mass-produce, nor do we alter nature's balance with chemical gums, preservatives, or artificial shelf-extenders. Each morning batch is cold-extracted from fully mature kernels, bottled in clean glass, and sent directly to your table.
              </p>
            </div>

            {/* 3 Circular Feature Badges (Matching Reference Image) */}
            <div className="story-pills-row">
              <div className="story-circular-pill">
                <div className="pill-circle-icon">
                  <Leaf size={16} />
                </div>
                <span className="pill-text">Pure & Natural</span>
              </div>

              <div className="story-circular-pill">
                <div className="pill-circle-icon">
                  <Droplet size={16} />
                </div>
                <span className="pill-text">Traditional Process</span>
              </div>

              <div className="story-circular-pill">
                <div className="pill-circle-icon">
                  <HeartHandshake size={16} />
                </div>
                <span className="pill-text">Supports Local Farmers</span>
              </div>
            </div>
          </div>

          {/* Visual Showcase Card: Thatha Holding Coconut Milk in Tropical Grove */}
          <div className="story-editorial-visual">
            <div className="story-thatha-portrait-frame">
              <img
                src="/assets/story_reference_artwork.jpg"
                alt="தாத்தா தேங்காய் பால் - Thatha holding fresh glass of coconut milk in Gobichettipalayam"
                className="story-thatha-portrait-img"
                loading="lazy"
              />
              <div className="story-thatha-portrait-overlay" />
              <div className="story-thatha-badge-floating">
                <div className="story-seal-mascot-wrapper">
                  <img
                    src="/assets/thatha_mascot_seal.png"
                    alt="தாத்தா தேங்காய் பால் Mascot Seal"
                    className="story-seal-mascot-img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <strong>Heritage First Press • மரபு முறை</strong>
                  <span>Traditional Handcrafted Pure Coconut Milk</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Purity Highlights Showcase (Replaces competitor comparison table) */}
        <div className="story-highlights-showcase-wrap">
          <div className="highlights-section-header text-center">
            <div className="highlights-eyebrow-chip">
              <Sparkles size={15} />
              <span>THE PURITY PROMISE</span>
            </div>
            <h3 className="highlights-main-heading">Rooted in Authentic Village Purity</h3>
            <p className="highlights-tamil-heading">மண்ணின் மணம் மாறாத தூய இயற்கை தயாரிப்பு</p>
            <p className="highlights-sub-desc">
              We believe in honouring the pure gift of nature without industrial shortcuts, artificial additives, or chemical alterations.
            </p>
          </div>

          <div className="highlights-circular-grid">
            {/* Highlight 1: No Chemical Preservatives */}
            <div className="circular-highlight-card">
              <div className="circular-visual-halo">
                <div className="circular-image-container">
                  <img
                    src="/assets/highlight_chemical_free.jpg"
                    alt="No Chemical Preservatives - Traditional Coconut Milk Extraction"
                    className="circular-highlight-image"
                    loading="lazy"
                  />
                  <div className="circular-glass-reflection" />
                </div>
                <div className="circular-ambient-glow glow-green" />
              </div>

              <div className="circular-content-block">
                <div className="highlight-tag-badge">
                  <ShieldCheck size={15} className="tag-icon" />
                  <span>CHEMICAL-FREE PURITY</span>
                </div>
                <h4 className="highlight-card-title">No Chemical Preservatives</h4>
                <span className="highlight-tamil-title">ரசாயன பாதுகாப்புகள் அற்ற தூய தயாரிப்பு</span>
                <p className="highlight-supporting-text">
                  Traditionally cold-extracted with zero artificial preservatives, thickeners, or chemical emulsifiers. Pure, untainted natural goodness exactly as nature intended.
                </p>

                <div className="highlight-pills-row">
                  <span className="purity-pill">
                    <CheckCircle2 size={14} className="pill-check" /> 100% Preservative Free
                  </span>
                  <span className="purity-pill">
                    <CheckCircle2 size={14} className="pill-check" /> Traditional Cold Press
                  </span>
                  <span className="purity-pill">
                    <CheckCircle2 size={14} className="pill-check" /> Zero Synthetic Additives
                  </span>
                </div>
              </div>
            </div>

            {/* Highlight 2: 100% Natural */}
            <div className="circular-highlight-card">
              <div className="circular-visual-halo">
                <div className="circular-image-container">
                  <img
                    src="/assets/highlight_natural_pure.jpg"
                    alt="100% Natural Farm Fresh Coconut Harvest"
                    className="circular-highlight-image"
                    loading="lazy"
                  />
                  <div className="circular-glass-reflection" />
                </div>
                <div className="circular-ambient-glow glow-gold" />
              </div>

              <div className="circular-content-block">
                <div className="highlight-tag-badge gold-tag">
                  <Leaf size={15} className="tag-icon" />
                  <span>100% FARM INGREDIENTS</span>
                </div>
                <h4 className="highlight-card-title">100% Natural</h4>
                <span className="highlight-tamil-title">100% முற்றிலும் இயற்கை மூலப்பொருட்கள்</span>
                <p className="highlight-supporting-text">
                  Crafted exclusively from fresh, hand-harvested coconuts straight from fertile groves in Gobichettipalayam. Wholesome nutrition rooted in rich village heritage.
                </p>

                <div className="highlight-pills-row">
                  <span className="purity-pill">
                    <CheckCircle2 size={14} className="pill-check" /> Farm-Fresh Gobi Coconuts
                  </span>
                  <span className="purity-pill">
                    <CheckCircle2 size={14} className="pill-check" /> Rich Virgin MCT Fats
                  </span>
                  <span className="purity-pill">
                    <CheckCircle2 size={14} className="pill-check" /> Wholesome Village Goodness
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
