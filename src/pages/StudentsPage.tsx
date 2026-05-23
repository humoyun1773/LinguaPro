import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import {
  GraduationCap,
  TrendingUp,
  Award,
  Loader,
  MessageCircle,
  CheckCircle,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'
import { Reveal } from '../components/animation/Reveal'
import { StaggerText } from '../components/animation/StaggerText'
import { cardMotion } from '../components/animation/cardMotion'
import { fetchStudents } from '../services/api'

interface Student {
  id: number
  name: string
  initials: string
  course: string
  score: number
  module: string
  avatar: string
  enrolledDate: string
  status: string
  progress: number
  testimonial: string
  achievements: string[]
}

export const StudentsPage: React.FC = () => {
  const telegramUrl = 'https://t.me/xuma701'
  const { language } = useLanguage()
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadStudents = async () => {
      try {
        setLoading(true)
        setError(null)
        const result = await fetchStudents()
        if (result.success) {
          setStudents(result.data)
        } else {
          setError(result.error || 'Failed to load students')
        }
      } catch (err) {
        setError('Error loading students')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadStudents()
  }, [])

  const content =
    language === 'uz'
      ? {
          heroTitle: "Bizning Muvaffaqiyatli O'quvchilar",
          heroDesc:
            "Haqiqiy natijalar va yutuqlar. Bizning o'quvchilarimizning IELTS muvaffaqiyatlari.",
          featuredTitle: "Muvaffaqiyatli O'quvchilar",
          course: 'Kurs',
          score: 'Ball',
          module: 'Modul',
          status: 'Holat',
          progress: 'Progress',
          achievements: 'Yutuqlar',
          testimonial: 'Fikr-mulohaza',
          enrolled: "Qo'shilgan",
          completed: 'Tugallangan',
          inProgress: 'Davom etmoqda',
          contactBtn: "Telegramda bog'lanish",
          loading: 'Yuklanmoqda...',
          error: "O'quvchilarni yuklashda xato",
          seeSuccess: "Ularning muvaffaqiyati ko'rish uchun tayyor",
        }
      : {
          heroTitle: 'Our Successful Students',
          heroDesc:
            "Real results and achievements. Our students' IELTS success stories.",
          featuredTitle: 'Successful Students',
          course: 'Course',
          score: 'Score',
          module: 'Module',
          status: 'Status',
          progress: 'Progress',
          achievements: 'Achievements',
          testimonial: 'Testimonial',
          enrolled: 'Enrolled',
          completed: 'Completed',
          inProgress: 'In Progress',
          contactBtn: 'Contact on Telegram',
          loading: 'Loading students...',
          error: 'Error loading students',
          seeSuccess: 'Ready to see their success',
        }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-full text-sm font-bold mb-6">
              <TrendingUp className="w-4 h-4 fill-current" />
              <span>{content.seeSuccess}</span>
            </div>
            <StaggerText
              text={content.heroTitle}
              className="text-4xl md:text-6xl font-black leading-tight mb-6 block"
            />
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
              {content.heroDesc}
            </p>
          </Reveal>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
                alt="Students"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 flex items-center gap-4">
                <div className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <div className="text-white">
                  <p className="text-2xl font-bold">95%</p>
                  <p className="text-sm opacity-80">
                    {language === 'uz' ? "O'rtacha ball" : 'Average Score'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Students Grid */}
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

          {/* Students Grid */}
          {!loading && students.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {students.map((student, index) => (
                <motion.div
                  key={student.id}
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
                  {/* Header with Avatar and Score */}
                  <div className="relative p-8 pb-0">
                    <div className="flex items-start gap-6">
                      <div className="relative">
                        <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg">
                          <img
                            src={student.avatar}
                            alt={student.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg">
                          {student.score}
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-black mb-1 group-hover:text-red-600 transition-colors">
                          {student.name}
                        </h3>
                        <p className="text-red-600 dark:text-red-400 font-bold text-sm mb-2">
                          {student.course}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-full text-xs font-bold">
                            {student.module}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 pt-6 relative">
                    <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-red-500/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                          {content.status}
                        </div>
                        <div className="text-sm font-bold text-gray-900 dark:text-white">
                          {student.status === 'completed'
                            ? content.completed
                            : content.inProgress}
                        </div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                          {content.progress}
                        </div>
                        <div className="text-sm font-bold text-gray-900 dark:text-white">
                          {student.progress}%
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-4 h-4 text-red-600" />
                        <p className="text-sm font-bold opacity-60">
                          {content.achievements}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {student.achievements.map((achievement, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 rounded-full text-xs font-bold flex items-center gap-1"
                          >
                            <CheckCircle className="w-3 h-3" />
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="mb-6">
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed italic">
                        "{student.testimonial}"
                      </p>
                    </div>

                    {/* Enrolled Date */}
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                      {content.enrolled}: {student.enrolledDate}
                    </div>

                    {/* Contact Button */}
                    <a
                      href={telegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-4 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-bold transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      {content.contactBtn}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
