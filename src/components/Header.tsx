import React, { useState, useEffect } from 'react'
import {
  Moon,
  Sun,
  X,
  Globe,
  User,
  ChevronDown,
  ChevronRight,
  LayoutGrid,
} from 'lucide-react'
import logo from '../assets/ChatGPT Image 22 апр. 2026 г., 19_50_27.png'
import { useTheme } from '../hooks/useTheme'
import { useLanguage } from '../hooks/useLanguage'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSpecialistOpen, setIsSpecialistOpen] = useState(false)
  const location = useLocation()

  const navItems =
    language === 'uz'
      ? [
          { name: 'Bosh sahifa', path: '/' },
          { name: 'Biz haqimizda', path: '/about' },
          {
            name: 'Mutaxasislar',
            children: [
              { name: 'Ustozlar', path: '/teachers' },
              { name: "O'quvchilar", path: '/students' },
            ],
          },
          { name: 'Kurslar', path: '/courses' },
        ]
      : [
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' },
          {
            name: 'Specialist',
            children: [
              { name: 'Teachers', path: '/teachers' },
              { name: 'Students', path: '/students' },
            ],
          },
          { name: 'Courses', path: '/courses' },
        ]

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] h-[80px] w-full bg-white/90 dark:bg-gray-950/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
        {/* --- Logo Section --- */}
        <Link to="/" className="flex items-center shrink-0">
          <div className="w-11 h-11 rounded-full overflow-hidden bg-red-600/20 dark:bg-red-900/40 border-2 border-red-600/20 dark:border-red-500/30 flex items-center justify-center shadow-sm">
            <img
              src={logo}
              alt="Logo"
              className="w-8 h-8 object-contain"
            />
          </div>
          <div className="ml-3">
            <span className="text-xl font-black tracking-tighter text-gray-900 dark:text-white leading-none">
              Lingua<span className="text-red-700">Pro</span>
            </span>
          </div>
        </Link>


        {/* --- Center Nav --- */}
        <nav className="hidden md:flex items-center space-x-1 bg-gray-100/50 dark:bg-white/5 p-1 rounded-2xl border border-gray-200/10 dark:border-white/5">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.name} className="relative">
                <button
                  type="button"
                  onClick={() => setIsSpecialistOpen(!isSpecialistOpen)}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-bold rounded-xl transition-colors ${
                    item.children.some((child) => location.pathname === child.path)
                      ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                      : "text-gray-600 dark:text-gray-400 hover:text-red-600"
                  }`}
                >
                  {item.name}
                  <ChevronDown className={`h-4 w-4 transition-transform ${isSpecialistOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isSpecialistOpen && (
                    <>
                      <button
                        type="button"
                        className="fixed inset-0 z-20 cursor-default"
                        onClick={() => setIsSpecialistOpen(false)}
                      />
                      <motion.div
                        initial={{ y: -4, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -4, opacity: 0 }}
                        className="absolute left-1/2 top-full z-30 mt-2 w-44 -translate-x-1/2 rounded-2xl border border-gray-200 bg-white p-1.5 shadow-xl dark:border-gray-800 dark:bg-gray-900"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={() => setIsSpecialistOpen(false)}
                            className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-colors ${
                              location.pathname === child.path
                                ? "bg-red-600 text-white"
                                : "text-gray-700 hover:bg-gray-100 hover:text-red-600 dark:text-gray-300 dark:hover:bg-gray-800"
                            }`}
                          >
                            <span>{child.name}</span>
                            <ChevronRight size={16} className="opacity-45" />
                          </Link>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-bold rounded-xl transition-colors ${
                  location.pathname === item.path
                    ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                    : "text-gray-600 dark:text-gray-400 hover:text-red-600"
                }`}
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        {/* --- System Controls --- */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1 bg-white dark:bg-gray-900 p-1 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
            <button
              onClick={toggleLanguage}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <Globe className="w-4 h-4 text-red-600" />
            </button>
            <button
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>

          <a
            href="http://linguaproo.servequake.com/sign-in"
            className="btn-primary h-11 px-5"
          >
            <User size={18} />
            <span className="hidden md:inline ml-2">{language === "uz" ? "Kirish" : "Sign In"}</span>
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="btn-muted h-11 w-11 p-0 md:hidden flex items-center justify-center"
          >
            {isMobileMenuOpen ? <X size={24} /> : <LayoutGrid size={24} />}
          </button>
        </div>
      </div>

      {/* --- Mobile Menu --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-white/90 dark:bg-gray-950/90 backdrop-blur-2xl md:hidden"
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-black tracking-tighter">LINGUAPRO</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="btn-muted p-3">
                  <X />
                </button>
              </div>
              <div className="space-y-3 flex-1 overflow-y-auto">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-3xl space-y-2">
                        <div className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-2 px-2">{item.name}</div>
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-2xl font-bold"
                          >
                            {child.name} <ChevronRight size={18} className="opacity-30" />
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-between p-5 rounded-3xl font-bold ${
                          location.pathname === item.path ? "bg-red-600 text-white" : "bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {item.name} <ChevronRight size={18} className="opacity-30" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3 mt-8">
                <button onClick={toggleLanguage} className="btn-muted py-4 font-bold uppercase">{language}</button>
                <button onClick={toggleTheme} className="btn-muted py-4 flex items-center justify-center">
                  {theme === "light" ? <Moon /> : <Sun />}
                </button>
                <a href="http://linguaproo.servequake.com/sign-in" className="btn-primary col-span-2 py-5 text-center font-bold">
                  {language === "uz" ? "KIRISH" : "SIGN IN"}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
