import { Icon } from '@iconify/react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon icon="mdi:car-sports" width={28} className="text-blue-400" />
              <span className="text-2xl font-bold">AutoMax</span>
            </div>
            <p className="text-gray-400">Os melhores carros com os melhores preços</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#catalog" className="hover:text-blue-400 transition">Catálogo</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400 transition">Depoimentos</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Icon icon="mdi:facebook" width={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Icon icon="mdi:instagram" width={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Icon icon="mdi:whatsapp" width={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>© 2024 AutoMax. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}