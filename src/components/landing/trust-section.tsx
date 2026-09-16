import { useSiteContent } from '../../hooks/use-site-content'
import { useReveal } from '../../hooks/use-reveal'
import { CONTAINER } from '../../lib/layout'

export function TrustSection() {
  const { content } = useSiteContent()
  const { title, items } = content.trust
  const grid = useReveal()

  return (
    <section className="border-y border-brand-green/10 bg-brand-green-light/40 py-12 sm:py-16">
      <div className={CONTAINER}>
        <h2 className="text-center text-xl font-bold text-brand-green-dark sm:text-2xl">{title}</h2>

        <ul
          ref={grid.setRef}
          className={`reveal-group mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3 ${grid.visible ? 'is-visible' : ''}`}
        >
          {items.map((item) => (
            <li key={item.title} className="flex flex-col items-center text-center">
              <img src={item.icon} alt="" aria-hidden="true" className="h-16 w-16 object-contain" />
              <h3 className="mt-3 text-base font-semibold text-brand-green-dark">{item.title}</h3>
              <p className="mt-1 max-w-xs text-sm text-brand-ink/75">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
