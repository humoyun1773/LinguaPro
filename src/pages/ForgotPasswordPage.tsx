import React, { useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { User, Lock, ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

export const ForgotPasswordPage: React.FC = () => {
  const { language } = useLanguage()
  const [username, setUsername] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const content =
    language === 'uz'
      ? {
          title: 'Parolni Tiklash',
          subtitle:
            "Yangi parol o'rnatish uchun foydalanuvchi nomingizni kiriting",
          usernameLabel: 'Foydalanuvchi nomi',
          newPasswordLabel: 'Yangi parol',
          confirmPasswordLabel: 'Parolni tasdiqlash',
          submitBtn: 'Parolni yangilash',
          backToLogin: 'Kirish sahifasiga qaytish',
          successTitle: 'Parol muvaffaqiyatli yangilandi!',
          successDesc: 'Endi yangi parolingiz bilan tizimga kirishingiz mumkin',
          successBtn: "Kirish sahifasiga o'tish",
        }
      : {
          title: 'Reset Password',
          subtitle: 'Enter your username to set a new password',
          usernameLabel: 'Username',
          newPasswordLabel: 'New Password',
          confirmPasswordLabel: 'Confirm Password',
          submitBtn: 'Reset Password',
          backToLogin: 'Back to login',
          successTitle: 'Password reset successfully!',
          successDesc: 'You can now sign in with your new password',
          successBtn: 'Go to sign in',
        }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!username || !newPassword || !confirmPassword) {
      setError(
        language === 'uz'
          ? "Barcha maydonlarni to'ldiring"
          : 'Please fill all fields'
      )
      return
    }
    if (newPassword !== confirmPassword) {
      setError(
        language === 'uz' ? 'Parollar mos kelmaydi' : 'Passwords do not match'
      )
      return
    }
    setError('')
    setSuccess(true)
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
        <Header />

        <section className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 px-4">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-800 p-6 sm:p-8 md:p-10 rounded-[2rem] shadow-2xl border border-gray-100 dark:border-gray-700 text-center"
            >
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-black mb-4 text-gray-900 dark:text-white">
                {content.successTitle}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                {content.successDesc}
              </p>

              <Link
                to="/sign-in"
                className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-2xl font-black text-lg shadow-xl shadow-red-500/20 transition-all group"
              >
                <span>{content.successBtn}</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      <Header />

      <section className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 px-4">
        <div className="max-w-md mx-auto">
          {/* Back Button */}
          <Link
            to="/sign-in"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            {content.backToLogin}
          </Link>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 sm:p-8 md:p-10 rounded-[2rem] shadow-2xl border border-gray-100 dark:border-gray-700"
          >
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-xl text-sm font-medium mb-6">
                {error}
              </div>
            )}

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
                      setError('')
                    }}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none transition-all dark:text-white"
                    placeholder="username"
                  />
                </div>
              </div>

              {/* New Password Input */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                  {content.newPasswordLabel}
                </label>
                <div className="relative group">
                  <Lock
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors"
                    size={20}
                  />
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => {
                      setNewPassword(e.target.value)
                      setError('')
                    }}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none transition-all dark:text-white"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {/* Confirm Password Input */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                  {content.confirmPasswordLabel}
                </label>
                <div className="relative group">
                  <Lock
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors"
                    size={20}
                  />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value)
                      setError('')
                    }}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none transition-all dark:text-white"
                    placeholder="••••••••"
                  />
                </div>
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
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
