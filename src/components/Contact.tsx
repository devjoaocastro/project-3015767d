import { useState } from 'react'
import { Icon } from '@iconify/react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Obrigado ${formData.name}! Entraremos em contato em breve.`)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Entre em Contato</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Icon icon="mdi:phone" width={24} className="text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-gray-900">Telefone</p>
                  <p className="text-gray-600">(11) 3000-0000</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Icon icon="mdi:email" width={24} className="text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-gray-900">Email</p>
                  <p className="text-gray-600">contato@automax.com.br</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Icon icon="mdi:map-marker" width={24} className="text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-gray-900">Endereço</p>
                  <p className="text-gray-600">Av. Paulista, 1000 - São Paulo, SP</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Icon icon="mdi:clock" width={24} className="text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-gray-900">Horário</p>
                  <p className="text-gray-600">Seg-Sex: 9h às 18h</p>
                  <p className="text-gray-600">Sábado: 9h às 13h</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-gray-700">Nome</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="Seu nome"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="seu@email.com"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-gray-700">Telefone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="(11) 99999-9999"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold mb-2 text-gray-700">Mensagem</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="Sua mensagem aqui..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              <Icon icon="mdi:send" width={20} />
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}