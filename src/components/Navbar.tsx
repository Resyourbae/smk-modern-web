
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoNusaBangsa from "@/assets/logo-nusabangsa.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={logoNusaBangsa}
              alt="Logo SMK AK Nusa Bangsa"
              className="w-11 h-11 bg-white rounded-lg object-contain p-1 border border-gray-300 shadow"
              loading="lazy"
            />
            <div>
              <h1 className="text-lg font-bold text-gray-800">SMK AK Nusa Bangsa</h1>
              <p className="text-sm text-gray-600">Vocational High School</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors">Beranda</a>
            <a href="#jurusan" className="text-gray-700 hover:text-red-600 transition-colors">Jurusan</a>
            <a href="#tentang" className="text-gray-700 hover:text-red-600 transition-colors">Tentang</a>
            <a href="#kontak" className="text-gray-700 hover:text-red-600 transition-colors">Kontak</a>
            <motion.button 
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Daftar Sekarang
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            className="md:hidden bg-white border-t"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-red-600">Beranda</a>
              <a href="#jurusan" className="block px-3 py-2 text-gray-700 hover:text-red-600">Jurusan</a>
              <a href="#tentang" className="block px-3 py-2 text-gray-700 hover:text-red-600">Tentang</a>
              <a href="#kontak" className="block px-3 py-2 text-gray-700 hover:text-red-600">Kontak</a>
              <button className="w-full text-left px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                Daftar Sekarang
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}