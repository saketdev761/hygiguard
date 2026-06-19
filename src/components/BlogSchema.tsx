import React from 'react';
import { BlogPost } from '@/constants/blogs';
import { SITE_CONFIG } from '@/constants/site';

interface BlogSchemaProps {
  blog: BlogPost;
}

export function BlogSchema({ blog }: BlogSchemaProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    image: [
      `${SITE_CONFIG.baseUrl}${blog.image}`
    ],
    datePublished: blog.publishDate,
    dateModified: blog.publishDate,
    author: [{
      '@type': 'Organization',
      name: blog.author,
      url: SITE_CONFIG.baseUrl
    }],
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.baseUrl}/assets/images/hygiguard-logo.png`
      }
    },
    description: blog.summary
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
