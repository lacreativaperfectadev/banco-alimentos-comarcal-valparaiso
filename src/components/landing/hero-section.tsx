import { useSiteContent } from '../../hooks/use-site-content'
import { useReveal } from '../../hooks/use-reveal'
import { ImageBanner } from './image-banner'

export function HeroSection() {
  const { content } = useSiteContent()
  const { eyebrow, title, paragraph, ctaLabel, badges, image, imageAlt, imageCaption } = content.hero
  const reveal = useReveal()

  return (
    <ImageBanner
      id="top"
      image={image}
      imageAlt={imageAlt}
      gradient="left"
      cornerNote={
        <p className="pointer-events-none absolute bottom-6 right-4 rotate-[-3deg] font-hand text-2xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.45)] sm:right-8 sm:text-3xl">
          {imageCaption} ♥
        </p>
      }
    >
      <div ref={reveal.setRef} className={`reveal max-w-xl ${reveal.visible ? 'is-visible' : ''}`}>
        <p className="text-sm font-semibold tracking-wide text-brand-terracotta">{eyebrow}</p>
        <h1 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h1>
        <p className="mt-4 text-base text-white/85 sm:text-lg">{paragraph}</p>

        <a
          href="#contacto"
          className="mt-6 inline-block rounded-full bg-brand-terracotta px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-terracotta-dark sm:text-base"
        >
          {ctaLabel}
        </a>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
          {badges.map((badge) => (
            <li key={badge.label} className="flex items-center gap-2 text-sm font-medium text-white">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                <img src={badge.icon} alt="" className="h-9 w-9 object-contain" aria-hidden="true" />
              </span>
              {badge.label}
            </li>
          ))}
        </ul>
      </div>
    </ImageBanner>
  )
}
