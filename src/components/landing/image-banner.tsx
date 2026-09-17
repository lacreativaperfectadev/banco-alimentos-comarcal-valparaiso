import type { ReactNode } from 'react'
import { CONTAINER } from '../../lib/layout'

interface ImageBannerProps {
  id?: string
  image: string
  imageAlt: string
  children: ReactNode
  /** Contenido posicionado sobre toda la sección (p. ej. una nota manuscrita en una esquina). */
  cornerNote?: ReactNode
  /** 'left' pone el degradado a la izquierda (texto a la izquierda, foto visible a la derecha). */
  gradient?: 'left' | 'right'
  minHeightClassName?: string
  /** Marca la imagen como prioritaria (hero, visible sin scroll): carga eager en vez de lazy. */
  priority?: boolean
}

const gradientClasses: Record<NonNullable<ImageBannerProps['gradient']>, string> = {
  left: 'bg-gradient-to-r from-brand-green-dark via-brand-green-dark/75 to-brand-green-dark/20 sm:to-brand-green-dark/10',
  right: 'bg-gradient-to-l from-brand-green-dark via-brand-green-dark/75 to-brand-green-dark/20 sm:to-brand-green-dark/10',
}

export function ImageBanner({
  id,
  image,
  imageAlt,
  children,
  cornerNote,
  gradient = 'left',
  minHeightClassName = 'min-h-[540px] sm:min-h-[600px]',
  priority = false,
}: ImageBannerProps) {
  return (
    <section id={id} className={`relative flex w-full items-center overflow-hidden ${minHeightClassName}`}>
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
      <div className={`absolute inset-0 ${gradientClasses[gradient]}`} aria-hidden="true" />
      <div className={`relative z-10 ${CONTAINER} py-14 sm:py-20`}>{children}</div>
      {cornerNote}
    </section>
  )
}
