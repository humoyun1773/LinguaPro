import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { AboutPage } from "./pages/AboutPage"
import { CoursesPage } from "./pages/CoursesPage"
import { TeachersPage } from "./pages/TeachersPage"
import { StudentsPage } from "./pages/StudentsPage"
import { EventsPage } from "./pages/EventsPage"
import { ContactPage } from "./pages/ContactPage"
import { SignInPage } from "./pages/SignInPage"
import { PricingPage } from "./pages/PricingPage"
import { PolicyPage } from "./pages/PolicyPage"
import { ThemeProvider } from "./contexts/ThemeContext"
import { LanguageProvider } from "./contexts/LanguageContext"

export const App = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/policy" element={<PolicyPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </LanguageProvider>
  )
}
