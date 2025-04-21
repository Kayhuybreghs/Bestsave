/**
 * HomePage.tsx
 *
 * This component renders the homepage, including:
 * - SEO meta tags via react-helmet-async.
 * - A hero section with a large critical heading (LCP element), whose text is rendered instantly.
 * - Other sections that remain animated.
 *
 * Improvements for LCP on mobile:
 *  • Critical hero text renders immediately.
 *  • Animations are conditionally disabled if the user/device prefers reduced motion.
 *  • A heavy HeroAnimation component is lazy-loaded and deferred.
 */

import React, { Suspense, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
import { Helmet } from 'react-helmet-async';

// Lazy-load the HeroAnimation component so it doesn’t block the initial paint.
const HeroAnimationLazy = React.lazy(() => import('../components/HeroAnimation'));

// Variants for the non-critical sections that remain animated.
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const HomePage = () => {
  // Delay the rendering of non-critical animation after initial paint.
  const [renderAnimation, setRenderAnimation] = useState(false);
  useEffect(() => {
    setRenderAnimation(true);
  }, []);

  // Check if the user prefers reduced motion (a common accessibility setting, usually on low-powered devices).
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
            {/* Critical Hero Text Content */}
            <div>
              {prefersReducedMotion ? (
                <>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                    Custom Websites Designed to <span className="text-accent-400">Elevate</span> Your Business
                  </h1>
                  <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-lg">
                    Modern, responsive, and SEO-optimized websites built to convert visitors into customers and grow your online presence.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link to="/pricing" className="btn-accent">
                      View Pricing
                    </Link>
                    <Link
                      to="/contact"
                      className="btn bg-white text-primary-700 hover:bg-primary-50 focus:ring-white"
                    >
                      Get In Touch
                    </Link>
                  </div>
                </>
              ) : (
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
                    Modern, responsive, and SEO-optimized websites built to convert visitors into customers and grow your online presence.
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
                    <Link
                      to="/contact"
                      className="btn bg-white text-primary-700 hover:bg-primary-50 focus:ring-white"
                    >
                      Get In Touch
                    </Link>
                  </motion.div>
                </>
              )}
            </div>

            {/* Hero Animation – Rendered only if animations are allowed */}
            {!prefersReducedMotion && renderAnimation && (
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
              I offer comprehensive web development services tailored to your specific business needs. My goal is to help you establish a strong online presence that drives results.
            </motion.p>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="card p-6">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Website Development</h3>
              <p className="text-secondary-600">
                Custom-built websites using modern technologies to ensure fast loading, mobile responsiveness, and user-friendly interfaces.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="card p-6">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                <Smartphone size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Responsive Design</h3>
              <p className="text-secondary-600">
                Websites that look and function perfectly on all devices, from desktops to tablets and smartphones.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="card p-6">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                <Search size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">SEO Optimization</h3>
              <p className="text-secondary-600">
                Technical SEO implementations to improve your website's visibility in search engines and drive organic traffic.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="card p-6">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                <Server size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Hosting</h3>
              <p className="text-secondary-600">
                Reliable hosting setup included with every package for optimal performance.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="card p-6">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                <BarChart size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Web Analytics</h3>
              <p className="text-secondary-600">
                Implementation of analytics tools to track user behavior, conversion rates, and other important metrics.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="card p-6">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
              <p className="text-secondary-600">
                Speed optimization techniques to ensure your website loads quickly and provides a smooth user experience.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE ME SECTION */}
      <section className="section bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              Why Choose Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-secondary-600 max-w-2xl mx-auto"
            >
              I'm committed to delivering high-quality web development services at affordable prices that help your business stand out in the digital landscape.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mr-3">
                  <DollarSign size={20} />
                </div>
                <h3 className="text-xl font-semibold">Affordable Pricing</h3>
              </div>
              <p className="text-secondary-600">
                Quality web development at competitive rates, making professional websites accessible for businesses of all sizes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mr-3">
                  <Rocket size={20} />
                </div>
                <h3 className="text-xl font-semibold">Fast Turnaround</h3>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mr-3">
                  <Shield size={20} />
                </div>
                <h3 className="text-xl font-semibold">Reliability</h3>
              </div>
              <p className="text-secondary-600">
                Consistent communication and dependable support throughout the development process and beyond.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mr-3">
                  <Code size={20} />
                </div>
                <h3 className="text-xl font-semibold">Clean Code</h3>
              </div>
              <p className="text-secondary-600">
                Well structured, maintainable code that follows best practices for security, performance, and future scalability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-white mb-6"
            >
              Ready to Transform Your Online Presence?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-primary-100 mb-8 text-lg"
            >
              Let's work together to create a website that truly represents your brand and helps you achieve your business goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link to="/pricing" className="btn-accent">
                View Pricing
              </Link>
              <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-primary-50">
                Contact Me
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;


