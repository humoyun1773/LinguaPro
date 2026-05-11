import { createContext } from 'react'

export type Language = 'uz' | 'en'

export interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)
