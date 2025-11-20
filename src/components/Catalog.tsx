import { useState } from 'react'
import { Icon } from '@iconify/react'
import { cars } from '../data/mockData'

export default function Catalog() {
  const [selectedBrand, setSelectedBrand] = useState('Todos')
  const [selectedType, setSelectedType] = useState('Todos')

  const brands = ['Todos', 'Toyota', 'Honda', 'BMW', 'Mercedes', 'Volkswagen']
  const types = ['Todos', 'Sedan', 'SUV', 'Hatchback', 'Conversível']

  const filteredCars = cars.filter(car => {
    const brandMatch = selectedBrand === 'Todos' || car.brand === selectedBrand
    const typeMatch = selectedType === 'Todos' || car.type === selectedType
    return brandMatch && typeMatch
  })

  return (
    <section id="catalog" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Nosso Catálogo</h2>

        <div className="mb-8 flex flex-col gap-4">
          <div>
            <label className="block text-sm font-bold mb-2">Marca</label>
            <div className="flex flex-wrap gap-2">
              {brands.map(brand => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    selectedBrand === brand
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Tipo</label>
            <div className="flex flex-wrap gap-2">
              {types.map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    selectedType === type
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map(car => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{car.brand} - {car.year}</p>

                <div className="space-y-2 mb-4 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:speedometer" width={16} />
                    {car.mileage}
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:fuel" width={16} />
                    {car.fuel}
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:car-door" width={16} />
                    {car.doors} portas
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    R$ {car.price.toLocaleString('pt-BR')}
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-1">
                    <Icon icon="mdi:heart" width={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nenhum carro encontrado com esses filtros</p>
          </div>
        )}
      </div>
    </section>
  )
}