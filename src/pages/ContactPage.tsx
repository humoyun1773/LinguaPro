import React, { useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { MapPin, Phone, Mail, Send, Search, Clock, MessageSquare, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

export const ContactPage: React.FC = () => {
  const { language } = useLanguage()
  const [mapQuery, setMapQuery] = useState('Qarshi, Uzbekistan')

  const content =
    language === 'uz'
      ? {
          heroTitle: "Biz bilan bog'laning",
          heroDesc: "Savollaringiz bormi? Biz sizga yordam berishdan mamnunmiz. Xabar qoldiring yoki to'g'ridan-to'g'ri bog'laning.",
          address: 'Manzilimiz',
          addressValue: "Qarshi shahar, O'zbekiston",
          phone: 'Telefon raqam',
          phoneValue: '+998 90 123 45 67',
          email: 'Elektron pochta',
          emailValue: 'info@linguapro.uz',
          workingHours: 'Ish vaqti',
          workingHoursValue: 'Dushanba - Shanba, 09:00 - 19:00',
          formTitle: 'Xabar yuborish',
          firstName: 'Ism',
          lastName: 'Familiya',
          emailLabel: 'Email manzil',
          subject: 'Mavzu',
          subjectOptions: ["Umumiy so'rov", 'Kurslar haqida', 'Texnik yordam', 'Hamkorlik'],
          message: 'Xabaringiz',
          messagePlaceholder: 'Sizni qanday savol qiziqtirmoqda?',
          submitBtn: 'Xabarni yuborish',
          searchPlaceholder: 'Manzilni qidiring...',
        }
      : {
          heroTitle: 'Get in Touch',
          heroDesc: 'Have questions? We are here to help. Drop us a message or reach out directly.',
          address: 'Our Address',
          addressValue: 'Qarshi City, Uzbekistan',
          phone: 'Phone Number',
          phoneValue: '+998 90 123 45 67',
          email: 'Email Address',
          emailValue: 'info@linguapro.uz',
          workingHours: 'Working Hours',
          workingHoursValue: 'Monday - Saturday, 09:00 - 19:00',
          formTitle: 'Send a Message',
          firstName: 'First Name',
          lastName: 'Last Name',
          emailLabel: 'Email Address',
          subject: 'Subject',
          subjectOptions: ['General Inquiry', 'About Courses', 'Technical Support', 'Partnership'],
          message: 'Your Message',
          messagePlaceholder: 'What is on your mind?',
          submitBtn: 'Send Message',
          searchPlaceholder: 'Search address...',
        }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-100 selection:bg-red-500 selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-white dark:bg-slate-950">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-red-500/5 blur-[100px] rounded-full" />
          <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
              {content.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto font-medium">
              {content.heroDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">

            {/* Left: Contact Info */}
            <div className="lg:col-span-4 space-y-4">
              {[
                { icon: <MapPin />, label: content.address, value: content.addressValue, color: 'text-red-600' },
                { icon: <Phone />, label: content.phone, value: content.phoneValue, color: 'text-blue-600' },
                { icon: <Mail />, label: content.email, value: content.emailValue, color: 'text-orange-600' },
                { icon: <Clock />, label: content.workingHours, value: content.workingHoursValue, color: 'text-emerald-600' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm group hover:shadow-md transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-4 ${item.color} group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-1">{item.label}</h3>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">{item.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="lg:col-span-8"
            >
              <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-[0.02] dark:opacity-[0.05] pointer-events-none">
                  <MessageSquare size={200} />
                </div>

                <h2 className="text-3xl font-black mb-8 tracking-tight">{content.formTitle}</h2>

                <form className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 ml-1">{content.firstName}</label>
                      <input
                        type="text"
                        className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition-all dark:text-white"
                        placeholder="Ali"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 ml-1">{content.lastName}</label>
                      <input
                        type="text"
                        className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition-all dark:text-white"
                        placeholder="Valiyev"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 ml-1">{content.emailLabel}</label>
                    <input
                      type="email"
                      className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition-all dark:text-white"
                      placeholder="example@mail.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 ml-1">{content.subject}</label>
                    <select className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition-all dark:text-white appearance-none">
                      {content.subjectOptions.map((opt, idx) => (
                        <option key={idx} className="dark:bg-slate-900">{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 ml-1">{content.message}</label>
                    <textarea
                      rows={4}
                      className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition-all dark:text-white resize-none"
                      placeholder={content.messagePlaceholder}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-black shadow-lg shadow-red-500/20 transition-all flex items-center justify-center gap-3 group"
                  >
                    <span>{content.submitBtn}</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-4 border border-slate-200 dark:border-slate-800 shadow-xl">
            <div className="p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-full flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg dark:text-white">{content.addressValue}</h3>
                  <p className="text-sm text-slate-500 font-medium">Bosh ofisimiz manzili</p>
                </div>
              </div>

              <div className="relative md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  value={mapQuery}
                  onChange={(e) => setMapQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm outline-none focus:ring-2 focus:ring-red-500 transition-all dark:text-white"
                  placeholder={content.searchPlaceholder}
                />
              </div>
            </div>

            <div className="rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800 h-[400px] md:h-[500px]">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(mapQuery)}`}
                // Eslatma: Google Maps API key bo'lmasa, pastdagi standart embed usulidan foydalanish mumkin:
                src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
