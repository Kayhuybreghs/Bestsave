import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="group flex items-center space-x-2">
            <div className="relative">
              <Code size={28} className="text-accent-500 transform group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex items-center">
              <span className="text-xl font-bold glow-text">KH</span>
              <span className="text-xl font-bold text-secondary-900">Web</span>
              <span className="text-xl font-bold glow-text">Design</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-base font-medium hover:text-accent-500 transition-colors ${
                  isActive ? 'text-accent-500' : 'text-secondary-700'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `text-base font-medium hover:text-accent-500 transition-colors ${
                  isActive ? 'text-accent-500' : 'text-secondary-700'
                }`
              }
            >
              Pricing
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-base font-medium hover:text-accent-500 transition-colors ${
                  isActive ? 'text-accent-500' : 'text-secondary-700'
                }`
              }
            >
              Contact
            </NavLink>
            <a
              href="https://www.fiverr.com/khwebdesign/build-a-fast-modern-and-personal-website-for-you"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Hire Me on Fiverr
            </a>
          </nav>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-secondary-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white shadow-xl absolute w-full left-0 top-full border-t border-secondary-100"
        >
          <div className="container-custom py-5 flex flex-col space-y-4">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `py-2 px-4 rounded-md text-base font-medium ${
                  isActive
                    ? 'bg-accent-50 text-accent-500'
                    : 'text-secondary-700 hover:bg-secondary-50'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `py-2 px-4 rounded-md text-base font-medium ${
                  isActive
                    ? 'bg-accent-50 text-accent-500'
                    : 'text-secondary-700 hover:bg-secondary-50'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `py-2 px-4 rounded-md text-base font-medium ${
                  isActive
                    ? 'bg-accent-50 text-accent-500'
                    : 'text-secondary-700 hover:bg-secondary-50'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
            <a
              href="https://www.fiverr.com/khwebdesign/build-a-fast-modern-and-personal-website-for-you"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
              onClick={() => setIsOpen(false)}
            >
              Hire Me on Fiverr
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;