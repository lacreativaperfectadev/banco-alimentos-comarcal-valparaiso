import { useSiteContent } from '../../hooks/use-site-content'
import { useReveal } from '../../hooks/use-reveal'
import { CONTAINER } from '../../lib/layout'
import { ContactForm } from './contact-form'

export function ContactSection() {
  const { content } = useSiteContent()
  const { eyebrow, title, subtitle, info } = content.contact
  const reveal = useReveal()

  return (
    <section id="contacto" className="bg-brand-green-dark py-14 text-white sm:py-20">
      <div
        ref={reveal.setRef}
        className={`reveal ${CONTAINER} grid gap-10 lg:grid-cols-2 lg:gap-14 ${reveal.visible ? 'is-visible' : ''}`}
      >
        <div>
          <p className="text-sm font-semibold tracking-wide text-brand-terracotta">{eyebrow}</p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{title}</h2>
          <p className="mt-3 max-w-md text-sm text-white/80">{subtitle}</p>

          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:h-full">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-5">
              <h3 className="flex items-center gap-3 text-base font-semibold">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
                  <img src={info.addressIcon} alt="" aria-hidden="true" className="h-6 w-6 object-contain" />
                </span>
                {info.addressTitle}
              </h3>
              <p className="mt-1 whitespace-pre-line text-sm text-white/80">{info.address}</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              <h3 className="flex items-center gap-3 text-base font-semibold">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
                  <img src={info.hoursIcon} alt="" aria-hidden="true" className="h-6 w-6 object-contain" />
                </span>
                {info.hoursTitle}
              </h3>
              <p className="mt-1 whitespace-pre-line text-sm text-white/80">{info.hours}</p>
            </div>
          </div>

          {/* Ocupa el resto de la altura disponible: siempre acaba a la misma
              altura que el formulario, en vez de un tamaño fijo que a veces
              se quedaba corto y otras dejaba un hueco verde debajo. */}
          <div className="relative min-h-[220px] flex-1 overflow-hidden rounded-2xl">
            <img
              src={info.mapImage}
              alt={info.mapImageAlt}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <p className="pointer-events-none absolute bottom-4 right-4 rotate-[-3deg] font-hand text-2xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              {info.mapCaption} ♥
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
