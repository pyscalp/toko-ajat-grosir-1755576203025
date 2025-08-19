import React from 'react';
import { motion } from 'framer-motion';
import { Building, Users, Star } from 'lucide-react';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-160px)] container mx-auto px-4 py-12"
    >
      <h1 className="text-4xl font-bold text-center text-primary mb-10">Tentang Toko Ajat Grosir</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 flex items-center">
            <Building size={32} className="mr-3 text-secondary" /> Kisah Kami
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Toko Ajat Grosir didirikan dengan visi untuk menjadi mitra terpercaya bagi para pelaku bisnis di Indonesia.
            Berawal dari sebuah toko kecil, kami tumbuh dan berkembang menjadi salah satu pusat grosir terkemuka,
            melayani ribuan pelanggan dari berbagai sektor industri. Komitmen kami adalah menyediakan produk berkualitas
            dengan harga yang paling kompetitif, serta layanan yang prima.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/images/product2.svg" alt="Our Story" className="w-full h-auto max-w-md mx-auto rounded-lg shadow-lg" />
        </motion.div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src="/images/product3.svg" alt="Our Mission" className="w-full h-auto max-w-md mx-auto rounded-lg shadow-lg" />
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 flex items-center">
            <Users size={32} className="mr-3 text-accent" /> Misi Kami
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Misi kami adalah memberdayakan bisnis Anda dengan menyediakan akses mudah ke berbagai produk grosir.
            Kami berupaya untuk terus berinovasi dalam layanan dan penawaran produk, memastikan setiap pelanggan
            mendapatkan nilai terbaik dan pengalaman belanja yang memuaskan. Kepuasan pelanggan adalah prioritas utama kami.
          </p>
        </motion.div>
      </section>

      <section className="text-center py-12 bg-gray-50 rounded-lg shadow-inner">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl font-semibold text-gray-800 mb-6 flex items-center justify-center"
        >
          <Star size={32} className="mr-3 text-primary" /> Nilai-nilai Kami
        </motion.h2>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-3xl mx-auto text-lg text-gray-700 space-y-4"
        >
          <p><strong>Integritas:</strong> Kami menjunjung tinggi kejujuran dan transparansi dalam setiap transaksi.</p>
          <p><strong>Kualitas:</strong> Kami berkomitmen untuk hanya menyediakan produk dengan standar kualitas tertinggi.</p>
          <p><strong>Pelayanan:</strong> Kami selalu siap memberikan pelayanan terbaik dan responsif kepada pelanggan.</p>
          <p><strong>Inovasi:</strong> Kami terus mencari cara baru untuk meningkatkan pengalaman belanja grosir Anda.</p>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default AboutPage;