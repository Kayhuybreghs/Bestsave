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
    title: 'Website Development',
    text: 'Custom-built websites using modern technologies to ensure fast loading, mobile responsiveness, and user-friendly interfaces.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    text: 'Websites that look and function perfectly on all devices, from desktops to tablets and smartphones.',
  },
  {
    icon: Search,
    title: 'SEO Optimization & Conversion Rate Strategies',
    text: "Technical SEO implementations coupled with data-driven conversion strategies to enhance your website's visibility, improve rankings, and drive targeted organic traffic.",
  },
  {
    icon: Server,
    title: 'High-Speed Web Hosting & Secure SSL Setup',
    text: 'Reliable, high-speed hosting setup with secure SSL configuration ensures optimal performance and robust security.',
  },
  {
    icon: BarChart,
    title: 'Web Analytics & Performance Tracking',
    text: 'Implementation of advanced analytics tools to monitor user behavior, conversion metrics, and other performance indicators for continuous improvement.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    text: 'Speed optimization techniques to ensure your website loads quickly and provides a smooth, responsive user experience.',
  },
];

// Data for features
const features = [
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    text: 'Quality web development at competitive rates, making professional websites accessible for businesses of all sizes.',
  },
  {
    icon: Rocket,
    title: 'Fast Turnaround',
    text: 'Quick delivery without compromising quality, getting your website live and generating results faster.',
  },
  {
    icon: Shield,
    title: 'Reliability & Long-Term Support',
    text: "Consistent communication and dependable support throughout every stage of your web development journey and beyond.",
  },
  {
    icon: Code,
    title: 'Clean & Scalable Code',
    text: 'Well structured, maintainable code that follows best practices for security, performance, and future scalability.',
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
              className="relative flex justify-center items-center overflow-hidden"
              style={{
                backfaceVisibility: 'hidden',
                transform: 'translate3d(0, 0, 0)',
              }}
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
              I'm committed to delivering high-quality web development services
              at affordable prices that help your business stand out in the
              digital landscape.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100"
              >
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
              Let's work together to create a website that truly represents
              your brand and helps you achieve your business goals.
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
}
