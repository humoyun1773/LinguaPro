import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { GraduationCap, User, Star, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="pr-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
              >
                IELTSni <span className="text-red-700">tezroq</span> va
                samaraliroq o'rganing.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              >
                Bizning isbotlangan metodologiyamiz va tajribali
                o'qituvchilarimiz bilan IELTS tayyoringizni mukammal o'ting.
                Maqsadli ballingizni ishonch bilan erishing.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex space-x-4"
              >
                <button className="bg-red-700 text-white px-8 py-3 rounded-full hover:bg-red-800 transition-colors font-semibold">
                  Boshlash
                </button>
                <button className="border-2 border-red-700 text-red-700 px-8 py-3 rounded-full hover:bg-red-50 transition-colors font-semibold">
                  Sinov bron qilish
                </button>
              </motion.div>
            </div>

            {/* Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-10 h-10 text-red-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                    Dr. Susan Jenkins
                  </h3>
                  <div className="flex text-yellow-400 text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl p-6 text-center border border-red-200 dark:border-red-700">
                <span className="text-5xl font-bold text-red-700">9.0</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  IELTS balli
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Master Educators Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Bizning Tajribali O'qituvchilarimiz
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Dr. Sarah Miller', title: 'IELTS Expert', rating: 5 },
              { name: 'Prof. John Smith', title: 'Speaking Coach', rating: 5 },
              {
                name: 'Dr. Emily Chen',
                title: 'Writing Specialist',
                rating: 5,
              },
              { name: 'Mr. David Wilson', title: 'Reading Expert', rating: 5 },
            ].map((educator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-red-100 to-red-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-12 h-12 text-red-700" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                  {educator.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  {educator.title}
                </p>
                <div className="flex text-yellow-400 justify-center text-sm">
                  {[...Array(educator.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Results Section */}
      <section className="py-24 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center"
          >
            Haqiqiy Natijalar. Isbotlangan O'sish.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-12 text-center max-w-2xl mx-auto"
          >
            O'z orzulariga erishgan minglab muvaffaqiyatli talabalarga
            qo'shiling
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-2xl p-8 border border-red-200 dark:border-red-700"
            >
              <span className="text-6xl font-bold text-red-700">12k+</span>
              <p className="text-gray-700 dark:text-gray-300 mt-3 font-medium">
                Ro'yxatdan o'tgan talabalar
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-2xl p-8 border border-red-200 dark:border-red-700"
            >
              <span className="text-6xl font-bold text-red-700">8.5</span>
              <p className="text-gray-700 dark:text-gray-300 mt-3 font-medium">
                O'rtacha ball
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-2xl p-8 border border-red-200 dark:border-red-700"
            >
              <span className="text-6xl font-bold text-red-700">98%</span>
              <p className="text-gray-700 dark:text-gray-300 mt-3 font-medium">
                Muvaffaqiyat foizi
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Michael Brown', score: '8.5' },
              { name: 'Anna Lee', score: '9.0' },
            ].map((student, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-red-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      {student.name}
                    </h3>
                    <div className="flex text-yellow-400 text-sm">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-red-700">
                      {student.score}
                    </span>
                    <Award className="w-6 h-6 text-green-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* High IELTS Score Card Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Muvaffaqiyatli Talabalarimiz
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Alisher Karimov', score: '9.0', module: 'Academic' },
              { name: 'Nilufar Rahimova', score: '8.5', module: 'General' },
              { name: 'Jasur Saidov', score: '8.5', module: 'Academic' },
              { name: 'Gulnora Azizova', score: '8.0', module: 'General' },
              { name: 'Bekzod Toshmatov', score: '9.0', module: 'Academic' },
              { name: 'Madina Yusupova', score: '8.5', module: 'General' },
            ].map((student, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-red-200 dark:border-red-700"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center">
                    <User className="w-7 h-7 text-red-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      {student.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {student.module}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                    Muvaffaqiyatli
                  </span>
                </div>
                <div className="mt-4 bg-gradient-to-br from-red-700 to-red-800 rounded-xl p-4 text-center">
                  <span className="text-5xl font-bold text-white">
                    {student.score}
                  </span>
                  <p className="text-red-100 text-sm mt-1 font-medium">
                    IELTS balli
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
