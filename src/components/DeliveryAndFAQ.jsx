import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MapPin, CheckCircle2, Clock, Leaf, Truck, Sparkles, MessageCircle, Phone } from 'lucide-react';
import { FAQ_LIST, STORE_CONFIG } from '../data/products';
import './DeliveryAndFAQ.css';

export default function DeliveryAndFAQ() {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const deliveryZones = [
    { name: 'Gobichettipalayam Town', tamil: 'கோபி டவுன் & கடைவீதி' },
    { name: 'Modachur Road & Karattur', tamil: 'மொடச்சூர் & கரட்டூர்' },
    { name: 'Alukuli & Kugalur Belt', tamil: 'அளுக்குளி & கூகலூர்' },
    { name: 'Pariyur & Temple Belt', tamil: 'பரியூர் & கோவில் பகுதி' },
    { name: 'Nambiyur Road Corridor', tamil: 'நம்பியூர் மெயின் ரோடு' },
    { name: 'Lakkampatti & Kolappalur', tamil: 'லக்கம்பட்டி & கொளப்பலூர்' },
    { name: 'Sakthi Polytechnic Area', tamil: 'சக்தி பாலிடெக்னிக் பகுதி' },
    { name: 'Periyar Nagar & Housing Unit', tamil: 'பெரியார் நகர் குடியிருப்பு' }
  ];

  const pillars = [
    {
      id: 'delivery',
      num: '01',
      title: 'Free Morning Delivery',
      pillText: 'Free Morning Delivery • 6:30 – 9:30 AM',
      image: '/assets/delivery_pillar_01.jpg',
      alt: 'Thatha Thengai Paal - 01 Free Morning Delivery Across Gobi'
    },
    {
      id: 'pure-natural',
      num: '02',
      title: '100% Pure & Natural',
      pillText: '100% Pure & Natural • Zero Chemicals',
      image: '/assets/delivery_pillar_02.jpg',
      alt: 'Thatha Thengai Paal - 02 100% Pure & Natural Farm Coconut Milk'
    },
    {
      id: 'fresh-daily',
      num: '03',
      title: 'Farm First Press',
      pillText: 'Farm First Press • Fresh Daily Extraction',
      image: '/assets/delivery_pillar_03.jpg',
      alt: 'Thatha Thengai Paal - 03 Farm First Press Fresh Daily Extraction'
    }
  ];

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="delivery" className="stunning-delivery-section">
      {/* Subtle Tropical Background Ambient */}
      <div className="delivery-ambient-glow" aria-hidden="true">
        <div className="ambient-delivery-sun" />
      </div>

      <div className="delivery-inner-container">
        {/* ==================================================================
            SECTION HEADER
            ================================================================== */}
        <div className="delivery-header-wrap text-center">
          <div className="delivery-eyebrow-pill">
            <Leaf size={16} className="eyebrow-svg-leaf" />
            <span className="eyebrow-text">DAILY GOBI DOORSTEP SERVICE</span>
            <Truck size={16} className="eyebrow-svg-truck" />
          </div>

          <h2 className="delivery-main-heading">
            Delivery & Frequently Asked Questions
          </h2>

          <p className="delivery-tamil-subheading">
            தினசரி காலை 6:30 முதல் 9:30 வரை உங்கள் இல்லம் தேடி
          </p>

          <p className="delivery-desc-paragraph">
            Freshly cold-pressed in Gobichettipalayam every dawn and delivered straight to your doorstep before breakfast.
          </p>

          <div className="delivery-divider-ornament">
            <span className="divider-h-line" />
            <Sparkles size={16} className="divider-svg-sparkle" />
            <span className="divider-h-line" />
          </div>
        </div>

        {/* ==================================================================
            3 STUNNING MASTER ARTWORK PILLARS GRID
            ================================================================== */}
        <div className="delivery-pillars-showcase-grid">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="stunning-pillar-card"
            >
              {/* Full Master Artwork Frame */}
              <div className="pillar-artwork-frame">
                <img
                  src={pillar.image}
                  alt={pillar.alt}
                  className="pillar-artwork-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Bottom Stage Pill Capsule */}
              <div className="pillar-card-bottom-pill">
                <span className="pillar-num-badge">{pillar.num}</span>
                <span className="pillar-text-label">{pillar.pillText}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ==================================================================
            BRIGHT & BOLD ACTIVE DELIVERY NEIGHBORHOODS SHOWCASE
            ================================================================== */}
        <div className="neighborhoods-route-card bold-bright-route-card">
          <div className="route-card-top-bar">
            <div className="route-header-group">
              <div className="route-icon-circle-bright">
                <MapPin size={28} className="route-map-pin" />
              </div>
              <div className="route-header-text">
                <div className="route-status-live-pill">
                  <span className="live-pulse-dot" />
                  <span>DAILY MORNING DOORSTEP DELIVERY</span>
                </div>
                <h3 className="route-title-bright">Active Delivery Neighborhoods</h3>
                <p className="route-subtitle-bright">
                  Covering Gobichettipalayam town and surrounding agricultural belts daily with zero delivery fee:
                </p>
              </div>
            </div>

            <a
              href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent('வணக்கம்! I would like to check delivery availability for my address in Gobi.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="route-check-location-btn"
            >
              <MapPin size={16} />
              <span>Check My Area</span>
            </a>
          </div>

          {/* Bold 4-Column Locality Grid (NO place timings) */}
          <div className="route-chips-grid-bold">
            {deliveryZones.map((zone, i) => (
              <div key={i} className="route-locality-chip-bold">
                <div className="chip-check-bubble">
                  <CheckCircle2 size={18} className="chip-check-icon" />
                </div>
                <div className="chip-text-column">
                  <span className="chip-locality-name-bold">{zone.name}</span>
                  <span className="chip-tamil-name">{zone.tamil}</span>
                </div>
              </div>
            ))}
          </div>

          {/* High-Impact Bottom Info Strip */}
          <div className="route-card-footer-bright">
            <div className="route-footer-stat">
              <Clock size={20} className="footer-stat-icon" />
              <div>
                <strong>Morning Window:</strong> 6:30 AM – 9:30 AM Daily
              </div>
            </div>
            <div className="route-footer-divider" />
            <div className="route-footer-stat">
              <Leaf size={18} className="stat-bullet-leaf-svg" />
              <div>
                <strong>Order Cutoff:</strong> Book before 9:00 PM for next-morning delivery
              </div>
            </div>
            <div className="route-footer-divider" />
            <div className="route-footer-stat highlight-free-stat">
              <Sparkles size={18} className="stat-bullet-star-svg" />
              <div>
                <strong>Free Home Delivery:</strong> Zero delivery charge on all bottles
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================================
            BRIGHT, BOLD & WIDE FAQ ACCORDION
            ================================================================== */}
        <div className="faq-modern-container wide-bold-faq-container">
          <div className="faq-header-wrap text-center">
            <div className="faq-eyebrow-chip">
              <HelpCircle size={16} />
              <span>CLEAR ANSWERS & GUIDANCE</span>
            </div>
            <h3 className="faq-section-title-bold">Frequently Asked Questions</h3>
            <p className="faq-section-subtitle-bold">
              Everything you need to know about Thatha Thengai Paal purity, storage, and morning orders.
            </p>
          </div>

          <div className="faq-accordion-stack-bold">
            {FAQ_LIST.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`faq-accordion-card-bold ${isOpen ? 'faq-card-bold-expanded' : ''}`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="faq-trigger-btn-bold"
                    aria-expanded={isOpen}
                  >
                    <div className="faq-q-number-bubble">
                      0{idx + 1}
                    </div>
                    <span className="faq-question-label-bold">{item.q}</span>
                    <div className={`faq-chevron-circle-bold ${isOpen ? 'chevron-active' : ''}`}>
                      <ChevronDown size={20} className="faq-chevron-icon" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="faq-answer-drawer-bold">
                      <div className="faq-answer-accent-bar" />
                      <p className="faq-answer-body-bold">{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Direct Support Prompt */}
          <div className="faq-help-footer-banner">
            <MessageCircle size={28} className="help-icon-bubble-svg" />
            <div className="help-text-block">
              <strong>Have another question or custom order requirement?</strong>
              <p>We are delighted to assist you directly via call or WhatsApp.</p>
            </div>
            <div className="help-action-buttons">
              <a href={`tel:${STORE_CONFIG.phone}`} className="help-btn help-btn-call">
                <Phone size={15} />
                <span>Call {STORE_CONFIG.displayPhone}</span>
              </a>
              <a
                href={`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent('வணக்கம்! I have a question about Thatha Thengai Paal.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="help-btn help-btn-wa"
              >
                <MessageCircle size={15} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
