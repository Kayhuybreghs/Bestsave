import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import SchemaOrg from './SchemaOrg';

const Layout = () => {
  const { pathname } = useLocation();
  const [pageTitle, setPageTitle] = useState('KHWebDesign | Affordable HTML Websites – Fast, SEO & Mobile-Friendly');
  const [pageDescription, setPageDescription] = useState(
    'Professional web development services offering responsive design, SEO optimization, and custom solutions for your business.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    
    switch (pathname) {
      case '/':
        setPageTitle('KHWebDesign | Affordable HTML Websites – Fast, SEO & Mobile-Friendly');
        setPageDescription('Custom web development services designed to help your business grow online with modern, responsive, and SEO-optimized websites.');
        break;
      case '/pricing':
        setPageTitle('KHWebDesign | Pricing - Affordable Web Development Packages');
        setPageDescription('Transparent pricing for professional web development services. Find the perfect package for your business needs.');
        break;
      case '/contact':
        setPageTitle('KHWebDesign | Contact - Fast, Affordable Web Development');
        setPageDescription('Get in touch for professional web development services. Fast, SEO-optimized, and mobile-friendly websites at affordable prices.');
        break;
      default:
        setPageTitle('404 - Page Not Found | KHWebDesign');
        setPageDescription('The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.');
    }
  }, [pathname]);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`https://khwebdesign.com${pathname}`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={`https://khwebdesign.com${pathname}`} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Helmet>
      <SchemaOrg />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;