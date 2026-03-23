import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
      <Hero />
      {/* Brief services teaser */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-blue mb-4">
            Vad vi erbjuder
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8">
            Vi utför allt från badrumsrenoveringar och takläggning till totalentreprenader.
            Med över 15 års erfarenhet levererar vi kvalitet i varje projekt.
          </p>
          <Link
            to="/tjanster"
            className="inline-flex items-center gap-2 bg-dark-blue text-white px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-dark-blue-hover transition-colors"
          >
            Se våra tjänster
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
      <Gallery />
    </>
  )
}

export default HomePage
