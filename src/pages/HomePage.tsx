/**
 * HomePage.tsx
 *
 * This version applies several improvements for a better LCP on mobile:
 * • Critical hero text renders immediately as static markup on mobile or when reduced motion is preferred.
 * • Non-critical animations (such as the HeroAnimation component) are lazy-loaded and deferred.
 * • On desktop, the hero text could use a near‑instant “animation” (essentially static) so that it is still painted immediately.
 *
 * Note: TTFB (600 ms) is mainly server‑side, so further improvements may require backend optimizations.
 */

import React, { Suspense, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Code,
  Smartphone,
  Search,
  Server,
  BarChart,
  Zap,
  Shield,
  Rocket,
  DollarSign,
} from 'lucide-react';

// Lazy-load the HeroAnimation so it doesn't block the critical paint.
const HeroAnimationLazy = React.lazy(() => import('../components/HeroAnimation'));

// Helper to check if we’re in the browser.
const isBrowser = typeof window !== 'undefined';

const HomePage = () => {
  // Used to delay loading of non-critical animation components.
  const [renderAnimation, setRenderAnimation] = useState(false);
  useEffect(() => {
    setRenderAnimation(true);
  }, []);

  // Detect if the user prefers reduced motion or if the viewport is mobile.
  const prefersReducedMotion =
    isBrowser && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = isBrowser && window.innerWidth < 768; // Example threshold

  // Render static hero content (without motion wrappers) for mobile or when reduced motion.
  const renderStaticHero = () => (
    <>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
        Custom Websites Designed to <span className="text-accent-400">Elevate</span> Your Business
      </h1>
      <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-lg">
        Modern, responsive, and SEO-optimized websites built to convert visitors into customers
        and grow your online presence.
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <Link to="/pricing" className="btn-accent">
          View Pricing
        </Link>
        <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-primary-50 focus:ring-white">
          Get In Touch
        </Link>
      </div>
    </>
  );

  // Render hero content with minimal motion for desktop
  const renderAnimatedHero = () => (
    <>
      <motion.h1
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.01 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
      >
        Custom Websites Designed to <span className="text-accent-400">Elevate</span> Your Business
      </motion.h1>
      <motion.p
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.01, delay: 0.01 }}
        className="text-lg md:text-xl text-primary-100 mb-8 max-w-lg"
      >
        Modern, responsive, and SEO-optimized websites built to convert visitors into customers
        and grow your online presence.
      </motion.p>
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.01, delay: 0.02 }}
        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
      >
        <Link to="/pricing" className="btn-accent">
          View Pricing
        </Link>
        <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-primary-50 focus:ring-white">
          Get In Touch
        </Link>
      </motion.div>
    </>
  );

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>KHWebDesign | Affordable HTML Websites – Fast, SEO & Mobile-Friendly</title>
        <meta
          name="description"
          content="Custom web development services designed to help your business grow online with modern, responsive, and SEO-optimized websites."
        />
      </Helmet>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-r from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {(prefersReducedMotion || isMobile) ? renderStaticHero() : renderAnimatedHero()}
            </div>
            {!(prefersReducedMotion || isMobile) && renderAnimation && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative flex justify-center items-center"
              >
                <Suspense fallback={<div style={{ width: '100%', height: '100%' }} />}>
                  <HeroAnimationLazy />
                </Suspense>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              What I Do
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-secondary-600 max-w-2xl mx-auto"
            >
              I offer comprehensive web development services tailored to your specific business needs.
              My goal is to help you establish a strong online presence that drives results.
            </motion.p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="card p-6"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Website Development</h3>
              <p className="text-secondary-600">
                Custom-built websites using modern technologies to ensure fast loading, mobile responsiveness,
                and user-friendly interfaces.
              </p>
            </motion.div>
            {/* Additional service cards… */}
          </motion.div>
        </div>
      </section>

      {/* Additional sections (Why Choose Me, CTA, etc.) remain unchanged */}
      {/* … */}
    </>
  );
};

export default HomePage;



