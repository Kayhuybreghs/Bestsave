import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Check, 
  X, 
  AlertCircle,
  Server,
  MessageSquare,
  BarChart
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const PricingPage = () => {
  return (
    <>
      <Helmet>
        <title>Pricing | Web Development Services</title>
        <meta name="description" content="Transparent pricing for professional web development services. Find the perfect package for your business needs." />
      </Helmet>

      {/* Pricing Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white mb-6"
            >
              Transparent Pricing
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-primary-100 text-lg mb-6"
            >
              Choose the package that best fits your business needs. All prices are transparent with no hidden fees.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="card overflow-visible"
            >
              <div className="p-8 border-b border-secondary-100">
                <h3 className="text-2xl font-semibold mb-2">Basic</h3>
                <p className="text-secondary-600 mb-4">1-page Website + SEO</p>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold">€83</span>
                </div>
                <p className="text-sm text-secondary-600 mb-6">Custom Modern Design — Tailored to Your Needs with Simple SEO</p>
                <Link 
                  to="/contact" 
                  className="btn-primary w-full justify-center"
                >
                  Get Started
                </Link>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check size={20} className="text-success-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Functional website</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-success-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Content upload</span>
                  </li>
                  <li className="flex items-start text-secondary-400">
                    <X size={20} className="mt-0.5 mr-2 flex-shrink-0" />
                    <span>Opt-in form</span>
                  </li>
                  <li className="flex items-start text-secondary-400">
                    <X size={20} className="mt-0.5 mr-2 flex-shrink-0" />
                    <span>Autoresponder integration</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-success-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Speed optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-success-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Hosting setup</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-success-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Social media icons</span>
                  </li>
                </ul>
                <div className="mt-8 pt-8 border-t border-secondary-100">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-secondary-600">Pages:</span>
                      <span className="font-medium">1</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-secondary-600">Plugins:</span>
                      <span className="font-medium">0</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-secondary-600">Revisions:</span>
                      <span className="font-medium">3</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-secondary-600">Delivery:</span>
                      <span className="font-medium">2 days</span>
                    </div>
                    <p className="text-xs text-secondary-500 mt-2">
                      1 day delivery available for +€27
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Standard Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card overflow-visible border-primary-500 relative md:-mt-4"
            >
              <div className="absolute -top-4 left-0 w-full flex justify-center">
                <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <div className="p-8 border-b border-secondary-100 bg-primary-50">
                <h3 className="text-2xl font-semibold mb-2">Standard</h3>
                <p className="text-secondary-600 mb-4">5-page Website + SEO</p>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold">€250</span>
                </div>
                <p className="text-sm text-secondary-600 mb-6">Custom Modern Design — Tailored to Your Needs with Good SEO</p>
                <Link 
                  to="/contact" 
                  className="btn-primary w-full justify-center"
                >
                  Get Started
                </Link>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check size={20} className="text-success-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Functional website</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-success-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Content upload</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-success-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Opt-in form</span>
                  </li>
                  <li className="flex items-start text-secondary-400">
                    <X size={20} className="mt-0.5 mr-2 flex-shrink-0" />
                    <span>Autoresponder integration</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-success-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Speed optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-success-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Hosting setup</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-success-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Social media icons</span>
                  </li>
                </ul>
                <div className="mt-8 pt-8 border-t border-secondary-100">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-secondary-600">Pages:</span>
                      <span className="font-medium">5</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-secondary-600">Plugins:</span>
                      <span className="font-medium">1</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-secondary-600">Revisions:</span>
                      <span className="font-medium">5</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-secondary-600">Delivery:</span>
                      <span className="font-medium">4 days</span>
                    </div>
                    <p className="text-xs text-secondary-500 mt-2">
                      3 days delivery available for +€37
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Premium Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card overflow-visible"
            >
              <div className="p-8 border-b border-secondary-100">
                <h3 className="text-2xl font-semibold mb-2">Premium</h3>
                <p className="text-secondary-600 mb-4">10-page Website + SEO</p>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold">€452</span>
                </div>
                <p className="text-sm text-secondary-600 mb-6">Custom Modern Design — Tailored to Your Needs with Advanced SEO</p>
                <Link 
                  to="/contact" 
                  className="btn-primary w-full justify-center"
                >
                  Get Started
                </Link>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check size={20} className="text-success-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Functional website</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-success-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Content upload</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-success-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Opt-in form</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-success-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Autoresponder integration</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-success-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Speed optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-success-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Hosting setup</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-success-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Social media icons</span>
                  </li>
                </ul>
                <div className="mt-8 pt-8 border-t border-secondary-100">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-secondary-600">Pages:</span>
                      <span className="font-medium">10</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-secondary-600">Plugins:</span>
                      <span className="font-medium">1</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-secondary-600">Revisions:</span>
                      <span className="font-medium">7</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-secondary-600">Delivery:</span>
                      <span className="font-medium">7 days</span>
                    </div>
                    <p className="text-xs text-secondary-500 mt-2">
                      4 days delivery available for +€65
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Standalone Services */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              Standalone Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-secondary-600 max-w-2xl mx-auto"
            >
              These standalone services can be added to any package or purchased separately
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card p-6"
            >
              <div className="flex items-center mb-4">
                <Server className="text-primary-600 w-6 h-6 mr-3" />
                <h3 className="text-xl font-semibold">Hosting & Maintenance</h3>
              </div>
              <p className="text-secondary-600 mb-4">
                I’ll handle the hosting and maintain your website for you. No need to worry about setup, domain name costs, or keeping things updated. I’ve got it covered so you don’t have to
              </p>
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bold">€20</span>
                <span className="text-secondary-600 ml-2">/month</span>
              </div>
              <p className="text-sm text-secondary-500">1-year deal</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-6"
            >
              <div className="flex items-center mb-4">
                <MessageSquare className="text-primary-600 w-6 h-6 mr-3" />
                <h3 className="text-xl font-semibold">Rule-Based Support Chatbot</h3>
              </div>
              <p className="text-secondary-600 mb-4">
                I will build an effective chatbot with predefined responses, perfect for customer support, FAQs, and lead generation.
              </p>
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bold">€300</span>
                <span className="text-secondary-600 ml-2">one-time</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-6"
            >
              <div className="flex items-center mb-4">
                <BarChart className="text-primary-600 w-6 h-6 mr-3" />
                <h3 className="text-xl font-semibold">Website Analytics</h3>
              </div>
              <p className="text-secondary-600 mb-4">
                Track Visitors & Clicks I will integrate website analytics, allowing you to monitor traffic, visitor interactions, and click behavior effortlessly.
              </p>
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bold">€50</span>
                <span className="text-secondary-600 ml-2">one-time</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-secondary-600 max-w-2xl mx-auto"
            >
              Answers to common questions about my web development services
            </motion.p>
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6 p-6 bg-secondary-50 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2">How long does it take to complete a website?</h3>
              <p className="text-secondary-600">
                Basic websites typically take 2-3 days, business websites 4-7 days, and a  big business website 1 week. The timeline can vary based on project complexity and feedback turnaround time.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 p-6 bg-secondary-50 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2">Do you offer maintenance services?</h3>
              <p className="text-secondary-600">
                Yes, I offer website maintenance packages to keep your site updated, secure, and running smoothly. Maintenance can be added to any website package for an additional monthly fee.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 p-6 bg-secondary-50 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-secondary-600">
                I accept bank transfers, PayPal, and credit cards. For most projects, a 50% deposit is required to begin work, with the remaining balance due upon completion.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 bg-secondary-50 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2">Do I need to provide content for my website?</h3>
              <p className="text-secondary-600">
                Ideally, yes. While I can help guide you on content strategy, the most effective websites have content provided by the business owner who knows their audience best. Content creation services are available if needed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-4 bg-primary-600 rounded-lg inline-flex items-center mb-8"
            >
              <AlertCircle size={20} className="mr-2" />
              <span className="text-sm font-medium">Custom quotes available for specific requirements</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white mb-6"
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-primary-100 mb-8 text-lg"
            >
              Contact me today to discuss your project and get a tailored quote based on your specific needs.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/contact" className="btn-accent">
                Get In Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;