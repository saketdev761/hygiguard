import { title } from "process";

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  content: string; // HTML or Markdown formatted content
  publishDate: string; // ISO Date string, e.g. "2026-06-15T00:00:00Z"
  author: string;
  image: string;
  imageAlt: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'why-professional-sofa-cleaning-is-essential',
    title: 'Why Professional Sofa Cleaning is Essential for Your Home',
    summary: 'Discover the hidden dangers lurking in your upholstery and why vacuuming isn\'t enough to keep your family safe from allergens.',
    publishDate: '2026-06-16T08:00:00Z', 
    author: 'HygiGuard Expert',
    image: '/assets/images/services/lucknow/sofa-cleaning.png',
    imageAlt: 'Professional sofa cleaning in progress',
    tags: ['Sofa Cleaning', 'Health', 'Home Care'],
    content: `
      <h2>The Hidden Dust Mite Menace</h2>
      <p>Most homeowners in Lucknow believe that regular vacuuming is enough to keep their sofas clean. Unfortunately, typical household vacuums only remove surface dirt. Deep inside the fibers of your fabric sofas, millions of dust mites, dead skin cells, and bacteria thrive in the warm, humid environment.</p>
      
      <h2>Why Professional Extraction is Different</h2>
      <p>At HygiGuard Solutions, we use professional hot-water extraction machines. This process injects a mixture of hot water and eco-friendly cleaning agents deep into the padding of the sofa. It immediately vacuums it back out, bringing all the embedded grime, sweat, and allergens with it.</p>
      
      <h2>Health Benefits for Your Family</h2>
      <p>Regular professional cleaning (at least twice a year) is proven to:</p>
      <ul>
        <li>Reduce asthma and allergy symptoms</li>
        <li>Eliminate pet dander and odors</li>
        <li>Extend the lifespan of your expensive furniture</li>
      </ul>
      
      <p>Don't wait until stains become permanent. Schedule your professional sofa cleaning today and experience the HygiGuard difference.</p>
    `
  },
  {
    slug: 'carpet-cleaning-myths-busted',
    title: 'Top 5 Carpet Cleaning Myths Busted',
    summary: 'Does cleaning your carpet make it get dirty faster? We debunk the most common myths about professional carpet cleaning.',
    publishDate: '2026-06-20T11:35:00.000Z',
    author: 'HygiGuard Expert',
    image: '/assets/images/services/lucknow/carpet-cleaning.png',
    imageAlt: 'Clean carpet in a living room',
    tags: ['Carpet Cleaning', 'Myths', 'Tips'],
    content: `
      <h2>Myth 1: Cleaning Ruins the Carpet Fibers</h2>
      <p>Many people believe that water extraction ruins the carpet. False! Dirt acts like tiny razor blades, cutting carpet fibers when you walk on it. Cleaning removes this dirt, actually extending your carpet's life.</p>
      
      <h2>Myth 2: Carpets Get Dirtier Faster After Cleaning</h2>
      <p>This only happens if the cleaner uses cheap shampoos that leave a sticky residue behind. At HygiGuard Solutions, we use advanced rinsing techniques that leave zero residue, meaning your carpet stays clean longer.</p>
      
      <h2>Myth 3: Vacuuming Once a Week is Enough</h2>
      <p>While vacuuming is great, it doesn't remove the sticky soils and oils that bind to the fibers. Professional deep cleaning is required every 6-12 months.</p>
    `
  },
  {
  slug: 'sofa-dry-cleaning-in-lucknow',
  title: 'Sofa Dry Cleaning in Lucknow',
  summary: 'Sofa dry cleaning in Lucknow is a process of cleaning sofas without using water. It is a safe and effective way to clean sofas and remove dirt, dust, and other contaminants.',
  publishDate: '2026-06-25T11:35:00.000Z',
  author: 'HygiGuard Expert',
  image: '/assets/images/services/lucknow/sofa-dry-cleaning.png',
  imageAlt: 'Sofa dry cleaning in Lucknow',
  tags: ['Sofa Dry Cleaning', 'Tips'],
  content: `
    <h2>Why Sofa Dry Cleaning is Important</h2>
    <p>Sofa dry cleaning is important because it helps to remove dirt, dust, and other contaminants from sofas. It is a safe and effective way to clean sofas and remove dirt, dust, and other contaminants.</p>
  `
  },
];

// Helper function to get only published blogs, sorted by date descending
export const getPublishedBlogs = (): BlogPost[] => {
  const now = new Date();
  return BLOG_POSTS
    .filter(blog => new Date(blog.publishDate) <= now)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
};

export const getBlogBySlug = (slug: string): BlogPost | undefined => {
  return BLOG_POSTS.find(blog => blog.slug === slug);
};
