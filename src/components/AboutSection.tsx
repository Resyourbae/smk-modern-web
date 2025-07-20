import { motion } from "framer-motion";
import { Users, Award, BookOpen, Target } from "lucide-react";

const stats = [
  { icon: Users, label: "Siswa Aktif", value: "1,200+", color: "text-blue-600" },
  { icon: Award, label: "Prestasi", value: "150+", color: "text-green-600" },
  { icon: BookOpen, label: "Program Keahlian", value: "3", color: "text-purple-600" },
  { icon: Target, label: "Tingkat Kelulusan", value: "99%", color: "text-red-600" },
];

const features = [
  {
    title: "Fasilitas Modern",
    description: "Laboratorium lengkap dengan peralatan terkini untuk mendukung pembelajaran praktik.",
    icon: "🏢"
  },
  {
    title: "Tenaga Pengajar Berkualitas", 
    description: "Guru-guru berpengalaman dan tersertifikasi dengan kompetensi tinggi di bidangnya.",
    icon: "👨‍🏫"
  },
  {
    title: "Kerjasama Industri",
    description: "Partnership dengan berbagai perusahaan untuk magang dan penempatan kerja lulusan.",
    icon: "🤝"
  },
  {
    title: "Sertifikasi Profesi",
    description: "Program sertifikasi kompetensi yang diakui industri untuk meningkatkan daya saing.",
    icon: "📜"
  }
];

export function AboutSection() {
  return (
    <section id="tentang" className="py-20 bg-white">
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
            🏫 Tentang Kami
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            SMK AK
            <span className="text-red-600 block">Nusa Bangsa</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sekolah Menengah Kejuruan yang berkomitmen menghasilkan lulusan berkualitas, 
            siap kerja, dan siap bersaing di era global dengan nilai-nilai karakter yang kuat.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-4 group-hover:bg-red-50 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </motion.div>
              <motion.div
                className="text-3xl font-bold text-gray-900 mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Membangun Generasi Unggul untuk Indonesia
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                SMK AK Nusa Bangsa hadir sebagai lembaga pendidikan kejuruan yang mengintegrasikan 
                pembelajaran teori dan praktik dengan standar industri. Kami berkomitmen menciptakan 
                lulusan yang tidak hanya kompeten secara teknis, tetapi juga memiliki karakter dan 
                soft skills yang dibutuhkan dunia kerja.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Dengan kurikulum yang selalu update mengikuti perkembangan teknologi dan kebutuhan 
                industri, kami memastikan setiap siswa mendapatkan pendidikan terbaik untuk masa depan yang cerah.
              </p>
            </div>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                className="p-6 bg-red-50 rounded-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="font-bold text-gray-900 mb-3">🎯 Visi</h4>
                <p className="text-gray-700">
                  Menjadi SMK unggulan yang menghasilkan lulusan berkarakter, kompeten, dan siap bersaing global.
                </p>
              </motion.div>
              
              <motion.div
                className="p-6 bg-blue-50 rounded-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="font-bold text-gray-900 mb-3">🚀 Misi</h4>
                <p className="text-gray-700">
                  Menyelenggarakan pendidikan berkualitas dengan fasilitas modern dan tenaga pengajar profesional.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              className="relative transform perspective-1000"
              animate={{ 
                rotateY: [0, 5, 0, -5, 0],
                rotateX: [0, 2, 0, -2, 0]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 text-white shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Terakreditasi A</h4>
                      <p className="text-red-100">Kualitas terjamin</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-white/20 pt-6">
                    <h5 className="font-bold mb-4">Keunggulan Kami:</h5>
                    <ul className="space-y-2 text-red-100">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        Kurikulum sesuai DUDI
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        Sertifikasi kompetensi
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        100% tersalurkan kerja/kuliah
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        Beasiswa prestasi
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <span className="text-xl">⭐</span>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-sm">📚</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}