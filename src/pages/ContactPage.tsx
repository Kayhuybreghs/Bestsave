// src/pages/ContactPage.tsx

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Clock, Check } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formStatus === 'submitting') return;
    setFormStatus('submitting');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'KHWebDesign Contact Form'
        })
      });
      const data = await response.json();
      if (data.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <>
      <Helmet>
        <title>KHWebDesign | Contact - Professional, SEO-Optimized Web Development</title>
        <meta
          name="description"
          content="Reach out to KHWebDesign for fast, responsive, and affordable web development solutions. Get in touch to discuss your project and boost your online presence."
        />
        <meta
          name="keywords"
          content="contact web developer, professional web design, SEO optimized web development, affordable website contact, responsive website services"
        />
      </Helmet>

      {/* Contact Header Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            {/* Main heading using H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
              >
              Get In Touch
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-primary-100 text-lg mb-6"
            >
              Have a project in mind or curious about our SEO-optimized, responsive web solutions? Use the form below or connect directly with us.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form and Details Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              {/* Section heading using H2 */}
              <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
              {formStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 bg-success-500 bg-opacity-10 rounded-lg text-center mb-4"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-success-500 rounded-full text-white mb-4">
                    <Check size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Thank you! Your message has been sent successfully.
                  </h3>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-secondary-700 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-secondary-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-secondary-700 mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors appearance-none bg-white"
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      <option value="New Website">New Website</option>
                      <option value="Custom Offer">Custom Offer</option>
                      <option value="General Questions">General Questions</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-secondary-700 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-secondary-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full justify-center"
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                  {formStatus === 'error' && (
                    <p className="mt-4 text-error-500 text-sm">
                      There was an error sending your message. Please try again later.
                    </p>
                  )}
                </form>
              )}
            </motion.div>

            {/* Contact Details and Fiverr Section */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8 mb-8"
              >
                <div className="flex items-center mb-6">
                  <MessageSquare size={24} className="text-primary-600 mr-3" />
                  <h2 className="text-2xl font-semibold">Hire Me on Fiverr</h2>
                </div>
                <p className="text-secondary-600 mb-6">
                  For premium, conversion-focused web development projects, visit my Fiverr profile. See ratings, reviews, and specialized packages tailored to boost your online presence.
                </p>
                <a
                  href="https://www.fiverr.com/khwebdesign/build-a-fast-modern-and-personal-website-for-you"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent w-full justify-center"
                >
                  Visit My Fiverr Profile
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email</h3>
                      <a
                        href="mailto:kayhuybreghs@icloud.com"
                        className="text-primary-600 hover:text-primary-700"
                      >
                        kayhuybreghs@icloud.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Phone</h3>
                      <p className="text-secondary-600">06-39430197 (WhatsApp only)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Working Hours</h3>
                      <p className="text-secondary-600">Flexible – We ensure timely responses to all inquiries</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-secondary-600 max-w-2xl mx-auto"
            >
              Quick answers to common questions about our work processes and web development services.
            </motion.p>
          </div>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6 p-6 bg-white rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-2">
                How quickly do you respond to inquiries?
              </h3>
              <p className="text-secondary-600">
                I typically respond within 24 hours on business days. For urgent queries, please mention the urgency in your subject.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 p-6 bg-white rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-2">
                What details should I include in my message?
              </h3>
              <p className="text-secondary-600">
                Please provide your project outline, existing website details (if any), business goals, expected timeline, and budget range.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-white rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-2">
                Do you offer ongoing support after the website launch?
              </h3>
              <p className="text-secondary-600">
                Yes, I provide various maintenance packages to keep your site secure, updated, and fully optimized.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
