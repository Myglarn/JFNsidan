import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="font-sans text-gray-700">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tjanster" element={<ServicesPage />} />
            <Route path="/om" element={<AboutPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
