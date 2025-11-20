export interface Car {
  id: number
  name: string
  brand: string
  year: number
  price: number
  mileage: string
  fuel: string
  doors: number
  type: string
  image: string
}

export interface Testimonial {
  author: string
  role: string
  text: string
  rating: number
}

export const cars: Car[] = [
  {
    id: 1,
    name: 'Corolla 2023',
    brand: 'Toyota',
    year: 2023,
    price: 95000,
    mileage: '15.000 km',
    fuel: 'Gasolina',
    doors: 4,
    type: 'Sedan',
    image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop'
  },
  {
    id: 2,
    name: 'Civic 2022',
    brand: 'Honda',
    year: 2022,
    price: 92000,
    mileage: '22.000 km',
    fuel: 'Gasolina',
    doors: 4,
    type: 'Sedan',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b83ad38?w=400&h=300&fit=crop'
  },
  {
    id: 3,
    name: 'X1 2023',
    brand: 'BMW',
    year: 2023,
    price: 185000,
    mileage: '8.000 km',
    fuel: 'Gasolina',
    doors: 4,
    type: 'SUV',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
  },
  {
    id: 4,
    name: 'C-Class 2022',
    brand: 'Mercedes',
    year: 2022,
    price: 220000,
    mileage: '18.000 km',
    fuel: 'Gasolina',
    doors: 4,
    type: 'Sedan',
    image: 'https://images.unsplash.com/photo-1566023967268-70fba80ee5a5?w=400&h=300&fit=crop'
  },
  {
    id: 5,
    name: 'Golf 2023',
    brand: 'Volkswagen',
    year: 2023,
    price: 78000,
    mileage: '12.000 km',
    fuel: 'Gasolina',
    doors: 4,
    type: 'Hatchback',
    image: 'https://images.unsplash.com/photo-1590362891990-f8023e937390?w=400&h=300&fit=crop'
  },
  {
    id: 6,
    name: 'RAV4 2023',
    brand: 'Toyota',
    year: 2023,
    price: 145000,
    mileage: '10.000 km',
    fuel: 'Gasolina',
    doors: 4,
    type: 'SUV',
    image: 'https://images.unsplash.com/photo-1533473359331-35b3c3d0e4a3?w=400&h=300&fit=crop'
  },
  {
    id: 7,
    name: '430i Conversível',
    brand: 'BMW',
    year: 2022,
    price: 320000,
    mileage: '25.000 km',
    fuel: 'Gasolina',
    doors: 2,
    type: 'Conversível',
    image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop'
  },
  {
    id: 8,
    name: 'CR-V 2023',
    brand: 'Honda',
    year: 2023,
    price: 155000,
    mileage: '9.000 km',
    fuel: 'Gasolina',
    doors: 4,
    type: 'SUV',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
  },
  {
    id: 9,
    name: 'Polo 2023',
    brand: 'Volkswagen',
    year: 2023,
    price: 65000,
    mileage: '5.000 km',
    fuel: 'Gasolina',
    doors: 4,
    type: 'Hatchback',
    image: 'https://images.unsplash.com/photo-1590362891990-f8023e937390?w=400&h=300&fit=crop'
  }
]

export const testimonials: Testimonial[] = [
  {
    author: 'Carlos Silva',
    role: 'Comprador - Corolla',
    text: 'Excelente atendimento e carro em perfeito estado. Recomendo muito!',
    rating: 5
  },
  {
    author: 'Maria Santos',
    role: 'Compradora - X1',
    text: 'Processo de compra muito tranquilo e equipe muito profissional.',
    rating: 5
  },
  {
    author: 'João Oliveira',
    role: 'Comprador - Golf',
    text: 'Melhor preço encontrado e com garantia. Muito satisfeito!',
    rating: 5
  },
  {
    author: 'Ana Costa',
    role: 'Compradora - RAV4',
    text: 'Atendimento impecável do início ao fim. Voltaria a comprar!',
    rating: 5
  },
  {
    author: 'Pedro Ferreira',
    role: 'Comprador - Civic',
    text: 'Carro entregue conforme prometido. Muito bom mesmo!',
    rating: 4
  },
  {
    author: 'Lucia Martins',
    role: 'Compradora - C-Class',
    text: 'Equipe atenciosa e carro em ótimas condições. Perfeito!',
    rating: 5
  }
]