
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Globe } from "lucide-react";
import logoNusaBangsa from "@/assets/logo-nusabangsa.png";

export function Footer() {
  return (
    <footer id="kontak" className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* School Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={logoNusaBangsa}
                alt="Logo SMK AK Nusa Bangsa"
                className="w-14 h-14 bg-white rounded-lg object-contain p-1 border border-gray-300 shadow"
                loading="lazy"
              />
              <div>
                <h3 className="text-xl font-bold">SMK AK Nusa Bangsa</h3>
                <p className="text-gray-400">Vocational High School</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              SMK AK Nusa Bangsa adalah sekolah menengah kejuruan yang berkomitmen 
              menghasilkan lulusan berkualitas dengan keahlian di bidang teknologi, 
              kimia, dan farmasi. Mempersiapkan generasi masa depan yang siap bersaing 
              di era global.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Youtube size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Globe size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6">Kontak Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Jalan Soleh Iskandar, Yasmin<br />
                    Kota Bogor, Jawa Barat<br />
                    Indonesia
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">(0251) 123-4567</p>
                  <p className="text-gray-300">+62 812-3456-7890</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">info@smkaknusabangsa.sch.id</p>
                  <p className="text-gray-300">admin@smkaknusabangsa.sch.id</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Senin - Jumat: 07:00 - 16:00<br />
                    Sabtu: 07:00 - 12:00
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6">Program Keahlian</h4>
            <div className="space-y-3">
              <motion.a
                href="#jurusan"
                className="block text-gray-300 hover:text-red-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                PPLG - Pengembangan Perangkat Lunak dan Gim
              </motion.a>
              <motion.a
                href="#jurusan"
                className="block text-gray-300 hover:text-red-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                AK - Analisis Kimia
              </motion.a>
              <motion.a
                href="#jurusan"
                className="block text-gray-300 hover:text-red-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                FM - Farmasi
              </motion.a>
            </div>

            <h4 className="text-lg font-bold mb-6 mt-8">Menu</h4>
            <div className="space-y-3">
              <motion.a
                href="#home"
                className="block text-gray-300 hover:text-red-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                Beranda
              </motion.a>
              <motion.a
                href="#tentang"
                className="block text-gray-300 hover:text-red-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                Tentang Kami
              </motion.a>
              <motion.a
                href="#jurusan"
                className="block text-gray-300 hover:text-red-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                Program Keahlian
              </motion.a>
              <motion.a
                href="#kontak"
                className="block text-gray-300 hover:text-red-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                Kontak
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gray-800 rounded-2xl"
        >
          <h4 className="text-xl font-bold mb-6 text-center">Lokasi Sekolah</h4>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h5 className="text-lg font-semibold mb-4">Alamat Lengkap:</h5>
              <div className="space-y-3 text-gray-300">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-500" />
                  SMK AK Nusa Bangsa
                </p>
                <p className="ml-6">Jalan Soleh Iskandar</p>
                <p className="ml-6">Kelurahan Yasmin, Kecamatan Bogor Selatan</p>
                <p className="ml-6">Kota Bogor, Jawa Barat 16113</p>
                <p className="ml-6">Indonesia</p>
              </div>
              
              <motion.button
                className="mt-6 inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7462930581905!2d106.77231537404721!3d-6.553680293439396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c386205f18f9%3A0xaf869d94c5b9c42a!2sSMK%20Analis%20Kimia%20Nusa%20Bangsa!5e0!3m2!1sid!2sid!4v1752974636894!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrad', '_blank')}
              >
                <MapPin size={16} />
                Buka di Google Maps
              </motion.button>
            </div>
            
            {/* Interactive Google Map */}
            <div className="bg-gray-700 rounded-xl overflow-hidden h-64 flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7462930581905!2d106.77231537404721!3d-6.553680293439396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c386205f18f9%3A0xaf869d94c5b9c42a!2sSMK%20Analis%20Kimia%20Nusa%20Bangsa!5e0!3m2!1sid!2sid!4v1752974636894!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                // allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi SMK AK Nusa Bangsa"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 SMK AK Nusa Bangsa. Semua hak cipta dilindungi.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-red-400 transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-red-400 transition-colors">Syarat &amp; Ketentuan</a>
              <a href="#" className="hover:text-red-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}