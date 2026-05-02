import React, { useState, useEffect } from 'react'
import {
  Moon,
  Sun,
  Menu,
  X,
  Globe,
  User,
  ChevronRight,
  LayoutGrid,
} from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems =
    language === 'uz'
      ? [
          { name: 'Bosh sahifa', path: '/' },
          { name: 'Biz haqimizda', path: '/about' },
          { name: 'Kurslar', path: '/courses' },
          { name: 'Aloqa', path: '/contact' },
        ]
      : [
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' },
          { name: 'Courses', path: '/courses' },
          { name: 'Contact', path: '/contact' },
        ]

  return (
    <header className="fixed w-full top-0 z-[100] transition-all duration-500">
      {/* Background Layer with Masking */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-2xl shadow-2xl border-b border-gray-200/50 dark:border-gray-800/50 h-[70px]'
            : 'bg-transparent h-[100px]'
        }`}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div
          className={`flex justify-between items-center transition-all duration-500 ${scrolled ? 'h-[70px]' : 'h-[100px]'}`}
        >
          {/* --- Logo Section (As requested: Image stays same) --- */}
          <Link to="/" className="flex items-center group relative">
            <div className="w-14 h-14 rounded-2xl overflow-hidden relative z-10">
              <img
                src="/src/assets/ChatGPT Image 22 апр. 2026 г., 19_50_27.png"
                alt="LinguaPro Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white leading-none group-hover:text-red-600 transition-colors">
                Lingua<span className="text-red-700">Pro</span>
              </span>
              <div className="h-[2px] w-0 group-hover:w-full bg-red-600 transition-all duration-300" />
            </div>
          </Link>

          {/* --- Minimalist Center Nav --- */}
          <nav className="hidden md:flex items-center space-x-2 bg-gray-100/50 dark:bg-white/5 p-1.5 rounded-2xl border border-gray-200/20 dark:border-white/5">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-5 py-2 text-sm font-bold rounded-xl transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:text-red-600'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="pill"
                    className="absolute inset-0 bg-red-700 rounded-xl shadow-[0_4px_12px_rgba(185,28,28,0.3)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* --- System Controls --- */}
          <div className="flex items-center gap-2">
            {/* Lang & Theme Duo */}
            <div className="hidden sm:flex items-center gap-1 bg-white dark:bg-gray-900 p-1 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
              <button
                onClick={toggleLanguage}
                className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                title="Language"
              >
                <Globe className="w-4 h-4 text-red-600" />
              </button>
              <button
                onClick={toggleTheme}
                className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </div>

            {/* Profile CTA */}
            <Link
              to="/sign-in"
              className="group flex items-center justify-center w-12 h-12 md:w-auto md:px-6 bg-gray-900 dark:bg-red-700 text-white rounded-2xl font-bold text-sm hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all active:scale-95"
            >
              <User size={18} />
              <span className="hidden md:inline ml-2">
                {language === 'uz' ? 'Kirish' : 'Sign In'}
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <LayoutGrid size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Full-Screen Menu --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[110] p-4 md:hidden"
          >
            <div
              className="absolute inset-0 bg-white/90 dark:bg-gray-950/90 backdrop-blur-2xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div className="relative w-full h-full bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800 p-8 flex flex-col justify-between overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl -mr-32 -mt-32" />

              <div className="relative">
                <div className="flex justify-between items-center mb-12">
                  <span className="text-xl font-black italic tracking-tighter">
                    LINGUAPRO
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-3 bg-gray-100 dark:bg-gray-800 rounded-2xl"
                  >
                    <X />
                  </button>
                </div>

                <div className="space-y-4">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.path}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`group flex items-center justify-between p-5 rounded-3xl transition-all ${
                          location.pathname === item.path
                            ? 'bg-red-600 text-white'
                            : 'bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        <span className="text-xl font-bold">{item.name}</span>
                        <ChevronRight
                          className={`transition-transform group-hover:translate-x-1 ${location.pathname === item.path ? 'opacity-100' : 'opacity-30'}`}
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative grid grid-cols-2 gap-3 mt-8">
                <button
                  onClick={toggleLanguage}
                  className="p-5 bg-gray-100 dark:bg-gray-800 rounded-3xl flex items-center justify-center gap-2 font-black uppercase"
                >
                  <Globe size={18} className="text-red-600" /> {language}
                </button>
                <button
                  onClick={toggleTheme}
                  className="p-5 bg-gray-100 dark:bg-gray-800 rounded-3xl flex items-center justify-center transition-all active:rotate-180"
                >
                  {theme === 'light' ? <Moon /> : <Sun />}
                </button>
                <Link
                  to="/sign-in"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="col-span-2 p-5 bg-red-700 text-white rounded-3xl font-black text-center shadow-lg shadow-red-700/30"
                >
                  {language === 'uz' ? 'KIRISH' : 'SIGN IN'}
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
