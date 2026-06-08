/\*\*

- Quick Reference Guide for HygiGuard Solutions
  \*/

# HygiGuard Solutions - Quick Reference

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## 📝 Key Files to Update

### 1. Business Information

**File**: `src/constants/site.ts`

- Phone number
- WhatsApp number
- Email
- Address
- Business hours
- Service areas

### 2. Services

**File**: `src/constants/site.ts` - `SERVICES` array

- Service names
- Descriptions
- Prices
- Benefits
- Process steps

### 3. Reviews

**File**: `src/constants/site.ts` - `REVIEWS` array

- Customer testimonials
- Ratings
- Locations

### 4. Images

**File**: `src/data/images.ts`

- Gallery images
- Before/after images

### 5. FAQ

**File**: `src/constants/site.ts` - `FAQ` array

- Questions and answers

## 🎨 Customization

### Colors

**File**: `src/styles/globals.css`

```css
:root {
  --primary: 210 100% 50.2%; /* Change this */
  --secondary: 142 72% 29%; /* Change this */
}
```

### Fonts

**File**: `src/styles/globals.css`

```css
body {
  font-family: 'Your Font', system-ui, sans-serif;
}
```

## 📱 Pages

| Page     | File                               | Purpose           |
| -------- | ---------------------------------- | ----------------- |
| Home     | `src/app/page.tsx`                 | Main landing page |
| Services | `src/app/services/[slug]/page.tsx` | Service details   |
| About    | `src/app/about/page.tsx`           | Company info      |
| Gallery  | `src/app/gallery/page.tsx`         | Image portfolio   |
| Contact  | `src/app/contact/page.tsx`         | Contact form      |

## 🧩 Components

### UI Components

- `Button` - Reusable button
- `Card` - Card container
- `Badge` - Status badge
- `Modal` - Lightbox/Dialog
- `Accordion` - Expandable sections
- `Heading` - Typography
- `Text` - Body text

### Sections

- `HeroSection` - Hero banner
- `ServicesSection` - Services grid
- `BeforeAfterSection` - Image comparisons
- `ReviewsSection` - Testimonials
- `FAQSection` - FAQ accordion
- `CTASection` - Call-to-action

## 🔧 Build Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm start        # Production server
npm run lint     # ESLint check
npm run type-check  # TypeScript check
npm run format   # Format with Prettier
```

## 📊 Project Structure

```
src/
├── app/          # Pages
├── components/   # React components
├── constants/    # Configuration
├── data/         # Static data
├── hooks/        # Custom hooks
├── lib/          # Utilities
├── styles/       # Global styles
├── types/        # TypeScript types
└── utils/        # Helpers
```

## 🔍 Important Patterns

### Using Site Config

```typescript
import { SITE_CONFIG } from '@/constants/site';

// Use in components
const phone = SITE_CONFIG.phone;
const services = SERVICES;
```

### Creating Section Components

```typescript
import { motion } from 'framer-motion';
import { useInView } from '@/hooks';

export const MySection = ({ title }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {title}
    </motion.section>
  );
};
```

### Using Styling

```typescript
import { cn } from '@/utils';

className={cn(
  'base-class',
  isActive && 'active-class',
  className
)}
```

## 🌍 Deployment

### Vercel (Recommended)

```bash
npm run build
vercel deploy --prod
```

### Other Platforms

See DEPLOYMENT.md

## ✅ Pre-Launch Checklist

- [ ] Update phone/WhatsApp numbers
- [ ] Update email address
- [ ] Replace placeholder images
- [ ] Update service descriptions
- [ ] Add customer reviews
- [ ] Test contact form
- [ ] Run Lighthouse audit
- [ ] Test on mobile
- [ ] Configure analytics
- [ ] Deploy to production

## 🆘 Common Tasks

### Add a New Service

1. Edit `src/constants/site.ts`
2. Add to `SERVICES` array
3. Service page auto-generated

### Change Colors

1. Edit CSS variables in `src/styles/globals.css`
2. All components update automatically

### Update Content

1. Edit `src/constants/site.ts`
2. Add/update data
3. No component changes needed

### Add Analytics

1. Update `.env.local` with tracking ID
2. Use utilities in `src/lib/analytics.ts`

## 📚 Documentation Files

- `README.md` - Project overview
- `GETTING_STARTED.md` - Setup guide
- `DEPLOYMENT.md` - Deployment guide
- `DEVELOPMENT.md` - Development guidelines
- `ARCHITECTURE.md` - Technical details
- `PROJECT_SUMMARY.md` - Project status

## 🤔 FAQ

**Q: How do I change the company name?**
A: Update `SITE_CONFIG.name` in `src/constants/site.ts`

**Q: How do I add a new page?**
A: Create `src/app/newpage/page.tsx` and add navigation link in Header

**Q: How do I update images?**
A: Replace URLs in `src/data/images.ts` and `SERVICES` array

**Q: How do I integrate with WhatsApp?**
A: Update `SITE_CONFIG.whatsapp` - already integrated!

**Q: How do I enable dark mode?**
A: CSS variables support dark mode in `globals.css`

## 🚀 Next Steps

1. Update all business information
2. Replace images
3. Test locally
4. Run Lighthouse audit
5. Deploy to production
6. Monitor performance
7. Gather feedback
8. Iterate improvements

---

**Happy coding! 🎉**

For detailed information, see the full documentation files.
