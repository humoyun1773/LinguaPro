import React, { useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { MapPin, Phone, Mail, Send, Search, X } from 'lucide-react'
import { motion } from 'framer-motion'

export const ContactPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLocation, setSelectedLocation] = useState<any>(null)
  const [showLocationInfo, setShowLocationInfo] = useState(false)
  const [currentMapCoords, setCurrentMapCoords] = useState({
    lat: 38.8586,
    lng: 65.7792,
  })
  const [mapQuery, setMapQuery] = useState('Qarshi, Uzbekistan')

  const locations = [
    {
      name: 'LinguaPro - Qarshi',
      address: 'Qarshi, Uzbekistan',
      coordinates: { lat: 38.8586, lng: 65.7792 },
      description:
        'LinguaPro main office in Qarshi, Uzbekistan. Providing IELTS preparation courses and language training.',
      phone: '+998 90 123 45 67',
      email: 'qarshi@linguapro.com',
      workingHours: 'Mon-Fri: 9:00-18:00',
    },
    {
      name: 'LinguaPro - Toshkent',
      address: 'Toshkent, Uzbekistan',
      coordinates: { lat: 41.2995, lng: 69.2401 },
      description:
        'LinguaPro branch in Toshkent, Uzbekistan. Offering advanced IELTS courses and speaking practice.',
      phone: '+998 71 234 56 78',
      email: 'toshkent@linguapro.com',
      workingHours: 'Mon-Sat: 9:00-20:00',
    },
    {
      name: 'LinguaPro - Samarqand',
      address: 'Samarqand, Uzbekistan',
      coordinates: { lat: 39.6544, lng: 66.9597 },
      description:
        'LinguaPro branch in Samarqand, Uzbekistan. Specialized in writing and reading modules.',
      phone: '+998 66 345 67 89',
      email: 'samarqand@linguapro.com',
      workingHours: 'Mon-Fri: 10:00-19:00',
    },
    {
      name: 'LinguaPro - Buxoro',
      address: 'Buxoro, Uzbekistan',
      coordinates: { lat: 39.7717, lng: 64.4285 },
      description:
        'LinguaPro branch in Buxoro, Uzbekistan. Providing comprehensive IELTS preparation.',
      phone: '+998 65 456 78 90',
      email: 'buxoro@linguapro.com',
      workingHours: 'Mon-Fri: 9:00-18:00',
    },
    {
      name: "LinguaPro - Farg'ona",
      address: "Farg'ona, Uzbekistan",
      coordinates: { lat: 40.3867, lng: 71.7849 },
      description:
        "LinguaPro branch in Farg'ona, Uzbekistan. Expert speaking and listening coaching.",
      phone: '+998 73 567 89 01',
      email: 'fargona@linguapro.com',
      workingHours: 'Mon-Sat: 8:00-18:00',
    },
    {
      name: 'LinguaPro - Andijon',
      address: 'Andijon, Uzbekistan',
      coordinates: { lat: 40.7821, lng: 72.3483 },
      description:
        'LinguaPro branch in Andijon, Uzbekistan. IELTS preparation and language courses.',
      phone: '+998 74 123 45 67',
      email: 'andijon@linguapro.com',
      workingHours: 'Mon-Fri: 9:00-18:00',
    },
    {
      name: 'LinguaPro - Namangan',
      address: 'Namangan, Uzbekistan',
      coordinates: { lat: 40.9984, lng: 71.6726 },
      description:
        'LinguaPro branch in Namangan, Uzbekistan. Comprehensive language training.',
      phone: '+998 69 234 56 78',
      email: 'namangan@linguapro.com',
      workingHours: 'Mon-Sat: 9:00-19:00',
    },
    {
      name: 'LinguaPro - Navoiy',
      address: 'Navoiy, Uzbekistan',
      coordinates: { lat: 40.0967, lng: 65.3734 },
      description:
        'LinguaPro branch in Navoiy, Uzbekistan. IELTS and English language courses.',
      phone: '+998 79 345 67 89',
      email: 'navoiy@linguapro.com',
      workingHours: 'Mon-Fri: 9:00-18:00',
    },
    {
      name: 'LinguaPro - Xorazm',
      address: 'Xorazm, Uzbekistan',
      coordinates: { lat: 41.5434, lng: 60.6333 },
      description:
        'LinguaPro branch in Xorazm, Uzbekistan. Specialized IELTS preparation.',
      phone: '+998 62 456 78 90',
      email: 'xorazm@linguapro.com',
      workingHours: 'Mon-Fri: 10:00-18:00',
    },
    {
      name: 'LinguaPro - Surxondaryo',
      address: 'Termiz, Uzbekistan',
      coordinates: { lat: 37.2242, lng: 67.2783 },
      description:
        'LinguaPro branch in Surxondaryo, Uzbekistan. IELTS courses and language training.',
      phone: '+998 76 567 89 01',
      email: 'surxondaryo@linguapro.com',
      workingHours: 'Mon-Fri: 9:00-18:00',
    },
    {
      name: 'LinguaPro - Jizzax',
      address: 'Jizzax, Uzbekistan',
      coordinates: { lat: 40.1156, lng: 67.8422 },
      description:
        'LinguaPro branch in Jizzax, Uzbekistan. English language and IELTS preparation.',
      phone: '+998 72 678 90 12',
      email: 'jizzax@linguapro.com',
      workingHours: 'Mon-Fri: 9:00-18:00',
    },
    {
      name: 'LinguaPro - Sirdaryo',
      address: 'Guliston, Uzbekistan',
      coordinates: { lat: 40.4953, lng: 68.7837 },
      description:
        'LinguaPro branch in Sirdaryo, Uzbekistan. IELTS and language courses.',
      phone: '+998 71 789 01 23',
      email: 'sirdaryo@linguapro.com',
      workingHours: 'Mon-Fri: 9:00-18:00',
    },
    {
      name: "LinguaPro - Qoraqalpog'iston",
      address: 'Nukus, Uzbekistan',
      coordinates: { lat: 42.4531, lng: 59.6103 },
      description:
        "LinguaPro branch in Qoraqalpog'iston, Uzbekistan. Comprehensive language training.",
      phone: '+998 61 890 12 34',
      email: 'qoraqalpogiston@linguapro.com',
      workingHours: 'Mon-Fri: 10:00-18:00',
    },
  ]

  const handleSearch = () => {
    if (searchQuery) {
      // First check if it's a predefined location
      const found = locations.find(
        (loc) =>
          loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          loc.address.toLowerCase().includes(searchQuery.toLowerCase())
      )
      if (found) {
        setSelectedLocation(found)
        setShowLocationInfo(true)
        setCurrentMapCoords(found.coordinates)
        setMapQuery(found.address)
      } else {
        // If not predefined, show basic info for the searched location
        const customLocation = {
          name: searchQuery,
          address: searchQuery,
          coordinates: { lat: 0, lng: 0 },
          description: `${searchQuery} - Xaritada ko'rsatilgan joy`,
          phone: '-',
          email: '-',
          workingHours: '-',
        }
        setSelectedLocation(customLocation)
        setShowLocationInfo(true)
        setMapQuery(searchQuery)
      }
    }
  }

  const handleMapClick = (location: any) => {
    setSelectedLocation(location)
    setShowLocationInfo(true)
    setCurrentMapCoords(location.coordinates)
    setMapQuery(location.address)
  }
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Biz Bilan Bog'laning
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Biz IELTS yo'lingizda sizga yordam berish uchun shu yerdamiz.
            Bizning kurslarimiz, narxlari yoki yordamimiz haqida savollaringiz
            bo'lsa, biz bilan bog'laning.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border-2 border-red-200 dark:border-red-700"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Xabar Yuboring
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-5 text-sm">
                Savolingiz bormi? Biz siz bilan bog'lanishni xursandchilik bilan
                kutamiz. Xabar yuboring va biz sizga tez orada javob beramiz.
              </p>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1 text-xs">
                      Ism
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm bg-white dark:bg-gray-700 dark:text-white"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1 text-xs">
                      Familiya
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm bg-white dark:bg-gray-700 dark:text-white"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1 text-xs">
                    Elektron pochta
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1 text-xs">
                    Mavzu
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm text-gray-700 dark:text-white dark:bg-gray-700">
                    <option>Umumiy so'rov</option>
                    <option>Kurslar haqida</option>
                    <option>Texnik yordam</option>
                    <option>Hamkorlik</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1 text-xs">
                    Xabar
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none text-sm bg-white dark:bg-gray-700 dark:text-white"
                    placeholder="Xabaringiz..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-700 text-white py-2.5 rounded-lg hover:bg-red-800 transition-colors font-semibold text-sm flex items-center justify-center space-x-2"
                >
                  <span>Xabar yuboring</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Bog'lanish Ma'lumotlari
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-100 dark:border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-red-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      Bizning Manzilimiz
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Qarshi, O'zbekiston
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-100 dark:border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-red-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      Telefon Raqami
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      +998 90 123 45 67
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-100 dark:border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-red-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      Email Manzili
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      info@linguapro.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-100 dark:border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center shrink-0">
                    <Send className="w-6 h-6 text-red-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      Obuna
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Bizning yangiliklarimizga obuna bo'ling
                    </p>
                  </div>
                </div>
              </div>

              {/* Map with Search */}
              <div className="mt-8">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Manzil qidiring..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-white dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <button
                    onClick={handleSearch}
                    className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-colors font-medium"
                  >
                    Qidirish
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {locations.map((loc, index) => (
                    <button
                      key={index}
                      onClick={() => handleMapClick(loc)}
                      className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-red-300 dark:hover:border-red-500 transition-colors text-sm font-medium dark:text-white"
                    >
                      {loc.address.split(',')[0]}
                    </button>
                  ))}
                </div>

                <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 relative">
                  <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <button
                    onClick={() => handleMapClick(locations[0])}
                    className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-sm font-medium dark:text-white"
                  >
                    <MapPin className="w-4 h-4 inline mr-1" />
                    LinguaPro
                  </button>
                </div>

                {/* Location Info Div */}
                {showLocationInfo && selectedLocation && (
                  <div className="mt-4 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl p-5 border border-red-200 dark:border-red-700 shadow-md relative">
                    <button
                      onClick={() => setShowLocationInfo(false)}
                      className="absolute top-2 right-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                      {selectedLocation.name}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                      {selectedLocation.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-red-700" />
                        <span className="text-gray-600 dark:text-gray-300">
                          {selectedLocation.address}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-red-700" />
                        <span className="text-gray-600 dark:text-gray-300">
                          {selectedLocation.phone}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-red-700" />
                        <span className="text-gray-600 dark:text-gray-300">
                          {selectedLocation.email}
                        </span>
                      </div>
                      <div className="pt-2 border-t border-red-200 dark:border-red-700">
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          Ish Vaqtlari:
                        </span>
                        <span className="text-gray-600 ml-2">
                          {selectedLocation.workingHours}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
