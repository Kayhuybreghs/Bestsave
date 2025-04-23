```tsx
// src/pages/HomePage.tsx

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
import HeroAnimation from '../components/HeroAnimation';

// Variants for animation container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// Variants for individual item animations
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-r from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Text Content */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
              >
                Custom Websites Designed to{' '}
                <span className="text-accent-400">Elevate</span> Your Business
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-lg md:text-xl text-primary-100 mb-8 max-w-lg"
              >
                Modern, responsive, and SEO-optimized websites built to convert
                visitors into customers and grow your online presence.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
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
            </div>

            {/* Hero Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center items-center"
            >
              <HeroAnimation />
            </motion.div>
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
              I offer comprehensive web development services tailored to your
              specific business needs. My goal is to help you establish a strong
              online presence that drives results.
            </motion.p>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Service Cards */}
            {[
              { icon: Code, title: 'Website Development', text: 'Custom-built websites using modern technologies to ensure fast loading, mobile responsiveness, and user-friendly interfaces.' },
              { icon: Smartphone, title: 'Responsive Design', text: 'Websites that look and function perfectly on all devices, from desktops to tablets and smartphones.' },
              { icon: Search, title: 'SEO Optimization', text: 'Technical SEO implementations to improve your website's visibility in search engines and drive organic traffic.' },
              { icon: Server, title: 'Hosting', text: 'Reliable hosting setup included with every package for optimal performance.' },
              { icon: BarChart, title: 'Web Analytics', text: 'Implementation of analytics tools to track user behavior, conversion rates, and other important metrics.' },
              { icon: Zap, title: 'Performance Optimization', text: 'Speed optimization techniques to ensure your website loads quickly and provides a smooth user experience.' }
            ].map(({ icon: Icon, title, text }) => (
              <motion.div key={title} variants={itemVariants} className="card p-6">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-secondary-600">{text}</p>
              </motion.div>
            ))}
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

