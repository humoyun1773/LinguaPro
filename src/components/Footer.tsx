import React from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Send } from 'lucide-react'
import logo from '../assets/ChatGPT Image 22 апр. 2026 г., 19_50_27.png'

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Bosh sahifa', path: '/' },
    { name: 'Biz haqimizda', path: '/about' },
    { name: 'Kurslar', path: '/courses' },
    { name: 'Ustozlar', path: '/teachers' },
    { name: "O'quvchilar", path: '/students' },
    { name: 'Narxlar', path: '/pricing' },
    { name: 'Aloqa', path: '/contact' },
  ]

  const legalLinks = [
    { name: 'Maxfiylik Siyosati', path: '/policy' },
    { name: 'Xizmat Shartlari', path: '/policy' },
    { name: 'Cookie Siyosati', path: '/policy' },
  ]

  return (
    <footer className="bg-gray-900 text-white mt-12 sm:mt-16 md:mt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-3 sm:gap-8 items-start">
          {/* Logo and Info */}
          <div className="col-span-1">
            <span className="text-sm sm:text-2xl font-bold text-red-500 block">
              LinguaPro
            </span>
            <p className="hidden sm:block mt-4 text-gray-400 text-base">
              123 Education Street
              <br />
              Learning City, LC 12345
            </p>
            <div className="mt-2 sm:mt-4 flex space-x-1.5 sm:space-x-4">
              <a
                href="https://www.instagram.com/linguapro.karshi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Instagram className="w-3.5 h-3.5 sm:w-6 sm:h-6 text-white" />
              </a>
              <a
                href="https://t.me/TalipovShoh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Send className="w-3.5 h-3.5 sm:w-6 sm:h-6 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm sm:text-lg font-semibold mb-2 sm:mb-4">
              Quick Links
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-xs sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm sm:text-lg font-semibold mb-2 sm:mb-4">
              Legal
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-xs sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 sm:mt-6">
              <img
                src={logo}
                alt="LinguaPro Logo"
                className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800 text-center text-gray-400">
          <p className="text-xs sm:text-sm">
            &copy; 2024 LinguaPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
