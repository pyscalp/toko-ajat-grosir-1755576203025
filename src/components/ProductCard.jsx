import React from 'react';
import { motion } from 'framer-motion';
import { Package } from 'lucide-react';

const ProductCard = ({ image, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
    >
      <div className="p-6 flex flex-col items-center">
        {image ? (
          <img src={image} alt={title} className="w-24 h-24 object-contain mb-4" />
        ) : (
          <Package size={96} className="text-primary mb-4" />
        )}
        <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{title}</h3>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;