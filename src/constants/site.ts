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
    shortDescription:
      'Deep clean and refresh your sofas with our professional cleaning process.',
    description:
      'Transform your sofas with our professional deep cleaning service. We use eco-friendly chemicals and advanced equipment to remove dirt, stains, and allergens.',
    benefits: [
      'Removes deep-set stains and odors',
      'Extends sofa lifespan',
      'Eliminates allergens and bacteria',
      'Restores original color and texture',
      'Safe for all fabric types',
    ],
    process: [
      'Inspection and stain assessment',
      'Vacuuming and pre-treatment',
      'Hot water extraction cleaning',
      'Deodorization and drying',
      'Final inspection',
    ],
    price: 'Starting from ₹999',
  },
  {
    id: 'mattress-cleaning',
    name: 'Mattress Cleaning',
    icon: 'Bed',
    slug: 'mattress-cleaning',
    shortDescription:
      'Professional mattress cleaning for a healthier sleep environment.',
    description:
      'Ensure better sleep with our comprehensive mattress cleaning service. We eliminate dust mites, bacteria, and allergens.',
    benefits: [
      'Removes dust mites and allergens',
      'Eliminates bacteria and microbes',
      'Reduces sleep disruptions',
      'Extends mattress lifespan',
      'Promotes better sleep hygiene',
    ],
    process: [
      'Dust mite removal using UV technology',
      'Deep vacuuming and extraction',
      'Stain treatment and cleaning',
      'Sanitization',
      'Quick-drying process',
    ],
    price: 'Starting from ₹1,499',
  },
  {
    id: 'carpet-cleaning',
    name: 'Carpet Cleaning',
    icon: 'Waves',
    slug: 'carpet-cleaning',
    shortDescription:
      'Restore the beauty of your carpets with professional deep cleaning.',
    description:
      'Our carpet cleaning service removes dirt, allergens, and stains while preserving the integrity of your carpets.',
    benefits: [
      'Removes embedded dirt and allergens',
      'Eliminates odors and stains',
      'Restores carpet appearance',
      'Safe for all carpet types',
      'Extends carpet lifespan',
    ],
    process: [
      'Inspection and stain pre-treatment',
      'Thorough vacuuming',
      'Hot water extraction',
      'Spot treatment for stubborn stains',
      'Drying and deodorization',
    ],
    price: 'Starting from ₹599 per sq.ft',
  },
  {
    id: 'chair-cleaning',
    name: 'Chair Cleaning',
    icon: 'Chair',
    slug: 'chair-cleaning',
    shortDescription: 'Specialized cleaning for office and dining chairs.',
    description:
      'Keep your chairs fresh and hygienic with our professional chair cleaning service.',
    benefits: [
      'Removes stains and odors',
      'Sanitizes seating surface',
      'Extends chair lifespan',
      'Maintains upholstery quality',
      'Improves overall appearance',
    ],
    process: [
      'Assessment of chair material',
      'Vacuuming and dust removal',
      'Stain pre-treatment',
      'Deep cleaning extraction',
      'Sanitization and drying',
    ],
    price: 'Starting from ₹299 per chair',
  },
  {
    id: 'deep-cleaning',
    name: 'Deep Cleaning',
    icon: 'Sparkles',
    slug: 'deep-cleaning',
    shortDescription:
      'Comprehensive deep cleaning for your entire home or office.',
    description:
      'Our complete deep cleaning service covers all upholstered items and surfaces for a fresh, hygienic environment.',
    benefits: [
      'Complete home/office refresh',
      'Eliminates allergens',
      'Improves air quality',
      'Removes hidden dirt and bacteria',
      'Cost-effective solution',
    ],
    process: [
      'Full assessment of property',
      'Sofa and furniture cleaning',
      'Mattress and carpet cleaning',
      'General surface sanitization',
      'Final quality check',
    ],
    price: 'Custom pricing based on requirements',
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
