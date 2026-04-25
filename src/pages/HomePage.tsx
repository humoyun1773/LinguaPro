import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import {
  User,
  Star,
  Award,
  Users,
  TrendingUp,
  GraduationCap,
  Shield,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { Link } from 'react-router-dom'

export const HomePage: React.FC = () => {
  const { language } = useLanguage()

  const content =
    language === 'uz'
      ? {
          heroTitle: (
            <>
              IELTSni{' '}
              <span className="text-red-600 dark:text-red-500">tezroq</span> va
              samaraliroq o'rganing.
            </>
          ),
          heroDesc:
            "Bizning isbotlangan metodologiyamiz va tajribali o'qituvchilarimiz bilan IELTS tayyoringizni mukammal o'ting. Maqsadli ballingizga ishonch bilan erishing.",
          btnStart: 'Boshlash',
          btnTrial: 'Bepul dars',
          badgeText: '2024-yilning eng yaxshi IELTS platformasi',
          statsLabel: [
            'Talabalar',
            "O'rtacha ball",
            'Muvaffaqiyat',
            "O'qituvchilar",
          ],
          educatorsTitle: 'Professional Mentorlar',
          resultsTitle: "Haqiqiy natijalar, yuqori ko'rsatkichlar",
          resultsDesc:
            "Minglab talabalarimiz kabi siz ham o'z maqsadingizga erishing",
          resultsStatsLabel: [
            "Ro'yxatdan o'tganlar",
            "O'rtacha ball",
            'Muvaffaqiyat',
          ],
          studentsTitle: 'Top natijalarimiz',
          studentsSubtitle:
            'Darslarimizda qatnashgan talabalarning haqiqiy natijalari va yutuqlari.',
          successLabel: 'Muvaffaqiyatli',
          scoreLabel: 'IELTS balli',
        }
      : {
          heroTitle: (
            <>
              Learn IELTS{' '}
              <span className="text-red-600 dark:text-red-500">faster</span> and
              more effectively.
            </>
          ),
          heroDesc:
            'Master your IELTS preparation with our proven methodology and experienced instructors. Achieve your target score with confidence.',
          btnStart: 'Get Started',
          btnTrial: 'Free Trial Class',
          badgeText: 'Best IELTS Platform of 2024',
          statsLabel: ['Students', 'Average Score', 'Success', 'Instructors'],
          educatorsTitle: 'Professional Mentors',
          resultsTitle: 'Real Results. Proven Growth.',
          resultsDesc:
            'Join thousands of successful students who achieved their dreams',
          resultsStatsLabel: [
            'Registered Students',
            'Average Score',
            'Success Rate',
          ],
          studentsTitle: 'Our Top Results',
          studentsSubtitle:
            'Real results and achievements of students who attended our courses.',
          successLabel: 'Successful',
          scoreLabel: 'IELTS Score',
        }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 selection:bg-red-100 selection:text-red-600">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-50 dark:bg-red-950/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 dark:bg-blue-950/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 text-red-600 dark:text-red-400 text-sm font-medium mb-8"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{content.badgeText}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]"
          >
            {content.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {content.heroDesc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/sign-in"
              className="group bg-red-600 text-white px-8 py-3.5 rounded-full hover:bg-red-700 transition-all font-semibold text-base flex items-center gap-2 shadow-lg shadow-red-600/20"
            >
              {content.btnStart}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="px-8 py-3.5 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-semibold text-base">
              {content.btnTrial}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto bg-slate-50 dark:bg-slate-800/50 rounded-[2.5rem] p-10 border border-slate-100 dark:border-slate-700/50 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { value: '12K+', label: content.statsLabel[0], icon: Users },
              { value: '8.5', label: content.statsLabel[1], icon: Star },
              { value: '98%', label: content.statsLabel[2], icon: TrendingUp },
              {
                value: '50+',
                label: content.statsLabel[3],
                icon: GraduationCap,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-2xl shadow-sm mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform border border-slate-100 dark:border-slate-600">
                  <stat.icon className="w-6 h-6 text-red-600" />
                </div>
                <div className="text-3xl font-bold mb-1 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Educators Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              {...fadeIn}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              {content.educatorsTitle}
            </motion.h2>
            <div className="w-20 h-1.5 bg-red-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all"
              >
                <div className="w-24 h-24 bg-slate-100 dark:bg-slate-700 rounded-full mx-auto mb-6 overflow-hidden flex items-center justify-center">
                  <User className="w-12 h-12 text-slate-400 group-hover:text-red-500 transition-colors" />
                </div>
                <h3 className="font-bold text-lg mb-1">{educator.name}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                  {educator.title}
                </p>
                <div className="flex text-yellow-400 justify-center gap-1">
                  {[...Array(educator.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 px-4 bg-slate-50 dark:bg-[#0a0f1c]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2
              {...fadeIn}
              className="text-3xl sm:text-5xl font-bold mb-6"
            >
              {content.resultsTitle}
            </motion.h2>
            <motion.p
              {...fadeIn}
              className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
            >
              {content.resultsDesc}
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                value: '12k+',
                label: content.resultsStatsLabel[0],
                icon: Users,
              },
              { value: '8.5', label: content.resultsStatsLabel[1], icon: Star },
              {
                value: '98%',
                label: content.resultsStatsLabel[2],
                icon: Shield,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-700 shadow-sm text-center"
              >
                <div className="w-14 h-14 bg-red-50 dark:bg-red-500/10 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-red-600" />
                </div>
                <div className="text-5xl font-extrabold text-red-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'Michael Brown', score: '8.5' },
              { name: 'Anna Lee', score: '9.0' },
            ].map((student, index) => (
              <motion.div
                key={index}
                {...fadeIn}
                className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-100 dark:border-slate-700 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center">
                    <User className="w-7 h-7 text-slate-500" />
                  </div>
                  <div>
                    <h4 className="font-bold">{student.name}</h4>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-green-50 dark:bg-green-500/10 px-4 py-2 rounded-xl border border-green-100 dark:border-green-500/20">
                  <span className="text-2xl font-black text-green-600 leading-none">
                    {student.score}
                  </span>
                  <Award className="w-5 h-5 text-green-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Cards Section */}
      <section className="py-24 px-4 bg-white dark:bg-[#0f172a]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="text-left">
              <motion.h2 {...fadeIn} className="text-3xl font-bold mb-2">
                {content.studentsTitle}
              </motion.h2>
              <div className="w-16 h-1 bg-red-600 rounded-full" />
            </div>
            <p className="text-slate-500 max-w-sm">
              {content.studentsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                {...fadeIn}
                transition={{ delay: index * 0.05 }}
                className="group bg-slate-50 dark:bg-slate-800/30 rounded-[1.5rem] p-6 border border-slate-100 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:border-red-100 dark:hover:border-red-900/30 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center border border-slate-100 dark:border-slate-600">
                    <User className="w-6 h-6 text-slate-400 group-hover:text-red-500 transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold group-hover:text-red-600 transition-colors">
                      {student.name}
                    </h3>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                      {student.module}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    {content.successLabel}
                  </div>
                  <div className="text-3xl font-black text-slate-900 dark:text-white group-hover:scale-110 transition-transform">
                    {student.score}
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
