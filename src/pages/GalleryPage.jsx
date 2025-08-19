import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';

const GalleryPage = () => {
  const products = [
    {
      image: '/images/product1.svg',
      title: 'Paket Sembako Lengkap',
      description: 'Berbagai kebutuhan pokok untuk rumah tangga dan bisnis kuliner.',
    },
    {
      image: '/images/product2.svg',
      title: 'Elektronik Rumah Tangga',
      description: 'Grosir peralatan elektronik modern dengan garansi resmi.',
    },
    {
      image: '/images/product3.svg',
      title: 'Perlengkapan Kantor',
      description: 'Alat tulis, kertas, dan kebutuhan kantor lainnya dalam jumlah besar.',
    },
    {
      image: '/images/product1.svg',
      title: 'Produk Kebersihan',
      description: 'Sabun, deterjen, disinfektan untuk kebersihan optimal.',
    },
    {
      image: '/images/product2.svg',
      title: 'Peralatan Dapur',
      description: 'Panci, wajan, sendok, garpu, dan alat masak lainnya.',
    },
    {
      image: '/images/product3.svg',
      title: 'Mainan Anak Edukatif',
      description: 'Aneka mainan edukatif untuk toko mainan atau sekolah.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-160px)] container mx-auto px-4 py-12"
    >
      <h1 className="text-4xl font-bold text-center text-primary mb-10">Galeri Produk Kami</h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
        Jelajahi berbagai kategori produk unggulan yang tersedia di Toko Ajat Grosir.
        Kami terus memperbarui inventaris kami untuk memenuhi kebutuhan pasar yang beragam.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default GalleryPage;