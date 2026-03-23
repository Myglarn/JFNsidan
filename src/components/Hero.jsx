import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="pt-16 sm:pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <p className="text-steel-blue font-semibold text-sm uppercase tracking-widest mb-4">
              Byggföretag i Järna
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-blue leading-tight mb-6">
              Kvalitets&shy;byggande sedan 2010
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 max-w-xl">
              JFN Nordic AB är ett erfaret byggföretag som erbjuder helhets&shy;lösningar
              inom bygg, renovering och projektledning. Vi kombinerar hantverks&shy;skicklighet
              med modern teknik för att leverera resultat som överträffar förväntningarna.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/kontakt"
                className="bg-dark-blue text-white px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-dark-blue-hover transition-colors text-center"
              >
                Begär en offert
              </Link>
              <Link
                to="/tjanster"
                className="border-2 border-steel-blue text-steel-blue px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-steel-blue hover:text-white transition-colors text-center"
              >
                Våra tjänster
              </Link>
            </div>
          </div>

          {/* Placeholder image */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full aspect-[4/3] bg-gray-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-steel-blue-light">
              <div className="text-center text-steel-blue">
                <svg className="w-16 h-16 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                </svg>
                <p className="text-sm font-medium opacity-70">Bild kommer snart</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Angled divider */}
      <div className="h-16 bg-gradient-to-r from-dark-blue to-steel-blue" style={{ clipPath: 'polygon(0 0, 100% 60%, 100% 100%, 0 100%)' }}></div>
    </section>
  )
}

export default Hero
