// src/components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://accentureready.vercel.app';
const SITE_NAME = 'Accenture Ready';

/**
 * Reusable SEO Component
 * Generates title, meta description, robots, canonical link, Open Graph, Twitter cards, and optional JSON-LD structured data.
 */
export default function SEO({
  title,
  description,
  path = '/',
  robots = 'index, follow',
  schema = null,
  ogType = 'website',
  image = null
}) {
  // Normalize canonical URL: trailing slash for root ('/'), no trailing slash for subpaths
  const cleanPath = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}`;
  const canonicalUrl = cleanPath === '/' ? `${SITE_URL}/` : `${SITE_URL}${cleanPath}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      {image && <meta property="og:image" content={image.startsWith('http') ? image : `${SITE_URL}${image}`} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image.startsWith('http') ? image : `${SITE_URL}${image}`} />}

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
