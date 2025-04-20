import { Helmet } from 'react-helmet-async';

const SchemaOrg = () => {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'KHWebDesign',
    url: 'https://khwebdesign.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://khwebdesign.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'KHWebDesign',
    url: 'https://khwebdesign.com',
    logo: 'https://khwebdesign.com/logo.png',
    sameAs: [
      'https://www.fiverr.com/khwebdesign',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Netherlands'
    },
    email: 'kayhuybreghs@icloud.com',
    description: 'Professional web development services offering responsive design, SEO optimization, and custom solutions for your business.',
    priceRange: '€€'
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web Development',
    provider: {
      '@type': 'ProfessionalService',
      name: 'KHWebDesign'
    },
    description: 'Professional web development services offering responsive design, SEO optimization, and custom solutions for your business.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: '80',
      highPrice: '600'
    }
  };

  const jsonLd = `${JSON.stringify(websiteSchema)}
${JSON.stringify(organizationSchema)}
${JSON.stringify(serviceSchema)}`;

  return (
    <Helmet>
      <script type="application/ld+json">{jsonLd}</script>
    </Helmet>
  );
};

export default SchemaOrg;