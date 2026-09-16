interface SocialIconProps {
  network: string
  className?: string
}

/** Iconos genéricos de redes sociales, elegidos por el nombre de la red. */
export function SocialIcon({ network, className = 'h-5 w-5' }: SocialIconProps) {
  const key = network.trim().toLowerCase()

  if (key === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M13.5 22v-8.5h2.85l.43-3.31H13.5V8.06c0-.96.27-1.61 1.64-1.61h1.75V3.5c-.3-.04-1.35-.13-2.56-.13-2.53 0-4.27 1.55-4.27 4.38v2.44H7.2v3.31h2.86V22z" />
      </svg>
    )
  }

  if (key === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.15" cy="6.85" r="1" fill="currentColor" stroke="none" />
      </svg>
    )
  }

  return null
}
