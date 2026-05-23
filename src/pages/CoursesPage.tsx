import React, { useEffect, useState } from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import {
  GraduationCap,
  Clock,
  ArrowRight,
  Star,
  BookOpen,
  CheckCircle2,
  Loader,
} from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "../hooks/useLanguage"
import { Reveal } from "../components/animation/Reveal"
import { StaggerText } from "../components/animation/StaggerText"
import { cardMotion } from "../components/animation/cardMotion"
import { fetchCourses } from "../services/api"

export const CoursesPage: React.FC = () => {
  const telegramUrl = "https://t.me/xuma701"
  const { language } = useLanguage()
  const [courses, setCourses] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadCourses = async () => {
      try {
        setLoading(true)
        setError(null)
        const result = await fetchCourses()
        if (result.success) {
          setCourses(result.data)
        } else {
          setError(result.error || "Failed to load courses")
        }
      } catch (err) {
        setError("Error loading courses")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadCourses()
  }, [])

  const content =
    language === "uz"
      ? {
          heroTitle: "Kelajagingizni tillar orqali quring",
          heroDesc:
            "Xalqaro standartlarga asoslangan IELTS va umumiy ingliz tili kurslarimiz bilan orzuingizdagi natijaga erishing.",
          featuredTitle: "Bizning Kurslar",
          registerBtn: "Ro'yxatdan o'tish",
          duration: "Davomiyligi",
          ctaTitle: "Qayerdan boshlashni bilmayapsizmi?",
          ctaDesc:
            "Darajangizni aniqlash uchun bepul testimizni topshiring va mos kursni tanlang.",
          ctaBtn: "Testni boshlash",
          loading: "Yuklanmoqda...",
          error: "Kurslarni yuklashda xato",
        }
      : {
          heroTitle: "Build your future through languages",
          heroDesc:
            "Achieve your dream score with our IELTS and General English courses based on international standards.",
          featuredTitle: "Our Courses",
          registerBtn: "Enroll Now",
          duration: "Duration",
          ctaTitle: "Not sure where to start?",
          ctaDesc:
            "Take our free placement test to determine your level and choose the right course.",
          ctaBtn: "Start Test",
          loading: "Loading courses...",
          error: "Error loading courses",
        }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-full text-sm font-bold mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>O'zbekistondagi eng yaxshi IELTS markazi</span>
            </div>
            <StaggerText
              text={content.heroTitle}
              className="text-4xl md:text-6xl font-black leading-tight mb-6 block"
            />
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
              {content.heroDesc}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm font-bold opacity-70">
                <CheckCircle2 className="w-5 h-5 text-green-500" /> Sertifikat
                beriladi
              </div>
              <div className="flex items-center gap-2 text-sm font-bold opacity-70">
                <CheckCircle2 className="w-5 h-5 text-green-500" /> Professional
                ustozlar
              </div>
            </div>
          </Reveal>

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
                  <p className="text-sm opacity-80">
                    Muvaffaqiyatli o'quvchilar
                  </p>
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
              <StaggerText
                text={content.featuredTitle}
                className="text-3xl md:text-4xl font-black mb-4 block"
              />
              <div className="h-1.5 w-20 bg-red-600 rounded-full" />
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-12">
              <Loader className="w-8 h-8 text-red-600 animate-spin mr-3" />
              <span className="text-lg font-semibold text-gray-600 dark:text-gray-400">
                {content.loading}
              </span>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-8 text-center">
              <p className="text-red-600 dark:text-red-400 text-lg font-semibold">
                {content.error}: {error}
              </p>
            </div>
          )}

          {/* Courses Grid */}
          {!loading && courses.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={
                    index % 2 === 0
                      ? cardMotion.softLift.hover
                      : cardMotion.tiltRight.hover
                  }
                  className="group bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500"
                >
                  {/* Image Area */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-wider shadow-lg">
                        {course.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-6 right-6 bg-red-600 text-white px-4 py-2 rounded-xl font-bold text-lg shadow-xl">
                      ${course.price}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-8 relative">
                    <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-red-500/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Instructor Info */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {course.instructor
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="text-sm">
                        <p className="font-semibold text-gray-700 dark:text-gray-300">
                          {course.instructor}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {course.level}
                        </p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(course.rating)
                                ? "fill-current"
                                : ""
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-bold opacity-60">
                        ({course.rating}) {course.reviews} reviews
                      </span>
                    </div>

                    <h3 className="text-2xl font-black mb-3 group-hover:text-red-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-3">
                      {course.description}
                    </p>

                    {/* Course Stats */}
                    <div className="flex gap-4 mb-6 text-xs text-gray-600 dark:text-gray-400">
                      <span>📚 {course.lessons} lessons</span>
                      <span>👥 {course.students_enrolled} enrolled</span>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-800">
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase">
                          {course.duration}
                        </span>
                      </div>
                      <a
                        href={telegramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-red-600 font-black text-sm uppercase tracking-wider group/btn hover:text-red-700"
                      >
                        {content.registerBtn}
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && courses.length === 0 && !error && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                {language === "uz" ? "Kurslar topilmadi" : "No courses found"}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gray-900 dark:bg-red-600 rounded-[3rem] p-10 md:p-20 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-20" />

            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                  {content.ctaTitle}
                </h2>
                <p className="text-gray-300 dark:text-red-100 text-lg mb-10">
                  {content.ctaDesc}
                </p>
                <a
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 dark:bg-red-600 hover:bg-gray-800 dark:hover:bg-red-700 text-white px-10 py-4 rounded-2xl font-black text-lg shadow-xl shadow-gray-500/20 dark:shadow-red-500/20 transition-all flex items-center gap-3"
                >
                  <BookOpen className="w-5 h-5" />
                  {content.ctaBtn}
                </a>
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
