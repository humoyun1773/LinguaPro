import React, { useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Mail, Lock, CheckCircle, Eye, EyeOff, ArrowRight, Chrome, Facebook } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

export const SignInPage: React.FC = () => {
  const { language } = useLanguage()
  const [showPassword, setShowPassword] = useState(false)

  const content =
    language === 'uz'
      ? {
          welcomeTitle: 'Xush kelibsiz!',
          welcomeDesc: "IELTS tayyorgarligini davom ettirish va kurslaringizni boshqarish uchun o'z hisobingizga kiring.",
          benefit1: 'Barcha premium kurslarga kirish',
          benefit2: "O'rganish natijalarini kuzatish",
          benefit3: "Ekspertlar bilan jonli muloqot",
          formTitle: 'Tizimga kirish',
          emailLabel: 'Email manzil',
          passwordLabel: 'Parol',
          rememberMe: 'Meni eslab qol',
          forgotPassword: 'Parolni unutdingizmi?',
          submitBtn: 'Kirish',
          noAccount: "Hisobingiz yo'qmi?",
          signUp: "Ro'yxatdan o'ting",
          orContinue: 'Yoki quyidagilar bilan davom eting',
        }
      : {
          welcomeTitle: 'Welcome Back!',
          welcomeDesc: 'Sign in to continue your IELTS preparation and manage your personal learning dashboard.',
          benefit1: 'Access all premium courses',
          benefit2: 'Track your learning progress',
          benefit3: 'Live support from experts',
          formTitle: 'Sign In',
          emailLabel: 'Email Address',
          passwordLabel: 'Password',
          rememberMe: 'Remember me',
          forgotPassword: 'Forgot password?',
          submitBtn: 'Sign In',
          noAccount: "Don't have an account?",
          signUp: 'Create account',
          orContinue: 'Or continue with',
        }

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 selection:bg-red-500/30">
      <Header />

      <section className="pt-24 lg:pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Side: Visual & Marketing */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block"
            >
              <h1 className="text-5xl xl:text-6xl font-black tracking-tight mb-8 bg-gradient-to-br from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
                {content.welcomeTitle}
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-lg">
                {content.welcomeDesc}
              </p>

              <div className="space-y-6">
                {[content.benefit1, content.benefit2, content.benefit3].map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform">
                      <CheckCircle size={24} />
                    </div>
                    <span className="text-lg font-semibold text-slate-700 dark:text-slate-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-slate-50 dark:bg-slate-900/50 rounded-[2rem] border border-slate-100 dark:border-slate-800 relative overflow-hidden">
                <div className="relative z-10">
                  <p className="italic text-slate-500 dark:text-slate-400 mb-4 text-lg">
                    "Ushbu platforma yordamida men IELTSdan 8.0 ball oldim. Tavsiya qilaman!"
                  </p>
                  <p className="font-bold">— Sardor Valiyev, Talaba</p>
                </div>
                <div className="absolute -bottom-6 -right-6 text-red-500/5 rotate-12">
                   <Lock size={150} />
                </div>
              </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-red-500/5 blur-[80px] rounded-full -z-10" />

              <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl">
                <div className="text-center lg:text-left mb-10">
                  <h2 className="text-3xl font-black mb-2">{content.formTitle}</h2>
                  <p className="text-slate-500 font-medium">
                    {content.noAccount}{' '}
                    <Link to="/sign-up" className="text-red-600 hover:text-red-700 font-bold transition-colors">
                      {content.signUp}
                    </Link>
                  </p>
                </div>

                <form className="space-y-6">
                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 ml-1">{content.emailLabel}</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-500 transition-colors" size={20} />
                      <input
                        type="email"
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none transition-all dark:text-white"
                        placeholder="example@mail.com"
                      />
                    </div>
                  </div>

                  {/* Password Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 ml-1">{content.passwordLabel}</label>
                    <div className="relative group">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-500 transition-colors" size={20} />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className="w-full pl-12 pr-12 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none transition-all dark:text-white"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-1">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-5 h-5 rounded-lg border-slate-300 text-red-600 focus:ring-red-500 transition-all cursor-pointer"
                      />
                      <span className="text-sm font-semibold text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">
                        {content.rememberMe}
                      </span>
                    </label>
                    <a href="#" className="text-sm font-bold text-red-600 hover:text-red-700 transition-colors">
                      {content.forgotPassword}
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-red-500/20 transition-all flex items-center justify-center gap-3 group"
                  >
                    <span>{content.submitBtn}</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                {/* Social Login */}
                <div className="mt-10">
                  <div className="relative mb-8 text-center">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate-100 dark:border-slate-800"></div>
                    </div>
                    <span className="relative px-4 bg-white dark:bg-slate-900 text-sm font-bold text-slate-400 uppercase tracking-widest">
                      {content.orContinue}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-3 py-3.5 border border-slate-200 dark:border-slate-700 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-bold">
                      <Chrome size={20} className="text-red-500" />
                      <span>Google</span>
                    </button>
                    <button className="flex items-center justify-center gap-3 py-3.5 border border-slate-200 dark:border-slate-700 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-bold">
                      <Facebook size={20} className="text-blue-600" />
                      <span>Facebook</span>
                    </button>
                  </div>
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
