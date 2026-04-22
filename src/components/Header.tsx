import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const navItems = [
    'Bosh sahifa',
    'Biz haqimizda',
    'Kurslar',
    'Aloqa',
    'Sharhlar',
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-900 shadow-sm fixed w-full top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-red-700">LinguaPro</span>
            </Link>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => {
              const pageMap: { [key: string]: string } = {
                'Bosh sahifa': '/',
                'Biz haqimizda': '/about',
                Kurslar: '/courses',
                Aloqa: '/contact',
                Sharhlar: '/testimonials',
              }
              return (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={pageMap[item]}
                    className="text-gray-700 dark:text-gray-300 hover:text-red-700 dark:hover:text-red-500 transition-colors font-medium"
                  >
                    {item}
                  </Link>
                </motion.div>
              )
            })}
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/sign-in"
                className="text-gray-700 dark:text-gray-300 hover:text-red-700 transition-colors font-medium"
              >
                Kirish
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/sign-up"
                className="bg-red-700 text-white px-6 py-2 rounded-full hover:bg-red-800 transition-colors font-medium"
              >
                Ro'yxatdan o'tish
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
