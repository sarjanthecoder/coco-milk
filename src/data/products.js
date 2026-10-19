// Configuration file for Thatha Thengai Paal products and store data

export const STORE_CONFIG = {
  brandNameTamil: 'தாத்தா தேங்காய் பால்',
  brandNameEnglish: 'Thatha Thengai Paal',
  taglineEnglish: "Taste of Tradition from Nature's Heart",
  taglineTamil: 'வீட்டு முறை தயாரிப்பு, அன்போடு உங்களுக்காக — தாத்தா தேங்காய் பால்.',
  phone: '8637655722',
  whatsappNumber: '918637655722',
  displayPhone: '+91 86376 55722',
  deliveryZone: 'Gobichettipalayam & surrounding rural areas',
  deliveryFee: 0, // Free delivery promo
  location: 'Gobichettipalayam, Erode District, Tamil Nadu',
  operatingHours: 'Daily 6:00 AM – 8:00 PM',
  shelfLife: 'Store refrigerated (2°C - 5°C). Consume within 48 hours for pristine freshness.',
};

export const PRODUCTS = [
  {
    id: 'with-sugar',
    name: 'Coconut Milk',
    nameTamil: 'தேங்காய் பால்',
    variant: 'With Sugar',
    variantTamil: 'சர்க்கரையுடன்',
    price: 120,
    volume: '1 Litre',
    priceHalf: 60,
    volumeHalf: '½ Litre (500ml)',
    rating: 4.9,
    accentColor: '#D6AC48', // Gold / cane sugar tone
    accentLight: '#FFF4D6',
    badgeText: 'Naturally Sweet',
    image: '/assets/bottle_with_sugar.jpg',
    cutoutImage: '/assets/bottle_with_sugar_cutout.png',
    tagline: 'Naturally sweet, rich and creamy taste.',
    description: 'Freshly extracted thick first-press coconut milk blended with a delicate touch of unrefined natural sweetness. Perfect for morning wellness or traditional delicacies.',
    highlights: [
      '100% Natural Farm Coconuts',
      'Rich in Nutritious MCT Fats',
      'Traditionally Wood-Pressed Method'
    ],
    nutrition: {
      calories: '230 kcal / 100ml',
      fats: '24g (Natural Healthy Fats)',
      sugar: 'Delicate Natural Sweetness',
      protein: '2.3g'
    }
  },
  {
    id: 'without-sugar',
    name: 'Coconut Milk',
    nameTamil: 'தேங்காய் பால்',
    variant: 'Without Sugar',
    variantTamil: 'சர்க்கரை இல்லாமல்',
    price: 120,
    volume: '1 Litre',
    priceHalf: 60,
    volumeHalf: '½ Litre (500ml)',
    rating: 5.0,
    isPopular: true,
    accentColor: '#218C3A', // Pure Brand Green / Mint
    accentLight: '#DDF3D7',
    badgeText: 'Pure & Zero Sugar',
    image: '/assets/bottle_without_sugar.jpg',
    cutoutImage: '/assets/bottle_without_sugar_cutout.png',
    tagline: 'Pure and natural taste, zero added sugar.',
    description: 'Pure, untouched virgin coconut milk straight from fresh grated Pollachi & Gobi coconuts. Creamy, soothing, completely sugar-free, and keto-friendly.',
    highlights: [
      '100% Pure Virgin Coconut Milk',
      'Zero Added Sugar & Preservatives',
      'Rich Traditional First Press'
    ],
    nutrition: {
      calories: '198 kcal / 100ml',
      fats: '21g (Natural Healthy Fats)',
      sugar: '0g Added Sugar',
      protein: '2.4g'
    }
  },
  {
    id: 'pepper-flavor',
    name: 'Coconut Milk',
    nameTamil: 'தேங்காய் பால்',
    variant: 'Pepper Flavour',
    variantTamil: 'மிளகு சுவையுடன்',
    price: 120,
    volume: '1 Litre',
    priceHalf: 60,
    volumeHalf: '½ Litre (500ml)',
    rating: 4.9,
    accentColor: '#8B5A2B', // Pepper Brown tone
    accentLight: '#F7E8D8',
    badgeText: 'Village Specialty',
    image: '/assets/bottle_pepper_flavor.jpg',
    cutoutImage: '/assets/bottle_pepper_flavor_cutout.png',
    tagline: 'Traditional taste with a hint of pepper for extra goodness.',
    description: 'An authentic Kongu-belt heritage recipe combining luscious fresh coconut milk with freshly ground indigenous black peppercorns. Warming, aromatic, and comforting.',
    highlights: [
      '100% Natural Fresh Extract',
      'Stone-Crushed Black Peppercorns',
      'Time-Tested Soothing Recipe'
    ],
    nutrition: {
      calories: '205 kcal / 100ml',
      fats: '22g (Natural Healthy Fats)',
      sugar: '0g Added Sugar',
      protein: '2.5g'
    }
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Handpicked Farm Coconuts',
    titleTamil: 'நேரடி பண்ணை தேங்காய்கள்',
    desc: 'We select only fully matured, naturally sweet coconuts harvested directly from fertile groves in Gobichettipalayam and the Bhavani river basin.',
    icon: 'Trees'
  },
  {
    step: '02',
    title: 'Traditional Grating & Cold Press',
    titleTamil: 'பாரம்பரிய மரச்செக்கு முறை',
    desc: 'The fresh white coconut kernel is grated and gently cold-pressed without excessive heat, locking in natural fragrance, vital nutrients, and virgin MCT oils.',
    icon: 'Sparkles'
  },
  {
    step: '03',
    title: 'Pure Natural Blending',
    titleTamil: 'தூய இயற்கை தயாரிப்பு',
    desc: 'Filtered through food-grade mesh. Either kept 100% raw without sugar, delicately sweetened, or steeped with stone-ground southern black pepper.',
    icon: 'Droplets'
  },
  {
    step: '04',
    title: 'Chilled Glass Bottling & Free Delivery',
    titleTamil: 'பாதுகாப்பான கண்ணாடி பாட்டில்',
    desc: 'Filled immediately in eco-friendly, sanitized glass bottles, chilled, and delivered fresh to your door across Gobi every morning.',
    icon: 'Truck'
  }
];

export const FAQ_LIST = [
  {
    q: 'How long can Thatha Thengai Paal be stored?',
    a: 'Because our coconut milk contains 100% natural ingredients with zero chemical preservatives, it is best kept refrigerated and enjoyed fresh within 24 to 48 hours for the most delightful taste.'
  },
  {
    q: 'Why does a thick cream layer form at the top of the bottle?',
    a: 'This is the true hallmark of authentic pure coconut milk! Virgin coconut fat is naturally lighter than water and floats to form a rich cream cap. Simply give the glass bottle a gentle shake before pouring.'
  },
  {
    q: 'What is the delivery area and schedule in Gobi?',
    a: 'We deliver across Gobichettipalayam town and adjacent localities (Alukuli, Modachur, Kugalur, Nambiyur route, Lakkampatti). Fresh batches are dispatched every morning between 6:30 AM and 9:30 AM.'
  },
  {
    q: 'Is Thatha Thengai Paal suitable for daily health & cooking?',
    a: 'Yes! It is 100% pure first-press coconut milk, perfect for morning direct drinking, traditional dishes like idiyappam, payasam, appam, or daily wellness.'
  },
  {
    q: 'Can I order bulk quantities for family functions or catering?',
    a: 'Absolutely. We provide fresh batches in hygienic containers for weddings, temple feasts, and functions. Please place bulk orders at least 24 hours in advance via WhatsApp or direct call at 8637655722.'
  }
];
