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

        <ul className="mt-8 grid grid-cols-3 gap-x-2 gap-y-1 sm:flex sm:flex-nowrap sm:gap-x-6">
          {badges.map((badge) => (
            <li
              key={badge.label}
              className="flex flex-col items-center gap-1 text-center text-[11px] font-medium leading-tight text-white sm:flex-row sm:gap-2 sm:text-left sm:text-sm"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm sm:h-12 sm:w-12">
                <img src={badge.icon} alt="" className="h-5 w-5 object-contain sm:h-9 sm:w-9" aria-hidden="true" />
              </span>
              <span>{badge.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </ImageBanner>
  )
}
