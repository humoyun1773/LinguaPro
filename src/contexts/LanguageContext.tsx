import React, { useState, ReactNode } from 'react'
import {
  LanguageContext,
  type Language,
} from './language-context'

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('uz')

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'uz' ? 'en' : 'uz'))
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
