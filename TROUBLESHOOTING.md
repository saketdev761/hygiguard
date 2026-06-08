/\*\*

- Troubleshooting Guide
  \*/

# 🆘 Troubleshooting Guide

## Common Issues & Solutions

### Installation Issues

#### Issue: npm install fails

**Solutions:**

1. Delete `node_modules` and `package-lock.json`
2. Clear npm cache: `npm cache clean --force`
3. Try with `npm ci` instead of `npm install`
4. Update Node.js to latest LTS version
5. Try `yarn install` if npm doesn't work

#### Issue: TypeScript errors

**Solutions:**

1. Clear TypeScript cache: `rm -rf .next`
2. Run `npm run type-check` to see all errors
3. Update TypeScript: `npm install typescript@latest`
4. Check `tsconfig.json` is valid

### Development Issues

#### Issue: Port 3000 already in use

**Solution:**

```bash
# Use different port
npm run dev -- -p 3001
```

#### Issue: Styles not loading

**Solutions:**

1. Clear `.next` folder
2. Restart development server
3. Clear browser cache (Ctrl+Shift+Delete)
4. Check `globals.css` is imported in layout
5. Verify Tailwind configuration

#### Issue: Images not showing

**Solutions:**

1. Check image URLs are correct
2. Verify images exist in `public/` folder
3. Check image dimensions
4. Use Image component from Next.js
5. Check browser console for 404 errors

#### Issue: Components not re-rendering

**Solutions:**

1. Check you're using `'use client'` for interactive components
2. Verify state hooks are used correctly
3. Check for missing dependencies in effect hooks
4. Ensure components are exported properly

#### Issue: Mobile styles not working

**Solutions:**

1. Verify responsive classes: `md:`, `lg:`, etc.
2. Clear `.next` and rebuild
3. Test in DevTools device emulation
4. Check `viewport` meta tag in layout
5. Clear browser cache

### Build Issues

#### Issue: Build fails

**Solutions:**

1. Run `npm run type-check` to find type errors
2. Check all imports are valid
3. Verify all pages export default component
4. Look for console errors during build
5. Delete `.next` and rebuild

#### Issue: Static generation takes too long

**Solutions:**

1. Reduce number of dynamic routes
2. Add `revalidate` option to reduce ISR time
3. Use `getStaticProps` with `fallback: true`
4. Check for n+1 queries

### SEO & Performance

#### Issue: Metadata not showing

**Solutions:**

1. Check metadata is exported from page
2. Verify `export const metadata` syntax
3. Check Open Graph image exists
4. Test with SEO preview tools
5. Check server vs client component (should be server)

#### Issue: Images not optimizing

**Solutions:**

1. Use Next.js Image component
2. Add `width` and `height` props
3. Use proper image formats (WebP)
4. Optimize before uploading
5. Check image size limits

#### Issue: Low Lighthouse score

**Solutions:**

1. Optimize image sizes and formats
2. Minimize JavaScript
3. Use server components where possible
4. Add proper heading hierarchy
5. Improve Core Web Vitals
6. Enable caching headers

### Deployment Issues

#### Issue: Vercel deployment fails

**Solutions:**

1. Check error logs in Vercel dashboard
2. Verify environment variables are set
3. Ensure `.env.local` is not committed
4. Check build command in Vercel settings
5. Test build locally: `npm run build`

#### Issue: Site looks broken after deploy

**Solutions:**

1. Clear Vercel cache: redeploy
2. Check CSS is loading (check Network tab)
3. Verify image URLs are correct
4. Check API endpoints are correct
5. Clear browser cache

#### Issue: 404 on routes

**Solutions:**

1. Check file names and routes
2. Verify dynamic routes use correct param names
3. Check `generateStaticParams` returns correct values
4. Ensure pages export default component
5. Verify middleware isn't blocking routes

### Form & Contact Issues

#### Issue: Contact form not working

**Solutions:**

1. Check WhatsApp number is correct
2. Verify form validation is passing
3. Check browser console for JavaScript errors
4. Test in different browser
5. Check if WhatsApp Web is accessible in your region

#### Issue: Form validation errors persist

**Solutions:**

1. Check validation rules in `src/lib/validation.ts`
2. Verify error messages appear correctly
3. Test with various inputs
4. Check form data is being captured
5. Add console logs to debug

### Database/Backend Issues

#### Issue: API routes not working

**Solutions:**

1. Verify route file is `route.ts` not `route.tsx`
2. Check request method (GET, POST, etc.)
3. Add error logging for debugging
4. Test with Postman or curl
5. Check CORS configuration if needed

### TypeScript Issues

#### Issue: Type errors in components

**Solutions:**

1. Import types from `src/types/index.ts`
2. Use `React.ReactNode` for children
3. Extend HTML element types for props
4. Use `React.forwardRef` for ref support
5. Check generic type parameters

#### Issue: Props not recognized

**Solutions:**

1. Define proper interface for props
2. Export interface from component
3. Verify component receives props
4. Check spelling of prop names
5. Use TypeScript strict mode

## Performance Optimization

### Slow Page Load

```typescript
// 1. Use Image component
import Image from 'next/image';

// 2. Add loading="lazy"
<Image src={...} loading="lazy" />

// 3. Optimize images before upload
// Use tools like TinyPNG, ImageOptim

// 4. Use next/dynamic for large components
import dynamic from 'next/dynamic';
const Component = dynamic(() => import('./Component'), {
  loading: () => <p>Loading...</p>,
});
```

### Large Bundle

```typescript
// 1. Check bundle size
npm install --save-dev @next/bundle-analyzer

// 2. Code split with dynamic imports
const Component = dynamic(() => import('./Component'));

// 3. Remove unused dependencies
npm prune

// 4. Use Server Components
// Move 'use client' boundary lower
```

## Debugging Tips

### Add Logging

```typescript
console.log('Debug:', data);
console.error('Error:', error);
console.group('Group Name');
console.table(array);
```

### Browser DevTools

1. **Elements**: Check HTML structure
2. **Console**: Look for JavaScript errors
3. **Network**: Check API calls and assets
4. **Performance**: Check page load time
5. **Lighthouse**: Run performance audit

### Next.js Debugging

```bash
# Verbose logging
npm run dev -- --turbo --debug

# Check build output
npm run build -- --debug

# Analyze bundle
npm run analyze
```

### TypeScript Debugging

```bash
# Check types
npm run type-check

# Strict type checking
npm run type-check -- --strict
```

## Getting Help

### Resources

- **Next.js Docs**: https://nextjs.org
- **Tailwind Docs**: https://tailwindcss.com
- **TypeScript Docs**: https://typescriptlang.org
- **React Docs**: https://react.dev
- **Framer Motion**: https://www.framer.com/motion

### Stack Overflow

Search with tags:

- `next.js`
- `tailwindcss`
- `typescript`
- `react`

### GitHub Discussions

- Next.js: https://github.com/vercel/next.js/discussions
- Tailwind: https://github.com/tailwindlabs/tailwindcss/discussions

## Before Asking for Help

1. ✅ Check browser console for errors
2. ✅ Check build logs
3. ✅ Clear cache and rebuild
4. ✅ Try in incognito/private mode
5. ✅ Search error message online
6. ✅ Check official documentation
7. ✅ Review similar GitHub issues

## Helpful Commands

```bash
# Clean build
rm -rf .next node_modules package-lock.json
npm install
npm run build

# Type checking
npm run type-check

# Linting
npm run lint

# Format code
npm run format

# Development with debugging
DEBUG=* npm run dev

# Test build locally
npm run build
npm start

# Analyze bundle
npm run build -- --debug
```

---

**Still having issues?** Check the other documentation files or the GitHub discussions for your specific tool.
