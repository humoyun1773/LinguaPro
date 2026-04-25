import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { CoursesPage } from './pages/CoursesPage'
import { EventsPage } from './pages/EventsPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { SignInPage } from './pages/SignInPage'
import { SignUpPage } from './pages/SignUpPage'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'

export const App = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/pricing" element={<CoursesPage />} />
            <Route path="/search" element={<CoursesPage />} />
            <Route path="/practice" element={<CoursesPage />} />
            <Route path="/policy" element={<CoursesPage />} />
            <Route path="/order" element={<CoursesPage />} />
            <Route path="/testimonials" element={<CoursesPage />} />
            <Route path="/self-certificates" element={<CoursesPage />} />
            <Route path="/social-certifications" element={<CoursesPage />} />
            <Route path="/get-certificate" element={<CoursesPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </LanguageProvider>
  )
}
