import React from 'react';
import { Leaf, Droplet, Droplets, Sparkles, Award } from 'lucide-react';
import './ProductsSection.css';

export default function ProductsSection() {
  const products = [
    {
      id: 'with-sugar',
      name: 'Coconut Milk — With Sugar',
      variant: 'With Sugar',
      price: '₹120',
      volume: '1 Litre',
      priceHalf: '₹60',
      volumeHalf: '½ Litre',
      image: '/assets/product_with_sugar.jpg',
      alt: 'Thatha Thengai Paal - Pure Coconut Milk With Sugar',
      badge: 'Naturally Sweet',
      subtext: 'Traditional Recipe • 100% Farm Fresh',
      cardClass: 'card-with-sugar'
    },
    {
      id: 'without-sugar',
      name: 'Coconut Milk — Without Sugar',
      variant: 'Without Sugar',
      price: '₹120',
      volume: '1 Litre',
      priceHalf: '₹60',
      volumeHalf: '½ Litre',
      image: '/assets/product_without_sugar.jpg',
      alt: 'Thatha Thengai Paal - Pure Coconut Milk Without Sugar',
      badge: 'Zero Added Sugar',
      subtext: 'Pure Virgin Extract • Keto Friendly',
      cardClass: 'card-without-sugar'
    },
    {
      id: 'pepper-flavor',
      name: 'Coconut Milk — Pepper Flavor',
      variant: 'Pepper Flavor',
      price: '₹120',
      volume: '1 Litre',
      priceHalf: '₹60',
      volumeHalf: '½ Litre',
      image: '/assets/product_pepper_flavor.jpg',
      alt: 'Thatha Thengai Paal - Pure Coconut Milk Pepper Flavor',
      badge: 'Village Specialty',
      subtext: 'Stone-Crushed Pepper • Boosts Immunity',
      cardClass: 'card-pepper-flavor'
    }
  ];

  return (
    <section id="products" className="premium-products-showcase">
      {/* 100% In-Code Tropical Ambience (No Background Images) */}
      <div className="showcase-code-backdrop" aria-hidden="true">
        <div className="showcase-sun-glow" />
        <div className="showcase-sand-glow" />
      </div>

      <div className="showcase-container">
        {/* ==================================================================
            SECTION HEADER
            ================================================================== */}
        <div className="showcase-header text-center">
          <div className="showcase-eyebrow">
            <Leaf size={16} className="eyebrow-svg-leaf" />
            <span className="eyebrow-text">OUR PRODUCTS</span>
            <Sparkles size={16} className="eyebrow-svg-sparkle" />
          </div>

          <h2 className="showcase-title">
            Pure Coconut Milk
          </h2>

          <p className="showcase-subtitle">
            Discover your favourite coconut milk.
          </p>

          <div className="showcase-subline-features">
            <Leaf size={15} className="subline-svg-leaf" />
            <span className="subline-item">Fresh</span>
            <span className="subline-sep">•</span>
            <span className="subline-item">Natural</span>
            <Sparkles size={13} className="subline-svg-sparkle" />
            <span className="subline-item">Traditional</span>
            <span className="subline-sep">•</span>
            <span className="subline-item">Healthy</span>
          </div>

          {/* Refined Decorative Divider */}
          <div className="showcase-divider-ornament">
            <span className="ornament-line" />
            <Droplets size={18} className="ornament-svg-droplets" />
            <span className="ornament-line" />
          </div>
        </div>

        {/* ==================================================================
            3 FULL ARTWORK PRODUCT CARDS (DESKTOP 1 ROW x 3 COLUMNS)
            ================================================================== */}
        <div className="showcase-cards-grid">
          {products.map((product) => (
            <div
              key={product.id}
              id={`product-card-${product.id}`}
              className={`product-showcase-card ${product.cardClass}`}
            >
              {/* Card Artwork Image Container */}
              <div className="product-artwork-frame">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="product-artwork-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Landing Page Spec Capsule with 1L and 1/2L Pricing */}
              <div className="product-spec-capsule">
                <div className="spec-capsule-prices">
                  <div className="spec-price-tier primary-tier">
                    <span className="spec-tier-volume">1 LITRE</span>
                    <span className="spec-tier-price">{product.price}</span>
                  </div>
                  <div className="spec-price-tier secondary-tier">
                    <span className="spec-tier-volume">½ LITRE</span>
                    <span className="spec-tier-price">{product.priceHalf}</span>
                  </div>
                </div>

                <div className="spec-capsule-divider" />

                <div className="spec-capsule-details">
                  <span className="spec-badge-title">{product.badge}</span>
                  <span className="spec-subtext">{product.subtext}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Note with Professional Lucide Icons */}
        <div className="showcase-bottom-note">
          <Award size={20} className="bottom-note-award-icon" />
          <span className="bottom-note-text">
            Freshly pressed daily in Gobichettipalayam • 100% natural coconut milk • Traditional cold mechanical extraction
          </span>
          <Award size={20} className="bottom-note-award-icon" />
        </div>
      </div>
    </section>
  );
}
