import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { ShoppingCart, Truck, Check } from 'lucide-react';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-160px)]"
    >
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-20 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/hero-bg.svg" alt="Background pattern" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
          >
            Toko Ajat Grosir
            <br />
            Solusi Belanja Grosir Terlengkap
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl mb-10 max-w-3xl mx-auto"
          >
            Kami menyediakan berbagai macam produk berkualitas tinggi dengan harga grosir terbaik untuk bisnis Anda.
            Mulai dari kebutuhan rumah tangga, elektronik, hingga perlengkapan kantor.
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button to="/gallery" className="mr-4">Lihat Produk Kami</Button>
            <Button to="/contact" className="bg-accent hover:bg-purple-600">Hubungi Kami</Button>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Mengapa Memilih Kami?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
          >
            <ShoppingCart size={64} className="text-primary mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Harga Grosir Terbaik</h3>
            <p className="text-gray-600">Dapatkan penawaran harga paling kompetitif untuk pembelian dalam jumlah besar.</p>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
          >
            <Check size={64} className="text-secondary mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Produk Berkualitas</h3>
            <p className="text-gray-600">Kami hanya menyediakan produk-produk pilihan dengan kualitas terjamin.</p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
          >
            <Truck size={64} className="text-accent mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Pengiriman Cepat</h3>
            <p className="text-gray-600">Layanan pengiriman yang efisien dan tepat waktu ke seluruh wilayah.</p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;