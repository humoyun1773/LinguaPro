import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import {
  Globe,
  PenTool,
  Trophy,
  Lightbulb,
  Scale,
  Target,
  Calendar,
  Sparkles,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

export const AboutPage: React.FC = () => {
  const { language } = useLanguage()

  const content =
    language === 'uz'
      ? {
          heroTitle: "Til Ta'limi Kelajagini Quramiz.",
          heroDesc:
            "Biz innovatsion o'qitish usullari va shaxsiy o'rganish tajribalari orqali til ta'limida haqiqiy inqilob qilmoqdamiz.",
          badgeText: 'LinguaPro haqida',
          globalReachLabel: 'Global Mavqe',
          globalReachValue: '50+ Davlat',
          missionTitle: 'Bizning Maqsadimiz',
          missionDesc:
            "O'quvchilarni akademik va professional yo'llarida muvaffaqiyatga erishishlari uchun kerak bo'ladigan til ko'nikmalari bilan ta'minlash.",
          visionTitle: 'Bizning Vizionimiz',
          visionDesc:
            "Innovatsion til ta'limida global lider bo'lish va tillarni har bir kishi uchun oson o'zlashtiriladigan qilish.",
          storyTitle: 'Muvaffaqiyat Hikoyasi.',
          storyDesc:
            "O'n yillik tajribaga ega til mutaxassislar tomonidan asos solingan LinguaPro, to'g'ri metodologiya bilan har bir kishi cho'qqiga chiqa olishiga ishonadi.",
          founded: '2016 yilda asos solingan',
          recognitionLabel: "E'tirof",
          principlesTitle: 'Bizning Asosiy Tamoyillarimiz',
          principles: [
            {
              title: 'Mukammallik',
              desc: "Eng yuqori sifatli ta'lim",
              icon: <Trophy className="w-full h-full" />,
            },
            {
              title: 'Innovatsiya',
              desc: 'Yangi metodikalar kashfiyoti',
              icon: <Lightbulb className="w-full h-full" />,
            },
            {
              title: 'Halollik',
              desc: 'Shaffof va ochiq yondashuv',
              icon: <Scale className="w-full h-full" />,
            },
            {
              title: "Ta'sir",
              desc: 'Uzoq muddatli natijalar',
              icon: <Target className="w-full h-full" />,
            },
          ],
          milestonesTitle: 'Yutuqlar Tarixi',
          milestones: [
            {
              year: '2021',
              title: 'Global Kengayish',
              desc: 'Dunyoning 50+ davlatiga chiqdik',
            },
            {
              year: '2019',
              title: 'Platforma Launch',
              desc: "Onlayn ta'lim tizimi ishga tushdi",
            },
            {
              year: '2023',
              title: 'AI Integratsiyasi',
              desc: "Sun'iy intellekt vositalari qo'shildi",
            },
          ],
        }
      : {
          heroTitle: 'Building a Linguistic Future.',
          heroDesc:
            'We are revolutionizing language education through innovative teaching methods and personalized learning experiences.',
          badgeText: 'About LinguaPro',
          globalReachLabel: 'Global Reach',
          globalReachValue: '50+ Countries',
          missionTitle: 'Our Mission',
          missionDesc:
            'To equip students with the language skills they need to succeed in their academic and professional paths.',
          visionTitle: 'Our Vision',
          visionDesc:
            'To be a global leader in innovative language education, making language learning accessible to everyone.',
          storyTitle: 'The LinguaPro Story.',
          storyDesc:
            'Founded by language experts with over a decade of experience, LinguaPro is built on the belief that with the right methodology, anyone can master a language.',
          founded: 'Founded in 2016',
          recognitionLabel: 'Recognition',
          principlesTitle: 'Our Core Principles',
          principles: [
            {
              title: 'Excellence',
              desc: 'Highest quality education',
              icon: <Trophy className="w-full h-full" />,
            },
            {
              title: 'Innovation',
              desc: 'New teaching methods',
              icon: <Lightbulb className="w-full h-full" />,
            },
            {
              title: 'Integrity',
              desc: 'Honest and transparent',
              icon: <Scale className="w-full h-full" />,
            },
            {
              title: 'Impact',
              desc: 'Creating long-term change',
              icon: <Target className="w-full h-full" />,
            },
          ],
          milestonesTitle: 'Milestones',
          milestones: [
            {
              year: '2021',
              title: 'Global Expansion',
              desc: 'Expanded to 50+ countries worldwide',
            },
            {
              year: '2019',
              title: 'Platform Launch',
              desc: 'Our innovative online platform was launched',
            },
            {
              year: '2023',
              title: 'AI Integration',
              desc: 'AI-powered learning tools were integrated',
            },
          ],
        }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-100 selection:bg-red-500 selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 text-red-600 text-xs font-bold uppercase tracking-widest mb-8">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{content.badgeText}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] mb-8">
                {content.heroTitle}
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                {content.heroDesc}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-square md:aspect-video lg:aspect-square bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-2xl flex items-center justify-center overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent group-hover:scale-110 transition-transform duration-700" />
              <Globe className="w-32 h-32 md:w-48 md:h-48 text-red-600 animate-pulse" />
              <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
                <p className="text-sm font-bold uppercase tracking-widest opacity-60">
                  {content.globalReachLabel}
                </p>
                <p className="text-2xl font-black">
                  {content.globalReachValue}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Bento Style */}
      <section className="py-24 px-6 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              title: content.missionTitle,
              desc: content.missionDesc,
              color: 'from-red-600 to-orange-600',
            },
            {
              title: content.visionTitle,
              desc: content.visionDesc,
              color:
                'from-slate-800 to-slate-900 dark:from-slate-800 dark:to-black',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`relative p-10 rounded-[2.5rem] overflow-hidden bg-gradient-to-br ${item.color} text-white shadow-2xl`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Target size={120} />
              </div>
              <h2 className="text-3xl font-black mb-6 uppercase italic tracking-tighter">
                {item.title}
              </h2>
              <p className="text-lg opacity-90 leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
                <PenTool className="w-32 h-32 text-slate-300 dark:text-slate-800" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-10 rounded-[2.5rem] shadow-2xl">
                <Calendar className="w-10 h-10 mb-4" />
                <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">
                  {content.recognitionLabel}
                </p>
                <p className="text-2xl font-black whitespace-nowrap">
                  {content.founded}
                </p>
              </div>
            </motion.div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
                {content.storyTitle}
              </h2>
              <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed">
                {content.storyDesc}
              </p>
              <div className="flex gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-1 bg-red-600 rounded-full opacity-30 last:opacity-100"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-24 px-6 bg-slate-900 dark:bg-black rounded-[4rem] mx-4 my-10 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600/10 via-transparent to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white text-center mb-20 tracking-tighter">
            {content.principlesTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.principles.map((p, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] group hover:bg-white/10 transition-colors"
              >
                <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                  <div className="w-8 h-8 text-red-500 group-hover:text-white">
                    {p.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-slate-400 leading-relaxed font-medium">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-20 text-center uppercase tracking-widest italic decoration-red-600 underline underline-offset-[16px] decoration-8">
            {content.milestonesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none"
              >
                <div className="absolute top-[-25px] left-10 text-6xl font-black text-red-600/20 dark:text-red-600/10">
                  {milestone.year}
                </div>
                <span className="text-4xl font-black text-red-600 block mb-6 pt-4">
                  {milestone.year}
                </span>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">
                  {milestone.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
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
