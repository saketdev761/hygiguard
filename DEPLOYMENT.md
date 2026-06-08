/\*\*

- Deployment configuration
  \*/

# Deployment Guide

## Production Checklist

Before deploying to production:

1. **Business Information**
   - [ ] Update phone number in `src/constants/site.ts`
   - [ ] Update WhatsApp number
   - [ ] Update email address
   - [ ] Update business hours
   - [ ] Update service areas

2. **Content**
   - [ ] Replace placeholder images with real photos
   - [ ] Update service descriptions with actual info
   - [ ] Update company story and values
   - [ ] Update team information if applicable
   - [ ] Add real customer testimonials

3. **SEO**
   - [ ] Update keywords in `src/constants/site.ts`
   - [ ] Create sitemap.xml
   - [ ] Add robots.txt rules
   - [ ] Configure analytics (Google Analytics, etc.)
   - [ ] Set up Google Search Console
   - [ ] Submit sitemap to search engines

4. **Security**
   - [ ] Enable HTTPS
   - [ ] Set security headers
   - [ ] Configure CORS if needed
   - [ ] Review API endpoints
   - [ ] Validate form submissions

5. **Performance**
   - [ ] Run Lighthouse audit
   - [ ] Optimize images
   - [ ] Check Core Web Vitals
   - [ ] Enable caching
   - [ ] Configure CDN

6. **Monitoring**
   - [ ] Set up error tracking (Sentry, etc.)
   - [ ] Configure uptime monitoring
   - [ ] Set up analytics
   - [ ] Monitor performance metrics

## Deployment Platforms

### Vercel (Recommended)

```bash
vercel deploy
```

### Other Platforms

- Netlify
- AWS Amplify
- DigitalOcean
- Custom VPS

## Environment Variables for Production

```
NEXT_PUBLIC_SITE_URL=https://hygiguardsolutions.com
NEXT_PUBLIC_GA_ID=your-ga-id
CONTACT_EMAIL_TO=info@hygiguardsolutions.com
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-password
```

## Build and Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Or use vercel
vercel deploy --prod
```

## Post-Deployment

1. Test all pages and functionality
2. Verify forms work and send notifications
3. Check mobile responsiveness
4. Validate SEO elements
5. Monitor error logs
6. Test analytics tracking
7. Verify sitemap generation
