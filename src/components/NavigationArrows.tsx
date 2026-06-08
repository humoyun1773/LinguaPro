import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

interface NavigationArrowsProps {
  className?: string
}

export const NavigationArrows: React.FC<NavigationArrowsProps> = ({ className = '' }) => {
  const navigate = useNavigate()
  const location = useLocation()
  
  // Determine if we're on the home page
  const isHomePage = location.pathname === '/'
  
  // Navigation pages (excluding home and sign-in)
  const navigationPages = [
    '/',
    '/about',
    '/courses',
    '/teachers',
    '/students',
    '/events',
    '/contact',
    '/pricing',
    '/policy',
  ]
  
  const currentPageIndex = navigationPages.indexOf(location.pathname)
  
  const handlePrevious = () => {
    if (currentPageIndex > 0) {
      navigate(navigationPages[currentPageIndex - 1])
    }
  }
  
  const handleNext = () => {
    if (currentPageIndex < navigationPages.length - 1) {
      navigate(navigationPages[currentPageIndex + 1])
    }
  }
  
  // Determine if arrows should be active
  const isPreviousActive = currentPageIndex > 0
  const isNextActive = currentPageIndex < navigationPages.length - 1
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Previous/Back Arrow */}
      <button
        onClick={handlePrevious}
        disabled={!isPreviousActive}
        className={`inline-flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-200 ${
          isPreviousActive
            ? 'bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-red-600 hover:text-white cursor-pointer'
            : 'bg-gray-50 dark:bg-gray-900/50 text-gray-300 dark:text-gray-700 cursor-not-allowed'
        }`}
        aria-label="Previous page"
      >
        <ChevronLeft size={18} />
      </button>
      
      {/* Next Arrow */}
      <button
        onClick={handleNext}
        disabled={!isNextActive}
        className={`inline-flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-200 ${
          isNextActive
            ? 'bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-red-600 hover:text-white cursor-pointer'
            : 'bg-gray-50 dark:bg-gray-900/50 text-gray-300 dark:text-gray-700 cursor-not-allowed'
        }`}
        aria-label="Next page"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  )
}
