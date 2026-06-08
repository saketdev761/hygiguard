/\*\*

- Development guidelines and best practices for HygiGuard Solutions
  \*/

# Development Guidelines

## Code Quality

- Use TypeScript for all new code
- Follow ESLint rules defined in `.eslintrc.json`
- Use Prettier for code formatting
- Keep components focused and single-responsibility

## Component Patterns

### UI Components

- Always use TypeScript interfaces for props
- Export components with `React.forwardRef` for ref support
- Include JSDoc comments for complex components
- Use `cn()` utility for conditional classNames

### Section Components

- Accept data as props (no hardcoding)
- Use Framer Motion for animations
- Implement `useInView` hook for lazy animations
- Add proper accessibility attributes

## Data Management

- All business data in `src/constants/site.ts`
- Static data in `src/data/`
- No hardcoded values in components
- Use TypeScript types from `src/types/`

## Performance

- Use Next.js Image component with optimization
- Implement lazy loading for images
- Use Server Components where possible
- Minimize CSS-in-JS, prefer Tailwind CSS
- Implement route-level code splitting

## SEO

- Add metadata to all pages
- Include JSON-LD schema markup
- Use semantic HTML
- Implement proper heading hierarchy
- Add alt text to all images
- Use descriptive link text

## Accessibility

- Use semantic HTML elements
- Add ARIA labels where needed
- Ensure keyboard navigation works
- Test color contrast ratios
- Use focus states on interactive elements
- Test with screen readers

## Mobile First Design

- Start with mobile layout
- Use responsive Tailwind classes
- Test on various screen sizes
- Ensure touch targets are 44x44px minimum
- Use viewport meta tag

## Git Workflow

- Create feature branches for new features
- Use descriptive commit messages
- Test before creating pull requests
- Keep commits atomic and logical

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

- Site URL
- Analytics tracking IDs
- Email configuration
- Third-party API keys

## Testing

- Test on multiple devices
- Run Lighthouse audit regularly
- Check Core Web Vitals
- Test all forms and CTAs
- Test on different browsers
