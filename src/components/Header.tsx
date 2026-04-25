import React, { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X, Globe, User } from 'lucide-react'
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

  // Scroll bo'lganda header dizaynini o'zgartirish
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
          { name: 'Sharhlar', path: '/testimonials' },
        ]
      : [
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
          { name: 'Courses', path: '/courses' },
          { name: 'Contact', path: '/contact' },
          { name: 'Reviews', path: '/testimonials' },
        ]

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-[-10px]">
            <div className="w-14 h-14 rounded-xl overflow-hidden">
              <img
                src="/src/assets/ChatGPT Image 22 апр. 2026 г., 19_50_27.png"
                alt="LinguaPro Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">
              Lingua<span className="text-red-700">Pro</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-300 rounded-full
                  ${
                    location.pathname === item.path
                      ? 'text-red-700 dark:text-red-500'
                      : 'text-gray-600 dark:text-gray-300 hover:text-red-700 dark:hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20'
                  }
                `}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-700 rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-1">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all active:scale-90"
              title="Change Language"
            >
              <div className="flex items-center space-x-1">
                <Globe className="w-5 h-5" />
                <span className="text-xs font-bold uppercase">{language}</span>
              </div>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all active:scale-90"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>

            {/* Login Button */}
            <Link
              to="/sign-in"
              className="hidden sm:flex items-center space-x-2 bg-red-700 hover:bg-red-800 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-red-500/20 active:scale-95"
            >
              <User className="w-4 h-4" />
              <span>{language === 'uz' ? 'Kirish' : 'Login'}</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-2xl border-t dark:border-gray-800 md:hidden overflow-hidden"
            >
              <div className="p-4 space-y-2">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl font-medium transition-all ${
                        location.pathname === item.path
                          ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-500'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 mt-2 border-t dark:border-gray-800">
                  <Link
                    to="/sign-in"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center space-x-2 w-full bg-red-700 text-white p-3 rounded-xl font-bold"
                  >
                    <User className="w-5 h-5" />
                    <span>{language === 'uz' ? 'Kirish' : 'Login'}</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
