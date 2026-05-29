import React, { useEffect, useState } from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { motion } from "framer-motion"
import { useLanguage } from "../hooks/useLanguage"
import { StaggerText } from "../components/animation/StaggerText"
import { Link } from "react-router-dom"
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

export const HomePage: React.FC = () => {
  const telegramUrl = "https://t.me/xuma701"
  const { language } = useLanguage()
  const [teachers, setTeachers] = useState<TeacherSummary[]>([])

  useEffect(() => {
    const loadTeachers = async () => {
      try {
        const result = await fetchTeachers()
        if (result.success) {
          setTeachers(result.data.slice(0, 4))
        }
      } catch (err) {
        console.error("Error loading teachers:", err)
      }
    }
    loadTeachers()
  }, [])

  const content =
    language === "uz"
      ? {
          heroTag: "O‘zbekistonda IELTS bo‘yicha №1",
          heroTitle: (
            <>
              IELTSdan <span className="text-red-600">yuqori ball</span> olish
              endi oson!
            </>
          ),
          heroDesc:
            "Tajribali ustozlar, innovatsion usullar va shaxsiy yondashuv bilan 6.5–8.5 ball oralig‘ida natijaga erishing.",
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
          viewAllTeachers: "Barcha ustozlarni ko‘rish",
          whyUsTag: "Nima uchun biz?",
          whyUsTitle: "Sizni boshqalardan ajratib turadigan farqlar",
          resultsTag: "Yutuqlarimiz",
          resultsTitle: "Haqiqiy Natijalar",
          testimonialsTag: "Talabalarimiz nima deydi?",
          testimonialsTitle: "Haqiqiy Sharhlar",
          academic: "Academic",
          general: "General",
          successful: "Muvaffaqiyatli",
          experienceLabel: "Tajriba",
          studentsLabel: "O‘quvchilar",
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
          successful: "Successful",
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
      desc: "Ball ko‘tarmasa — pulni qaytaramiz",
    },
    {
      icon: Clock,
      title: "Moslashuvchan jadval",
      desc: "24/7 qo‘llab-quvvatlash",
    },
    {
      icon: Award,
      title: "Haqiqiy tajriba",
      desc: "IELTS examiner bo‘lgan ustozlar",
    },
  ]

  const testimonials = [
    {
      name: "Madina Shermatova",
      role: "Academic 8.0",
      text: "Bu platforma hayotimni o‘zgartirdi. 3 oy ichida 5.5 dan 8.0 ga chiqdim!",
      image: "MS",
    },
    {
      name: "Sardor Umrzoqov",
      role: "General 7.5",
      text: "Ustozlar juda malakali. Har bir dars foydali o‘tadi. Tavsiya qilaman!",
      image: "SU",
    },
    {
      name: "Aygul Rahmonova",
      role: "Academic 8.5",
      text: "Online darslar juda qulay. Oilam bilan birga o‘qib, muvaffaqiyatga erishdim.",
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

      {/* ==================== HERO SECTION (3 ta card bilan) ==================== */}
      <section className="relative pt-28 lg:pt-36 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#ef444410_0%,transparent_60%)]" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full font-semibold text-sm">
              {content.heroTag}
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tighter">
              {content.heroTitle}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg">
              {content.heroDesc}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/courses" className="btn-primary btn-xl">
                {content.startBtn} <ArrowRight size={24} />
              </Link>

              <button className="btn-secondary btn-xl">
                <Play size={24} className="text-red-600" />
                {content.freeLessonBtn}
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-1 text-yellow-500">
                ★★★★☆{" "}
                <span className="text-gray-600 dark:text-gray-400 ml-2 text-sm">
                  4.98
                </span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                12,450+ talaba biz bilan o‘qimoqda
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
      <div className="py-12 bg-white dark:bg-gray-900 border-y">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 px-6">
          {[
            { icon: Users, value: "12,450+", label: content.students },
            { icon: Star, value: "8.7", label: content.avgScore },
            { icon: TrendingUp, value: "96%", label: content.success },
            { icon: Award, value: "48+", label: content.teachers },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="text-center"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-red-600" />
              <div className="text-4xl font-black">{stat.value}</div>
              <div className="text-gray-500 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Us, Teachers, Testimonials, Top Results va Final CTA qismlari o'zgartirishsiz qoldi */}
      {/* Why Us */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-red-600 font-bold tracking-widest text-sm">
              {content.whyUsTag}
            </div>
            <StaggerText
              text={content.whyUsTitle}
              className="text-4xl sm:text-5xl font-black mt-3"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-red-500 transition-all"
              >
                <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-red-600 uppercase font-bold tracking-widest text-sm">
              {content.teamTag}
            </div>
            <StaggerText
              text={content.teamTitle}
              className="text-4xl sm:text-5xl font-black mt-3"
            />
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              {content.teamDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.length > 0 ? (
              teachers.map((teacher, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -12 }}
                  className="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-800 transition-all"
                >
                  <div className="h-64 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white text-7xl font-black">
                    {teacher.name
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")}
                  </div>
                  <div className="p-7">
                    <h3 className="font-bold text-2xl">{teacher.name}</h3>
                    <p className="text-red-600">{teacher.role}</p>
                    <div className="mt-6 space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">
                          {content.experienceLabel}:
                        </span>
                        <span className="font-semibold">
                          {teacher.experience}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">
                          {content.studentsLabel}:
                        </span>
                        <span className="font-semibold">
                          {teacher.students}+
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Reyting:</span>
                        <span className="font-semibold text-yellow-500">
                          ★★★★ {teacher.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="col-span-4 text-center py-12 text-gray-500">
                Ustozlar yuklanmoqda...
              </p>
            )}
          </div>

          <div className="text-center mt-12">
            <Link to="/teachers" className="btn-primary btn-lg">
              {content.viewAllTeachers} <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-red-600 font-bold tracking-widest text-sm">
              {content.testimonialsTag}
            </div>
            <StaggerText
              text={content.testimonialsTitle}
              className="text-4xl sm:text-5xl font-black mt-3"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl transition-all h-full flex flex-col"
              >
                <Quote className="w-10 h-10 text-red-500 mb-6" />
                <p className="text-gray-700 dark:text-gray-300 italic mb-8 flex-1 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center font-bold text-white text-xl shadow-inner">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-green-600 font-medium">
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
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-red-600 font-bold tracking-widest">
              {content.resultsTag}
            </div>
            <h2 className="text-4xl sm:text-5xl font-black mt-3">
              {content.resultsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topResults.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.12)] transition-all duration-200 hover:border-red-200 hover:shadow-[0_26px_70px_rgba(185,28,28,0.18)] dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/40 dark:hover:border-red-900/60"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[3rem] bg-red-50 dark:bg-red-950/25" />
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">
                      IELTS Score
                    </div>
                    <div className="mt-2 text-6xl font-black leading-none text-red-600 dark:text-red-400">
                      {item.score}
                    </div>
                  </div>
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-2xl font-black text-white shadow-lg shadow-red-600/25">
                    {item.initials}
                  </div>
                </div>
                <div className="relative mt-8">
                  <div className="text-xl font-black text-gray-950 dark:text-white">
                    {item.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {item.module} • {item.year}
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2 text-green-600">
                  <CheckCircle size={20} /> {content.successful}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 dark:from-red-700 dark:to-red-900 py-24 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            Bugun boshlang — Ertaga orzuingizdagi ballga erishing!
          </h2>
          <p className="text-lg mb-10 opacity-90">
            Birinchi dars mutlaqo bepul. Natijani o'zingiz ko'rasiz.
          </p>
          <a
            href={telegramUrl}
            target="_blank"
            className="btn-primary btn-xl bg-white dark:bg-gray-100 text-red-600 hover:bg-gray-50 dark:hover:bg-gray-200 hover:text-red-700 transition-colors"
          >
            Bepul darsga yozilish <Zap className="w-7 h-7" />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}
