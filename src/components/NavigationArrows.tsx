import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

// Saytdagi barcha sahifalar tartibi
const ROUTES = ['/', '/about', '/teachers', '/students', '/courses', '/pricing', '/contact', '/policy', '/sign-in']

interface NavigationArrowsProps {
  className?: string
}

export const NavigationArrows: React.FC<NavigationArrowsProps> = ({ className = '' }) => {
  const navigate = useNavigate()
  const location = useLocation()

  // Faqat sayt ichidagi tarix
  const [history, setHistory] = useState<string[]>([location.pathname])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const currentPath = location.pathname
    setHistory(prev => {
      // Agar forward bilan keldik — keyin keladigan narsalarni kesib tashlaymiz
      const newHistory = prev.slice(0, currentIndex + 1)
      if (newHistory[newHistory.length - 1] !== currentPath) {
        const updated = [...newHistory, currentPath]
        setCurrentIndex(updated.length - 1)
        return updated
      }
      return prev
    })
  }, [location.pathname])

  const canGoBack = currentIndex > 0
  const canGoForward = currentIndex < history.length - 1

  const handleBack = () => {
    if (!canGoBack) return
    const newIndex = currentIndex - 1
    setCurrentIndex(newIndex)
    navigate(history[newIndex])
  }

  const handleForward = () => {
    if (!canGoForward) return
    const newIndex = currentIndex + 1
    setCurrentIndex(newIndex)
    navigate(history[newIndex])
  }

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {/* Back Arrow — doim xira */}
      <button
        onClick={handleBack}
        disabled={!canGoBack}
        className="inline-flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200 bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-gray-600 opacity-40 cursor-default shadow-sm"
        title="Orqaga"
      >
        <ChevronLeft size={16} />
      </button>

      {/* Forward Arrow — faol */}
      <button
        onClick={handleForward}
        disabled={!canGoForward}
        className={`inline-flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200 shadow-sm active:scale-95 ${
          canGoForward
            ? 'bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-red-600 hover:text-white cursor-pointer'
            : 'bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-gray-600 opacity-40 cursor-default'
        }`}
        title="Oldinga"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  )
}
