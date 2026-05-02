import React, { useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Search,
  Clock,
  MessageSquare,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

export const ContactPage: React.FC = () => {
  const { language } = useLanguage()
  const [mapQuery, setMapQuery] = useState('Qarshi, Uzbekistan')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  const contactInfo = {
    phone: '+998 90 123 45 67',
    email: 'info@linguapro.uz',
    address: "Qarshi shahar, O'zbekiston",
    workingHours: 'Dushanba - Shanba: 09:00 - 19:00',
    workingHoursEn: 'Monday - Saturday: 09:00 - 19:00',
    location: { lat: 38.8606, lng: 65.7894 }, // Qarshi coordinates
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // For real implementation, you would send to your backend:
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // })

    setSubmitStatus('success')
    setIsSubmitting(false)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    })

    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus('idle'), 5000)
  }

  const content =
    language === 'uz'
      ? {
          heroTitle: "Biz bilan bog'laning",
          heroDesc:
            "Savollaringiz bormi? Biz sizga yordam berishdan mamnunmiz. Xabar qoldiring yoki to'g'ridan-to'g'ri bog'laning.",
          address: 'Manzilimiz',
          addressValue: contactInfo.address,
          phone: 'Telefon raqam',
          phoneValue: contactInfo.phone,
          email: 'Elektron pochta',
          emailValue: contactInfo.email,
          workingHours: 'Ish vaqti',
          workingHoursValue: contactInfo.workingHours,
          formTitle: 'Xabar yuborish',
          firstName: 'Ism',
          lastName: 'Familiya',
          emailLabel: 'Email manzil',
          subject: 'Mavzu',
          subjectOptions: [
            "Umumiy so'rov",
            'Kurslar haqida',
            'Texnik yordam',
            'Hamkorlik',
          ],
          message: 'Xabaringiz',
          messagePlaceholder: 'Sizni qanday savol qiziqtirmoqda?',
          submitBtn: 'Xabarni yuborish',
          submitBtnSending: 'Yuborilmoqda...',
          submitBtnSuccess: 'Yuborildi!',
          searchPlaceholder: 'Manzilni qidiring...',
          clickToCall: "Qo'ng'iroq qilish uchun bosing",
          clickToEmail: 'Email yuborish uchun bosing',
          officeLocation: 'Bosh ofis manzili',
        }
      : {
          heroTitle: 'Get in Touch',
          heroDesc:
            'Have questions? We are here to help. Drop us a message or reach out directly.',
          address: 'Our Address',
          addressValue: 'Qarshi City, Uzbekistan',
          phone: 'Phone Number',
          phoneValue: contactInfo.phone,
          email: 'Email Address',
          emailValue: contactInfo.email,
          workingHours: 'Working Hours',
          workingHoursValue: contactInfo.workingHoursEn,
          formTitle: 'Send a Message',
          firstName: 'First Name',
          lastName: 'Last Name',
          emailLabel: 'Email Address',
          subject: 'Subject',
          subjectOptions: [
            'General Inquiry',
            'About Courses',
            'Technical Support',
            'Partnership',
          ],
          message: 'Your Message',
          messagePlaceholder: 'What is on your mind?',
          submitBtn: 'Send Message',
          submitBtnSending: 'Sending...',
          submitBtnSuccess: 'Sent!',
          searchPlaceholder: 'Search address...',
          clickToCall: 'Click to call',
          clickToEmail: 'Click to send email',
          officeLocation: 'Head Office Location',
        }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 selection:bg-red-500 selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-white dark:bg-gray-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-red-500/5 dark:bg-red-500/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              {content.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto font-medium">
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
              <motion.a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-red-300 transition-all cursor-pointer block"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center mb-4 text-red-600">
                  <Phone />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
                  {content.phone}
                </h3>
                <p className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {content.phoneValue}
                </p>
                <p className="text-xs text-gray-400">{content.clickToCall}</p>
              </motion.a>

              <motion.a
                href={`mailto:${contactInfo.email}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-pointer block"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-4 text-blue-600">
                  <Mail />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
                  {content.email}
                </h3>
                <p className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {content.emailValue}
                </p>
                <p className="text-xs text-gray-400">{content.clickToEmail}</p>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center mb-4 text-emerald-600">
                  <Clock />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
                  {content.workingHours}
                </h3>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  {content.workingHoursValue}
                </p>
              </motion.div>

              <motion.a
                href={`https://www.google.com/maps/dir/?api=1&destination=${contactInfo.location.lat},${contactInfo.location.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-orange-300 transition-all cursor-pointer block"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center mb-4 text-orange-600">
                  <MapPin />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
                  {content.address}
                </h3>
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  {content.addressValue}
                </p>
              </motion.a>
            </div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="lg:col-span-8"
            >
              <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] p-8 md:p-12 border border-gray-200 dark:border-gray-700 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-[0.02] dark:opacity-[0.05] pointer-events-none">
                  <MessageSquare size={200} />
                </div>

                <h2 className="text-3xl font-black mb-8 tracking-tight">
                  {content.formTitle}
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 relative z-10"
                >
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-green-700 dark:text-green-400">
                      {language === 'uz'
                        ? "Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz."
                        : 'Your message has been sent successfully! We will contact you soon.'}
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-500 dark:text-gray-400 ml-1">
                        {content.firstName}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                        className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition-all dark:text-white"
                        placeholder={language === 'uz' ? 'Ali' : 'John'}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-500 dark:text-gray-400 ml-1">
                        {content.lastName}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition-all dark:text-white"
                        placeholder={language === 'uz' ? 'Valiyev' : 'Doe'}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500 dark:text-gray-400 ml-1">
                      {content.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition-all dark:text-white"
                      placeholder="example@mail.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500 dark:text-gray-400 ml-1">
                      {content.subject}
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition-all dark:text-white appearance-none"
                    >
                      <option value="">
                        {language === 'uz'
                          ? 'Mavzuni tanlang'
                          : 'Select a subject'}
                      </option>
                      {content.subjectOptions.map((opt, idx) => (
                        <option
                          key={idx}
                          value={opt}
                          className="dark:bg-gray-800"
                        >
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500 dark:text-gray-400 ml-1">
                      {content.message}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-5 py-4 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-red-500 outline-none transition-all dark:text-white resize-none"
                      placeholder={content.messagePlaceholder}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full md:w-auto px-10 py-4 rounded-2xl font-black text-lg shadow-xl shadow-red-500/20 transition-all flex items-center justify-center gap-3 group ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : submitStatus === 'success'
                          ? 'bg-green-600 hover:bg-green-700'
                          : 'bg-red-600 hover:bg-red-700 text-white'
                    }`}
                  >
                    <span>
                      {isSubmitting
                        ? content.submitBtnSending
                        : submitStatus === 'success'
                          ? content.submitBtnSuccess
                          : content.submitBtn}
                    </span>
                    <Send
                      className={`w-5 h-5 ${isSubmitting ? '' : 'group-hover:translate-x-1 group-hover:-translate-y-1'} transition-transform`}
                    />
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
          <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] p-4 border border-gray-200 dark:border-gray-700 shadow-xl">
            <div className="p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-full flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg dark:text-white">
                    {content.addressValue}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {content.officeLocation}
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="px-4 py-2 bg-red-600 text-white rounded-xl font-semibold text-sm hover:bg-red-700 transition-colors flex items-center gap-2"
                >
                  <Phone size={16} />
                  {language === 'uz' ? "Qo'ng'iroq" : 'Call'}
                </a>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${contactInfo.location.lat},${contactInfo.location.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"
                >
                  <MapPin size={16} />
                  {language === 'uz' ? "Yo'l ko'rsatish" : 'Directions'}
                </a>
              </div>

              {/* Location Search Input */}
              <div className="relative md:w-80 lg:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={mapQuery}
                  onChange={(e) => setMapQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all dark:text-white"
                  placeholder={content.searchPlaceholder}
                />
              </div>
            </div>

            <div className="rounded-[2rem] overflow-hidden border border-gray-100 dark:border-gray-700 h-[400px] md:h-[500px]">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Location Map"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
