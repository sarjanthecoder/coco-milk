import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Send, AlertCircle, Sparkles, MapPin, Phone, User, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { STORE_CONFIG } from '../data/products';
import './CartDrawer.css';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [preferredSlot, setPreferredSlot] = useState('Morning (6:30 AM – 9:30 AM)');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [validationError, setValidationError] = useState('');
  const [orderSentMessage, setOrderSentMessage] = useState(false);

  if (!isOpen) return null;

  // Calculate subtotals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = STORE_CONFIG.deliveryFee; // Free
  const grandTotal = subtotal + deliveryFee;
  const totalBottles = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleWhatsAppOrder = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      setValidationError('Your cart is empty. Please add at least one coconut milk bottle.');
      return;
    }

    if (!customerName.trim()) {
      setValidationError('Please enter your Name before sending the order.');
      return;
    }

    if (!customerPhone.trim() || customerPhone.trim().length < 10) {
      setValidationError('Please enter a valid 10-digit mobile number for delivery confirmation.');
      return;
    }

    if (!deliveryAddress.trim()) {
      setValidationError('Please provide your Delivery Address / Street / Landmark in Gobi or surrounding area.');
      return;
    }

    setValidationError('');

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#218C3A', '#35A853', '#D6AC48', '#FFF8E9']
      });
    } catch {
      // Ignore if confetti fails
    }

    // Build structured WhatsApp message
    let message = `🌴 *வணக்கம்! New Order Request — தாத்தா தேங்காய் பால்*\n\n`;
    message += `📋 *ORDER DETAILS:*\n`;
    
    cartItems.forEach((item, idx) => {
      message += `${idx + 1}. *${item.name} (${item.variant})* — ${item.quantity} Litre(s) × ₹${item.price} = ₹${item.quantity * item.price}\n`;
    });

    message += `\n📦 *Total Bottles:* ${totalBottles} Litre(s)`;
    message += `\n💰 *Subtotal:* ₹${subtotal}`;
    message += `\n🚚 *Delivery:* FREE (Gobi Local Delivery)`;
    message += `\n🏷️ *GRAND TOTAL:* ₹${grandTotal}\n\n`;

    message += `👤 *CUSTOMER DETAILS:*\n`;
    message += `• *Name:* ${customerName.trim()}\n`;
    message += `• *Phone:* ${customerPhone.trim()}\n`;
    message += `• *Delivery Location:* ${deliveryAddress.trim()}\n`;
    message += `• *Preferred Slot:* ${preferredSlot}\n`;
    if (specialInstructions.trim()) {
      message += `• *Note:* ${specialInstructions.trim()}\n`;
    }
    message += `\n🙏 *Please confirm delivery schedule and dispatch time.*`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setOrderSentMessage(true);
  };

  return (
    <div className="cart-drawer-overlay" onClick={onClose}>
      <aside
        className="cart-drawer-panel glass-panel-cream"
        onClick={(e) => e.stopPropagation()}
        aria-label="Order Cart Drawer"
      >
        {/* Header */}
        <div className="cart-drawer-header">
          <div className="cart-header-title">
            <div className="cart-header-mascot-wrapper">
              <img
                src="/assets/thatha_mascot_seal.png"
                alt="தாத்தா தேங்காய் பால் Mascot"
                className="cart-header-mascot-img"
                loading="eager"
                decoding="async"
              />
            </div>
            <div>
              <h3>Your Fresh Order</h3>
              <span className="cart-subtitle-count">{totalBottles} bottle(s) selected • தாத்தா தேங்காய் பால்</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="cart-close-btn"
            aria-label="Close cart drawer"
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="cart-drawer-body">
          {/* Cart Empty State */}
          {cartItems.length === 0 ? (
            <div className="cart-empty-view">
              <div className="empty-mascot-wrapper">
                <img
                  src="/assets/thatha_mascot_seal.png"
                  alt="தாத்தா தேங்காய் பால்"
                  className="empty-mascot-img"
                />
              </div>
              <h4>Your Cart is Empty</h4>
              <p>Add fresh coconut milk bottles from our product selection to generate your WhatsApp order.</p>
              <button onClick={onClose} className="btn-primary mt-3">
                Explore Products
              </button>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="cart-items-section">
                <div className="cart-section-title">
                  <span>Selected Products</span>
                  {cartItems.length > 1 && (
                    <button onClick={onClearCart} className="btn-clear-all">
                      Clear all
                    </button>
                  )}
                </div>

                <div className="cart-items-scroll">
                  {cartItems.map((item) => (
                    <div key={item.id} className="cart-item-row glass-panel">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-item-thumbnail"
                        loading="lazy"
                        decoding="async"
                      />

                      <div className="cart-item-info">
                        <h4 className="cart-item-name">{item.name}</h4>
                        <span className="cart-item-variant" style={{ color: item.accentColor }}>
                          {item.variant}
                        </span>
                        <div className="cart-item-pricing">
                          ₹{item.price} × {item.quantity} = <strong>₹{item.price * item.quantity}</strong>
                        </div>
                      </div>

                      {/* Quantity Controls & Remove */}
                      <div className="cart-item-actions">
                        <div className="cart-qty-pill">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="cart-qty-btn"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="cart-qty-number">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="cart-qty-btn"
                            aria-label="Increase quantity"
                          >
                            <Plus size={12} />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.id)}
                          className="cart-item-remove-btn"
                          title="Remove item"
                          aria-label={`Remove ${item.name} ${item.variant}`}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customer Delivery Details Form */}
              <form onSubmit={handleWhatsAppOrder} className="customer-details-form glass-panel">
                <div className="form-heading">
                  <MapPin size={16} className="pin-icon" />
                  <h4>Delivery & Customer Information</h4>
                </div>

                {validationError && (
                  <div className="form-error-alert" role="alert">
                    <AlertCircle size={16} />
                    <span>{validationError}</span>
                  </div>
                )}

                <div className="form-field-group">
                  <label htmlFor="customer-name" className="field-label">
                    <User size={14} />
                    <span>Your Full Name *</span>
                  </label>
                  <input
                    id="customer-name"
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g., Senthil Kumar"
                    className="form-input"
                  />
                </div>

                <div className="form-field-group">
                  <label htmlFor="customer-phone" className="field-label">
                    <Phone size={14} />
                    <span>Mobile Number (WhatsApp) *</span>
                  </label>
                  <input
                    id="customer-phone"
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="e.g., 9876543210"
                    className="form-input"
                  />
                </div>

                <div className="form-field-group">
                  <label htmlFor="delivery-address" className="field-label">
                    <MapPin size={14} />
                    <span>Delivery Address / Landmark (Gobi area) *</span>
                  </label>
                  <textarea
                    id="delivery-address"
                    required
                    rows="2"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="House / Shop No, Street, Landmark in Gobi or nearby"
                    className="form-textarea"
                  />
                </div>

                <div className="form-field-group">
                  <label htmlFor="preferred-slot" className="field-label">
                    <Clock size={14} />
                    <span>Preferred Delivery Slot</span>
                  </label>
                  <select
                    id="preferred-slot"
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                    className="form-select"
                  >
                    <option value="Morning (6:30 AM – 9:30 AM)">Morning (6:30 AM – 9:30 AM) — Recommended</option>
                    <option value="Evening (4:30 PM – 7:00 PM)">Evening (4:30 PM – 7:00 PM)</option>
                  </select>
                </div>

                <div className="form-field-group">
                  <label htmlFor="special-notes" className="field-label">
                    <span>Special Notes (Optional)</span>
                  </label>
                  <input
                    id="special-notes"
                    type="text"
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                    placeholder="e.g., Leave on doorstep / Ring calling bell"
                    className="form-input"
                  />
                </div>

                {/* Subtotal & Bill Breakdown */}
                <div className="bill-summary-card">
                  <div className="bill-row">
                    <span>Subtotal ({totalBottles} Litres):</span>
                    <strong>₹{subtotal}</strong>
                  </div>
                  <div className="bill-row">
                    <span>Doorstep Delivery (Gobi Zone):</span>
                    <strong className="free-tag">FREE</strong>
                  </div>
                  <div className="bill-row grand-total-row">
                    <span>Grand Total:</span>
                    <span className="total-amount-val">₹{grandTotal}</span>
                  </div>
                </div>

                {/* WhatsApp Order Action */}
                <button
                  type="submit"
                  className="btn-whatsapp-order"
                  id="btn-whatsapp-submit"
                >
                  <Send size={18} />
                  <span>Send Order via WhatsApp</span>
                </button>

                {orderSentMessage && (
                  <div className="order-dispatched-notice">
                    <Sparkles size={16} />
                    <span>WhatsApp opened with pre-filled order! Send the message to complete your order enquiry.</span>
                  </div>
                )}

                <p className="order-verification-note">
                  * Clicking will open WhatsApp directly with official business number <strong>+91 {STORE_CONFIG.phone}</strong>. Our team confirms availability and dispatch time immediately upon receiving your message.
                </p>
              </form>
            </>
          )}
        </div>
      </aside>
    </div>
  );
}
