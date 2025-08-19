import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Package } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Layanan', path: '/services' },
    { name: 'Galeri', path: '/gallery' },
    { name: 'Kontak', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="bg-white shadow-md sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center text-2xl font-bold text-primary">
          <Package className="mr-2 text-secondary" size={32} />
          Toko Ajat Grosir
        </Link>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-lg font-medium transition-colors duration-300 ${
                  isActive ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-primary focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white pb-4"
        >
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors duration-300 ${
                    isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;