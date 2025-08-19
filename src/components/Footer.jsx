import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Package } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-10 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link to="/" className="flex items-center text-2xl font-bold mb-4">
            <Package className="mr-2 text-primary" size={32} />
            Toko Ajat Grosir
          </Link>
          <p className="text-gray-200">
            Pusat grosir terpercaya untuk kebutuhan bisnis Anda. Kualitas terbaik, harga bersaing.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary">Tautan Cepat</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-primary transition-colors">Beranda</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">Tentang Kami</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Layanan</Link></li>
            <li><Link to="/gallery" className="hover:text-primary transition-colors">Galeri</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Kontak</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary">Hubungi Kami</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Mail size={20} className="mr-2 text-accent" />
              info@tokogrosirajat.com
            </li>
            <li className="flex items-center">
              <Phone size={20} className="mr-2 text-accent" />
              (021) 123-4567
            </li>
            <li className="flex items-center">
              <MapPin size={20} className="mr-2 text-accent" />
              Jl. Raya Grosir No. 123, Jakarta
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
        &copy; {new Date().getFullYear()} Toko Ajat Grosir. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;