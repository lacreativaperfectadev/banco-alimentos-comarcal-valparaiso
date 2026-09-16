import { useSiteContent } from '../../hooks/use-site-content'
import { useReveal } from '../../hooks/use-reveal'
import { ImageBanner } from './image-banner'

export function TeamSection() {
  const { content } = useSiteContent()
  const { title, paragraph, ctaLabel, image, imageAlt } = content.team
  const reveal = useReveal()

  return (
    <ImageBanner
      id="equipo"
      image={image}
      imageAlt={imageAlt}
      gradient="left"
      minHeightClassName="min-h-[460px] sm:min-h-[520px]"
    >
      <div ref={reveal.setRef} className={`reveal max-w-lg ${reveal.visible ? 'is-visible' : ''}`}>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="mt-4 text-base text-white/85">{paragraph}</p>
        <a
          href="#equipo"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-green-dark shadow-sm transition-colors hover:bg-brand-cream"
        >
          {ctaLabel}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </ImageBanner>
  )
}
