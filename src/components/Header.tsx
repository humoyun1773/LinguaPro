import React, { useState } from 'react'
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
            className="hidden md:flex w-10 h-10 rounded-full overflow-hidden bg-red-600/20 dark:bg-red-900/40 border-2 border-red-600/20 dark:border-red-500/30 items-center justify-center shadow-sm"
          >
            <img
              src={logo}
              alt="Logo"
              className="w-7 h-7 object-contain"
            />
          </motion.div>
          <div className="md:ml-2.5">
            <span className="text-xl md:text-lg font-black tracking-tighter text-gray-900 dark:text-white leading-none">
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
                          <NavLink
                            key={child.path}
                            to={child.path}
                            end
                            onClick={() => setIsSpecialistOpen(false)}
                            className={({ isActive }) => 
                              `flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-colors ${
                                isActive
                                  ? "bg-red-600 text-white"
                                  : "text-gray-700 hover:bg-gray-100 hover:text-red-600 dark:text-gray-300 dark:hover:bg-gray-800"
                              }`
                            }
                          >
                            <span>{child.name}</span>
                            <ChevronRight size={16} className="opacity-45" />
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
                  `px-4 py-2 text-sm font-bold rounded-xl transition-colors block ${
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
        <div className="flex items-center gap-2">
          {/* Til + Theme — faqat desktop */}
          <div className="hidden md:flex items-center gap-1 bg-white dark:bg-gray-900 p-1 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
            {/* Til o'zgartirgich tugmasi */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="inline-flex h-9 items-center justify-center rounded-lg px-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <span className="text-xs font-black uppercase tracking-widest text-gray-700 dark:text-gray-300">
                {language === 'uz' ? 'UZ' : 'EN'}
              </span>
            </motion.button>
            
            {/* Mavzu o'zgartirgich tugmasi */}
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

          {/* Sign In — desktop: matn+ikonka, mobile: ikonka + matn */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="http://linguaproo.servequake.com/sign-in"
            className="inline-flex items-center justify-center gap-2 rounded-2xl font-bold transition-all duration-200 bg-red-600 text-white shadow-lg shadow-red-600/20 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/25 h-10 md:h-11 px-3 md:px-5 text-sm"
          >
            <User size={17} />
            <span className="font-black text-sm">{language === "uz" ? "Kirish" : "Sign In"}</span>
          </motion.a>

          {/* Hamburger — faqat mobile */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="btn-muted h-10 w-10 p-0 md:hidden flex items-center justify-center"
          >
            {isMobileMenuOpen ? <X size={22} /> : <LayoutGrid size={22} />}
          </motion.button>
        </div>
      </div>

      {/* --- Mobile Menu --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Tashqi zona — bosilsa sidebar yopiladi */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[109] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-0 right-0 h-screen z-[110] w-80 bg-white dark:bg-gray-950 md:hidden flex flex-col shadow-2xl"
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

            {/* Nav Links */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <div className="space-y-1">
                        {/* Mutaxasislar — label */}
                        <div className="px-4 pt-5 pb-1 text-xs font-extrabold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                          {item.name}
                        </div>
                        {/* Ustozlar / O'quvchilar links */}
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

            {/* Bottom Controls */}
            <div className="p-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 shrink-0">
              <div className="grid grid-cols-2 gap-3 mb-3">
                <button
                  onClick={toggleLanguage}
                  className="h-12 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 font-black flex items-center justify-center text-gray-900 dark:text-white text-base tracking-wide uppercase"
                >
                  {language === 'uz' ? 'UZ' : 'EN'}
                </button>
                <button
                  onClick={toggleTheme}
                  className="h-12 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-900 dark:text-white"
                >
                  {theme === "light" ? <Moon size={18} /> : <Sun size={18} className="text-yellow-400" />}
                </button>
              </div>
              <motion.a
                whileTap={{ scale: 0.98 }}
                href="http://linguaproo.servequake.com/sign-in"
                className="btn-primary w-full h-14 rounded-2xl text-base font-black flex items-center justify-center gap-3"
              >
                <User size={18} />
                {language === "uz" ? "KIRISH" : "SIGN IN"}
              </motion.a>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}