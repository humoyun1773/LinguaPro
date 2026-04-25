import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { GraduationCap, Mic, PenTool } from 'lucide-react'
import { motion } from 'framer-motion'

export const EventsPage: React.FC = () => {
  const events = [
    {
      title: 'IELTS Ustalik Darsi',
      description:
        "Barcha to'rtta IELTS modulini qamrab oluvchi intensiv dars tajribali rahbariyat bilan",
      date: '15 Mart, 2024',
      time: '10:00 - 16:00',
      icon: <GraduationCap className="w-16 h-16 text-red-700" />,
    },
    {
      title: 'Gapirish Mahorati Bootcamp',
      description:
        "Bizning intensiv mashg'ulotlarimiz bilan gapirish ishonchingizni oshiring",
      date: '22 Mart, 2024',
      time: '14:00 - 18:00',
      icon: <Mic className="w-16 h-16 text-red-700" />,
    },
    {
      title: 'Yozish Mukammalligi Vebinar',
      description: "Yuqori ball uchun ilg'or yozish texnikalarini o'rganing",
      date: '29 Mart, 2024',
      time: '11:00 - 13:00',
      icon: <PenTool className="w-16 h-16 text-red-700" />,
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6"
          >
            Kelgusi Tadbirlar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            O'rganish tajribangizni oshirish uchun bizning darslarimiz,
            vebinarlarimiz va maxsus tadbirlarimizga qo'shiling.
          </motion.p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 h-36 sm:h-48 flex items-center justify-center border-b border-red-100 dark:border-red-700">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-red-700">
                    {event.icon}
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="text-xs sm:text-sm text-red-700 font-semibold mb-1 sm:mb-2">
                    Kelgusi
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 text-base sm:text-lg">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3 sm:mb-4">
                    <span>📅 {event.date}</span>
                    <span>⏰ {event.time}</span>
                  </div>
                  <button className="w-full bg-red-700 text-white py-2 sm:py-3 rounded-lg hover:bg-red-800 transition-colors font-semibold text-sm sm:text-base">
                    Hozir Ro'yxatdan O'ting
                  </button>
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
