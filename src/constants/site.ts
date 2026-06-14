/**
 * Central site configuration
 * All business information should come from this file
 * No hardcoded data in components
 */

export const SITE_CONFIG = {
  // Company Info
  name: 'HygiGuard Solutions',
  tagline: 'Professional Cleaning. Trusted Results.',
  description:
    'Professional sofa, mattress, and carpet cleaning services in Lucknow. Same-day service available.',

  // Contact Info
  phone: '+91 7905443905',
  phoneLink: 'tel:+917905443905',
  whatsapp: '+91 7905443905',
  whatsappLink: 'https://wa.me/917905443905',
  email: 'hygiguardsolutions@gmail.com',
  emailLink: 'mailto:hygiguardsolutions@gmail.com',

  // Address
  //Sector 19, near Vasundhara Complex, Sector 19, Indira Nagar, Lucknow, Uttar Pradesh 226016
  address:
    'Sector 19, near Vasundhara Complex, Sector 19, Indira Nagar, Lucknow, Uttar Pradesh 226016',
  city: 'Lucknow',
  state: 'Uttar Pradesh',
  country: 'India',

  // Business Hours
  businessHours: {
    monday: '9:00 AM - 8:00 PM',
    tuesday: '9:00 AM - 8:00 PM',
    wednesday: '9:00 AM - 8:00 PM',
    thursday: '9:00 AM - 8:00 PM',
    friday: '9:00 AM - 8:00 PM',
    saturday: '9:00 AM - 6:00 PM',
    sunday: 'Closed',
  },

  // Service Areas
  serviceAreas: [
    'Gomti Nagar',
    'Gomti Nagar Extension',
    'Indira Nagar',
    'Aliganj',
    'Hazratganj',
    'Jankipuram',
    'Mahanagar',
    'Alambagh',
    'Chinhat',
    'Vikas Nagar',
    'Rajajipuram',
    'Sushant Golf City',
  ],

  // Social Links
  social: {
    facebook: 'https://facebook.com/hygiguardsolutions',
    instagram: 'https://instagram.com/hygiguardsolutions',
    twitter: 'https://twitter.com/hygiguard',
    youtube: 'https://youtube.com/@hygiguardsolutions',
    linkedin: 'https://linkedin.com/company/hygiguardsolutions',
  },

  // URLs
  baseUrl: 'https://hygiguardsolutions.com',
  logoUrl: '/logo.svg',

  // SEO
  keywords: [
    'sofa cleaning in Lucknow',
    'sofa dry cleaning in Lucknow',
    'sofa cleaning service near me',
    'mattress cleaning in Lucknow',
    'carpet cleaning services Lucknow',
    'home deep cleaning Lucknow',
    'professional cleaning services Lucknow',
    'fabric sofa cleaning',
    'chair cleaning service Lucknow',
    'curtain cleaning service Lucknow',
    'cushion cleaning service Lucknow',
    'sofa cleaning charges Lucknow',
  ],
};

// Services Configuration
export const SERVICES = [
  {
    id: 'sofa-cleaning',
    name: 'Sofa Cleaning',
    icon: 'Armchair',
    slug: 'sofa-cleaning',
    image:
      'https://chatgpt.com/backend-api/estuary/public_content/enc/eyJpZCI6Im1fNmEyZTY0ZTg2NjRjODE5MThiNDMzY2RhOGZkYmVlYWM6ZmlsZV8wMDAwMDAwMDNjOWM3MjA3OThjNDIxOGE5OWVkNjI3ZSIsInRzIjoiMjA2MTgiLCJwIjoicHlpIiwiY2lkIjoiMSIsInNpZyI6Ijc4Y2I4MmNiMzY0ZjdmMTliYWY4NmFlNTVhNDJjMjg4MDk5ZmQwOGJkNmIyY2E4NzViMTRmZTAxNTFiN2ZmYjgiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsLCJjcyI6bnVsbCwiY2RuIjpudWxsLCJmbiI6bnVsbCwiY2QiOm51bGwsImNwIjpudWxsLCJtYSI6bnVsbH0=',
    shortDescription:
      'Deep clean and refresh your sofas with our professional cleaning process.',
    description:
      'Transform your sofas with our professional deep cleaning service. We use eco-friendly chemicals and advanced equipment to remove dirt, stains, and allergens.',
    pricing: {
      startingFrom: 699,
      items: [
        {
          name: 'Fabric Sofa Cleaning',
          image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
          variants: [
            { name: '1 Seater Sofa', price: 299, originalPrice: 399 },
            { name: '3 Seater Sofa', price: 699, originalPrice: 899 },
            { name: 'L Shape Sofa', price: 1299, originalPrice: 1699 },
          ],
        },
        {
          name: 'Leather Sofa Cleaning',
          image: 'https://images.unsplash.com/photo-1618220179428-22790b461013',
          variants: [
            { name: '3 Seater Sofa', price: 899, originalPrice: 1199 },
          ],
        },
      ],
    },
    benefits: [
      'Removes deep-set stains and odors',
      'Extends sofa lifespan',
      'Eliminates allergens and bacteria',
      'Restores original color and texture',
      'Safe for all fabric types',
    ],
    process: [
      {
        step: '1',
        title: 'Book Your Service',
        description:
          'Call us, WhatsApp us, or submit a request online to schedule your sofa cleaning service.',
      },
      {
        step: '2',
        title: 'Inspection & Stain Assessment',
        description:
          'Our technician inspects the sofa fabric and identifies stains, odors, or problem areas before starting.',
      },
      {
        step: '3',
        title: 'Vacuuming & Pre-Treatment',
        description:
          'We vacuum loose debris and apply eco-friendly pre-treatment solution to break down tough stains.',
      },
      {
        step: '4',
        title: 'Hot Water Extraction Cleaning',
        description:
          'Advanced hot water extraction removes deep-seated dirt, allergens, and bacteria from the sofa fabric.',
      },
      {
        step: '5',
        title: 'Deodorization & Drying',
        description:
          'We deodorize the sofa and speed up drying to leave it fresh, clean, and ready to use.',
      },
      {
        step: '6',
        title: 'Final Inspection',
        description:
          'A thorough quality check is done to ensure your sofa meets our cleaning standards before we wrap up.',
      },
    ],
    price: 'Starting from ₹699',
  },

  {
    id: 'mattress-cleaning',
    name: 'Mattress Cleaning',
    icon: 'Bed',
    slug: 'mattress-cleaning',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
    shortDescription:
      'Professional mattress cleaning for a healthier sleep environment.',
    description:
      'Ensure better sleep with our comprehensive mattress cleaning service.',
    pricing: {
      startingFrom: 499,
      items: [
        {
          name: 'Single Mattress',
          image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
          variants: [
            { name: 'Single Side', price: 499, originalPrice: 699 },
            { name: 'Both Side', price: 799, originalPrice: 999 },
          ],
        },
        {
          name: 'Double Mattress',
          image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304',
          variants: [{ name: 'Both Side', price: 999, originalPrice: 1299 }],
        },
      ],
    },
    benefits: [
      'Removes dust mites and allergens',
      'Eliminates bacteria',
      'Improves sleep hygiene',
      'Extends mattress life',
    ],
    process: [
      {
        step: '1',
        title: 'Book Your Service',
        description:
          'Call us, WhatsApp us, or submit a request online to schedule your mattress cleaning service.',
      },
      {
        step: '2',
        title: 'Mattress Inspection',
        description:
          'Our technician examines the mattress for stains, dust accumulation, and signs of dust mites or bacteria.',
      },
      {
        step: '3',
        title: 'Deep Vacuuming',
        description:
          'We perform a thorough vacuum to extract surface dust, dead skin cells, and debris from the mattress.',
      },
      {
        step: '4',
        title: 'Stain Treatment',
        description:
          'Stubborn stains are treated with safe, eco-friendly solutions to lift and dissolve them effectively.',
      },
      {
        step: '5',
        title: 'Sanitization',
        description:
          'The mattress is sanitized to eliminate bacteria, allergens, and dust mites for a healthier sleep surface.',
      },
      {
        step: '6',
        title: 'Drying & Final Check',
        description:
          'We ensure the mattress is properly dried and inspect it for quality before completing the service.',
      },
    ],
    price: 'Starting from ₹499',
  },

  {
    id: 'carpet-cleaning',
    name: 'Carpet Cleaning',
    icon: 'Waves',
    slug: 'carpet-cleaning',
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843',
    shortDescription:
      'Restore the beauty of your carpets with professional deep cleaning.',
    description:
      'Our carpet cleaning service removes dirt, allergens, and stains.',
    pricing: {
      startingFrom: 399,
      items: [
        {
          name: 'Home Carpet',
          image: 'https://images.unsplash.com/photo-1600166898405-da9535204843',
          variants: [
            { name: 'Small Carpet', price: 399, originalPrice: 599 },
            { name: 'Large Carpet', price: 1299, originalPrice: 1699 },
          ],
        },
      ],
    },
    benefits: ['Removes embedded dirt', 'Removes odor', 'Restores carpet look'],
    process: [
      {
        step: '1',
        title: 'Book Your Service',
        description:
          'Call us, WhatsApp us, or submit a request online to schedule your carpet cleaning service.',
      },
      {
        step: '2',
        title: 'Carpet Inspection',
        description:
          'We assess the carpet type, fiber material, and identify heavily soiled or stained areas.',
      },
      {
        step: '3',
        title: 'Dry Vacuuming',
        description:
          'Loose dirt, dust, and debris are vacuumed out from the carpet surface and fibers.',
      },
      {
        step: '4',
        title: 'Deep Cleaning',
        description:
          'Using professional-grade equipment, we deep clean the carpet to remove embedded dirt, odors, and allergens.',
      },
      {
        step: '5',
        title: 'Drying & Final Inspection',
        description:
          'The carpet is dried thoroughly and inspected to ensure it looks refreshed and restored before we finish.',
      },
    ],
    price: 'Starting from ₹399',
  },

  {
    id: 'chair-cleaning',
    name: 'Chair Cleaning',
    icon: 'Chair',
    slug: 'chair-cleaning',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657',
    shortDescription: 'Specialized cleaning for office and dining chairs.',
    description: 'Keep your chairs fresh and hygienic.',
    pricing: {
      startingFrom: 99,
      items: [
        {
          name: 'Dining Chair',
          image: 'https://images.unsplash.com/photo-1503602642458-232111445657',
          variants: [{ name: 'Per Chair', price: 99, originalPrice: 149 }],
        },
        {
          name: 'Office Chair',
          image: 'https://images.unsplash.com/photo-1505797149-43b0069ec26b',
          variants: [{ name: 'Per Chair', price: 199, originalPrice: 299 }],
        },
      ],
    },
    benefits: ['Removes stains', 'Sanitizes seating', 'Maintains upholstery'],
    process: [
      {
        step: '1',
        title: 'Book Your Service',
        description:
          'Call us, WhatsApp us, or submit a request online to schedule your chair cleaning service.',
      },
      {
        step: '2',
        title: 'Material Inspection',
        description:
          'We inspect the chair fabric or upholstery type to determine the most suitable cleaning method.',
      },
      {
        step: '3',
        title: 'Dust & Debris Removal',
        description:
          'Surface dust, crumbs, and loose particles are removed using dry vacuuming techniques.',
      },
      {
        step: '4',
        title: 'Deep Cleaning',
        description:
          'Targeted cleaning solutions are applied and worked into the upholstery to lift stains and sanitize the chair.',
      },
      {
        step: '5',
        title: 'Drying & Quality Check',
        description:
          'Chairs are dried properly and given a final quality check to ensure they are fresh, clean, and hygienic.',
      },
    ],
    price: 'Starting from ₹99',
  },

  {
    id: 'cushion-cleaning',
    name: 'Cushion Cleaning',
    icon: 'Pillow',
    slug: 'cushion-cleaning',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
    shortDescription:
      'Refresh and deep clean your cushions for a hygienic living space.',
    description:
      'Our professional cushion cleaning service removes dust, stains, and allergens from all types of cushions — sofa, floor, and decorative — restoring their freshness and comfort.',
    pricing: {
      startingFrom: 49,
      items: [
        {
          name: 'Sofa Cushion',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
          variants: [
            { name: 'Per Cushion', price: 49, originalPrice: 79 },
            { name: 'Set of 4', price: 179, originalPrice: 299 },
          ],
        },
        {
          name: 'Floor / Large Cushion',
          image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
          variants: [{ name: 'Per Cushion', price: 99, originalPrice: 149 }],
        },
      ],
    },
    benefits: [
      'Removes dust mites and allergens',
      'Eliminates odors and bacteria',
      'Restores shape and softness',
      'Safe for all cushion fabrics',
      'Extends cushion life',
    ],
    process: [
      {
        step: '1',
        title: 'Book Your Service',
        description:
          'Call us, WhatsApp us, or submit a request online to schedule your cushion cleaning service.',
      },
      {
        step: '2',
        title: 'Fabric & Fill Inspection',
        description:
          'We inspect the cushion cover fabric and filling type to choose the safest and most effective cleaning approach.',
      },
      {
        step: '3',
        title: 'Dry Vacuuming',
        description:
          'Surface dust, pet hair, and debris are vacuumed from all sides of the cushion.',
      },
      {
        step: '4',
        title: 'Stain Pre-Treatment',
        description:
          'Stains are pre-treated with eco-friendly solutions to break them down before deep cleaning.',
      },
      {
        step: '5',
        title: 'Deep Cleaning & Sanitization',
        description:
          'Cushions are deep cleaned and sanitized to remove embedded dirt, allergens, and bacteria thoroughly.',
      },
      {
        step: '6',
        title: 'Drying & Reshaping',
        description:
          'Cushions are carefully dried and reshaped to restore their original form and softness.',
      },
    ],
    price: 'Starting from ₹49',
  },

  {
    id: 'curtain-cleaning',
    name: 'Curtain Cleaning',
    icon: 'PanelRight',
    slug: 'curtain-cleaning',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64',
    shortDescription:
      'Professional curtain cleaning to remove dust, stains, and allergens.',
    description:
      'Our curtain cleaning service handles all fabric types — sheer, blackout, velvet, and more. We clean on-site or offer pick-up and drop service, ensuring your curtains look and smell fresh.',
    pricing: {
      startingFrom: 49,
      items: [
        {
          name: 'Regular / Sheer Curtain',
          image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64',
          variants: [
            { name: 'Per Panel (up to 5 ft)', price: 49, originalPrice: 79 },
            { name: 'Per Panel (5–9 ft)', price: 99, originalPrice: 149 },
          ],
        },
        {
          name: 'Heavy / Blackout Curtain',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
          variants: [
            { name: 'Per Panel (up to 5 ft)', price: 149, originalPrice: 199 },
            { name: 'Per Panel (5–9 ft)', price: 249, originalPrice: 349 },
          ],
        },
        {
          name: 'Velvet / Designer Curtain',
          image: 'https://images.unsplash.com/photo-1600166898405-da9535204843',
          variants: [{ name: 'Per Panel', price: 349, originalPrice: 499 }],
        },
      ],
    },
    benefits: [
      'Removes dust, pollen, and allergens',
      'Eliminates musty odors',
      'Prevents fabric deterioration',
      'Restores original color and drape',
      'Safe for delicate and heavy fabrics',
    ],
    process: [
      {
        step: '1',
        title: 'Book Your Service',
        description:
          'Call us, WhatsApp us, or submit a request online to schedule your curtain cleaning service.',
      },
      {
        step: '2',
        title: 'Fabric Assessment',
        description:
          'Our technician identifies the curtain fabric type and condition to select the right cleaning method.',
      },
      {
        step: '3',
        title: 'Careful Removal',
        description:
          'Curtains are carefully taken down (for on-site service) without damaging rods, hooks, or tracks.',
      },
      {
        step: '4',
        title: 'Vacuuming & Pre-Treatment',
        description:
          'Dust and surface debris are vacuumed off, followed by targeted pre-treatment for stains or discoloration.',
      },
      {
        step: '5',
        title: 'Gentle Deep Cleaning',
        description:
          'Curtains are deep cleaned using fabric-safe methods to remove allergens, odors, and embedded dirt.',
      },
      {
        step: '6',
        title: 'Drying, Pressing & Re-Hanging',
        description:
          'Cleaned curtains are dried, pressed to remove wrinkles, and re-hung to restore their original drape and appearance.',
      },
    ],
    price: 'Starting from ₹49',
  },
];

// Why Choose Us Features
export const WHY_CHOOSE_US = [
  {
    title: 'Professional Cleaning Team',
    description:
      'Trained cleaning experts delivering reliable sofa, mattress, carpet, and home cleaning services.',
    icon: 'Users',
  },
  {
    title: 'Advanced Cleaning Equipment',
    description:
      'Modern tools and professional techniques for deep and effective cleaning results.',
    icon: 'Zap',
  },
  {
    title: 'Safe Cleaning Solutions',
    description:
      'Fabric-friendly and eco-conscious products suitable for your home environment.',
    icon: 'Leaf',
  },
  {
    title: 'Doorstep Service in Lucknow',
    description:
      'Convenient home cleaning service at your location with flexible booking options.',
    icon: 'Home',
  },
  {
    title: 'Affordable Pricing',
    description:
      'Quality cleaning services at transparent and competitive prices.',
    icon: 'IndianRupee',
  },
  {
    title: 'Quality Assurance',
    description:
      'We focus on customer satisfaction and deliver a fresh, hygienic home experience.',
    icon: 'CheckCircle',
  },
];

// How It Works Steps
export const HOW_IT_WORKS = [
  {
    step: '1',
    title: 'Book Your Service',
    description:
      'Call us, WhatsApp us, or submit a request online to schedule your sofa, mattress, carpet, or home cleaning service in Lucknow.',
  },
  {
    step: '2',
    title: 'Professional Cleaning',
    description:
      'Our trained team visits your home and provides deep cleaning using suitable methods and quality products.',
  },
  {
    step: '3',
    title: 'Enjoy Fresh Home',
    description:
      'Relax and enjoy a cleaner, fresher, and hygienic home with Hygiguard Solutions.',
  },
];

// Sample Reviews
export const REVIEWS = [
  {
    name: 'Rahul Singh',
    location: 'Gomti Nagar, Lucknow',
    rating: 5,
    text: 'Excellent service! My sofa looks brand new. The team was professional and punctual. Highly recommended!',
    date: '2024-05-15',
  },
  {
    name: 'Priya Sharma',
    location: 'Indira Nagar, Lucknow',
    rating: 5,
    text: "Best carpet cleaning service I've used. They removed years of dirt and stains. Amazing!",
    date: '2024-05-10',
  },
  {
    name: 'Amit Verma',
    location: 'Aliganj, Lucknow',
    rating: 5,
    text: 'Professional, affordable, and reliable. Got same-day service for my mattress cleaning.',
    date: '2024-05-05',
  },
  {
    name: 'Neha Patel',
    location: 'Jankipuram, Lucknow',
    rating: 5,
    text: 'Outstanding results! My entire living room is spotless. Worth every penny!',
    date: '2024-04-28',
  },
  {
    name: 'Vikram Kumar',
    location: 'Hazratganj, Lucknow',
    rating: 5,
    text: 'HygiGuard is my go-to for all cleaning needs. Consistent quality and great customer service.',
    date: '2024-04-20',
  },
  {
    name: 'Anjali Gupta',
    location: 'Lucknow',
    rating: 5,
    text: "Eco-friendly chemicals and professional team. Couldn't ask for better service!",
    date: '2024-04-15',
  },
];

// Trust Indicators
export const TRUST_INDICATORS = [
  '✓ Same Day Service',
  '✓ Trained Professionals',
  '✓ Affordable Pricing',
  '✓ Satisfaction Guarantee',
];

// FAQ Data
export const FAQ = [
  {
    question: 'How long does sofa cleaning take?',
    answer:
      'Sofa cleaning usually takes 2-3 hours depending on the sofa size, fabric type, and condition. Hygiguard Solutions ensures proper cleaning and drying before completing the service.',
  },
  {
    question: 'How much does sofa cleaning cost in Lucknow?',
    answer:
      'Sofa cleaning charges in Lucknow depend on the number of seats, fabric, and level of dirt. Contact Hygiguard Solutions for an accurate quote.',
  },
  {
    question: 'Do you provide sofa cleaning at home in Lucknow?',
    answer:
      'Yes, we provide doorstep sofa cleaning services across Lucknow including Gomti Nagar, Indira Nagar, Aliganj, Jankipuram, Hazratganj, and nearby areas.',
  },
  {
    question: 'Is your sofa cleaning solution safe for children and pets?',
    answer:
      'Yes, we use fabric-safe and eco-friendly cleaning solutions designed for home use. Our cleaning process is safe when used as recommended.',
  },
  {
    question: 'Can you remove old stains from sofa?',
    answer:
      'We can remove most common stains like food, coffee, dust, and marks. Deep or permanent stains may require special treatment and complete removal depends on fabric condition.',
  },
  {
    question: 'Do you offer same-day sofa cleaning service in Lucknow?',
    answer:
      'Yes, same-day sofa cleaning may be available depending on slot availability. Call or WhatsApp Hygiguard Solutions for quick booking.',
  },
  {
    question: 'Do you clean mattresses and carpets?',
    answer:
      'Yes, Hygiguard Solutions provides mattress cleaning and carpet cleaning services in Lucknow with deep cleaning methods.',
  },
  {
    question: 'How often should I get my sofa cleaned?',
    answer:
      'For a clean and hygienic home, sofa cleaning is recommended every 6-12 months depending on usage, dust exposure, and household conditions.',
  },
  {
    question: 'Do I need to prepare anything before sofa cleaning service?',
    answer:
      'No special preparation is required. Just keep the sofa area accessible and remove personal items before our team arrives.',
  },
  {
    question:
      'Why choose Hygiguard Solutions for cleaning services in Lucknow?',
    answer:
      'Hygiguard Solutions provides professional home cleaning services with trained staff, quality products, and convenient doorstep service.',
  },
];
