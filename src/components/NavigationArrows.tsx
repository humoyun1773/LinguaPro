import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface NavigationArrowsProps {
  className?: string
}

export const NavigationArrows: React.FC<NavigationArrowsProps> = ({ className = '' }) => {
  const navigate = useNavigate()
  
  const handleBack = () => {
    // Go back exactly one step in history
    navigate(-1)
  }
  
  const handleForward = () => {
    // Go forward exactly one step in history
    navigate(1)
  }
  
  // The user wants arrows to stay active unless there's truly no history.
  // Since detecting history.forward() availability is not reliably possible in browsers 
  // without complex state tracking, we keep them active to ensure "normal behavior" 
  // where the browser handles the click.
  
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {/* Back Arrow */}
      <button
        onClick={handleBack}
        className="inline-flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-red-600 hover:text-white cursor-pointer shadow-sm active:scale-95"
        title="Orqaga"
      >
        <ChevronLeft size={16} />
      </button>
      
      {/* Forward Arrow */}
      <button
        onClick={handleForward}
        className="inline-flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-red-600 hover:text-white cursor-pointer shadow-sm active:scale-95"
        title="Oldinga"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  )
}
