import React, { useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import {
  Mail,
  Lock,
  User,
  CheckCircle,
  Sparkles,
  Target,
  Users,
  Eye,
  EyeOff,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

export const SignUpPage: React.FC = () => {
  const { language } = useLanguage()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const content =
    language === 'uz'
      ? {
          welcomeTitle: "Jamoamizga Qo'shiling",
          welcomeDesc:
            "Bugun IELTS tayyoringizni boshlang. Premium kurslarga kirish, progressingizni kuzatish va dunyo bo'ylab tajribali o'qituvchilar bilan bog'laning.",
          benefit1: 'Premium kurslar va materiallarga kirish',
          benefit2: "O'rganish progressingizni kuzatish",
          benefit3: "Tajribali o'qituvchilar bilan bog'lanish",
          benefit4: "12k+ muvaffaqiyatli talabalarga qo'shiling",
          formTitle: 'Hisob Yaratish',
          fullName: "To'liq Ism",
          emailLabel: 'Elektron pochta',
          passwordLabel: 'Parol',
          confirmPassword: 'Parolni Tasdiqlash',
          termsAgree: (
            <>
              Men{' '}
              <a href="#" className="text-red-700 hover:underline font-medium">
                Xizmat Shartlari
              </a>{' '}
              ga va{' '}
              <a href="#" className="text-red-700 hover:underline font-medium">
                Maxfiylik Siyosati
              </a>{' '}
              ga roziman
            </>
          ),
          submitBtn: 'Hisob Yaratish',
          hasAccount: 'Hisobingiz bormi?',
          signIn: 'Tizimga Kirish',
          orContinue: 'Yoki quyidagilar bilan davom eting',
        }
      : {
          welcomeTitle: 'Join Our Community',
          welcomeDesc:
            'Start your IELTS preparation today. Access premium courses, track your progress, and connect with experienced instructors worldwide.',
          benefit1: 'Access premium courses and materials',
          benefit2: 'Track your learning progress',
          benefit3: 'Connect with experienced instructors',
          benefit4: 'Join 12k+ successful students',
          formTitle: 'Create Account',
          fullName: 'Full Name',
          emailLabel: 'Email',
          passwordLabel: 'Password',
          confirmPassword: 'Confirm Password',
          termsAgree: (
            <>
              I agree to the{' '}
              <a href="#" className="text-red-700 hover:underline font-medium">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-red-700 hover:underline font-medium">
                Privacy Policy
              </a>
            </>
          ),
          submitBtn: 'Create Account',
          hasAccount: 'Already have an account?',
          signIn: 'Sign In',
          orContinue: 'Or continue with',
        }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      <Header />

      <section className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Side - Welcome Message */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6"
              >
                {content.welcomeTitle}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed"
              >
                {content.welcomeDesc}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-3 sm:space-y-4"
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-red-700" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    {content.benefit1}
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-red-700" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    {content.benefit2}
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-red-700" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    {content.benefit3}
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-700" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    {content.benefit4}
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Sign Up Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-700"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                {content.formTitle}
              </h2>

              <form className="space-y-4 sm:space-y-5">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    {content.fullName}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                    <input
                      type="text"
                      className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-white dark:bg-gray-700 dark:text-white text-sm sm:text-base"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    {content.emailLabel}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                    <input
                      type="email"
                      className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-white dark:bg-gray-700 dark:text-white text-sm sm:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    {content.passwordLabel}
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-white dark:bg-gray-700 dark:text-white text-sm sm:text-base"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
                      ) : (
                        <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    {content.confirmPassword}
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-white dark:bg-gray-700 dark:text-white text-sm sm:text-base"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
                      ) : (
                        <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    className="mt-1 mr-2 rounded text-red-700 w-4 h-4"
                  />
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    {content.termsAgree}
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-700 to-red-800 text-white py-2 sm:py-3 rounded-xl hover:from-red-800 hover:to-red-900 transition-all font-semibold shadow-lg text-sm sm:text-base"
                >
                  {content.submitBtn}
                </button>
              </form>

              <div className="mt-4 sm:mt-6 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {content.hasAccount}{' '}
                  <Link
                    to="/sign-in"
                    className="text-red-700 font-bold hover:underline"
                  >
                    {content.signIn}
                  </Link>
                </p>
              </div>

              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-center text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                  {content.orContinue}
                </p>
                <div className="flex space-x-3 sm:space-x-4">
                  <button className="flex-1 flex items-center justify-center space-x-2 py-2 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors dark:text-white text-xs sm:text-sm">
                    <span className="text-xs sm:text-sm font-medium">
                      Google
                    </span>
                  </button>
                  <button className="flex-1 flex items-center justify-center space-x-2 py-2 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors dark:text-white text-xs sm:text-sm">
                    <span className="text-xs sm:text-sm font-medium">
                      Facebook
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
