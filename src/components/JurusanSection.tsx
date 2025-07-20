import { motion } from "framer-motion";
import { Code, Beaker, Pill, ArrowRight } from "lucide-react";

const jurusan = [
  {
    id: 1,
    nama: "PPLG",
    namaLengkap: "Pengembangan Perangkat Lunak dan Gim",
    deskripsi: "Belajar programming, mobile app development, web development, dan game development dengan teknologi terkini.",
    icon: Code,
    color: "bg-blue-500",
    bgGradient: "from-blue-50 to-blue-100",
    skills: ["React", "Flutter", "Unity", "Node.js"],
    prospek: "Software Developer, Game Developer, Full-stack Developer"
  },
  {
    id: 2,
    nama: "AK",
    namaLengkap: "Analisis Kimia",
    deskripsi: "Menguasai teknik analisis kimia modern, instrumentasi laboratorium, dan quality control industri.",
    icon: Beaker,
    color: "bg-green-500",
    bgGradient: "from-green-50 to-green-100",
    skills: ["Spektroskopi", "Kromatografi", "Quality Control", "Lab Management"],
    prospek: "Analis Kimia, Quality Control, Research Assistant"
  },
  {
    id: 3,
    nama: "FM",
    namaLengkap: "Farmasi",
    deskripsi: "Mempelajari ilmu kefarmasian, formulasi obat, farmakologi, dan manajemen apotek modern.",
    icon: Pill,
    color: "bg-purple-500",
    bgGradient: "from-purple-50 to-purple-100",
    skills: ["Farmakologi", "Formulasi", "Farmasi Klinis", "Dispensing"],
    prospek: "Asisten Apoteker, Tenaga Teknis Kefarmasian, Industry Farmasi"
  }
];

export function JurusanSection() {
  return (
    <section id="jurusan" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">
            🎯 Program Keahlian
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pilih Jurusan
            <span className="text-red-600 block">Masa Depanmu</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tiga program keahlian unggulan yang dirancang untuk mempersiapkan lulusan 
            siap kerja dan siap berkompetisi di era digital.
          </p>
        </motion.div>

        {/* Jurusan Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jurusan.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${item.bgGradient} rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300`}></div>
              
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                {/* Icon */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 ${item.color} rounded-xl mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.nama}</h3>
                    <h4 className="text-lg text-gray-600 mb-4">{item.namaLengkap}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.deskripsi}</p>
                  </div>

                  {/* Skills */}
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Keahlian yang Dipelajari:</h5>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Prospek */}
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Prospek Karir:</h5>
                    <p className="text-gray-600 text-sm mb-6">{item.prospek}</p>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-xl hover:bg-red-600 transition-colors group-hover:bg-red-600"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Pelajari Lebih Lanjut
                    <ArrowRight size={16} />
                  </motion.button>
                </div>

                {/* Floating number */}
                <motion.div
                  className="absolute -top-4 -right-4 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  {String(index + 1).padStart(2, '0')}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Masih bingung memilih jurusan? Konsultasi gratis dengan tim kami!
          </p>
          <motion.button
            className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl hover:bg-red-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Konsultasi Gratis
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}