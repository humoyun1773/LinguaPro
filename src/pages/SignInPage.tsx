import React, { useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { User, Lock, Eye, EyeOff, ArrowRight, LogIn } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

export const SignInPage: React.FC = () => {
  const { language } = useLanguage()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState(
    () => localStorage.getItem('savedUsername') || ''
  )
  const [password, setPassword] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  // Save username to localStorage whenever it changes
  useEffect(() => {
    if (username) {
      localStorage.setItem('savedUsername', username)
    }
  }, [username])

  const content =
    language === 'uz'
      ? {
          title: 'Tizimga Kirish',
          subtitle:
            'IELTS tayyorgarligingizni davom ettirish uchun hisobingizga kiring',
          usernameLabel: 'Foydalanuvchi nomi',
          passwordLabel: 'Parol',
          submitBtn: 'Kirish',
          noAccount: "Hisobingiz yo'qmi?",
          signUp: "Ro'yxatdan o'ting",
          forgotPassword: 'Parolni unutdingizmi?',
        }
      : {
          title: 'Sign In',
          subtitle: 'Sign in to continue your IELTS preparation',
          usernameLabel: 'Username',
          passwordLabel: 'Password',
          submitBtn: 'Sign In',
          noAccount: "Don't have an account?",
          signUp: 'Create account',
          forgotPassword: 'Forgot password?',
        }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    let hasError = false

    if (!username) {
      setUsernameError(
        language === 'uz'
          ? 'Foydalanuvchi nomi kiritilishi shart'
          : 'Username is required'
      )
      hasError = true
    }

    if (!password) {
      setPasswordError(
        language === 'uz' ? 'Parol kiritilishi shart' : 'Password is required'
      )
      hasError = true
    }

    if (!hasError) {
      navigate('/')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      <Header />

      <section className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 px-4">
        <div className="max-w-md mx-auto">
          {/* Logo/Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 bg-red-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-red-500/30"
          >
            <LogIn className="w-10 h-10 text-white" />
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-3">
              {content.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
              {content.subtitle}
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 sm:p-8 md:p-10 rounded-[2rem] shadow-2xl border border-gray-100 dark:border-gray-700"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username Input */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                  {content.usernameLabel}
                </label>
                <div className="relative group">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors"
                    size={20}
                  />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value)
                      setUsernameError('')
                    }}
                    className={`w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-700/50 border rounded-2xl focus:ring-2 focus:ring-red-500/20 outline-none transition-all dark:text-white ${usernameError ? 'border-red-500 focus:border-red-500' : 'border-gray-200 dark:border-gray-600 focus:border-red-500'}`}
                    placeholder="username"
                  />
                  {usernameError && (
                    <p className="text-red-500 text-xs font-medium mt-1 flex items-center gap-1">
                      <span>⚠️</span>
                      {usernameError}
                    </p>
                  )}
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                  {content.passwordLabel}
                </label>
                <div className="relative group">
                  <Lock
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors"
                    size={20}
                  />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                      setPasswordError('')
                    }}
                    className={`w-full pl-12 pr-12 py-4 bg-gray-50 dark:bg-gray-700/50 border rounded-2xl focus:ring-2 focus:ring-red-500/20 outline-none transition-all dark:text-white ${passwordError ? 'border-red-500 focus:border-red-500' : 'border-gray-200 dark:border-gray-600 focus:border-red-500'}`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                  {passwordError && (
                    <p className="text-red-500 text-xs font-medium mt-1 flex items-center gap-1">
                      <span>⚠️</span>
                      {passwordError}
                    </p>
                  )}
                </div>
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <Link
                  to="/forgot-password"
                  className="text-sm font-bold text-red-600 hover:text-red-700 transition-colors"
                >
                  {content.forgotPassword}
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-red-500/20 transition-all flex items-center justify-center gap-3 group"
              >
                <span>{content.submitBtn}</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                {content.noAccount}{' '}
                <Link
                  to="/sign-up"
                  className="text-red-600 hover:text-red-700 font-bold transition-colors"
                >
                  {content.signUp}
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
