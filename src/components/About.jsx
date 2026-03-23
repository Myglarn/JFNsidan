function About() {
  const stats = [
    { value: '15+', label: 'Års erfarenhet' },
    { value: '100+', label: 'Genomförda projekt' },
    { value: '100%', label: 'Engagemang' },
  ]

  return (
    <section className="pt-16 sm:pt-20 pb-16 sm:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Placeholder image */}
          <div className="order-2 lg:order-1">
            <div className="w-full aspect-[4/3] bg-gray-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-steel-blue-light">
              <div className="text-center text-steel-blue">
                <svg className="w-16 h-16 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
                <p className="text-sm font-medium opacity-70">Bild på teamet kommer snart</p>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-blue mb-6">
              Om JFN Nordic AB
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Sedan 2010 har JFN Nordic AB levererat byggprojekt av högsta kvalitet
                i Södertälje och Stockholmsområdet. Med vår erfarenhet och våra
                engagerade medarbetare hanterar vi allt från mindre renoveringar till
                större nybyggnationsprojekt.
              </p>
              <p>
                Vi är stolta över att vara en pålitlig partner för både privatpersoner
                och företag. Vår filosofi bygger på öppen kommunikation, noggrann
                planering och ett hantverk som håller över tid.
              </p>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-6 mt-16 pt-12 border-t border-gray-100">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-extrabold text-dark-blue mb-1">
                {stat.value}
              </p>
              <p className="text-steel-blue font-medium text-sm sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
