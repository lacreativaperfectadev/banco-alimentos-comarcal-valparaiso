import { useSiteContent } from '../../hooks/use-site-content'
import { useReveal } from '../../hooks/use-reveal'
import { CONTAINER } from '../../lib/layout'

export function ServicesSection() {
  const { content } = useSiteContent()
  const { eyebrow, title, subtitle, items } = content.services
  const heading = useReveal()
  const grid = useReveal()

  return (
    <section id="que-hacemos" className="bg-white py-14 sm:py-20">
      <div className={CONTAINER}>
        <div ref={heading.setRef} className={`reveal ${heading.visible ? 'is-visible' : ''}`}>
          <p className="text-sm font-semibold tracking-wide text-brand-terracotta">{eyebrow}</p>
          <h2 className="mt-2 text-2xl font-bold text-brand-green-dark sm:text-3xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-base text-brand-ink/80">{subtitle}</p>
        </div>

        <ul
          ref={grid.setRef}
          className={`reveal-group mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ${grid.visible ? 'is-visible' : ''}`}
        >
          {items.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-brand-green/10 bg-brand-green-light/50 p-5 transition-transform hover:-translate-y-1"
            >
              <img src={item.icon} alt="" aria-hidden="true" className="h-16 w-16 object-contain" />
              <h3 className="mt-4 text-base font-semibold text-brand-green-dark">{item.title}</h3>
              <p className="mt-1 text-sm text-brand-ink/75">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
