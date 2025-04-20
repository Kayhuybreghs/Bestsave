import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | KHWebDesign</title>
        <meta name="description" content="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-secondary-50 py-32">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1>404 - Page Not Found</h1>
            <p className="text-lg text-secondary-600 mb-8 max-w-lg mx-auto">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
            >
              <Home size={20} className="mr-2" />
              Return to Homepage
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;