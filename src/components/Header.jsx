import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { label: 'Tjänster', to: '/tjanster' },
    { label: 'Om oss', to: '/om' },
    { label: 'Kontakt', to: '/kontakt' },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}jfnLogo.png`}
            alt="JFN Nordic AB"
            className="h-10 sm:h-14 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-medium transition-colors ${
                location.pathname === link.to
                  ? 'text-dark-blue'
                  : 'text-gray-700 hover:text-dark-blue'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/kontakt"
            className="bg-dark-blue text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-dark-blue-hover transition-colors"
          >
            Begär en offert
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-dark-blue"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Öppna meny"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-medium py-2 transition-colors ${
                  location.pathname === link.to
                    ? 'text-dark-blue'
                    : 'text-gray-700 hover:text-dark-blue'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              className="bg-dark-blue text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-dark-blue-hover transition-colors text-center mt-2"
              onClick={() => setMenuOpen(false)}
            >
              Begär en offert
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
