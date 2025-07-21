import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CourseCatalog from './components/CourseCatalog'
import Features from './components/Features'
import About from './components/About'
import Contact from './components/Contact'
import SignInModal from './components/SignInModal'
import Footer from './components/Footer'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} onSignInClick={() => setIsSignInOpen(true)} />
      <main>
        <Hero />
        <Features />
        <CourseCatalog />
        <About />
        <Contact />
      </main>
      <Footer />
      <SignInModal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
    </div>
  )
}

export default App
