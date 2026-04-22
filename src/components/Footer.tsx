import React from 'react'
import { Link } from 'react-router-dom'

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Bosh sahifa', path: '/' },
    { name: 'Biz haqimizda', path: '/about' },
    { name: 'Kurslar', path: '/courses' },
    { name: 'Narxlar', path: '/pricing' },
    { name: 'Aloqa', path: '/contact' },
  ]

  const legalLinks = [
    { name: 'Maxfiylik Siyosati', path: '/policy' },
    { name: 'Xizmat Shartlari', path: '/policy' },
    { name: 'Cookie Siyosati', path: '/policy' },
  ]

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Info */}
          <div>
            <span className="text-2xl font-bold text-red-500">LinguaPro</span>
            <p className="mt-4 text-gray-400">
              123 Education Street
              <br />
              Learning City, LC 12345
            </p>
            <div className="mt-4 flex space-x-4">
              <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 w-16 h-16 bg-gray-700 rounded"></div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 LinguaPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
