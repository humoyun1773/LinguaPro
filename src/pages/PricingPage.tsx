import React from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { useLanguage } from "../hooks/useLanguage"
import { Reveal } from "../components/animation/Reveal"
import { StaggerText } from "../components/animation/StaggerText"
import { Check } from "lucide-react"

export const PricingPage: React.FC = () => {
  const { language } = useLanguage()

  const content =
    language === "uz"
      ? {
          heroTitle: "Narxlar",
          heroDesc: "Barcha talabalar uchun moslashuvchan paketlar",
          starter: "Boshlang'ich",
          professional: "Professional",
          premium: "Premium",
          month: "/oy",
          getStarted: "Boshlash",
          features: [
            "Bir fani kursi",
            "Haftalik 2 dars",
            "Asosiy qo'llab-quvvatlash",
          ],
          featuresProf: [
            "Barcha kurslar",
            "Haftalik 4 dars",
            "Priority qo'llab-quvvatlash",
            "Shaxsiy mentor",
          ],
          featuresPrem: [
            "Barcha kurslar",
            "Cheksiz darslar",
            "24/7 qo'llab-quvvatlash",
            "Shaxsiy mentor",
            "Sertifikat",
          ],
        }
      : {
          heroTitle: "Pricing Plans",
          heroDesc: "Flexible packages for all learners",
          starter: "Starter",
          professional: "Professional",
          premium: "Premium",
          month: "/month",
          getStarted: "Get Started",
          features: ["Single course", "2 lessons per week", "Basic support"],
          featuresProf: [
            "All courses",
            "4 lessons per week",
            "Priority support",
            "Personal mentor",
          ],
          featuresPrem: [
            "All courses",
            "Unlimited lessons",
            "24/7 support",
            "Personal mentor",
            "Certificate",
          ],
        }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal>
            <StaggerText
              text={content.heroTitle}
              className="text-4xl md:text-6xl font-black leading-tight mb-6 block"
            />
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              {content.heroDesc}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <Reveal delay={0}>
              <div className="relative p-8 rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4">{content.starter}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">$49</span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {content.month}
                  </span>
                </div>
                <button className="w-full py-3 px-6 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl mb-8 transition-colors">
                  {content.getStarted}
                </button>
                <ul className="space-y-3">
                  {content.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-red-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Professional */}
            <Reveal delay={0.1}>
              <div className="relative p-8 rounded-3xl border-2 border-red-600 bg-white dark:bg-gray-800 shadow-lg transform scale-105">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  {content.professional}
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">$99</span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {content.month}
                  </span>
                </div>
                <button className="w-full py-3 px-6 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl mb-8 transition-colors">
                  {content.getStarted}
                </button>
                <ul className="space-y-3">
                  {content.featuresProf.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-red-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Premium */}
            <Reveal delay={0.2}>
              <div className="relative p-8 rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4">{content.premium}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">$199</span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {content.month}
                  </span>
                </div>
                <button className="w-full py-3 px-6 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl mb-8 transition-colors">
                  {content.getStarted}
                </button>
                <ul className="space-y-3">
                  {content.featuresPrem.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-red-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
