import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Badrumsrenovering',
    description: 'Komplett badrumsrenovering med kakel, klinker, VVS och tätskikt. Vi tar hand om hela processen från rivning till färdigt resultat.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    title: 'Takläggning',
    description: 'Professionell takläggning och takrenovering. Vi arbetar med alla typer av takmaterial och säkerställer ett hållbart resultat.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z" />
    ),
  },
  {
    title: 'Köksrenovering',
    description: 'Från planering till installation – vi skapar ditt drömkök. Montering av skåp, bänkskivor, vitvaror och alla tillhörande arbeten.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    ),
  },
  {
    title: 'Golvläggning',
    description: 'Vi lägger alla typer av golv – trä, laminat, vinyl och klinker. Professionell läggning med noggrant förarbete för bästa resultat.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    ),
  },
  {
    title: 'Snickeriarbeten',
    description: 'Allt inom snickeri – från bygg av väggar och dörrar till specialanpassade lösningar. Kvalitetshantverk med precision.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.672 5.672a2.236 2.236 0 01-3.16-3.16l5.672-5.672m0 0L18.577 1.693a2.25 2.25 0 013.182 3.182L11.42 15.17zm0 0L8.25 12m3.17 3.17L15 11.25" />
    ),
  },
  {
    title: 'Ställning och taksäkerhet',
    description: 'Uppsättning av byggnadsställningar och installation av taksäkerhetssystem som nockräcken, stegar och snörasskydd.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z" />
    ),
  },
  {
    title: 'Dellagningar',
    description: 'Mindre reparationer och lagningar som inte kräver en full renovering. Vi åtgärdar skador snabbt och effektivt.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
    ),
  },
  {
    title: 'Totalentreprenader',
    description: 'Vi tar helhetsansvar för hela byggprojektet – från planering och projektering till färdigt resultat. En kontaktperson, ett ansvar.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
    ),
  },
]

function Services() {
  return (
    <section className="pt-16 sm:pt-20 pb-16 sm:pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-blue mb-4">
            Våra tjänster
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Vi erbjuder ett brett utbud av byggtjänster för både privatpersoner och företag.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-gray-100 hover:border-steel-blue-light transition-all group"
            >
              <div className="w-12 h-12 bg-steel-blue-light/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-steel-blue-light/50 transition-colors">
                <svg className="w-6 h-6 text-dark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {service.icon}
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dark-blue mb-2">{service.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-dark-blue text-white px-8 py-3.5 rounded-lg font-semibold text-lg hover:bg-dark-blue-hover transition-colors"
          >
            Kontakta oss för en kostnadsfri offert
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services
