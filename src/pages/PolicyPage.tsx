import React from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { useLanguage } from "../hooks/useLanguage"
import { Reveal } from "../components/animation/Reveal"
import { StaggerText } from "../components/animation/StaggerText"

export const PolicyPage: React.FC = () => {
  const { language } = useLanguage()

  const content =
    language === "uz"
      ? {
          policyTitle: "Qonuniy Siyosatlar",
          privacyTitle: "Maxfiylik Siyosati",
          privacyText:
            "Biz sizning shaxsiy ma'lumotlaringizni muhofaza qilishga sadohated. Sizning ma'lumotlaringizniya faqat taqdim etilgan xizmatlarni to'layishda foydalaniladi.",
          termsTitle: "Xizmat Shartlari",
          termsText:
            "Bu xizmatlardan foydalanish uchun siz bizning shartlarimizga rozilik bildirishiniz kerak. Barcha qonuniy huquqlar saqlanadi.",
          cookieTitle: "Cookie Siyosati",
          cookieText:
            "Biz sizning taassurotingizni yaxshilash uchun cookie-lardan foydalanmiz. Siz brauzer sozlamalaringizdagi cookie-larni o'chirish mumkin.",
          lastUpdated: "Oxirgi yangilash",
        }
      : {
          policyTitle: "Legal Policies",
          privacyTitle: "Privacy Policy",
          privacyText:
            "We are committed to protecting your privacy. Your information is used only to provide the services you've requested.",
          termsTitle: "Terms of Service",
          termsText:
            "By using our services, you agree to our terms and conditions. All legal rights are reserved.",
          cookieTitle: "Cookie Policy",
          cookieText:
            "We use cookies to improve your experience. You can disable cookies in your browser settings.",
          lastUpdated: "Last Updated",
        }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <Reveal>
            <StaggerText
              text={content.policyTitle}
              className="text-4xl md:text-6xl font-black leading-tight mb-6 block"
            />
          </Reveal>
        </div>
      </section>

      {/* Policies Content */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Privacy Policy */}
          <Reveal>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold mb-4 text-red-600">
                {content.privacyTitle}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {content.privacyText}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {content.lastUpdated}: January 2025
              </p>
            </div>
          </Reveal>

          {/* Terms of Service */}
          <Reveal delay={0.1}>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold mb-4 text-red-600">
                {content.termsTitle}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {content.termsText}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {content.lastUpdated}: January 2025
              </p>
            </div>
          </Reveal>

          {/* Cookie Policy */}
          <Reveal delay={0.2}>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold mb-4 text-red-600">
                {content.cookieTitle}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {content.cookieText}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {content.lastUpdated}: January 2025
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
