import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import {
  Moon,
  Sun,
  X,
  User,
  ChevronDown,
  ChevronRight,
  LayoutGrid,
} from 'lucide-react'
import logo from '../assets/ChatGPT Image 22 апр. 2026 г., 19_50_27.png'
import { useTheme } from '../hooks/useTheme'
import { useLanguage } from '../hooks/useLanguage'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router-dom'

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

  // Escape tugmasi yoki scroll bilan sidebar yopilsin
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false)
    }
    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMobileMenuOpen])

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
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-[60px] flex items-center justify-between gap-2">

        {/* --- Logo Section --- */}
        <Link to="/" className="flex items-center shrink-0">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex w-9 h-9 rounded-full overflow-hidden bg-red-600/20 dark:bg-red-900/40 border-2 border-red-600/20 dark:border-red-500/30 items-center justify-center shadow-sm"
          >
            <img src={logo} alt="Logo" className="w-6 h-6 object-contain" />
          </motion.div>
          <div className="md:ml-2">
            <span className="text-lg font-black tracking-tighter text-gray-900 dark:text-white leading-none">
              Lingua<span className="text-red-700">Pro</span>
            </span>
          </div>
        </Link>

        {/* --- Center Nav — md+ (planshet va desktop) --- */}
        <nav className="hidden md:flex items-center bg-gray-100/50 dark:bg-white/5 p-1 rounded-2xl border border-gray-200/10 dark:border-white/5 md:flex-1 md:justify-between lg:flex-none lg:justify-center lg:gap-2 mx-2">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.name} className="relative">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsSpecialistOpen(!isSpecialistOpen)}
                  className={`flex items-center gap-1 px-3 py-1.5 lg:px-6 lg:py-2 text-xs lg:text-sm font-bold rounded-xl transition-colors ${
                    item.children.some((child) => location.pathname === child.path)
                      ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                      : "text-gray-600 dark:text-gray-400 hover:text-red-600"
                  }`}
                >
                  {item.name}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isSpecialistOpen ? "rotate-180" : ""}`} />
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
                        className="absolute left-1/2 top-full z-30 mt-2 w-40 -translate-x-1/2 rounded-2xl border border-gray-200 bg-white p-1.5 shadow-xl dark:border-gray-800 dark:bg-gray-900"
                      >
                        {item.children.map((child) => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            end
                            onClick={() => setIsSpecialistOpen(false)}
                            className={({ isActive }) =>
                              `flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold transition-colors ${
                                isActive
                                  ? "bg-red-600 text-white"
                                  : "text-gray-700 hover:bg-gray-100 hover:text-red-600 dark:text-gray-300 dark:hover:bg-gray-800"
                              }`
                            }
                          >
                            <span>{child.name}</span>
                            <ChevronRight size={14} className="opacity-45" />
                          </NavLink>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={item.path}
                to={item.path || '/'}
                end
                className={({ isActive }) =>
                  `px-3 py-1.5 lg:px-6 lg:py-2 text-xs lg:text-sm font-bold rounded-xl transition-colors block ${
                    isActive
                      ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                      : "text-gray-600 dark:text-gray-400 hover:text-red-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            )
          )}
        </nav>

        {/* --- System Controls --- */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Til + Theme — faqat desktop (lg+) */}
          <div className="hidden lg:flex items-center gap-0.5 bg-white dark:bg-gray-900 p-1 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="inline-flex h-8 items-center justify-center rounded-lg px-2.5 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <span className="text-xs font-black uppercase tracking-widest text-gray-700 dark:text-gray-300">
                {language === 'uz' ? 'UZ' : 'EN'}
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -10, opacity: 0, rotate: -45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 10, opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.15 }}
                >
                  {theme === "light" ? <Moon size={16} className="text-gray-700" /> : <Sun size={16} className="text-yellow-400" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Sign In — md+ */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="http://linguaproo.servequake.com/sign-in"
            className="hidden md:inline-flex items-center justify-center gap-1.5 rounded-xl font-bold transition-all duration-200 bg-red-600 text-white shadow-lg shadow-red-600/20 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/25 h-9 px-3 text-xs"
          >
            <User size={15} />
            <span className="font-black text-xs">{language === "uz" ? "Kirish" : "Sign In"}</span>
          </motion.a>

          {/* Hamburger — faqat mobile (md gacha) */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="h-10 w-10 md:hidden flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {isMobileMenuOpen ? <X size={22} /> : <LayoutGrid size={22} />}
          </motion.button>
        </div>
      </div>

      {/* --- Mobile Menu (portal orqali body ga) --- */}
      {createPortal(
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Overlay — tashqariga bosilsa yopiladi */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[200] md:hidden cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Sidebar panel */}
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="fixed top-0 right-0 h-screen z-[201] w-80 bg-white dark:bg-gray-950 md:hidden flex flex-col shadow-2xl"
              >
              {/* Mobile Sidebar Header */}
              <div className="h-[60px] px-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800 shrink-0">
                <span className="text-xl font-black tracking-tighter text-gray-900 dark:text-white">
                  Lingua<span className="text-red-700">Pro</span>
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Til + Tema — nav linklar tepasida */}
              <div className="px-4 pt-4 pb-2 shrink-0">
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={toggleLanguage}
                    className="h-11 rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 font-black flex items-center justify-center text-gray-900 dark:text-white text-sm tracking-widest uppercase"
                  >
                    {language === 'uz' ? 'UZ' : 'EN'}
                  </button>
                  <button
                    onClick={toggleTheme}
                    className="h-11 rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center gap-2 text-gray-900 dark:text-white font-semibold text-sm"
                  >
                    {theme === "light"
                      ? <><Moon size={17} /><span>{language === 'uz' ? 'Tungi' : 'Dark'}</span></>
                      : <><Sun size={17} className="text-yellow-400" /><span>{language === 'uz' ? 'Kunduz' : 'Light'}</span></>
                    }
                  </button>
                </div>
              </div>

              {/* Nav Links */}
              <div className="flex-1 overflow-y-auto px-4 pb-4">
                <div className="space-y-1 mt-2">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      {item.children ? (
                        <div className="space-y-1">
                          <div className="px-4 pt-4 pb-1 text-xs font-extrabold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                            {item.name}
                          </div>
                          {item.children.map((child) => (
                            <NavLink
                              key={child.path}
                              to={child.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={({ isActive }) =>
                                `flex items-center justify-between px-4 py-3 rounded-2xl text-[15px] font-semibold transition-all ${
                                  isActive
                                    ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900"
                                }`
                              }
                            >
                              <span>{child.name}</span>
                              <ChevronRight size={15} className="opacity-40" />
                            </NavLink>
                          ))}
                        </div>
                      ) : (
                        <NavLink
                          to={item.path || '/'}
                          end
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={({ isActive }) =>
                            `flex items-center justify-between px-4 py-3.5 rounded-2xl text-[15px] font-semibold transition-all ${
                              isActive
                                ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                                : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900"
                            }`
                          }
                        >
                          <span>{item.name}</span>
                          <ChevronRight size={15} className="opacity-40" />
                        </NavLink>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
        </AnimatePresence>,
        document.body
      )}
    </header>
  )
}