/**
 * Utility functions
 */

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
  if (match) {
    return `+${match[1]} ${match[2]} ${match[3]}`;
  }
  return phone;
}

export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export function generateMetadata(
  title: string,
  description: string,
  path: string,
  image?: string,
) {
  return {
    title: `${title} | HygiGuard Solutions`,
    description,
    keywords: [
      "cleaning services",
      "professional cleaning",
      "sofa cleaning",
      "mattress cleaning",
      "carpet cleaning",
    ],
    openGraph: {
      title: `${title} | HygiGuard Solutions`,
      description,
      url: `https://hygiguardsolutions.com${path}`,
      siteName: "HygiGuard Solutions",
      images: [
        {
          url: image || "https://hygiguardsolutions.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "HygiGuard Solutions",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | HygiGuard Solutions`,
      description,
      images: [image || "https://hygiguardsolutions.com/og-image.jpg"],
    },
    canonical: `https://hygiguardsolutions.com${path}`,
  };
}

export function generateSchemaMarkup(data: Record<string, any>) {
  return {
    __html: JSON.stringify(data),
  };
}
