import React from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import {
  Globe,
  PenTool,
  Trophy,
  Lightbulb,
  Scale,
  Target,
  Calendar,
  Sparkles,
} from "lucide-react"
import aboutImage from "../assets/imgs.webp"
import { motion } from "framer-motion"
import { useLanguage } from "../hooks/useLanguage"

export const AboutPage: React.FC = () => {
  const { language } = useLanguage()

  const content =
    language === "uz"
      ? {
          heroTitle: "Til Ta'limining Kelajagini Birga Quramiz",
          heroDesc:
            "Innovatsion metodlar, tajribali ustozlar va shaxsiy yondashuv orqali har bir inson o'z maqsadiga erishishiga yordam beramiz.",
          badgeText: "LinguaPro haqida",
          globalReachLabel: "Global Mavqe",
          globalReachValue: "50+ Davlat",
          missionTitle: "Bizning Maqsadimiz",
          missionDesc:
            "O'quvchilarni akademik va professional muvaffaqiyat uchun zarur til ko'nikmalari bilan ta'minlash.",
          visionTitle: "Bizning Vizionimiz",
          visionDesc:
            "Innovatsion til ta'limida global yetakchi bo'lish va tillarni har kim uchun qulay qilish.",
          storyTitle: "Bizning Hikoyamiz",
          storyDesc:
            "10 yildan ortiq tajribaga ega til mutaxassislari tomonidan asos solingan LinguaPro, to'g'ri yondashuv bilan har kim til o'rganishi mumkinligiga ishonadi.",
          founded: "2016-yilda asos solingan",
          principlesTitle: "Bizning Asosiy Qadriyatlarimiz",
          principles: [
            {
              title: "Mukammallik",
              desc: "Eng yuqori sifatli ta'lim tajribasi",
              icon: Trophy,
            },
            {
              title: "Innovatsiya",
              desc: "Zamonaviy va samarali usullar",
              icon: Lightbulb,
            },
            {
              title: "Halollik",
              desc: "Shaffof va ishonchli yondashuv",
              icon: Scale,
            },
            { title: "Ta'sir", desc: "Uzoq muddatli natijalar", icon: Target },
          ],
          milestonesTitle: "Muhim Bosqichlar",
          milestones: [
            {
              year: "2016",
              title: "Asos solingan",
              desc: "LinguaPro rasmiy faoliyatini boshladi",
            },
            {
              year: "2019",
              title: "Onlayn Platforma",
              desc: "Zamonaviy o'quv platformasi ishga tushdi",
            },
            {
              year: "2021",
              title: "Global Kengayish",
              desc: "50 dan ortiq davlatga chiqdi",
            },
            {
              year: "2023",
              title: "AI Texnologiyalari",
              desc: "Sun'iy intellekt yordamida o'qitish boshlandi",
            },
          ],
        }
      : {
          heroTitle: "Building the Future of Language Learning",
          heroDesc:
            "We help every person achieve their goals through innovative methods, experienced teachers, and personalized approach.",
          badgeText: "About LinguaPro",
          globalReachLabel: "Global Reach",
          globalReachValue: "50+ Countries",
          missionTitle: "Our Mission",
          missionDesc:
            "To equip students with essential language skills for academic and professional success.",
          visionTitle: "Our Vision",
          visionDesc:
            "To become a global leader in innovative language education and make learning accessible to everyone.",
          storyTitle: "Our Story",
          storyDesc:
            "Founded by language experts with over 10 years of experience, LinguaPro believes that with the right approach, anyone can master a language.",
          founded: "Founded in 2016",
          principlesTitle: "Our Core Values",
          principles: [
            {
              title: "Excellence",
              desc: "Highest quality education",
              icon: Trophy,
            },
            {
              title: "Innovation",
              desc: "Modern and effective methods",
              icon: Lightbulb,
            },
            {
              title: "Integrity",
              desc: "Transparent and trustworthy",
              icon: Scale,
            },
            { title: "Impact", desc: "Long-term results", icon: Target },
          ],
          milestonesTitle: "Our Journey",
          milestones: [
            {
              year: "2016",
              title: "Foundation",
              desc: "LinguaPro officially started",
            },
            {
              year: "2019",
              title: "Platform Launch",
              desc: "Modern learning platform launched",
            },
            {
              year: "2021",
              title: "Global Expansion",
              desc: "Reached over 50 countries",
            },
            {
              year: "2023",
              title: "AI Integration",
              desc: "AI-powered learning began",
            },
          ],
        }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header />

      {/* HERO */}
      <section className="relative pt-32 pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-gray-50 dark:from-red-950/25 dark:via-gray-950 dark:to-gray-900" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-full font-semibold text-sm">
                <Sparkles className="w-4 h-4" />
                {content.badgeText}
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tighter">
                {content.heroTitle}
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg">
                {content.heroDesc}
              </p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1 }}
              className="relative hidden lg:block"
            >
              <div className="overflow-hidden rounded-[4rem] border border-gray-100 dark:border-gray-800 shadow-2xl shadow-gray-900/10 dark:shadow-black/30 bg-white dark:bg-gray-900 h-[500px]">
                <img
                  src={aboutImage}
                  alt="LinguaPro About"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              title: content.missionTitle,
              desc: content.missionDesc,
              icon: Target,
            },
            {
              title: content.visionTitle,
              desc: content.visionDesc,
              icon: Globe,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900/80 p-10 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-900/5 dark:shadow-black/20 hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mb-8">
                <item.icon className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h2 className="text-3xl font-bold mb-5 text-gray-900 dark:text-white">
                {item.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black tracking-tight mb-8 text-gray-900 dark:text-white">
                {content.storyTitle}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                {content.storyDesc}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[3rem] overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl shadow-gray-900/10 dark:shadow-black/30"
            >
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 aspect-video flex items-center justify-center">
                <PenTool className="w-24 h-24 text-red-500/40 dark:text-red-400/40" />
              </div>
              <div className="absolute bottom-8 left-8 bg-white dark:bg-gray-950 px-8 py-5 rounded-2xl shadow-xl shadow-gray-900/10 dark:shadow-black/30 border border-gray-100 dark:border-gray-800">
                <Calendar className="w-6 h-6 text-red-600 dark:text-red-400 mb-2" />
                <p className="font-bold text-lg text-gray-900 dark:text-white">
                  {content.founded}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 px-6 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white">
              {content.principlesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.principles.map((principle, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-gray-900/80 border border-gray-100 dark:border-gray-800 p-8 rounded-3xl hover:border-red-500 dark:hover:border-red-500 transition-all group"
              >
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <principle.icon className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {principle.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {principle.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white">
              {content.milestonesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.milestones.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-gray-950/70 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-500 transition-all"
              >
                <div className="text-red-600 dark:text-red-400 text-5xl font-black mb-6">
                  {milestone.year}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {milestone.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {milestone.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
