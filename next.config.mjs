import { getMoverzBlogRedirectsForHost } from '../../scripts/blog-moverz-redirects.mjs';

const HOST = 'devis-demenageur-strasbourg.fr';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'standalone',
  trailingSlash: true,
  
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  experimental: {
    serverComponentsExternalPackages: []
  },

  compress: true,
  
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      }
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  async redirects() {
    const existing = [
      // Homepage → Page ville moverz.fr
      { source: '/', destination: 'https://moverz.fr/demenagement/strasbourg/', permanent: true },
      // Blog hub → moverz.fr
      { source: '/blog', destination: 'https://moverz.fr/blog/', permanent: true },
      { source: '/blog/', destination: 'https://moverz.fr/blog/', permanent: true },
      // Blog articles → moverz.fr
      { source: '/blog/demenagement-strasbourg/:slug*', destination: 'https://moverz.fr/blog/:slug*', permanent: true },
      // Quartiers strasbourg (6 pages)
      { source: '/strasbourg/', destination: 'https://moverz.fr/strasbourg/', permanent: true },
      { source: '/strasbourg/cronenbourg/', destination: 'https://moverz.fr/strasbourg/cronenbourg/', permanent: true },
      { source: '/strasbourg/esplanade/', destination: 'https://moverz.fr/strasbourg/esplanade/', permanent: true },
      { source: '/strasbourg/grande-ile/', destination: 'https://moverz.fr/strasbourg/grande-ile/', permanent: true },
      { source: '/strasbourg/hautepierre/', destination: 'https://moverz.fr/strasbourg/hautepierre/', permanent: true },
      { source: '/strasbourg/neudorf/', destination: 'https://moverz.fr/strasbourg/neudorf/', permanent: true },
      // Hub quartiers strasbourg
      { source: '/quartiers-strasbourg/', destination: 'https://moverz.fr/quartiers-strasbourg/', permanent: true },
      // Corridors depuis strasbourg (6 pages)
      { source: '/strasbourg-vers-espagne/', destination: 'https://moverz.fr/strasbourg-vers-espagne/', permanent: true },
      { source: '/strasbourg-vers-lyon/', destination: 'https://moverz.fr/strasbourg-vers-lyon/', permanent: true },
      { source: '/strasbourg-vers-marseille/', destination: 'https://moverz.fr/strasbourg-vers-marseille/', permanent: true },
      { source: '/strasbourg-vers-nantes/', destination: 'https://moverz.fr/strasbourg-vers-nantes/', permanent: true },
      { source: '/strasbourg-vers-paris/', destination: 'https://moverz.fr/strasbourg-vers-paris/', permanent: true },
      { source: '/strasbourg-vers-toulouse/', destination: 'https://moverz.fr/strasbourg-vers-toulouse/', permanent: true },
      // Services
      { source: '/services/', destination: 'https://moverz.fr/', permanent: true },
      { source: '/services/demenagement-economique-strasbourg/', destination: 'https://moverz.fr/', permanent: true },
      { source: '/services/demenagement-premium-strasbourg/', destination: 'https://moverz.fr/', permanent: true },
      { source: '/services/demenagement-standard-strasbourg/', destination: 'https://moverz.fr/', permanent: true },
      // Pages communes
      { source: '/cgu/', destination: 'https://moverz.fr/cgu/', permanent: true },
      { source: '/cgv/', destination: 'https://moverz.fr/cgv/', permanent: true },
      { source: '/comment-ca-marche/', destination: 'https://moverz.fr/comment-ca-marche/', permanent: true },
      { source: '/contact/', destination: 'https://moverz.fr/contact/', permanent: true },
      { source: '/devis-gratuits/', destination: 'https://moverz.fr/devis-gratuits/', permanent: true },
      { source: '/estimation-rapide/', destination: 'https://moverz.fr/estimation-rapide/', permanent: true },
      { source: '/faq/', destination: 'https://moverz.fr/faq/', permanent: true },
      { source: '/mentions-legales/', destination: 'https://moverz.fr/mentions-legales/', permanent: true },
      { source: '/notre-offre/', destination: 'https://moverz.fr/notre-offre/', permanent: true },
      { source: '/partenaires/', destination: 'https://moverz.fr/partenaires/', permanent: true },
      { source: '/politique-confidentialite/', destination: 'https://moverz.fr/politique-confidentialite/', permanent: true },
    ];

    const blogToMoverz = getMoverzBlogRedirectsForHost(HOST);

    return [...existing, ...blogToMoverz];
  }
};

export default nextConfig;
