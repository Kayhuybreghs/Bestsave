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
    text: 'Bringing your brand to life with tailor-made HTML5 websites designed for performance and impact.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Mobile Friendly Design',
    text: 'Flawless experiences on any device—desktop, tablet, or mobile—so your message always shines.',
  },
  {
    icon: Search,
    title: 'SEO Friendly Implementation',
    text: 'On-page SEO best practices baked in, boosting your visibility and driving quality traffic.',
  },
  {
    icon: Server,
    title: 'Secure Hosting Setup',
    text: 'Rock-solid hosting configurations that keep your site fast, reliable, and protected.',
  },
  {
    icon: BarChart,
    title: 'Web Analytics Integration',
    text: 'Actionable insights through custom analytics: know your audience and optimize conversions.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    text: 'Advanced caching and code minification for lightning-fast load times and seamless UX.',
  },
];

// Data for features
const features = [
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    text: 'Quality web design packages that fit your budget—no surprises, just stellar value.',
  },
  {
    icon: Rocket,
    title: 'Fast Turnaround',
    text: 'From concept to launch, get your site live quickly without sacrificing excellence.',
  },
  {
    icon: Shield,
    title: 'Reliability & Support',
    text: 'Ongoing care and clear communication—your project is in dependable hands.',
  },
  {
    icon: Code,
    title: 'Clean, Scalable Code',
    text: 'Future-proof development: maintainable, organized code ready for growth.',
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
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
              >
                Bring Your Vision to Life with{' '}
                <span className="text-accent-400">Custom Web Design</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-lg md:text-xl text-primary-100 mb-8 max-w-lg"
              >
                Transform your online presence with engaging, fast-loading, and SEO-optimized websites that captivate and convert.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <Link to="/pricing" className="btn-accent">
                  See Plans
                </Link>
                <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-primary-50 focus:ring-white">
                  Start a Project
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
              className="mb-4 text-2xl font-semibold text-primary-800"
            >
              What We Offer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-secondary-600 max-w-2xl mx-auto"
            >
              A full suite of web solutions, from eye-catching designs to rock-solid performance—everything your business needs online.
            </motion.p>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ icon: Icon, title, text }) => (
              <motion.div key={title} variants={itemVariants} className="card p-6">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-800">{title}</h3>
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
              className="mb-4 text-2xl font-semibold text-primary-800"
            >
              Why KHWebDesign?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-secondary-600 max-w-2xl mx-auto"
            >
              Expert craftsmanship, transparent pricing, and heartfelt support—partner with us for a website you’ll love.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(({ icon: Icon, title, text }) => (
              <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mr-3">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-800">{title}</h3>
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
              Ready to Elevate Your Brand Online?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-primary-100 mb-8 text-lg"
            >
              Let’s collaborate and build a stunning, high-performance website that resonates with your audience.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link to="/pricing" className="btn-accent">See Plans</Link>
              <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-primary-50">Start a Project</Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}


