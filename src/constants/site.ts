/**
 * Central site configuration
 * All business information should come from this file
 * No hardcoded data in components
 */

export const SITE_CONFIG = {
  // Company Info
  name: "HygiGuard Solutions",
  tagline: "Professional Cleaning. Trusted Results.",
  description:
    "Professional sofa, mattress, and carpet cleaning services in Lucknow. Same-day service available.",

  // Contact Info
  phone: "+91 7905 892 892",
  phoneLink: "tel:+919876543210",
  whatsapp: "+91 7905 892 892",
  whatsappLink: "https://wa.me/917905892892",
  email: "info@hygiguardsolutions.com",
  emailLink: "mailto:info@hygiguardsolutions.com",

  // Address
  address: "Lucknow, Uttar Pradesh, India",
  city: "Lucknow",
  state: "Uttar Pradesh",
  country: "India",

  // Business Hours
  businessHours: {
    monday: "9:00 AM - 8:00 PM",
    tuesday: "9:00 AM - 8:00 PM",
    wednesday: "9:00 AM - 8:00 PM",
    thursday: "9:00 AM - 8:00 PM",
    friday: "9:00 AM - 8:00 PM",
    saturday: "9:00 AM - 6:00 PM",
    sunday: "Closed",
  },

  // Service Areas
  serviceAreas: [
    "Lucknow",
    "Gomti Nagar",
    "Indira Nagar",
    "Aliganj",
    "Jankipuram",
    "Hazratganj",
  ],

  // Social Links
  social: {
    facebook: "https://facebook.com/hygiguardsolutions",
    instagram: "https://instagram.com/hygiguardsolutions",
    twitter: "https://twitter.com/hygiguard",
    youtube: "https://youtube.com/@hygiguardsolutions",
    linkedin: "https://linkedin.com/company/hygiguardsolutions",
  },

  // URLs
  baseUrl: "https://hygiguardsolutions.com",
  logoUrl: "/logo.svg",

  // SEO
  keywords: [
    "sofa cleaning in Lucknow",
    "mattress cleaning in Lucknow",
    "carpet cleaning services",
    "professional cleaning services",
    "sofa dry cleaning",
  ],
};

// Services Configuration
export const SERVICES = [
  {
    id: "sofa-cleaning",
    name: "Sofa Cleaning",
    icon: "Armchair",
    slug: "sofa-cleaning",
    shortDescription:
      "Deep clean and refresh your sofas with our professional cleaning process.",
    description:
      "Transform your sofas with our professional deep cleaning service. We use eco-friendly chemicals and advanced equipment to remove dirt, stains, and allergens.",
    benefits: [
      "Removes deep-set stains and odors",
      "Extends sofa lifespan",
      "Eliminates allergens and bacteria",
      "Restores original color and texture",
      "Safe for all fabric types",
    ],
    process: [
      "Inspection and stain assessment",
      "Vacuuming and pre-treatment",
      "Hot water extraction cleaning",
      "Deodorization and drying",
      "Final inspection",
    ],
    price: "Starting from ₹999",
  },
  {
    id: "mattress-cleaning",
    name: "Mattress Cleaning",
    icon: "Bed",
    slug: "mattress-cleaning",
    shortDescription:
      "Professional mattress cleaning for a healthier sleep environment.",
    description:
      "Ensure better sleep with our comprehensive mattress cleaning service. We eliminate dust mites, bacteria, and allergens.",
    benefits: [
      "Removes dust mites and allergens",
      "Eliminates bacteria and microbes",
      "Reduces sleep disruptions",
      "Extends mattress lifespan",
      "Promotes better sleep hygiene",
    ],
    process: [
      "Dust mite removal using UV technology",
      "Deep vacuuming and extraction",
      "Stain treatment and cleaning",
      "Sanitization",
      "Quick-drying process",
    ],
    price: "Starting from ₹1,499",
  },
  {
    id: "carpet-cleaning",
    name: "Carpet Cleaning",
    icon: "Waves",
    slug: "carpet-cleaning",
    shortDescription:
      "Restore the beauty of your carpets with professional deep cleaning.",
    description:
      "Our carpet cleaning service removes dirt, allergens, and stains while preserving the integrity of your carpets.",
    benefits: [
      "Removes embedded dirt and allergens",
      "Eliminates odors and stains",
      "Restores carpet appearance",
      "Safe for all carpet types",
      "Extends carpet lifespan",
    ],
    process: [
      "Inspection and stain pre-treatment",
      "Thorough vacuuming",
      "Hot water extraction",
      "Spot treatment for stubborn stains",
      "Drying and deodorization",
    ],
    price: "Starting from ₹599 per sq.ft",
  },
  {
    id: "chair-cleaning",
    name: "Chair Cleaning",
    icon: "Chair",
    slug: "chair-cleaning",
    shortDescription: "Specialized cleaning for office and dining chairs.",
    description:
      "Keep your chairs fresh and hygienic with our professional chair cleaning service.",
    benefits: [
      "Removes stains and odors",
      "Sanitizes seating surface",
      "Extends chair lifespan",
      "Maintains upholstery quality",
      "Improves overall appearance",
    ],
    process: [
      "Assessment of chair material",
      "Vacuuming and dust removal",
      "Stain pre-treatment",
      "Deep cleaning extraction",
      "Sanitization and drying",
    ],
    price: "Starting from ₹299 per chair",
  },
  {
    id: "deep-cleaning",
    name: "Deep Cleaning",
    icon: "Sparkles",
    slug: "deep-cleaning",
    shortDescription:
      "Comprehensive deep cleaning for your entire home or office.",
    description:
      "Our complete deep cleaning service covers all upholstered items and surfaces for a fresh, hygienic environment.",
    benefits: [
      "Complete home/office refresh",
      "Eliminates allergens",
      "Improves air quality",
      "Removes hidden dirt and bacteria",
      "Cost-effective solution",
    ],
    process: [
      "Full assessment of property",
      "Sofa and furniture cleaning",
      "Mattress and carpet cleaning",
      "General surface sanitization",
      "Final quality check",
    ],
    price: "Custom pricing based on requirements",
  },
];

// Why Choose Us Features
export const WHY_CHOOSE_US = [
  {
    title: "Advanced Equipment",
    description: "State-of-the-art cleaning equipment for superior results.",
    icon: "Zap",
  },
  {
    title: "Eco-Friendly Chemicals",
    description: "Safe and sustainable cleaning products for your family.",
    icon: "Leaf",
  },
  {
    title: "Trained Professionals",
    description: "Certified and experienced cleaning specialists.",
    icon: "Users",
  },
  {
    title: "Fast Response",
    description: "Same-day service available for urgent needs.",
    icon: "Clock",
  },
  {
    title: "Affordable Pricing",
    description: "Competitive rates without compromising quality.",
    icon: "IndianRupee",
  },
  {
    title: "Guaranteed Satisfaction",
    description: "100% satisfaction guarantee on all services.",
    icon: "CheckCircle",
  },
];

// How It Works Steps
export const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Book Service",
    description:
      "Call or message us on WhatsApp to book your cleaning service.",
  },
  {
    step: "2",
    title: "Professional Cleaning",
    description:
      "Our trained team arrives and performs thorough cleaning with care.",
  },
  {
    step: "3",
    title: "Enjoy Fresh Home",
    description: "Enjoy your clean and fresh home with our guaranteed results.",
  },
];

// Sample Reviews
export const REVIEWS = [
  {
    name: "Rahul Singh",
    location: "Gomti Nagar, Lucknow",
    rating: 5,
    text: "Excellent service! My sofa looks brand new. The team was professional and punctual. Highly recommended!",
    date: "2024-05-15",
  },
  {
    name: "Priya Sharma",
    location: "Indira Nagar, Lucknow",
    rating: 5,
    text: "Best carpet cleaning service I've used. They removed years of dirt and stains. Amazing!",
    date: "2024-05-10",
  },
  {
    name: "Amit Verma",
    location: "Aliganj, Lucknow",
    rating: 5,
    text: "Professional, affordable, and reliable. Got same-day service for my mattress cleaning.",
    date: "2024-05-05",
  },
  {
    name: "Neha Patel",
    location: "Jankipuram, Lucknow",
    rating: 5,
    text: "Outstanding results! My entire living room is spotless. Worth every penny!",
    date: "2024-04-28",
  },
  {
    name: "Vikram Kumar",
    location: "Hazratganj, Lucknow",
    rating: 5,
    text: "HygiGuard is my go-to for all cleaning needs. Consistent quality and great customer service.",
    date: "2024-04-20",
  },
  {
    name: "Anjali Gupta",
    location: "Lucknow",
    rating: 5,
    text: "Eco-friendly chemicals and professional team. Couldn't ask for better service!",
    date: "2024-04-15",
  },
];

// Trust Indicators
export const TRUST_INDICATORS = [
  "✓ Same Day Service",
  "✓ Trained Professionals",
  "✓ Affordable Pricing",
  "✓ Satisfaction Guarantee",
];

// FAQ Data
export const FAQ = [
  {
    question: "How long does sofa cleaning take?",
    answer:
      "Sofa cleaning typically takes 2-3 hours depending on the size and condition. We ensure thorough drying before completion.",
  },
  {
    question: "Is your cleaning solution safe for children and pets?",
    answer:
      "Yes, we use eco-friendly and non-toxic cleaning solutions that are safe for children and pets. All products are certified.",
  },
  {
    question: "Do you offer same-day service?",
    answer:
      "Yes, we offer same-day service in most cases. Call or WhatsApp us for availability and quick booking.",
  },
  {
    question: "What is your service area?",
    answer:
      "We cover Lucknow and surrounding areas including Gomti Nagar, Indira Nagar, Aliganj, Jankipuram, and Hazratganj.",
  },
  {
    question: "Are there any stains you cannot remove?",
    answer:
      "We can remove most stains including coffee, wine, ink, and pet stains. Some permanent damage may not be fully removable, but we always try our best.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer 100% satisfaction guarantee. If you're not satisfied, we'll re-do the cleaning at no extra cost.",
  },
  {
    question: "Do I need to prepare my home before the service?",
    answer:
      "No special preparation needed. Just ensure the items to be cleaned are accessible and remove any valuable items nearby.",
  },
  {
    question: "How often should I get my furniture cleaned?",
    answer:
      "We recommend getting furniture cleaned every 6-12 months for regular maintenance, or more frequently for high-traffic items.",
  },
];
