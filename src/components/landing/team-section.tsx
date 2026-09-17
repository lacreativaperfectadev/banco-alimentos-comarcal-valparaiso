import { useSiteContent } from '../../hooks/use-site-content'
import { useReveal } from '../../hooks/use-reveal'
import { ImageBanner } from './image-banner'

export function TeamSection() {
  const { content } = useSiteContent()
  const { title, paragraph, image, imageAlt } = content.team
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
      </div>
    </ImageBanner>
  )
}
