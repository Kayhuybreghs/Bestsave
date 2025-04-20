import { Link } from 'react-router-dom';
import { Code, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code size={24} className="text-primary-400" />
              <span className="text-xl font-bold text-white">KHWebDesign</span>
            </div>
            <p className="text-secondary-300 mb-4">
              Creating beautiful, functional websites that elevate your online presence
              and drive business growth.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:kayhuybreghs@icloud.com" 
                className="text-secondary-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://www.instagram.com/kayhuybreghs/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-secondary-300 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.fiverr.com/khwebdesign/build-a-fast-modern-and-personal-website-for-you" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary-300 hover:text-white transition-colors"
                >
                  Fiverr Profile
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li className="text-secondary-300">Responsive Website Design</li>
              <li className="text-secondary-300">SEO Optimization</li>
              <li className="text-secondary-300">Website Maintenance</li>
              <li className="text-secondary-300">Custom Web Applications</li>
              <li className="text-secondary-300">Performance Optimization</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-800 pt-8 mt-8 text-center">
          <p className="text-secondary-400 text-sm">
            &copy; {currentYear} KHWebDesign. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;