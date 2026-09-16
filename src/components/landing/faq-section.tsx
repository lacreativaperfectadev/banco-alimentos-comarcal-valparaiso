import { useSiteContent } from '../../hooks/use-site-content'
import { useReveal } from '../../hooks/use-reveal'
import { CONTAINER } from '../../lib/layout'

export function FaqSection() {
  const { content } = useSiteContent()
  const { eyebrow, title, subtitle, image, imageAlt, items } = content.faq
  const reveal = useReveal()

  return (
    <section id="faq" className="py-14 sm:py-20">
      <div
        ref={reveal.setRef}
        className={`reveal ${CONTAINER} grid items-start gap-8 lg:grid-cols-2 lg:gap-14 ${reveal.visible ? 'is-visible' : ''}`}
      >
        <div>
          <img src={image} alt={imageAlt} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lg" />
          <p className="mt-4 text-center font-hand text-2xl text-brand-terracotta lg:text-left">{eyebrow}</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-brand-green-dark sm:text-3xl">{title}</h2>
          <p className="mt-2 text-sm text-brand-ink/70">{subtitle}</p>

          <div className="mt-6 divide-y divide-brand-green/10 rounded-2xl border border-brand-green/10 bg-white">
            {items.map((item) => (
              <details key={item.question} className="group p-4 sm:p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-brand-green-dark sm:text-base">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-brand-terracotta transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-brand-ink/75">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
