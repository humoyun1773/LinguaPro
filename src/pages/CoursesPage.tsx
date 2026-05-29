import React, { useState } from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import {
  GraduationCap,
  Clock,
  ArrowRight,
  Star,
  BookOpen,
  Library,
  Users,
  CheckCircle2,
} from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "../hooks/useLanguage"
import { Reveal } from "../components/animation/Reveal"
import { StaggerText } from "../components/animation/StaggerText"

interface Course {
  id: number
  image: string
  title: string
  badge: string
  price: string | number
  instructor: string
  level: string
  rating: string | number
  reviews: number
  description: string
  lessons: number
  students_enrolled: number
  duration: string
}

const mockCourses: Course[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&q=80",
    title: "IELTS Intensive",
    badge: "Popular",
    price: 120,
    instructor: "Madina Karimova",
    level: "Intermediate",
    rating: 4.9,
    reviews: 128,
    description:
      "Writing, speaking, listening va reading bo'yicha intensiv tayyorgarlik.",
    lessons: 36,
    students_enrolled: 420,
    duration: "3 oy",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80",
    title: "General English",
    badge: "Beginner",
    price: 80,
    instructor: "Azizbek Saidov",
    level: "Starter",
    rating: 4.8,
    reviews: 94,
    description:
      "Boshlang'ich darajadan mustahkam grammatika va speaking ko'nikmalarigacha.",
    lessons: 48,
    students_enrolled: 610,
    duration: "4 oy",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80",
    title: "Speaking Club",
    badge: "Live",
    price: 45,
    instructor: "Nigora Tursunova",
    level: "All levels",
    rating: 4.7,
    reviews: 76,
    description:
      "Real mavzular, debate va fluency mashqlari orqali erkin gapirish amaliyoti.",
    lessons: 24,
    students_enrolled: 280,
    duration: "2 oy",
  },
]

export const CoursesPage: React.FC = () => {
  const telegramUrl = "https://t.me/xuma701"
  const { language } = useLanguage()
  const [courses] = useState<Course[]>(mockCourses)

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

          {/* Courses Grid */}
          {courses.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.14)] transition-all duration-200 hover:-translate-y-1.5 hover:border-red-200 hover:shadow-[0_26px_70px_rgba(185,28,28,0.22)] dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/45 dark:hover:border-red-900/60 dark:hover:shadow-red-950/35"
                >
                  {/* Image Area */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/45 via-transparent to-transparent" />
                    <div className="absolute left-5 top-5">
                      <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-black uppercase tracking-wide text-gray-800 shadow-sm dark:bg-gray-950/90 dark:text-gray-100">
                        {course.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-5 right-5 rounded-xl bg-red-600 px-4 py-2 text-base font-black text-white shadow-lg">
                      ${course.price}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="flex flex-1 flex-col p-6">

                    {/* Instructor Info */}
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                          {course.instructor
                            .split(" ")
                            .map((n: string) => n[0])
                            .join("")}
                        </div>
                        <div className="min-w-0 text-sm">
                          <p className="truncate font-semibold text-gray-800 dark:text-gray-200">
                            {course.instructor}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {course.level}
                          </p>
                        </div>
                      </div>
                      <div className="flex shrink-0 items-center gap-1 rounded-full bg-yellow-50 px-2.5 py-1 text-xs font-black text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400">
                        <Star className="h-3.5 w-3.5 fill-current" />
                        {course.rating}
                      </div>
                    </div>

                    <h3 className="mb-3 text-2xl font-black leading-tight text-gray-950 dark:text-white">
                      {course.title}
                    </h3>
                    <p className="mb-5 min-h-[4.5rem] text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                      {course.description}
                    </p>

                    {/* Course Stats */}

                    <div className="mb-6 grid grid-cols-2 gap-3 text-xs font-bold text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2 rounded-2xl bg-gray-50 px-3 py-3 dark:bg-gray-800/70">
                        <Library className="h-4 w-4 text-red-600 dark:text-red-400" />
                        <span>{course.lessons} lessons</span>
                      </div>
                      <div className="flex items-center gap-2 rounded-2xl bg-gray-50 px-3 py-3 dark:bg-gray-800/70">
                        <Users className="h-4 w-4 text-red-600 dark:text-red-400" />
                        <span>{course.students_enrolled} enrolled</span>
                      </div>
                    </div>

                    <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-5 dark:border-gray-800">
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
                        className="btn-primary btn-sm"
                      >
                        {content.registerBtn}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {courses.length === 0 && (
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
                  className="btn-primary btn-lg"
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
