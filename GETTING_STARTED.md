/\*\*

- Quick Start Guide for HygiGuard Solutions
  \*/

# HygiGuard Solutions - Quick Start Guide

## 🚀 Installation

```bash
# Clone or download the project
cd hygiguard

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit http://localhost:3000 to see your site.

## 📝 Initial Setup

### 1. Update Business Information

Edit `src/constants/site.ts` and update:

```typescript
export const SITE_CONFIG = {
  phone: '+91 YOUR_PHONE',
  whatsapp: '+91 YOUR_WHATSAPP',
  email: 'your-email@domain.com',
  address: 'Your Address',
  // ... rest of config
};
```

### 2. Replace Images

- Replace placeholder images in `GALLERY_IMAGES` and `BEFORE_AFTER_IMAGES` in `src/data/images.ts`
- Add real business photos
- Recommended sizes:
  - Hero: 1920x1080px
  - Cards: 400x400px
  - Gallery: 600x600px

### 3. Update Services

Edit `src/constants/site.ts` - `SERVICES` array to match your actual services with:

- Service name
- Description
- Price information
- Benefits and process

### 4. Add Reviews

Update `REVIEWS` array in `src/constants/site.ts` with real customer testimonials.

## 🎨 Customization

### Colors

All colors are CSS variables in `src/styles/globals.css`:

```css
:root {
  --primary: 210 100% 50.2%; /* Deep Blue */
  --secondary: 142 72% 29%; /* Fresh Green */
  /* ... more colors */
}
```

Edit these values to match your brand.

### Fonts

The site uses System fonts by default. To change:

1. Add Google Fonts import to `src/styles/globals.css`
2. Update font-family in Tailwind config

### Typography

Heading and text sizes are customizable in `tailwind.config.ts`.

## 📄 Pages

### Home `/`

- Hero section
- Before/After showcase
- Services overview
- Reviews
- FAQ
- CTA sections

### Services `/services/[slug]`

- Dynamic service pages
- Detailed process
- Related services
- FAQ for each service

### Gallery `/gallery`

- Masonry grid
- Category filter
- Lightbox viewer
- Before/After comparisons

### About `/about`

- Company story
- Mission & Vision
- Core values
- Team info
- Statistics

### Contact `/contact`

- Contact form (sends to WhatsApp)
- Business hours
- Service areas
- Contact info cards

## 🔧 Development

### Component Structure

```
src/components/
├── ui/                    # Reusable UI elements
│   ├── Button.tsx
│   ├── Card.tsx
│   └── ...
├── layout/                # Layout components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── FloatingCTA.tsx
└── sections/              # Page sections
    ├── HeroSection.tsx
    ├── ServicesSection.tsx
    └── ...
```

### Creating New Components

1. Create file in appropriate folder
2. Use TypeScript interfaces for props
3. Export with proper typing
4. Add JSDoc comments

Example:

```typescript
interface MyComponentProps {
  title: string;
  children: React.ReactNode;
}

export const MyComponent = ({ title, children }: MyComponentProps) => {
  return <div>{title} {children}</div>;
};
```

### Adding New Sections

1. Create component in `src/components/sections/`
2. Accept data as props
3. Use Framer Motion for animations
4. Import and use in pages

## 🌍 Deployment

### Vercel (Recommended)

1. Push code to Git repository
2. Connect to Vercel
3. Deploy automatically

```bash
vercel deploy --prod
```

### Other Platforms

See `DEPLOYMENT.md` for detailed instructions for other platforms.

## 📱 Testing

### Responsive Design

Test on all breakpoints:

- Mobile: 375px
- Tablet: 768px
- Desktop: 1024px+

### Performance

Run Lighthouse audit:

```bash
npm run build  # Build for production
npm start      # Start server
# Open DevTools > Lighthouse
```

### SEO

Check:

- Meta tags visible in page source
- Sitemap at `/sitemap.xml`
- robots.txt at `/robots.txt`
- Schema markup in Network tab

## 📚 File Structure

```
hygiguard/
├── src/
│   ├── app/               # Next.js App Router pages
│   ├── components/        # React components
│   ├── constants/         # Configuration (site.ts)
│   ├── data/              # Static data
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Utilities
│   ├── styles/            # Global styles
│   ├── types/             # TypeScript types
│   └── utils/             # Helper functions
├── public/                # Static assets
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies
└── README.md              # Documentation
```

## 🆘 Troubleshooting

### Styles not loading

- Clear `.next` folder
- Run `npm run dev` again

### Images not showing

- Check image URLs are correct
- Verify image dimensions
- Check browser console for errors

### Forms not working

- Ensure WhatsApp number is correct
- Check SITE_CONFIG values
- Test in incognito mode

## 📞 Support

For help with:

- Next.js: [nextjs.org](https://nextjs.org)
- Tailwind CSS: [tailwindcss.com](https://tailwindcss.com)
- Framer Motion: [framer.com/motion](https://framer.com/motion)

## 🎯 Next Steps

1. ✅ Install and run locally
2. ✅ Update all business information
3. ✅ Replace images with real photos
4. ✅ Customize colors and branding
5. ✅ Test on mobile devices
6. ✅ Run Lighthouse audit
7. ✅ Deploy to production

## 📈 Performance Targets

- Lighthouse Score: 90+
- Core Web Vitals: Good
- First Contentful Paint: < 1.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3s

Good luck with your HygiGuard Solutions website! 🧹✨
