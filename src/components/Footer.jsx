import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-dark-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Company info */}
          <div>
            <div className="bg-white rounded-lg inline-block p-2 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}jfnLogo.png`}
                alt="JFN Nordic AB"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/70 leading-relaxed text-sm">
              JFN Nordic AB är ett byggföretag baserat i Järna som erbjuder
              helhets&shy;lösningar inom bygg, renovering och projektledning
              sedan 2010.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Snabblänkar</h3>
            <nav className="flex flex-col gap-2.5">
              <Link to="/tjanster" className="text-white/70 hover:text-white transition-colors text-sm">
                Tjänster
              </Link>
              <Link to="/om" className="text-white/70 hover:text-white transition-colors text-sm">
                Om oss
              </Link>
              <Link to="/kontakt" className="text-white/70 hover:text-white transition-colors text-sm">
                Begär en offert
              </Link>
              <a
                href="https://www.instagram.com/jfnnordic/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                Instagram
              </a>
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kontakt</h3>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-steel-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Sporrmakarvägen 56<br />153 30 Järna</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0 text-steel-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>070 111 22 33</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0 text-steel-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>info@jfn-nordic.se</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0 text-steel-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21" />
                </svg>
                <span>Org.nr: 556812-7210</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-sm">
            &copy; 2026 JFN Nordic AB. Alla rättigheter förbehållna.
          </p>
          <a
            href="https://www.instagram.com/jfnnordic/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
