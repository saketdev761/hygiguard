import { Metadata } from 'next';
import Link from 'next/link';
import { getPublishedBlogs } from '@/constants/blogs';
import { SITE_CONFIG } from '@/constants/site';
import { Container, Section, Heading, Text } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Cleaning Tips & Blog',
  description: 'Expert tips on sofa cleaning, carpet maintenance, and keeping your home healthy by HygiGuard Solutions.',
  openGraph: {
    title: 'Cleaning Tips & Blog',
    description: 'Expert tips on sofa cleaning, carpet maintenance, and keeping your home healthy by HygiGuard Solutions.',
    url: `${SITE_CONFIG.baseUrl}/blog`,
  },
  twitter: {
    title: 'Cleaning Tips & Blog',
    description: 'Expert tips on sofa cleaning, carpet maintenance, and keeping your home healthy by HygiGuard Solutions.',
    images: [`${SITE_CONFIG.baseUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: 'https://hygiguardsolutions.com/blog',
  },
};

export default function BlogPage() {
  const blogs = getPublishedBlogs();

  return (
    <Section className="py-16 md:py-24 bg-background min-h-screen">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-secondary font-semibold uppercase tracking-wider mb-2">
            Cleaning Tips & Guides
          </p>
          <Heading as="h1" className="mb-4">
            HygiGuard Blog
          </Heading>
          <Text className="text-lg text-text-secondary">
            Expert advice on maintaining a clean, healthy, and allergen-free home.
          </Text>
        </div>

        {blogs.length === 0 ? (
          <div className="text-center py-12">
            <Text>Check back soon for our latest articles!</Text>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link href={`/blog/${blog.slug}`} key={blog.slug} className="group flex flex-col bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border">
                <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={blog.image}
                    alt={blog.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    {blog.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-text-secondary text-sm line-clamp-3 mb-4 flex-grow">
                    {blog.summary}
                  </p>
                  <div className="flex items-center justify-between text-xs text-text-secondary mt-auto pt-4 border-t border-border">
                    <span className="font-medium">{blog.author}</span>
                    <time dateTime={blog.publishDate}>
                      {new Date(blog.publishDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
