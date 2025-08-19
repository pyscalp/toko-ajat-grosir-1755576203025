import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = ({ children, to, onClick, className = '' }) => {
  const commonClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out';
  const primaryClasses = 'bg-primary text-white hover:bg-blue-600';

  if (to) {
    return (
      <Link to={to}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`${commonClasses} ${primaryClasses} ${className}`}
        >
          {children}
        </motion.button>
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${commonClasses} ${primaryClasses} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;