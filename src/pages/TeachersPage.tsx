import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import {
  GraduationCap,
  Star,
  Users,
  Award,
  Loader,
  MessageCircle,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'
import { Reveal } from '../components/animation/Reveal'
import { StaggerText } from '../components/animation/StaggerText'
import { cardMotion } from '../components/animation/cardMotion'
import { fetchTeachers } from '../services/api'

interface Teacher {
  id: number
  initials: string
  name: string
  role: string
  rating: string
  experience: string
  avatar: string
  specializations: string[]
  students: number
  bio: string
}

export const TeachersPage: React.FC = () => {
  const telegramUrl = 'https://t.me/xuma701'
  const { language } = useLanguage()
  const [teachers, setTeachers] = useState<Teacher[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadTeachers = async () => {
      try {
        setLoading(true)
        setError(null)
        const result = await fetchTeachers()
        if (result.success) {
          setTeachers(result.data)
        } else {
          setError(result.error || 'Failed to load teachers')
        }
      } catch (err) {
        setError('Error loading teachers')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadTeachers()
  }, [])

  const content =
    language === 'uz'
      ? {
          heroTitle: 'Bizning Tajribali Ustozlar',
          heroDesc:
            "Xalqaro tajribaga ega, sertifikatlangan professional ustozlarimiz bilan tilni o'rganing.",
          featuredTitle: 'Bizning Ustozlar',
          students: "O'quvchilar",
          experience: 'Tajriba',
          specialization: 'Ixtisoslik',
          contactBtn: "Telegramda bog'lanish",
          loading: 'Yuklanmoqda...',
          error: 'Ustozlarni yuklashda xato',
        }
      : {
          heroTitle: 'Our Experienced Instructors',
          heroDesc:
            'Learn languages with our certified professional instructors with international experience.',
          featuredTitle: 'Our Instructors',
          students: 'Students',
          experience: 'Experience',
          specialization: 'Specialization',
          contactBtn: 'Contact on Telegram',
          loading: 'Loading teachers...',
          error: 'Error loading teachers',
        }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-full text-sm font-bold mb-6">
              <GraduationCap className="w-4 h-4 fill-current" />
              <span>Professional ustozlar jamoasi</span>
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
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
                alt="Teachers"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 flex items-center gap-4">
                <div className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <div className="text-white">
                  <p className="text-2xl font-bold">15+</p>
                  <p className="text-sm opacity-80">Professional ustozlar</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Teachers Grid */}
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

          {/* Teachers Grid */}
          {!loading && teachers.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teachers.map((teacher, index) => (
                <motion.div
                  key={teacher.id}
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
                  {/* Header with Avatar */}
                  <div className="relative p-8 pb-0">
                    <div className="flex items-start gap-6">
                      <div className="relative">
                        <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg">
                          <img
                            src={teacher.avatar}
                            alt={teacher.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                          {teacher.initials}
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-black mb-1 group-hover:text-red-600 transition-colors">
                          {teacher.name}
                        </h3>
                        <p className="text-red-600 dark:text-red-400 font-bold text-sm mb-2">
                          {teacher.role}
                        </p>

                        {/* Rating */}
                        <div className="flex items-center gap-2">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(teacher.rating)
                                    ? 'fill-current'
                                    : ''
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm font-bold opacity-60">
                            {teacher.rating}
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
                        <Users className="w-6 h-6 text-red-600 mx-auto mb-2" />
                        <p className="text-lg font-black">{teacher.students}</p>
                        <p className="text-xs opacity-60">{content.students}</p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                        <Award className="w-6 h-6 text-red-600 mx-auto mb-2" />
                        <p className="text-lg font-black">
                          {teacher.experience}
                        </p>
                        <p className="text-xs opacity-60">
                          {content.experience}
                        </p>
                      </div>
                    </div>

                    {/* Specializations */}
                    <div className="mb-6">
                      <p className="text-sm font-bold opacity-60 mb-3">
                        {content.specialization}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {teacher.specializations.map(
                          (spec: string, i: number) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-full text-xs font-bold"
                            >
                              {spec}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {teacher.bio}
                    </p>

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
