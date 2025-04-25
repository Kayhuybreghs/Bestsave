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
  DollarSign,
  Rocket,
  Shield,
} from 'lucide-react';
import HeroAnimation from '../components/HeroAnimation';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

// Data for services
const services = [
  {
    icon: Code,
    title: 'Custom Web Development',
    text: 'Bespoke HTML5 websites built to be responsive, mobile friendly, and SEO optimized, converting visitors into customers.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Mobile Friendly Design',
    text: 'Websites that look and perform seamlessly on all devices, from large desktop screens to smartphones.',
  },
  {
    icon: Search,
    title: 'SEO Friendly Implementation',
    text: 'On page SEO best practices and technical optimizations to boost your search rankings.',
  },
  {
    icon: Server,
    title: 'Secure Hosting Setup',
    text: 'Reliable hosting configurations included to ensure fast loading and top security standards.',
  },
  {
    icon: BarChart,
    title: 'Web Analytics Integration',
    text: 'Custom analytics setup to track user behavior, conversions, and performance metrics.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    text: 'Advanced caching and code minification techniques for blazing fast page loads.',
  },
];

// Data for features
const features = [
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    text: 'Professional website design at competitive rates, accessible for businesses of all sizes.',
  },
  {
    icon: Rocket,
    title: 'Fast Turnaround',
    text: 'Quick delivery without compromising on quality—get live faster and start growing.',
  },
  {
    icon: Shield,
    title: 'Reliability & Support',
    text: 'Consistent communication and dependable support throughout development and beyond.',
  },
  {
    icon: Code,
    title: 'Clean, Scalable Code',
    text: 'Well-structured, maintainable code following best practices for future enhancements.',
  },
];

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
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Custom Web Development & Professional Website Design
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-lg md:text-xl text-primary-100 mb-8 max-w-lg"
              >
                Responsive mobile friendly and accessible websites with fast loading times and built-in SEO best practices to grow your online presence.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <Link to="/pricing" className="btn-accent">View Pricing</Link>
                <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-primary-50 focus:ring-white">Get In Touch</Link>
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
              className="mb-4 text-2xl font-semibold"
            >
              Custom Web Development & Professional Website Design Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-secondary-600 max-w-2xl mx-auto"
            >
              I deliver responsive, mobile friendly, and SEO optimized websites tailored to help your business succeed online.
            </motion.p>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ icon: Icon, title, text }) => (
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
              className="mb-4 text-2xl font-semibold"
            >
              Why Choose My Professional Web Development Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-secondary-600 max-w-2xl mx-auto"
            >
              High-quality development, clean code, and reliable support—all at affordable prices.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(({ icon: Icon, title, text }) => (
              <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mr-3">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                </div>
                <p className="text-secondary-600">{text}</p>
              </motion.div>
            ))}
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
              className="text-white mb-6 text-3xl font-semibold"
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
              Let’s work together to create a custom, responsive, and SEO optimized website that grows your business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link to="/pricing" className="btn-accent">View Pricing</Link>
              <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-primary-50">Contact Me</Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}


