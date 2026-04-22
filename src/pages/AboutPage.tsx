import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Globe, PenTool, Trophy, Lightbulb, Scale, Target } from 'lucide-react'
import { motion } from 'framer-motion'

export const AboutPage: React.FC = () => {
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
                Tillik Kelajagini Quramiz.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              >
                Biz innovatsion o&apos;qitish usullari va shaxsiy o&apos;rganish
                tajribalari orqali til ta&apos;limini inqilob qilmoqdamiz.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 h-80 rounded-2xl flex items-center justify-center border border-red-200 dark:border-red-700"
            >
              <Globe className="w-32 h-32 text-red-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-red-700 to-red-800 rounded-2xl p-8 text-white shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-4">Bizning Maqsadimiz</h2>
              <p className="text-lg leading-relaxed">
                O&apos;quvchilarni akademik va professional yo&apos;llarida
                muvaffaqiyatga erishishlari uchun kerak bo&apos;ladigan til
                ko&apos;nikmalari bilan ta&apos;minlash.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-red-700 to-red-800 rounded-2xl p-8 text-white shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-4">Bizning Vizionimiz</h2>
              <p className="text-lg leading-relaxed">
                Innovatsion til ta&apos;limida global lider bo&apos;lish,
                tillikni har bir kishiga ochiq qilish.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 h-96 rounded-2xl flex items-center justify-center border border-red-200 dark:border-red-700"
            >
              <PenTool className="w-32 h-32 text-red-700" />
            </motion.div>
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
              >
                Aniqlik Hikoyasi.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
              >
                O&apos;n yillik tajribaga ega til mutaxassislar tomonidan asos
                solingan LinguaPro, to&apos;g&apos;ri yo&apos;nalish va
                metodologiya bilan har bir kishi tillikka erisha oladi degan
                e&apos;tiquodga asoslangan.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl p-6 shadow-lg inline-block border border-red-200 dark:border-red-700"
              >
                <span className="text-3xl font-bold text-red-700">
                  2016 yilda asos solingan
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Bizning Asosiy Tamoyillarimiz
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: 'Mukammallik',
                desc: "Eng yuqori sifatli ta'lim berish",
                icon: <Trophy className="w-8 h-8 text-red-700" />,
              },
              {
                title: 'Innovatsiya',
                desc: "Yangi o'qitish usullarini kashf qilish",
                icon: <Lightbulb className="w-8 h-8 text-red-700" />,
              },
              {
                title: 'Halollik',
                desc: 'Halol va shaffof yondashuv',
                icon: <Scale className="w-8 h-8 text-red-700" />,
              },
              {
                title: "Ta'sir",
                desc: "Uzoq muddatli o'zgarishlar yaratish",
                icon: <Target className="w-8 h-8 text-red-700" />,
              },
            ].map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  {principle.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {principle.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {principle.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Yutuqlar Tarihi
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                year: '2021',
                title: 'Global Kengayish',
                desc: 'Dunyoning 50+ davlatiga kengaytirildi',
              },
              {
                year: '2019',
                title: 'Platform Ishga Tushirildi',
                desc: 'Bizning innovatsion onlayn platformamiz ishga tushirildi',
              },
              {
                year: '2023',
                title: 'AI Integratsiyasi',
                desc: "AI bilan ishlaydigan o'rganish vositalari integratsiya qilindi",
              },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl p-6 shadow-lg border border-red-200 dark:border-red-700"
              >
                <span className="text-5xl font-bold text-red-700">
                  {milestone.year}
                </span>
                <h3 className="font-bold text-gray-900 dark:text-white mt-3 mb-2">
                  {milestone.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {milestone.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
