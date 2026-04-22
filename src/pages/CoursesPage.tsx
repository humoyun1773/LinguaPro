import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'

export const CoursesPage: React.FC = () => {
  const courses = [
    {
      title: 'IELTS Academic',
      description: 'Comprehensive preparation for academic module',
      duration: '6 Weeks',
      price: '$299',
      image:
        'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
    },
    {
      title: 'IELTS General',
      description: 'Complete training for general training module',
      duration: '8 Weeks',
      price: '$349',
      image:
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop',
    },
    {
      title: 'Speaking Crash',
      description: 'Intensive speaking practice and techniques',
      duration: '4 Weeks',
      price: '$199',
      image:
        'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=300&fit=crop',
    },
    {
      title: 'Writing Workshop',
      description: 'Master academic and general writing tasks',
      duration: '2 Weeks',
      price: '$199',
      image:
        'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
              >
                Yangi Tillik Darajani O'zlashtiring.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              >
                Bizning tajribali o'qituvchilarimiz bilan til o'rganishning
                yangi usulini kashf eting. IELTS tayyoringizni mukammal o'ting.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 h-80 rounded-2xl flex items-center justify-center border border-red-200 dark:border-red-700"
            >
              <GraduationCap className="w-32 h-32 text-red-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Tanlangan Kurslar
            </h2>

            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-700 rounded-full" />
              <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
              >
                <div className="h-40 border-b border-gray-200 dark:border-gray-700 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                    {course.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {course.duration}
                    </span>
                    <span className="font-bold text-red-700 text-lg">
                      {course.price}
                    </span>
                  </div>

                  <button className="w-full bg-red-700 text-white py-3 rounded-lg hover:bg-red-800 transition-colors font-semibold">
                    Ro'yxatdan o'tish
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-2">
                Qayerdan boshlashni bilmayapsizmi?
              </h2>
              <p className="text-gray-400">
                O'zingizga mos kursni topish uchun joylashuv testimizni
                topshiring
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-700 text-white px-8 py-3 rounded-full hover:bg-red-800 transition-colors font-semibold whitespace-nowrap"
            >
              Joylashuv Testini Boshlash
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
