import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const routes = [
    '',
    '/salons/tc-palya',
    '/salons/battarahalli',
    '/about',
    '/services',
    '/gallery',
    '/reviews',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority:
      route === ''
        ? 1.0
        : route === '/salons/tc-palya' || route === '/salons/battarahalli'
        ? 0.95
        : route === '/services'
        ? 0.9
        : 0.8,
  }));

  const categoryRoutes = siteConfig.categories.map((category) => ({
    url: `${baseUrl}/services/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  return [...routes, ...categoryRoutes];
}
