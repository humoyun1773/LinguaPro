import React, { useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import {
  GraduationCap,
  Star,
  Users,
  Award,
  MessageCircle,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../hooks/useLanguage'
import { Reveal } from '../components/animation/Reveal'
import { StaggerText } from '../components/animation/StaggerText'

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

const mockTeachers: Teacher[] = [
  {
    id: 1,
    initials: 'MK',
    name: 'Madina Karimova',
    role: 'IELTS Instructor',
    rating: '4.9',
    experience: '7 yil',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    specializations: ['IELTS Writing', 'Academic English', 'Grammar'],
    students: 540,
    bio: "IELTS writing va speaking bo'yicha 7 yillik tajribaga ega ustoz.",
  },
  {
    id: 2,
    initials: 'AS',
    name: 'Azizbek Saidov',
    role: 'Speaking Coach',
    rating: '4.8',
    experience: '5 yil',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    specializations: ['Speaking', 'Pronunciation', 'General English'],
    students: 390,
    bio: "Talabalarga confidence va fluency bilan gapirishni o'rgatadi.",
  },
  {
    id: 3,
    initials: 'NT',
    name: 'Nigora Tursunova',
    role: 'Reading & Listening Mentor',
    rating: '4.7',
    experience: '6 yil',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    specializations: ['Listening', 'Reading', 'Exam Strategy'],
    students: 460,
    bio: 'IELTS reading va listening strategiyalarini sodda va amaliy tushuntiradi.',
  },
]

export const TeachersPage: React.FC = () => {
  const telegramUrl = 'https://t.me/xuma701'
  const { language } = useLanguage()
  const [teachers] = useState<Teacher[]>(mockTeachers)

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

          {/* Teachers Grid */}
          {teachers.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teachers.map((teacher, index) => (
                <motion.div
                  key={teacher.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-200 dark:border-gray-800 overflow-hidden shadow-[0_18px_45px_rgba(15,23,42,0.14)] hover:-translate-y-1.5 hover:border-red-200 hover:shadow-[0_26px_70px_rgba(185,28,28,0.22)] dark:shadow-black/45 dark:hover:border-red-900/60 dark:hover:shadow-red-950/35 transition-all duration-200"
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
                        <h3 className="text-xl font-black mb-1">
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
                                  i < Math.floor(Number(teacher.rating))
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
                    <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

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
                      className="btn-primary btn-full py-4"
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
