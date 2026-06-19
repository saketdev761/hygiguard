import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogBySlug, getPublishedBlogs } from '@/constants/blogs';
import { SITE_CONFIG } from '@/constants/site';
import { Container, Heading, } from '@/components/ui';
import { BlogSchema } from '@/components/BlogSchema';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { CTASection } from '@/components/sections';

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths for all published blogs
export async function generateStaticParams() {
  const blogs = getPublishedBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// Generate SEO Metadata
export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: 'Blog Not Found',
    };
  }

  return {
    title: `${blog.title} | ${SITE_CONFIG.name}`,
    description: blog.summary,
    openGraph: {
      title: blog.title,
      description: blog.summary,
      url: `${SITE_CONFIG.baseUrl}/blog/${blog.slug}`,
      images: [{ url: blog.image }],
      type: 'article',
      publishedTime: blog.publishDate,
      authors: [blog.author],
      tags: blog.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  // In production, we might want to prevent viewing future-dated posts even via direct link
  if (!blog || new Date(blog.publishDate) > new Date()) {
    notFound();
  }

  return (
    <>
      <BlogSchema blog={blog} />
      
      <article className="min-h-screen bg-background">
        {/* Header Hero */}
        <div className="bg-surface border-b border-border py-12 md:py-20">
          <Container className="max-w-4xl">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all articles
            </Link>
            
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {blog.tags.map(tag => (
                <span key={tag} className="text-xs font-bold text-secosndary uppercase tracking-wider bg-secondary/10 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <Heading as="h1" className="text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              {blog.title}
            </Heading>

            <div className="flex flex-wrap items-center gap-6 text-sm text-text-secondary mt-8 pt-6 border-t border-border">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="font-medium text-text-primary">{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={blog.publishDate}>
                  {new Date(blog.publishDate).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </time>
              </div>
            </div>
          </Container>
        </div>

        {/* Featured Image */}
        <Container className="max-w-5xl -mt-8 md:-mt-12 relative z-10 px-4">
          <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-xl border border-border bg-gray-100">
            <img 
              src={blog.image} 
              alt={blog.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </Container>

        {/* Content */}
        <Container className="max-w-3xl py-16 md:py-24">
          <div 
            className="prose prose-lg prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-primary hover:prose-a:text-primary-light prose-strong:text-text-primary max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </Container>

        {/* CTA at the bottom of the blog */}
        <CTASection 
          title="Need Professional Cleaning?" 
          description="Don't let dirt and allergens ruin your furniture. Book a professional deep cleaning session today."
        />
      </article>
    </>
  );
}
