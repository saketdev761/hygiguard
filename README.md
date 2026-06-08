# HygiGuard Solutions - Professional Cleaning Services Website

A production-ready Next.js website for HygiGuard Solutions, a professional cleaning services company specializing in sofa, mattress, carpet, and chair cleaning.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, Framer Motion
- **Responsive Design**: Mobile-first approach with support for all device sizes
- **SEO Optimized**: Complete SEO setup with metadata, sitemap, robots.txt, and schema markup
- **Performance**: Server components, code splitting, lazy loading, optimized images
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels
- **Lead Generation**: Multiple CTAs, floating action buttons, WhatsApp integration
- **Scalable Architecture**: Centralized configuration, reusable components, clean separation of concerns

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/
│   ├── layout/            # Header, Footer, Layout components
│   ├── ui/                # Reusable UI components
│   └── sections/          # Page sections (Hero, Services, etc.)
├── constants/             # Site configuration (site.ts)
├── data/                  # Static data (images, etc.)
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities and helpers
├── styles/                # Global styles and CSS variables
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions
```

## 🎨 Theme System

All colors and design tokens use CSS variables defined in `globals.css`. This enables:

- Consistent design across components
- Easy theme switching
- No hardcoded colors in components

## 📄 Pages

- **Home** (`/`) - Hero, before/after, services, reviews, FAQ
- **Services** (`/services`) - Service detail pages with process and FAQ
- **About** (`/about`) - Company story, mission, vision, values
- **Gallery** (`/gallery`) - Masonry grid with lightbox
- **Contact** (`/contact`) - Contact form, business hours, service areas

## 🔧 Configuration

All business information is centralized in `src/constants/site.ts`:

- Company details
- Contact information
- Service areas
- Business hours
- Social media links

## 🚀 Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run development server:

   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   npm start
   ```

## 📱 Responsive Breakpoints

- Mobile: 320px - 425px
- Tablet: 768px - 1024px
- Desktop: 1440px+

## 🔍 SEO Features

- Meta tags and Open Graph
- Sitemap generation
- robots.txt configuration
- JSON-LD schema markup
- Mobile-friendly design
- Fast page load (Lighthouse 90+)

## 📦 Key Dependencies

- `next` - React framework
- `react` - UI library
- `framer-motion` - Animations
- `lucide-react` - Icons
- `tailwindcss` - Styling

## 💻 Production Checklist

- [ ] Update SITE_CONFIG with actual business details
- [ ] Replace placeholder images with real photos
- [ ] Configure analytics (GA, GTM, etc.)
- [ ] Set up email notifications for forms
- [ ] Configure domain and SSL
- [ ] Test on various devices and browsers
- [ ] Run Lighthouse audit
- [ ] Set up monitoring and error tracking
- [ ] Configure CDN for images
- [ ] Set up backup and disaster recovery

## 📝 License

Private - HygiGuard Solutions
