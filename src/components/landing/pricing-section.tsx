import { useSiteContent } from '../../hooks/use-site-content'
import { useReveal } from '../../hooks/use-reveal'
import { CONTAINER } from '../../lib/layout'

export function PricingSection() {
  const { content } = useSiteContent()
  const { eyebrow, title, subtitle, ctaLabel, items, disclaimer } = content.pricing
  const heading = useReveal()
  const grid = useReveal()

  return (
    <section id="precios" className="py-14 sm:py-20">
      <div className={CONTAINER}>
        <div
          ref={heading.setRef}
          className={`reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between ${heading.visible ? 'is-visible' : ''}`}
        >
          <div>
            <p className="text-sm font-semibold tracking-wide text-brand-terracotta">{eyebrow}</p>
            <h2 className="mt-2 text-2xl font-bold text-brand-green-dark sm:text-3xl">{title}</h2>
            <p className="mt-3 max-w-2xl text-base text-brand-ink/80">{subtitle}</p>
          </div>
          <a
            href="#contacto"
            className="inline-block shrink-0 rounded-full border-2 border-brand-green px-5 py-2.5 text-sm font-semibold text-brand-green transition-colors hover:bg-brand-green hover:text-white"
          >
            {ctaLabel}
          </a>
        </div>

        <ul
          ref={grid.setRef}
          className={`reveal-group mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 ${grid.visible ? 'is-visible' : ''}`}
        >
          {items.map((item) => (
            <li
              key={item.name}
              className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-brand-green/10 transition-transform hover:-translate-y-1"
            >
              <img src={item.icon} alt="" aria-hidden="true" className="h-14 w-14 object-contain" />
              <h3 className="mt-3 text-base font-semibold text-brand-green-dark">{item.name}</h3>
              <p className="text-sm text-brand-ink/70">{item.description}</p>
              <p className="mt-3 text-xl font-bold text-brand-terracotta">{item.price}</p>
              <p className="text-xs text-brand-ink/70">{item.weight}</p>
            </li>
          ))}
        </ul>

        <p className="mt-5 flex items-center gap-2 text-xs text-brand-ink/70">
          <span aria-hidden="true">ⓘ</span>
          {disclaimer}
        </p>
      </div>
    </section>
  )
}
