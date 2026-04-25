import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { GraduationCap, Clock, DollarSign, ArrowRight, Star, BookOpen, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

export const CoursesPage: React.FC = () => {
  const { language } = useLanguage()

  const content =
    language === 'uz'
      ? {
          heroTitle: "Kelajagingizni tillar orqali quring",
          heroDesc: "Xalqaro standartlarga asoslangan IELTS va umumiy ingliz tili kurslarimiz bilan orzuingizdagi natijaga erishing.",
          featuredTitle: 'Bizning Kurslar',
          registerBtn: "Ro'yxatdan o'tish",
          duration: "Davomiyligi",
          ctaTitle: 'Qayerdan boshlashni bilmayapsizmi?',
          ctaDesc: "Darajangizni aniqlash uchun bepul testimizni topshiring va mos kursni tanlang.",
          ctaBtn: 'Testni boshlash',
        }
      : {
          heroTitle: 'Build your future through languages',
          heroDesc: 'Achieve your dream score with our IELTS and General English courses based on international standards.',
          featuredTitle: 'Our Courses',
          registerBtn: 'Enroll Now',
          duration: "Duration",
          ctaTitle: 'Not sure where to start?',
          ctaDesc: 'Take our free placement test to determine your level and choose the right course.',
          ctaBtn: 'Start Test',
        }

  const courses = [
    {
      title: 'IELTS Academic',
      description: 'Universitetga kirish va akademik faoliyat uchun mo‘ljallangan intensiv tayyorgarlik.',
      duration: '6 Weeks',
      price: '$299',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
      badge: 'Popular'
    },
    {
      title: 'IELTS General',
      description: 'Immigratsiya va xalqaro ish tajribasi uchun zarur bo‘lgan barcha ko‘nikmalar.',
      duration: '8 Weeks',
      price: '$349',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
      badge: 'Recommended'
    },
    {
      title: 'Speaking Crash',
      description: 'Gapirish ko‘nikmasini qisqa vaqt ichida ravonlashtirish va qo‘rquvni yengish.',
      duration: '4 Weeks',
      price: '$199',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80',
      badge: 'Intensive'
    },
    {
      title: 'Writing Workshop',
      description: 'Essay va tasklarni master darajasida yozish texnikalari va tahlili.',
      duration: '2 Weeks',
      price: '$199',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
      badge: 'Workshop'
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-100 transition-colors">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-full text-sm font-bold mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>O'zbekistondagi eng yaxshi IELTS markazi</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              {content.heroTitle}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl">
              {content.heroDesc}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm font-bold opacity-70">
                <CheckCircle2 className="w-5 h-5 text-green-500" /> Sertifikat beriladi
              </div>
              <div className="flex items-center gap-2 text-sm font-bold opacity-70">
                <CheckCircle2 className="w-5 h-5 text-green-500" /> Professional ustozlar
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative">
               <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Education"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 flex items-center gap-4">
                <div className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <div className="text-white">
                  <p className="text-2xl font-bold">10,000+</p>
                  <p className="text-sm opacity-80">Muvaffaqiyatli o'quvchilar</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">{content.featuredTitle}</h2>
              <div className="h-1.5 w-20 bg-red-600 rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500"
              >
                {/* Image Area */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-wider shadow-lg">
                      {course.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-6 right-6 bg-red-600 text-white px-4 py-2 rounded-xl font-bold text-lg shadow-xl">
                    {course.price}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                    <span className="text-sm font-bold opacity-60">({course.rating})</span>
                  </div>

                  <h3 className="text-2xl font-black mb-3 group-hover:text-red-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase">{course.duration}</span>
                    </div>
                    <button className="flex items-center gap-2 text-red-600 font-black text-sm uppercase tracking-wider group/btn">
                      {content.registerBtn}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-slate-900 dark:bg-red-600 rounded-[3rem] p-10 md:p-20 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-20" />

            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                  {content.ctaTitle}
                </h2>
                <p className="text-slate-300 dark:text-red-100 text-lg mb-10">
                  {content.ctaDesc}
                </p>
                <button className="bg-white text-slate-900 hover:bg-slate-100 px-10 py-4 rounded-2xl font-black transition-all flex items-center gap-3">
                  <BookOpen className="w-5 h-5" />
                  {content.ctaBtn}
                </button>
              </div>
              <div className="hidden md:flex justify-end">
                <div className="w-64 h-64 border-8 border-white/10 rounded-full flex items-center justify-center animate-pulse">
                   <GraduationCap className="w-32 h-32 text-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
