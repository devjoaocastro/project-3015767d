import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Catalog />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}