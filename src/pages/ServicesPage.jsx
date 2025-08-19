import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, CreditCard, Users, Globe } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Package,
      title: 'Pengadaan Produk Grosir',
      description: 'Menyediakan berbagai kategori produk dalam jumlah besar untuk kebutuhan bisnis Anda, mulai dari elektronik, kebutuhan rumah tangga, hingga bahan baku industri.',
    },
    {
      icon: Truck,
      title: 'Layanan Pengiriman Cepat',
      description: 'Pengiriman barang yang efisien dan terpercaya ke seluruh wilayah, memastikan pesanan Anda tiba tepat waktu dan dalam kondisi baik.',
    },
    {
      icon: CreditCard,
      title: 'Sistem Pembayaran Fleksibel',
      description: 'Menawarkan berbagai opsi pembayaran yang memudahkan transaksi grosir Anda, termasuk transfer bank, kartu kredit, dan opsi pembayaran tempo untuk mitra terdaftar.',
    },
    {
      icon: Users,
      title: 'Dukungan Pelanggan Prioritas',
      description: 'Tim dukungan pelanggan kami siap membantu Anda dengan pertanyaan, pesanan khusus, atau masalah lainnya, memastikan pengalaman belanja yang lancar.',
    },
    {
      icon: Globe,
      title: 'Jaringan Distribusi Luas',
      description: 'Memiliki jaringan distribusi yang kuat, memungkinkan kami melayani pelanggan di berbagai kota dan daerah dengan efisiensi tinggi.',
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
      <h1 className="text-4xl font-bold text-center text-primary mb-10">Layanan Kami</h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
        Toko Ajat Grosir berkomitmen untuk menyediakan layanan terbaik yang mendukung pertumbuhan bisnis Anda.
        Berikut adalah beberapa layanan unggulan yang kami tawarkan:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <service.icon size={64} className="text-secondary mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServicesPage;