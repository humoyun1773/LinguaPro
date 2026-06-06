import React, { useState } from 'react'
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
import logo from '../assets/ChatGPT Image 22 apri. 2026 g., 19_50_27.png'
import { useTheme } from '../hooks/useTheme'
import { useLanguage } from '../hooks/useLanguage'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

interface NavChildItem {
  name: string;
  path: string;
}

interface NavItem {
  name: string;
  path?: string;
  children?: NavChildItem[];
}

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSpecialistOpen, setIsSpecialistOpen] = useState(false)
  const location = useLocation()

  const navItems: NavItem[] =
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
    <header className="fixed top-0 left-0 right-0 z-[100] h-[60px] w-full bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[60px] flex items-center justify-between">

        {/* --- Logo Section --- */}
        <Link to="/" className="flex items-center shrink-0">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full overflow-hidden bg-red-600/20 dark:bg-red-900/40 border-2 border-red-600/20 dark:border-red-500/30 flex items-center justify-center shadow-sm"
          >
            <img
              src={logo}
              alt="Logo"
              className="w-7 h-7 object-contain"
            />
          </motion.div>
          <div className="ml-2.5">
            <span className="text-lg font-black tracking-tighter text-gray-900 dark:text-white leading-none">
              Lingua<span className="text-red-700">Pro</span>
            </span>
          </div>
        </Link>


        {/* --- Center Nav --- */}
        <nav className="hidden md:flex items-center space-x-1 bg-gray-100/50 dark:bg-white/5 p-1 rounded-2xl border border-gray-200/10 dark:border-white/5">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.name} className="relative">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsSpecialistOpen(!isSpecialistOpen)}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-bold rounded-xl transition-colors ${
                    item.children.some((child) => location.pathname === child.path)
                      ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                      : "text-gray-600 dark:text-gray-400 hover:text-red-600"
                  }`}
                >
                  {item.name}
                  <ChevronDown className={`h-4 w-4 transition-transform ${isSpecialistOpen ? "rotate-180" : ""}`} />
                </motion.button>

                <AnimatePresence>
                  {isSpecialistOpen && (
                    <>
                      <button
                        type="button"
                        className="fixed inset-0 z-20 cursor-default"
                        onClick={() => setIsSpecialistOpen(false)}
                      />
                      <motion.div
                        initial={{ y: -8, opacity: 0, scale: 0.95 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: -8, opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
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
                to={item.path || '/'}
                className="relative block"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-4 py-2 text-sm font-bold rounded-xl transition-colors ${
                    location.pathname === item.path
                      ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                      : "text-gray-600 dark:text-gray-400 hover:text-red-600"
                  }`}
                >
                  {item.name}
                </motion.div>
              </Link>
            )
          )}
        </nav>

        {/* --- System Controls --- */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-white dark:bg-gray-900 p-1 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
            {/* Til o'zgartirgich tugmasi (Matnsiz, faqat ikonka) */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors relative group"
            >
              <Globe className="w-4 h-4 text-red-600" />
              <span className="absolute top-11 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase font-bold">
                {language}
              </span>
            </motion.button>
            
            {/* Mavzu o'zgartirgich tugmasi (Matnsiz, faqat ikonka) */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -10, opacity: 0, rotate: -45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 10, opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.15 }}
                >
                  {theme === "light" ? <Moon size={18} className="text-gray-700" /> : <Sun size={18} className="text-yellow-400" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="http://linguaproo.servequake.com/sign-in"
            className="btn-primary h-11 px-5 flex items-center justify-center"
          >
            <User size={18} />
            <span className="hidden md:inline ml-2">{language === "uz" ? "Kirish" : "Sign In"}</span>
          </motion.a>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="btn-muted h-11 w-11 p-0 md:hidden flex items-center justify-center"
          >
            {isMobileMenuOpen ? <X size={24} /> : <LayoutGrid size={24} />}
          </motion.button>
        </div>
      </div>

      {/* --- Mobile Menu --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
            className="fixed inset-0 z-[110] bg-white/95 dark:bg-gray-950/95 backdrop-blur-2xl md:hidden"
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
                        to={item.path || '/'}
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
              
              {/* Mobil menyu pastki boshqaruv qismi */}
              <div className="grid grid-cols-2 gap-3 mt-8">
                <motion.button whileTap={{ scale: 0.95 }} onClick={toggleLanguage} className="btn-muted py-4 font-bold uppercase flex items-center justify-center gap-2">
                  <Globe size={18} className="text-red-600" /> {language}
                </motion.button>
                <motion.button whileTap={{ scale: 0.95 }} onClick={toggleTheme} className="btn-muted py-4 flex items-center justify-center">
                  {theme === "light" ? <Moon size={18} /> : <Sun size={18} className="text-yellow-400" />}
                </motion.button>
                <motion.a whileTap={{ scale: 0.98 }} href="http://linguaproo.servequake.com/sign-in" className="btn-primary col-span-2 py-5 text-center font-bold flex items-center justify-center gap-2">
                  <User size={18} /> {language === "uz" ? "KIRISH" : "SIGN IN"}
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}