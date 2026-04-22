import React, { useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Mail, Lock, CheckCircle, Eye, EyeOff } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const SignInPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      <Header />

      <section className="pt-28 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Welcome Message */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-bold text-gray-900 dark:text-white mb-6"
              >
                Xush kelibsiz!
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              >
                IELTS tayyoringizni davom ettirish uchun tizimga kiring.
                Kurslaringizga kirish, o&apos;rganish progressingizni kuzatish
                va tajribali o&apos;qituvchilar bilan bog&apos;laning.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-red-700" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Barcha premium kurslarga kirish
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-red-700" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    O&apos;rganish progressingizni kuzatish
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-red-700" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Tajribali o&apos;qituvchilar bilan bog&apos;lanish
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Login Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Tizimga Kirish
              </h2>

              <form className="space-y-5">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Elektron pochta
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-white dark:bg-gray-700 dark:text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Parol
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-white dark:bg-gray-700 dark:text-white"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 rounded text-red-700 w-4 h-4"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      Meni eslab qol
                    </span>
                  </label>
                  <a
                    href="#"
                    className="text-sm text-red-700 hover:underline font-medium"
                  >
                    Parolni unutdingizmi?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-700 to-red-800 text-white py-3 rounded-xl hover:from-red-800 hover:to-red-900 transition-all font-semibold shadow-lg"
                >
                  Tizimga Kirish
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600 dark:text-gray-300">
                  Hisobingiz yo&apos;qmi?{' '}
                  <Link
                    to="/sign-up"
                    className="text-red-700 font-bold hover:underline"
                  >
                    Ro&apos;yxatdan o&apos;ting
                  </Link>
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                  Yoki quyidagilar bilan davom eting
                </p>
                <div className="flex space-x-4">
                  <button className="flex-1 flex items-center justify-center space-x-2 py-2 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors dark:text-white">
                    <span className="text-sm font-medium">Google</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center space-x-2 py-2 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors dark:text-white">
                    <span className="text-sm font-medium">Facebook</span>
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
