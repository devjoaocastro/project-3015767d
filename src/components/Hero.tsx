import { Icon } from '@iconify/react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Encontre Seu Carro Perfeito
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Os melhores veículos com os melhores preços
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#catalog"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition flex items-center justify-center gap-2"
          >
            <Icon icon="mdi:magnify" width={20} />
            Ver Catálogo
          </a>
          <a
            href="#contact"
            className="bg-blue-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-400 transition flex items-center justify-center gap-2"
          >
            <Icon icon="mdi:phone" width={20} />
            Ligar Agora
          </a>
        </div>
      </div>
    </section>
  )
}