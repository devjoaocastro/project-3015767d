import { useState } from 'react'
import { Icon } from '@iconify/react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Icon icon="mdi:car-sports" width={32} className="text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">AutoMax</span>
          </div>

          <nav className="hidden md:flex gap-8">
            <a href="#catalog" className="text-gray-700 hover:text-blue-600 transition">
              Catálogo
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition">
              Depoimentos
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">
              Contato
            </a>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            <Icon icon="mdi:menu" width={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a href="#catalog" className="text-gray-700 hover:text-blue-600">
              Catálogo
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600">
              Depoimentos
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">
              Contato
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}