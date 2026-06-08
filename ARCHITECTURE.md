/\*\*

- Project Architecture and Best Practices Documentation
  \*/

# HygiGuard Solutions - Architecture & Best Practices

## 📐 Architecture Overview

This is a modern, scalable Next.js application designed for a professional cleaning services business.

### Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Hosting**: Vercel (recommended)

### Design Principles

1. **Separation of Concerns**: Data, components, and logic are clearly separated
2. **DRY (Don't Repeat Yourself)**: Reusable components and utilities
3. **Configuration-Driven**: All business data in `constants/site.ts`
4. **Type-Safe**: Full TypeScript coverage
5. **Accessible**: WCAG compliance throughout
6. **Mobile-First**: Responsive design from ground up
7. **Performance**: Optimized for Core Web Vitals

## 📁 Folder Structure

```
src/
├── app/                        # Next.js App Router
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home page
│   ├── services/
│   │   ├── layout.tsx
│   │   ├── page.tsx           # Index redirect
│   │   └── [slug]/
│   │       └── page.tsx       # Dynamic service pages
│   ├── about/page.tsx
│   ├── gallery/page.tsx
│   ├── contact/page.tsx
│   ├── error.tsx              # Error boundary
│   ├── not-found.tsx          # 404 page
│   ├── sitemap.ts             # XML Sitemap
│   ├── robots.txt             # Robots file
│   └── api/
│       └── contact/
│           └── route.ts       # Contact form API
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Footer.tsx         # Footer
│   │   ├── FloatingCTA.tsx    # Floating action buttons
│   │   └── index.ts           # Exports
│   ├── ui/                    # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   ├── Accordion.tsx
│   │   └── ...
│   └── sections/              # Page sections
│       ├── HeroSection.tsx
│       ├── ServicesSection.tsx
│       ├── BeforeAfterSection.tsx
│       └── ...
│
├── constants/
│   └── site.ts               # All business configuration
│
├── data/
│   └── images.ts             # Image data
│
├── hooks/
│   └── index.ts              # Custom hooks
│       ├── useIsMobile()     # Mobile detection
│       ├── useScrollPosition() # Scroll tracking
│       └── useInView()        # Intersection observer
│
├── lib/
│   ├── schema.ts             # SEO schema generation
│   ├── analytics.ts          # Analytics utilities
│   ├── validation.ts         # Form validation
│   ├── image-optimization.ts # Image utilities
│   └── performance.ts        # Performance utilities
│
├── styles/
│   └── globals.css           # Global styles + CSS variables
│
├── types/
│   └── index.ts              # TypeScript types
│
└── utils/
    └── index.ts              # Utility functions
```

## 🔑 Key Files

### `src/constants/site.ts`

- **Purpose**: Centralized configuration
- **Contains**: Company info, services, reviews, FAQ, hours
- **Usage**: Import and use in all components
- **Benefits**: Single source of truth for business data

### `src/styles/globals.css`

- **Purpose**: Global styles and CSS variables
- **Contains**: Theme tokens, base styles, utilities
- **CSS Variables**:
  - `--primary` / `--primary-light`: Brand colors
  - `--secondary` / `--secondary-light`: Accent colors
  - `--background` / `--surface`: Page colors
  - `--text-primary` / `--text-secondary`: Text colors

### `src/types/index.ts`

- **Purpose**: TypeScript type definitions
- **Contains**: All interfaces and types
- **Usage**: Import types in components and pages

## 🧩 Component Patterns

### UI Components

Characteristics:

- Stateless (no business logic)
- Highly reusable
- Full TypeScript typing
- Support refs with `React.forwardRef`
- Use Tailwind CSS only

Example:

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, ...props }, ref) => (
    <button ref={ref} className={cn(variants[variant], sizes[size])} {...props}>
      {children}
    </button>
  )
);
```

### Section Components

Characteristics:

- Accept data as props
- Integrate Framer Motion
- Use `useInView` for animations
- Include proper accessibility

Example:

```typescript
interface ServicesSectionProps {
  title: string;
  description?: string;
  services: ServiceItem[];
}

export const ServicesSection = ({
  title,
  description,
  services,
}: ServicesSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="py-20">
      {/* Section content */}
    </section>
  );
};
```

### Page Components

Characteristics:

- Compose sections and components
- Add metadata with `export const metadata`
- Generate static params for dynamic routes
- Keep business logic minimal

Example:

```typescript
export const metadata: Metadata = {
  title: 'Services',
  description: 'Our professional cleaning services',
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection ... />
      <ServicesSection ... />
      <CTASection ... />
    </>
  );
}
```

## 🎨 Styling Approach

### CSS Variables

All colors and design tokens use CSS variables:

```css
/* In globals.css */
:root {
  --primary: 210 100% 50.2%;
  --secondary: 142 72% 29%;
  /* ... */
}

/* In Tailwind config */
colors: {
  primary: 'hsl(var(--primary))',
  secondary: 'hsl(var(--secondary))',
  /* ... */
}
```

### Tailwind CSS

- Use Tailwind utilities instead of custom CSS
- Leverage CSS variables through Tailwind config
- Use `cn()` utility for conditional classes

```typescript
import { cn } from '@/utils';

className={cn(
  'base-styles',
  isActive && 'active-styles',
  className
)}
```

### Animations with Framer Motion

```typescript
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

<motion.div
  initial="hidden"
  whileInView="visible"
  variants={containerVariants}
>
  Content
</motion.div>
```

## 🔄 Data Flow

### Configuration-Driven Approach

1. **All business data** → `src/constants/site.ts`
2. **Components receive data** → As props
3. **Components render** → Using received data
4. **No hardcoded values** → In components

Benefits:

- Easy to update without touching components
- Single source of truth
- Type-safe data
- Easy to migrate to CMS later

### Example

```typescript
// In constants/site.ts
export const SERVICES = [
  {
    id: 'sofa-cleaning',
    name: 'Sofa Cleaning',
    // ... data
  }
];

// In component
import { SERVICES } from '@/constants/site';

export const ServicesSection = () => {
  return (
    <div>
      {SERVICES.map(service => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

// In page
import { SERVICES } from '@/constants/site';
import { ServicesSection } from '@/components/sections';

export default function Home() {
  return <ServicesSection services={SERVICES} />;
}
```

## 📊 State Management

### Use Cases

- **URL State**: Use query parameters (routing)
- **UI State**: Use local useState (modals, filters)
- **Form State**: Use component state or React Hook Form
- **App State**: Not needed for this project (consider Context API if needed)

### Example: Modal State

```typescript
'use client';

import { useState } from 'react';

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Modal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      >
        {selectedImage && <Image src={selectedImage} />}
      </Modal>
    </>
  );
};
```

## 🚀 Performance Optimization

### Next.js Features

1. **Server Components**: Use by default
2. **Image Optimization**: Use Next.js Image component
3. **Code Splitting**: Automatic at route level
4. **Font Optimization**: System fonts (fast)
5. **CSS Optimization**: Tailwind purges unused CSS

### Best Practices

1. **Lazy Load Images**: Use `loading="lazy"` or Intersection Observer
2. **Minimize Client Components**: Use 'use client' only when needed
3. **Optimize Bundles**: Code split with dynamic imports
4. **Cache Strategy**: Set appropriate cache headers
5. **Image Sizes**: Optimize for different screen sizes

### Performance Monitoring

```typescript
import { reportWebVitals } from '@/lib/performance';

export function reportWebVitals(metric: any) {
  reportWebVitals(metric);
}
```

## ♿ Accessibility

### Semantic HTML

```typescript
// ✅ Good
<nav>
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
</nav>

// ❌ Bad
<div className="nav">
  <div className="nav-item"><span>Home</span></div>
</div>
```

### ARIA Labels

```typescript
// ✅ Good
<button
  aria-label="Open menu"
  onClick={toggleMenu}
>
  <Menu className="w-6 h-6" />
</button>

// ❌ Bad
<button onClick={toggleMenu}>
  <Menu className="w-6 h-6" />
</button>
```

### Focus States

```typescript
// Always include focus states
className = 'focus:outline-none focus:ring-2 focus:ring-primary';
```

### Color Contrast

- Ensure text-to-background ratio of at least 4.5:1
- Test with contrast checkers
- Don't rely on color alone

## 🔍 SEO Best Practices

### Metadata

```typescript
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Meta description',
  keywords: ['keyword1', 'keyword2'],
  openGraph: {
    // OG tags
  },
};
```

### Schema Markup

```typescript
import { JsonLd } from '@/components/JsonLd';
import { generateBusinessSchema } from '@/lib/schema';

<JsonLd data={generateBusinessSchema()} />
```

### URL Structure

- Use descriptive, keyword-rich URLs
- Use hyphens to separate words
- Keep URLs short and clean
- Use trailing slashes consistently

### Internal Linking

- Link related pages
- Use descriptive anchor text
- Create XML sitemap
- Submit to search engines

## 🧪 Testing

### Manual Testing Checklist

- [ ] Test on mobile (375px, 768px, 1024px+)
- [ ] Test all forms and CTAs
- [ ] Test navigation and routing
- [ ] Check image loading
- [ ] Verify animations
- [ ] Test keyboard navigation
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals

### Lighthouse Targets

- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 100

## 📦 Deployment Checklist

Before deploying:

1. Update all business information
2. Replace placeholder images
3. Test all pages and forms
4. Run Lighthouse audit
5. Test on mobile devices
6. Configure analytics
7. Set up monitoring
8. Enable security headers

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [TypeScript](https://www.typescriptlang.org)
- [Web Accessibility](https://www.w3.org/WAI)
- [Core Web Vitals](https://web.dev/vitals)

---

This architecture provides a solid foundation for a scalable, maintainable, and performant web application.
