import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast'; // Using react-hot-toast for notifications

const ContactPage = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success('Pesan Anda telah terkirim!');
    reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-160px)] container mx-auto px-4 py-12"
    >
      <h1 className="text-4xl font-bold text-center text-primary mb-10">Hubungi Kami</h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
        Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan, membutuhkan penawaran khusus,
        atau ingin menjadi mitra bisnis kami. Tim kami siap membantu Anda.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Informasi Kontak</h2>
          <ul className="space-y-6 text-lg text-gray-700">
            <li className="flex items-center">
              <Mail size={28} className="mr-4 text-secondary" />
              <div>
                <span className="font-semibold">Email:</span><br />
                info@tokogrosirajat.com
              </div>
            </li>
            <li className="flex items-center">
              <Phone size={28} className="mr-4 text-secondary" />
              <div>
                <span className="font-semibold">Telepon:</span><br />
                (021) 123-4567
              </div>
            </li>
            <li className="flex items-center">
              <MapPin size={28} className="mr-4 text-secondary" />
              <div>
                <span className="font-semibold">Alamat:</span><br />
                Jl. Raya Grosir No. 123, Kel. Dagang, Kec. Bisnis, Jakarta, 12345
              </div>
            </li>
            <li className="flex items-center">
              <Clock size={28} className="mr-4 text-secondary" />
              <div>
                <span className="font-semibold">Jam Operasional:</span><br />
                Senin - Jumat: 08:00 - 17:00 WIB<br />
                Sabtu: 08:00 - 12:00 WIB<br />
                Minggu: Tutup
              </div>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Kirim Pesan Kepada Kami</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nama Lengkap</label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Nama lengkap wajib diisi' })}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.name && <p className="text-red-500 text-xs italic mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: 'Email wajib diisi',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Alamat email tidak valid'
                  }
                })}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.email && <p className="text-red-500 text-xs italic mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Subjek</label>
              <input
                type="text"
                id="subject"
                {...register('subject', { required: 'Subjek wajib diisi' })}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.subject && <p className="text-red-500 text-xs italic mt-1">{errors.subject.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Pesan Anda</label>
              <textarea
                id="message"
                rows="5"
                {...register('message', { required: 'Pesan wajib diisi' })}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs italic mt-1">{errors.message.message}</p>}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-primary hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300"
            >
              Kirim Pesan
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;