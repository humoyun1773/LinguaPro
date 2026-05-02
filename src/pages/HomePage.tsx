import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import {
  ArrowRight,
  Play,
  Star,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
} from 'lucide-react'

export const HomePage: React.FC = () => {
  const { language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const content =
    language === 'uz'
      ? {
          heroTag: '2024-yilning eng yaxshi IELTS platformasi',
          heroTitle: (
            <>
              IELTSni <span className="text-red-600">tezroq</span> va
              samaraliroq o'rganing.
            </>
          ),
          heroDesc:
            "Bizning isbotlangan metodologiyamiz va tajribali o'qituvchilarimiz bilan IELTS tayyoringizni mukammal o'ting. Maqsadli ballingizga ishonch bilan erishing.",
          startBtn: 'Boshlash',
          freeLessonBtn: 'Bepul dars',
          students: 'Talabalar',
          avgScore: "O'rtacha ball",
          success: 'Muvaffaqiyat',
          teachers: "O'qituvchilar",
          teamTag: 'Jamoamiz',
          teamTitle: 'Professional Mentorlar',
          teamDesc:
            "Har bir soha bo'yicha chuqur bilim va tajribaga ega ekspertlar",
          resultsTag: "Ko'rsatkichlar",
          resultsTitle: "Haqiqiy natijalar, yuqori ko'rsatkichlar.",
          resultsDesc:
            "Minglab talabalarimiz kabi siz ham o'z maqsadingizga erishing",
          achievementsTag: 'Yutuqlar',
          achievementsTitle: 'Top natijalarimiz',
          achievementsDesc:
            'Darslarimizda qatnashgan talabalarning haqiqiy natijalari va yutuqlari.',
          academic: 'Academic',
          general: 'General',
          ieltsScore: 'IELTS Ball',
          successful: 'Muvaffaqiyatli',
        }
      : {
          heroTag: 'Best IELTS Platform of 2024',
          heroTitle: (
            <>
              Learn IELTS <span className="text-red-600">faster</span> and more
              effectively.
            </>
          ),
          heroDesc:
            'Master your IELTS preparation with our proven methodology and experienced instructors. Achieve your target score with confidence.',
          startBtn: 'Get Started',
          freeLessonBtn: 'Free Lesson',
          students: 'Students',
          avgScore: 'Average Score',
          success: 'Success Rate',
          teachers: 'Teachers',
          teamTag: 'Our Team',
          teamTitle: 'Professional Mentors',
          teamDesc: 'Experts with deep knowledge and experience in every field',
          resultsTag: 'Statistics',
          resultsTitle: 'Real results, high performance.',
          resultsDesc: 'Join thousands of our students in achieving your goals',
          achievementsTag: 'Achievements',
          achievementsTitle: 'Top Results',
          achievementsDesc:
            'Real results and achievements of students who took our courses.',
          academic: 'Academic',
          general: 'General',
          ieltsScore: 'IELTS Score',
          successful: 'Successful',
        }

  const educators = [
    {
      initials: 'SM',
      name: 'Dr. Sarah Miller',
      role: 'IELTS Expert',
      rating: '5.0',
    },
    {
      initials: 'JS',
      name: 'Prof. John Smith',
      role: 'Speaking Coach',
      rating: '5.0',
    },
    {
      initials: 'EC',
      name: 'Dr. Emily Chen',
      role: 'Writing Specialist',
      rating: '5.0',
    },
    {
      initials: 'DW',
      name: 'Mr. David Wilson',
      role: 'Reading Expert',
      rating: '5.0',
    },
  ]

  const topResults = [
    {
      initials: 'AK',
      name: 'Alisher Karimov',
      module: 'Academic',
      score: '9.0',
    },
    {
      initials: 'NR',
      name: 'Nilufar Rahimova',
      module: 'General',
      score: '8.5',
    },
    { initials: 'JS', name: 'Jasur Saidov', module: 'Academic', score: '8.5' },
    {
      initials: 'GA',
      name: 'Gulnora Azizova',
      module: 'General',
      score: '8.0',
    },
    {
      initials: 'BT',
      name: 'Bekzod Toshmatov',
      module: 'Academic',
      score: '9.0',
    },
    {
      initials: 'MY',
      name: 'Madina Yusupova',
      module: 'General',
      score: '8.5',
    },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />

      {/* HERO */}
      <section className="min-h-screen grid lg:grid-cols-2 gap-8 lg:gap-16 items-center pt-28 lg:pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden max-w-7xl mx-auto">
        <div className="absolute -top-32 -right-32 w-[560px] h-[560px] bg-red-100 dark:bg-red-900/20 rounded-full opacity-50 pointer-events-none" />

        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={fadeIn}
          className="z-10"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
            {content.heroTitle}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-md mb-9 leading-relaxed">
            {content.heroDesc}
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-4 rounded-2xl font-semibold text-sm sm:text-base transition-all shadow-lg shadow-red-500/25 flex items-center gap-2 hover:-translate-y-0.5">
              {content.startBtn}
              <ArrowRight size={18} />
            </button>
            <button className="bg-transparent border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white px-6 sm:px-8 py-4 rounded-2xl font-semibold text-sm sm:text-base transition-all hover:border-gray-900 dark:hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2">
              <Play size={18} />
              {content.freeLessonBtn}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-4 relative hidden lg:flex"
        >
          {[
            { badge: content.academic, score: '9.0', name: 'Alisher Karimov' },
            { badge: content.general, score: '8.5', name: 'Nilufar Rahimova' },
            { badge: content.academic, score: '8.5', name: 'Jasur Saidov' },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.8 }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl p-6 relative shadow-lg"
              style={{ marginLeft: i === 1 ? '2rem' : 0 }}
            >
              <div className="absolute top-4 right-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full px-3 py-1 text-xs font-semibold">
                {card.badge}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider mb-2">
                {content.ieltsScore}
              </div>
              <div className="text-4xl font-extrabold text-gray-900 dark:text-white mb-1">
                {card.score}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {card.name}
              </div>
              <div className="flex text-yellow-500 text-sm">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* STATS */}
      <div className="bg-gray-50 dark:bg-gray-800/50 border-y border-gray-200 dark:border-gray-700 py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-0">
          {[
            { icon: Users, value: '12K+', label: content.students },
            { icon: Star, value: '8.5', label: content.avgScore },
            { icon: TrendingUp, value: '98%', label: content.success },
            { icon: Award, value: '50+', label: content.teachers },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center py-6 border-r border-gray-200 dark:border-gray-700 last:border-r-0"
            >
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center mx-auto mb-3">
                <stat.icon
                  size={20}
                  className="text-gray-700 dark:text-gray-300"
                />
              </div>
              <div className="text-3xl font-extrabold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EDUCATORS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-4"
          >
            <div>
              <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-4">
                {content.teamTag}
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white max-w-lg">
                {content.teamTitle}
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xs leading-relaxed text-left lg:text-right">
              {content.teamDesc}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {educators.map((educator, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 text-center cursor-pointer hover:border-red-500 hover:-translate-y-1 transition-all"
              >
                <div className="w-18 h-18 rounded-full bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 flex items-center justify-center mx-auto mb-4 font-extrabold text-xl text-gray-700 dark:text-gray-300 transition-colors hover:border-red-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20">
                  {educator.initials}
                </div>
                <div className="font-extrabold text-gray-900 dark:text-white mb-1">
                  {educator.name}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {educator.role}
                </div>
                <div className="inline-block text-xs font-semibold bg-red-50 dark:bg-red-900/20 text-red-600 rounded-full px-3 py-1">
                  ★ {educator.rating} reyting
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12"
          >
            <div className="text-xs font-bold text-red-400 uppercase tracking-widest mb-4">
              {content.resultsTag}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold max-w-2xl mb-4">
              {content.resultsTitle}
            </h2>
            <p className="text-gray-400 max-w-md">{content.resultsDesc}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10"
          >
            {[
              { icon: Users, value: '12k+', label: "Ro'yxatdan o'tganlar" },
              { icon: Star, value: '8.5', label: content.avgScore },
              { icon: Award, value: '98%', label: 'Muvaffaqiyat darajasi' },
            ].map((result, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:border-red-500 transition-all"
              >
                <result.icon size={32} className="mb-4 text-red-400" />
                <div className="text-5xl font-extrabold text-red-400 mb-2">
                  {result.value}
                </div>
                <div className="text-sm text-gray-400 font-medium">
                  {result.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-3"
          >
            {[
              { initials: 'MB', name: 'Michael Brown', score: '8.5' },
              { initials: 'AL', name: 'Anna Lee', score: '9.0' },
            ].map((student, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-white/25 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center font-extrabold text-sm text-gray-300">
                    {student.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {student.name}
                    </div>
                    <div className="flex text-yellow-500 text-xs mt-1">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={12} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-green-900/30 text-green-400 border border-green-500/25 rounded-xl px-4 py-2 flex items-center gap-2">
                  <span className="text-2xl font-extrabold">
                    {student.score}
                  </span>
                  <span className="text-xs font-medium opacity-70">IELTS</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TOP RESULTS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-4"
          >
            <div>
              <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-4">
                {content.achievementsTag}
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
                {content.achievementsTitle}
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xs leading-relaxed text-left lg:text-right">
              {content.achievementsDesc}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topResults.map((result, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: i * 0.05 }}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl p-6 cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:border-red-500/20 transition-all"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-11 h-11 rounded-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 flex items-center justify-center font-extrabold text-sm text-gray-700 dark:text-gray-300">
                    {result.initials}
                  </div>
                  <div>
                    <div className="font-extrabold text-gray-900 dark:text-white">
                      {result.name}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">
                      {result.module}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 font-medium">
                    <CheckCircle size={16} />
                    {content.successful}
                  </div>
                  <div className="text-3xl font-extrabold text-gray-900 dark:text-white">
                    {result.score}
                  </div>
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
