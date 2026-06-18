/**
 * Central site configuration
 * All business information should come from this file
 * No hardcoded data in components
 */

export const SITE_CONFIG = {
  // Company Info
  name: 'HygiGuard Solutions',
  tagline: 'Best Sofa & Carpet Dry Cleaners in Lucknow',
  description:
    'HygiGuard Solutions is a professional cleaning company based in Lucknow, Uttar Pradesh, India. We specialize in doorstep sofa cleaning, mattress cleaning, carpet cleaning, chair cleaning, cushion cleaning, and curtain cleaning across Lucknow. We operate 7 days a week with same-day service available.',

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
    sunday: '9:00 AM - 6:00 PM',
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
    facebook: 'https://www.facebook.com/Hygiguards',
    instagram: 'https://www.instagram.com/hygiguards',
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
    'fabric sofa cleaning Lucknow',
    'chair cleaning service Lucknow',
    'curtain cleaning service Lucknow',
    'cushion cleaning service Lucknow',
    'sofa cleaning charges Lucknow',
    'sofa cleaner Gomti Nagar',
    'sofa cleaner Indira Nagar',
    'doorstep cleaning service Lucknow',
    'best cleaning service Lucknow',
  ],

  // Used in app/layout.tsx <head> for Google rich results & Maps
  schema: {
    localBusiness: {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'Organization'],
      name: 'HygiGuard Solutions',
      image: 'https://hygiguardsolutions.com/og-image.jpg',
      telephone: '+917905443905',
      email: 'hygiguardsolutions@gmail.com',
      url: 'https://hygiguardsolutions.com',
      priceRange: '₹₹',
      foundingDate: '2024',
      description:
        'HygiGuard Solutions provides professional doorstep sofa, mattress, carpet, chair, cushion, and curtain cleaning services across Lucknow, Uttar Pradesh.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Sector 19, near Vasundhara Complex, Indira Nagar',
        addressLocality: 'Lucknow',
        addressRegion: 'Uttar Pradesh',
        postalCode: '226016',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '26.8862',
        longitude: '80.9784',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '20:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      // GEO: areaServed and knowsAbout help AI models understand scope
      areaServed: [
        'Lucknow',
        'Gomti Nagar',
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
        'Gomti Nagar Extension',
      ],
      knowsAbout: [
        'Sofa Cleaning',
        'Mattress Cleaning',
        'Carpet Cleaning',
        'Chair Cleaning',
        'Cushion Cleaning',
        'Curtain Cleaning',
        'Upholstery Cleaning',
        'Dry Cleaning',
        'Stain Removal',
        'Allergen Removal',
        'Eco-Friendly Cleaning',
      ],
      sameAs: [
        'https://facebook.com/hygiguardsolutions',
        'https://instagram.com/hygiguardsolutions',
        'https://youtube.com/@hygiguardsolutions',
        'https://linkedin.com/company/hygiguardsolutions',
      ],
    },
  },
};

// Services Configuration
export const SERVICES = [
  {
    id: 'sofa-cleaning',
    name: 'Sofa Cleaning',
    title: 'Professional Sofa Cleaning in Lucknow',
    icon: 'Armchair',
    slug: 'sofa-cleaning',
    image: '/assets/images/services/lucknow/sofa-cleaning.png',
    // SEO: alt text template — use as: alt={service.imageAlt}
    imageAlt:
      'Professional sofa cleaning service in Lucknow by HygiGuard Solutions',
    shortDescription:
      'Deep clean and refresh your sofas with our professional cleaning process.',
    // GEO: Written as a direct-answer paragraph so AI can cite it
    description:
      'HygiGuard Solutions provides professional sofa cleaning in Lucknow starting at 170. We use eco-friendly chemicals and advanced hot water extraction equipment to remove dirt, stains, and allergens from all sofa types. Same-day doorstep service is available across Gomti Nagar, Indira Nagar, Aliganj, and Hazratganj, 7 days a week from 9 AM to 8 PM.',
    pricing: {
      startingFrom: 170,
      items: [
        {
          name: 'Cotton Sofa Cleaning',
          image: '/assets/images/services/lucknow/fabric-sofa-cleaning.png',
          imageAlt: 'Cotton sofa deep cleaning in Lucknow',
          variants: [
            { name: 'Per Seat', price: 170, originalPrice: 200, unit: 'Seat' },
          ],
        },
        {
          name: 'Velvet Sofa Cleaning',
          image: '/assets/images/services/lucknow/velvet-sofa-cleaning.jpeg',
          imageAlt: 'Velvet sofa deep cleaning in Lucknow',
          variants: [
            { name: 'Per Seat', price: 213, originalPrice: 250, unit: 'Seat' },
          ],
        },
        {
          name: 'Leather Sofa Cleaning',
          image: '/assets/images/services/lucknow/leather-sofa-cleaning.png',
          imageAlt: 'Leather sofa cleaning service in Lucknow',
          variants: [
            { name: 'Per Seat', price: 298, originalPrice: 350, unit: 'Seat' },
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
    // AEO: Service-specific FAQs — used for FAQPage schema on /services/sofa-cleaning
    faqs: [
      {
        question: 'How much does sofa cleaning cost in Lucknow?',
        answer:
          'Sofa cleaning in Lucknow starts from ₹299 for a 1-seater and ₹699 for a 3-seater fabric sofa at HygiGuard Solutions. Leather sofa cleaning starts from ₹899 for a 3-seater.',
      },
      {
        question: 'How long does sofa cleaning take?',
        answer:
          'A standard sofa cleaning takes 1–2 hours depending on size and condition. Drying takes an additional 2–3 hours.',
      },
      {
        question: 'Is sofa cleaning safe for children and pets?',
        answer:
          'Yes, HygiGuard Solutions uses eco-friendly, non-toxic cleaning solutions that are completely safe for children and pets.',
      },
      {
        question: 'Do you offer same-day sofa cleaning in Lucknow?',
        answer:
          'Yes, same-day sofa cleaning service is available across Lucknow including Gomti Nagar, Indira Nagar, and Hazratganj. Call or WhatsApp to check slot availability.',
      },
      {
        question: 'Can you remove old stains from a sofa?',
        answer:
          'HygiGuard Solutions can remove most common stains including food, coffee, dust, and marks. Deep or permanent stains may require special treatment.',
      },
      {
        question: 'How often should I get my sofa cleaned?',
        answer:
          'Sofa cleaning is recommended every 6–12 months depending on usage, dust exposure, and household conditions.',
      },
    ],
    price: 'Starting from ₹170',
  },

  {
    id: 'carpet-cleaning',
    name: 'Carpet Cleaning',
    title: 'Professional Carpet Cleaning in Lucknow',
    icon: 'Waves',
    slug: 'carpet-cleaning',
    image: '/assets/images/services/lucknow/carpet-cleaning.png',
    imageAlt:
      'Professional carpet cleaning service in Lucknow by HygiGuard Solutions',
    shortDescription:
      'Restore the beauty of your carpets with professional deep cleaning.',
    description:
      'HygiGuard Solutions provides professional carpet cleaning in Lucknow starting at ₹12.75/Sq. Ft.. Our service removes embedded dirt, odors, and allergens from all carpet types using professional-grade equipment. Doorstep service available across Lucknow.',
    pricing: {
      startingFrom: 12.75,
      items: [
        {
          name: 'Carpet Cleaning',
          image: '/assets/images/services/lucknow/floor-carpet-cleaning.png',
          imageAlt: 'Carpet deep cleaning in Lucknow',
          variants: [
            { name: 'Per Sq. Ft.', price: 12.75, originalPrice: 15, unit: 'Sq. Ft.', minQty: 50 },
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
    faqs: [
      {
        question: 'How much does carpet cleaning cost in Lucknow?',
        answer:
          'Carpet cleaning in Lucknow starts from ₹399 for a small carpet at HygiGuard Solutions. Large carpet cleaning starts from ₹1299.',
      },
      {
        question: 'Can carpet cleaning remove old stains?',
        answer:
          'Yes, HygiGuard Solutions uses professional-grade deep cleaning equipment that can remove most embedded stains, dirt, and odors from carpets.',
      },
      {
        question: 'How long does carpet cleaning take?',
        answer:
          'Carpet cleaning typically takes 1–3 hours depending on carpet size and level of soiling. Drying takes an additional 3–6 hours.',
      },
    ],
    price: 'Starting from ₹12.75 / Sq. Ft.',
  },

  {
    id: 'mattress-cleaning',
    name: 'Mattress Cleaning',
    title: 'Professional Mattress Cleaning in Lucknow',
    icon: 'Bed',
    slug: 'mattress-cleaning',
    image: '/assets/images/services/lucknow/mattress-cleaning.png',
    imageAlt:
      'Professional mattress cleaning service in Lucknow by HygiGuard Solutions',
    shortDescription:
      'Professional mattress cleaning for a healthier sleep environment.',
    description:
      'HygiGuard Solutions provides professional mattress cleaning in Lucknow starting at ₹499. Our service eliminates dust mites, bacteria, and allergens for a healthier sleep surface. Doorstep service available 7 days a week across all major areas of Lucknow.',
    pricing: {
      startingFrom: 255,
      items: [
        {
          name: 'Mattress Cleaning',
          image: '/assets/images/services/lucknow/bed-cleaning.png',
          imageAlt: 'Mattress cleaning in Lucknow',
          variants: [
            { name: 'Single Side', price: 255, originalPrice: 300 },
            { name: 'Double Side', price: 425, originalPrice: 500 },
          ],
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
    faqs: [
      {
        question: 'How much does mattress cleaning cost in Lucknow?',
        answer:
          'Mattress cleaning in Lucknow starts from ₹255 for a single-side single mattress at HygiGuard Solutions. Double mattress cleaning starts from ₹425.',
      },
      {
        question: 'How often should I get my mattress cleaned?',
        answer:
          'Mattress cleaning is recommended every 6 months to remove dust mites, bacteria, and allergens that accumulate over time.',
      },
      {
        question: 'Does mattress cleaning remove dust mites?',
        answer:
          'Yes, HygiGuard Solutions uses deep vacuuming and sanitization methods that effectively eliminate dust mites, bacteria, and allergens from your mattress.',
      },
      {
        question: 'How long does mattress cleaning take?',
        answer:
          'Mattress cleaning typically takes 1–2 hours. Drying may take an additional 2–4 hours depending on the mattress thickness.',
      },
    ],
    price: 'Starting from ₹255',
  },

  

  {
    id: 'chair-cleaning',
    name: 'Chair Cleaning',
    title: 'Professional Chair Cleaning in Lucknow',
    icon: 'Chair',
    slug: 'chair-cleaning',
    image: '/assets/images/services/lucknow/chair-cleaning.png',
    imageAlt:
      'Professional chair cleaning service in Lucknow by HygiGuard Solutions',
    shortDescription: 'Specialized cleaning for office and dining chairs.',
    description:
      'HygiGuard Solutions provides professional chair cleaning in Lucknow starting at ₹85 per chair. We clean dining chairs, office chairs, and all upholstered seating with eco-friendly solutions. Doorstep service available across Lucknow.',
    pricing: {
      startingFrom: 85,
      items: [
        {
          name: 'Cotton Chair Cleaning',
          image: '/assets/images/services/lucknow/office-chair-cleaning.png',
          imageAlt: 'Cotton chair cleaning in Lucknow',
          variants: [{ name: 'Per Seat', price: 85, originalPrice: 100, unit: 'Seat' }],
        },
        {
          name: 'Velvet Chair Cleaning',
          image: '/assets/images/services/lucknow/velvet-chair-cleaning.png',
          imageAlt: 'Velvet chair cleaning in Lucknow',
          variants: [{ name: 'Per Seat', price: 128, originalPrice: 150, unit: 'Seat' }],
        },
        {
          name: 'Leather Chair Cleaning',
          image: '/assets/images/services/lucknow/leather-chair-cleaning.png',
          imageAlt: 'Leather chair cleaning in Lucknow',
          variants: [{ name: 'Per Seat', price: 170, originalPrice: 200, unit: 'Seat' }],
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
    faqs: [
      {
        question: 'How much does chair cleaning cost in Lucknow?',
        answer:
          'Chair cleaning in Lucknow starts from ₹85 per dining chair at HygiGuard Solutions.',
      },
      {
        question: 'Do you clean office chairs in Lucknow?',
        answer:
          'Yes, HygiGuard Solutions cleans office chairs, dining chairs, and all upholstered seating across Lucknow with professional equipment.',
      },
    ],
    price: 'Starting from ₹85',
  },

  {
    id: 'cushion-cleaning',
    name: 'Cushion Cleaning',
    title: 'Professional Cushion Cleaning in Lucknow',
    icon: 'Pillow',
    slug: 'cushion-cleaning',
    image: '/assets/images/services/lucknow/cushion-cleaning.png',
    imageAlt:
      'Professional cushion cleaning service in Lucknow by HygiGuard Solutions',
    shortDescription:
      'Refresh and deep clean your cushions for a hygienic living space.',
    description:
      'HygiGuard Solutions provides professional cushion cleaning in Lucknow starting at ₹68 per cushion. We remove dust, stains, and allergens from sofa cushions, floor cushions, and decorative cushions, restoring their freshness and comfort.',
    pricing: {
      startingFrom: 68,
      items: [
        {
          name: 'Cushion Cleaning',
          image: '/assets/images/services/lucknow/cushion-cleaning.png',
          imageAlt: 'Cushion cleaning in Lucknow',
          variants: [
            { name: 'Per Piece', price: 68, originalPrice: 80 },
          ],
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
    faqs: [
      {
        question: 'How much does cushion cleaning cost in Lucknow?',
        answer:
          'Cushion cleaning starts from ₹49 per sofa cushion at HygiGuard Solutions in Lucknow. A set of 4 cushions costs ₹179.',
      },
      {
        question: 'Do you clean all types of cushions?',
        answer:
          'Yes, HygiGuard Solutions cleans sofa cushions, floor cushions, and decorative cushions of all fabric types in Lucknow.',
      },
    ],
    price: 'Starting from ₹68',
  },

  {
    id: 'curtain-cleaning',
    name: 'Curtain Cleaning',
    icon: 'PanelRight',
    slug: 'curtain-cleaning',
    image: '/assets/images/services/lucknow/curtain-cleaning.png',
    imageAlt:
      'Professional curtain cleaning service in Lucknow by HygiGuard Solutions',
    shortDescription:
      'Professional curtain cleaning to remove dust, stains, and allergens.',
    description:
      'HygiGuard Solutions provides professional curtain cleaning in Lucknow starting at ₹12.75 per Sq.Ft. We handle all fabric types — sheer, blackout, velvet, and designer curtains — with on-site cleaning or pick-up and drop service available across Lucknow.',
    pricing: {
      startingFrom: 12.75,
      items: [
        {
          name: 'Roman Curtain Cleaning',
          image: '/assets/images/services/lucknow/curtain-cleaning.png',
          imageAlt: 'Roman curtain cleaning in Lucknow',
          variants: [
            { name: 'Per Sq. Ft.', price: 12.75, originalPrice: 15, unit: 'Sq. Ft.', minQty: 20 },
          ],
        },
        {
          name: 'Roller Blind Cleaning',
          image: '/assets/images/services/lucknow/curtain-cleaning.png',
          imageAlt: 'Roller blind cleaning in Lucknow',
          variants: [
            { name: 'Per Sq. Ft.', price: 12.75, originalPrice: 15, unit: 'Sq. Ft.', minQty: 20 },
          ],
        },
        {
          name: 'Bamboo Blind Cleaning',
          image: '/assets/images/services/lucknow/bamboo-blind-cleaning.png',
          imageAlt: 'Bamboo blind cleaning in Lucknow',
          variants: [{ name: 'Per Sq. Ft.', price: 12.75, originalPrice: 15, unit: 'Sq. Ft.', minQty: 20 }],
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
    faqs: [
      {
        question: 'How much does curtain cleaning cost in Lucknow?',
        answer:
          'Curtain cleaning in Lucknow starts from ₹12.75 / Sq. Ft. at HygiGuard Solutions.',
      },
      {
        question: 'Do you clean blackout curtains in Lucknow?',
        answer:
          'Yes, HygiGuard Solutions cleans all curtain types including blackout, velvet, sheer, and designer curtains across Lucknow.',
      },
      {
        question: 'Do you offer curtain pick-up and drop service in Lucknow?',
        answer:
          'Yes, HygiGuard Solutions offers both on-site curtain cleaning and pick-up and drop service across Lucknow.',
      },
    ],
    price: 'Starting from ₹12.75 / Sq. Ft.',
  },
];

// Why Choose Us Features
export const WHY_CHOOSE_US = [
  {
    title: 'Professional Cleaning Team',
    description:
      'Trained cleaning experts delivering reliable sofa, mattress, carpet, and home cleaning services in Lucknow.',
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
      'Convenient home cleaning service at your location across Gomti Nagar, Indira Nagar, Aliganj, and more.',
    icon: 'Home',
  },
  {
    title: 'Affordable Pricing',
    description:
      'Quality cleaning services at transparent and competitive prices with no hidden charges.',
    icon: 'IndianRupee',
  },
  {
    title: 'Quality Assurance',
    description:
      'We focus on customer satisfaction and deliver a fresh, hygienic home experience every time.',
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
      'Relax and enjoy a cleaner, fresher, and hygienic home with HygiGuard Solutions.',
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
      'Sofa cleaning by HygiGuard Solutions in Lucknow typically takes 1–2 hours depending on sofa size, fabric type, and condition. Drying takes an additional 2–3 hours.',
  },
  {
    question: 'How much does sofa cleaning cost in Lucknow?',
    answer:
      'Sofa cleaning in Lucknow starts from ₹299 for a 1-seater and ₹699 for a 3-seater at HygiGuard Solutions. Prices vary by fabric type and sofa size. Contact us for an exact quote.',
  },
  {
    question: 'Do you provide sofa cleaning at home in Lucknow?',
    answer:
      'Yes, HygiGuard Solutions provides doorstep sofa cleaning services across Lucknow including Gomti Nagar, Indira Nagar, Aliganj, Jankipuram, Hazratganj, and nearby areas.',
  },
  {
    question: 'Is your cleaning solution safe for children and pets?',
    answer:
      'Yes, HygiGuard Solutions uses eco-friendly, non-toxic, fabric-safe cleaning solutions that are safe for children and pets when used as recommended.',
  },
  {
    question: 'Can you remove old stains from a sofa?',
    answer:
      'HygiGuard Solutions can remove most common stains like food, coffee, dust, and marks. Deep or permanent stains may require special treatment and complete removal depends on fabric condition.',
  },
  {
    question: 'Do you offer same-day sofa cleaning service in Lucknow?',
    answer:
      'Yes, HygiGuard Solutions offers same-day sofa cleaning in Lucknow depending on slot availability. Call or WhatsApp us for quick booking.',
  },
  {
    question: 'Do you clean mattresses and carpets in Lucknow?',
    answer:
      'Yes, HygiGuard Solutions provides mattress cleaning starting from ₹499 and carpet cleaning starting from ₹399 in Lucknow using professional deep cleaning methods.',
  },
  {
    question: 'How often should I get my sofa cleaned?',
    answer:
      'Sofa cleaning is recommended every 6–12 months depending on usage, dust exposure, and household conditions to maintain hygiene and extend sofa life.',
  },
  {
    question: 'Do I need to prepare anything before the cleaning service?',
    answer:
      'No special preparation is required. Just keep the sofa or item to be cleaned accessible and remove personal items before the HygiGuard Solutions team arrives.',
  },
  {
    question:
      'Why choose HygiGuard Solutions for cleaning services in Lucknow?',
    answer:
      'HygiGuard Solutions provides professional doorstep cleaning services in Lucknow with trained staff, eco-friendly products, affordable pricing, and same-day availability across Gomti Nagar, Indira Nagar, Aliganj, and all major areas.',
  },
];
