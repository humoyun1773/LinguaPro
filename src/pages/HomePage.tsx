import React, { useEffect, useState } from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { motion } from "framer-motion"
import { useLanguage } from "../hooks/useLanguage"
import { StaggerText } from "../components/animation/StaggerText"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "../components/common/Button"
import {
  ArrowRight,
  Play,
  Star,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  Zap,
  Shield,
  Clock,
  Target,
  Quote,
} from "lucide-react"
import { fetchTeachers } from "../services/api"

interface TeacherSummary {
  id: number
  name: string
  role: string
  experience: string
  students: number
  rating: string | number
}

const fallbackTeachers: TeacherSummary[] = [
  { id: 1, name: "Madina Karimova", role: "IELTS Instructor", experience: "7 yil", students: 540, rating: "4.9" },
  { id: 2, name: "Azizbek Saidov", role: "Speaking Coach", experience: "5 yil", students: 390, rating: "4.8" },
  { id: 3, name: "Nigora Tursunova", role: "Reading Mentor", experience: "6 yil", students: 460, rating: "4.7" },
  { id: 4, name: "Jasur Saidov", role: "Writing Specialist", experience: "4 yil", students: 280, rating: "4.6" },
];

export const HomePage: React.FC = () => {
  const navigate = useNavigate()
  const telegramUrl = "https://t.me/TalipovShoh"
  const { language } = useLanguage()
  const [teachers, setTeachers] = useState<TeacherSummary[]>([])

  useEffect(() => {
    const loadTeachers = async () => {
      try {
        const result = await fetchTeachers()
        if (result.success && result.data.length > 0) {
          setTeachers(result.data.slice(0, 4))
        } else {
          setTeachers(fallbackTeachers)
        }
      } catch (err) {
        console.error("Error loading teachers:", err)
        setTeachers(fallbackTeachers)
      }
    }
    loadTeachers()
  }, [])

  const content =
    language === "uz"
      ? {
          heroTag: "O'zbekistonda IELTS bo'yicha №1",
          heroTitle: (
            <>
              IELTSdan <span className="text-red-600">yuqori ball</span> olish
              endi oson!
            </>
          ),
          heroDesc:
            "Tajribali ustozlar, innovatsion usullar va shaxsiy yondashuv bilan 6.5–8.5 ball oralig'ida natijaga erishing.",
          startBtn: "Hozir boshlash",
          freeLessonBtn: "Bepul sinov darsi",
          students: "Talabalar",
          ieltsScore: "IELTS ball",
          avgScore: "O'rtacha ball",
          success: "Muvaffaqiyat",
          teachers: "Ustozlar",
          teamTag: "Bizning Jamoa",
          teamTitle: "Sizning Muvaffaqiyatingiz Uchun Eng Yaxshilar",
          teamDesc:
            "Natijasi isbotlangan, 5+ yillik tajribaga ega professional ustozlar",
          viewAllTeachers: "Barcha ustozlarni ko'rish",
          whyUsTag: "Nima uchun biz?",
          whyUsTitle: "Sizni boshqalardan ajratib turadigan farqlar",
          resultsTag: "Yutuqlarimiz",
          resultsTitle: "Haqiqiy Natijalar",
          testimonialsTag: "Talabalarimiz nima deydi?",
          testimonialsTitle: "Haqiqiy Sharhlar",
          academic: "Academic",
          general: "General",
          successful: "Natija",
          experienceLabel: "Tajriba",
          studentsLabel: "O'quvchilar",
        }
      : {
          heroTag: "№1 IELTS Center in Uzbekistan",
          heroTitle: (
            <>
              Get <span className="text-red-600">High IELTS Score</span> Easily!
            </>
          ),
          heroDesc:
            "Experienced teachers, innovative methods, and personal approach to achieve 6.5–8.5 IELTS.",
          startBtn: "Start Now",
          freeLessonBtn: "Free Trial Lesson",
          students: "Students",
          ieltsScore: "IELTS Score",
          avgScore: "Avg. Score",
          success: "Success Rate",
          teachers: "Teachers",
          teamTag: "Our Team",
          teamTitle: "The Best For Your Success",
          teamDesc: "Proven teachers with 5+ years experience",
          viewAllTeachers: "View All Teachers",
          whyUsTag: "Why Us?",
          whyUsTitle: "What Makes Us Different",
          resultsTag: "Our Achievements",
          resultsTitle: "Real Results",
          testimonialsTag: "What Our Students Say",
          testimonialsTitle: "Real Testimonials",
          academic: "Academic",
          general: "General",
          successful: "Result",
          experienceLabel: "Experience",
          studentsLabel: "Students",
        }

  const topResults = [
    {
      initials: "AK",
      name: "Alisher Karimov",
      module: "Academic",
      score: "9.0",
      year: "2025",
    },
    {
      initials: "NR",
      name: "Nilufar Rahimova",
      module: "General",
      score: "8.5",
      year: "2025",
    },
    {
      initials: "JS",
      name: "Jasur Saidov",
      module: "Academic",
      score: "8.5",
      year: "2024",
    },
    {
      initials: "GA",
      name: "Gulnora Azizova",
      module: "General",
      score: "8.0",
      year: "2025",
    },
  ]

  const whyUs = [
    {
      icon: Target,
      title: "Shaxsiy yondashuv",
      desc: "Har bir talabaga moslashtirilgan dars rejasi",
    },
    {
      icon: Shield,
      title: "Natija kafolati",
      desc: "Ball ko'tarmasa — pulni qaytaramiz",
    },
    {
      icon: Clock,
      title: "Moslashuvchan jadval",
      desc: "24/7 qo'llab-quvvatlash",
    },
    {
      icon: Award,
      title: "Haqiqiy tajriba",
      desc: "IELTS examiner bo'lgan ustozlar",
    },
  ]

  const testimonials = [
    {
      name: "Madina Shermatova",
      role: "Academic 8.0",
      text: "Bu platforma hayotimni o'zgartirdi. 3 oy ichida 5.5 dan 8.0 ga chiqdim!",
      image: "MS",
    },
    {
      name: "Sardor Umrzoqov",
      role: "General 7.5",
      text: "Ustozlar juda malakali. Har bir dars foydali o'tadi. Tavsiya qilaman!",
      image: "SU",
    },
    {
      name: "Aygul Rahmonova",
      role: "Academic 8.5",
      text: "Online darslar juda qulay. Oilam bilan birga o'qib, muvaffaqiyatga erishdim.",
      image: "AR",
    },
  ]

  // Hero kartalari (3 ta)
  const heroCards = [
    { badge: content.academic, score: "9.0", name: "Alisher Karimov" },
    { badge: content.general, score: "8.5", name: "Nilufar Rahimova" },
    { badge: content.academic, score: "8.5", name: "Jasur Saidov" },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative pt-24 sm:pt-28 lg:pt-36 pb-16 sm:pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#ef444410_0%,transparent_60%)]" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full font-semibold text-xs sm:text-sm">
              {content.heroTag}
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter max-w-xl lg:max-w-none mx-auto lg:mx-0">
              {content.heroTitle}
            </h1>

            <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {content.heroDesc}
            </p>

            {/* ✅ TO'G'IRLANGAN VA RESPONSIVE TUGMALAR */}
            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 px-4 sm:px-0">
              <Link
                to="/courses"
                className="btn-primary w-full sm:w-auto justify-center px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl font-bold text-base sm:text-lg inline-flex items-center gap-2 shadow-lg shadow-red-600/20"
              >
                {content.startBtn} <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </Link>
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-2xl border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 font-bold text-base sm:text-lg hover:border-red-500 hover:text-red-600 dark:hover:border-red-400 dark:hover:text-red-400 transition-all bg-transparent"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" /> {content.freeLessonBtn}
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-8 pt-2 sm:pt-4 text-center sm:text-left">
              <div className="text-xl sm:text-2xl text-gray-900 dark:text-white font-black">
                12,450+ <span className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-medium">talaba biz bilan o'qimoqda</span>
              </div>
            </div>
          </motion.div>

          {/* 3 ta Card (Hero o'ng tarafida) */}
          <div className="hidden lg:flex flex-col gap-6 relative">
            {heroCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.15 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl p-6 shadow-xl"
                style={{
                  marginLeft: i === 1 ? "40px" : i === 2 ? "20px" : "0",
                }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      {content.ieltsScore}
                    </div>
                    <div className="text-5xl font-black text-red-600 mt-1">
                      {card.score}
                    </div>
                    <div className="text-lg font-semibold mt-2">
                      {card.name}
                    </div>
                  </div>

                  <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold px-4 py-1.5 rounded-2xl">
                    {card.badge}
                  </div>
                </div>

                <div className="flex mt-4 text-yellow-500">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="py-8 sm:py-12 bg-white dark:bg-gray-900 border-y">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 px-4 sm:px-6">
          {[
            { icon: Users, value: "12,450+", label: content.students },
            { icon: Star, value: "8.7", label: content.avgScore },
            { icon: TrendingUp, value: "96%", label: content.success },
            { icon: Award, value: "48+", label: content.teachers },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="text-center p-2"
            >
              <stat.icon className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-4 text-red-600" />
              <div className="text-2xl sm:text-4xl font-black">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Us */}
      <section className="py-20 sm:py-32 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 sm:mb-24">
            <div className="text-red-600 font-black tracking-[0.25em] uppercase text-[10px] sm:text-xs mb-4">
              {content.whyUsTag}
            </div>
            <StaggerText
              text={content.whyUsTitle}
              className="text-4xl sm:text-5xl lg:text-6xl font-black mt-2 leading-[1.1] tracking-tight"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-900 p-8 sm:p-10 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl hover:border-red-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-50 dark:bg-red-900/20 rounded-3xl flex items-center justify-center mb-8">
                  <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-red-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-4 leading-tight">{item.title}</h3>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="py-20 sm:py-28 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <div className="text-red-600 uppercase font-black tracking-[0.25em] text-[10px] sm:text-xs mb-4">
              {content.teamTag}
            </div>
            <StaggerText
              text={content.teamTitle}
              className="text-4xl sm:text-5xl lg:text-7xl font-black mt-2 leading-[1.1] tracking-tight"
            />
            <p className="mt-6 text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
              {content.teamDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teachers.length > 0 ? (
              teachers.map((teacher, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 overflow-hidden shadow-[0_15px_40px_rgba(15,23,42,0.08)] hover:shadow-[0_25px_60px_rgba(185,28,28,0.15)] transition-all duration-300 flex flex-col"
                >
                  {/* Avatar Area - Match TeachersPage */}
                  <div className="relative p-6 pb-0">
                    <div className="flex items-start gap-4">
                      <div className="relative shrink-0">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center text-white text-2xl sm:text-3xl font-black shadow-lg">
                          {teacher.name
                            .split(" ")
                            .map((n: string) => n[0])
                            .join("")}
                        </div>
                      </div>
                      <div className="min-w-0 pt-1">
                        <h3 className="font-black text-lg sm:text-xl mb-1">{teacher.name}</h3>
                        <p className="text-xs sm:text-sm text-red-600 font-bold">{teacher.role}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-5 flex-1 flex flex-col">
                    <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-red-500/10 to-transparent" />
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-3 text-center">
                        <Users className="w-5 h-5 text-red-600 mx-auto mb-1.5" />
                        <p className="text-sm font-black dark:text-gray-100">{teacher.students}+</p>
                        <p className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-300 font-bold">{content.studentsLabel}</p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-3 text-center">
                        <Award className="w-5 h-5 text-red-600 mx-auto mb-1.5" />
                        <p className="text-sm font-black dark:text-gray-100">{teacher.experience}</p>
                        <p className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-300 font-bold">{content.experienceLabel}</p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300 leading-relaxed mb-6 line-clamp-2">
                      IELTS va Speaking bo'yicha professional ustoz. 1000+ o'quvchilar muvaffaqiyatiga sababchi.
                    </p>

                    <Button
                      fullWidth
                      size="sm"
                      variant="secondary"
                      className="mt-auto !rounded-xl !py-2.5 text-xs dark:!bg-gray-800 dark:!border-gray-700 dark:!text-gray-100"
                      onClick={() => window.open(telegramUrl, "_blank")}
                    >
                      Bog'lanish
                    </Button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-20 text-gray-400">
                Ustozlar yuklanmoqda...
              </div>
            )}
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <Button
              variant="outline"
              size="md"
              icon={ArrowRight}
              onClick={() => navigate("/teachers")}
              className="!text-gray-900 dark:!text-white border-gray-200 dark:border-gray-800 hover:!bg-gray-50 dark:hover:!bg-gray-800 px-10"
            >
              {content.viewAllTeachers}
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <div className="text-red-600 font-black tracking-[0.25em] uppercase text-[10px] sm:text-xs mb-4">
              {content.testimonialsTag}
            </div>
            <StaggerText
              text={content.testimonialsTitle}
              className="text-4xl sm:text-5xl lg:text-7xl font-black mt-2 leading-[1.1] tracking-tight"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-900 p-8 sm:p-10 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
              >
                <Quote className="w-10 h-10 text-red-500/10 mb-6" />
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 italic mb-8 flex-1 leading-relaxed font-medium">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 shrink-0 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center font-black text-white text-lg shadow-lg">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-black text-lg leading-none mb-1 dark:text-gray-100">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-green-600 font-bold uppercase tracking-wider">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Results */}
      <section className="py-20 sm:py-28 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <div className="text-red-600 font-black tracking-[0.25em] uppercase text-[10px] sm:text-xs mb-4">
              {content.resultsTag}
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mt-2 leading-[1.1] tracking-tight">
              {content.resultsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {topResults.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-7 sm:p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:border-red-100 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[3rem] bg-red-50 dark:bg-red-950/20" />
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">
                      IELTS Score
                    </div>
                    <div className="mt-2 text-5xl sm:text-6xl font-black leading-none text-red-600 dark:text-red-400">
                      {item.score}
                    </div>
                  </div>
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600 text-xl font-black text-white shadow-lg">
                    {item.initials}
                  </div>
                </div>
                <div className="relative mt-8">
                  <div className="text-xl font-black text-gray-950 dark:text-white mb-1">
                    {item.name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
                    {item.module} • {item.year}
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm text-green-600 font-bold">
                  <CheckCircle size={18} /> {content.successful}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <div className="bg-gradient-to-br from-red-600 to-red-800 py-24 sm:py-32 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tight">
            Bugun boshlang — Ertaga orzuingizdagi ballga erishing!
          </h2>
          <p className="text-base sm:text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed font-medium">
            Birinchi dars mutlaqo bepul. Natijani o'zingiz ko'rasiz.
          </p>
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="lg"
              icon={Zap}
              onClick={() => window.open(telegramUrl, "_blank")}
              className="bg-white !text-red-600 hover:!bg-red-50 border-none shadow-2xl px-12 hover:shadow-white/20 transition-all duration-300"
            >
              Bepul darsga yozilish
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
