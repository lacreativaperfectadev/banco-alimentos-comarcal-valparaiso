import { useState } from 'react'
import { useSiteContent } from '../../hooks/use-site-content'
import { CONTAINER } from '../../lib/layout'

export function SiteHeader() {
  const { content } = useSiteContent()
  const { logo, logoAlt, navLinks, ctaLabel } = content.header
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-brand-green/10 bg-brand-cream/95 backdrop-blur">
      <div className={`${CONTAINER} flex items-center justify-between gap-4 py-3`}>
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt={logoAlt} className="h-14 w-auto object-contain sm:h-16" />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-brand-ink/80 transition-colors hover:text-brand-green"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            className="rounded-full bg-brand-green px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-green-dark sm:px-5"
          >
            {ctaLabel}
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-green/20 text-brand-green lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" className="border-t border-brand-green/10 bg-brand-cream lg:hidden">
          <div className={`${CONTAINER} flex flex-col gap-1 py-3`}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-brand-ink/80 hover:bg-brand-green-light hover:text-brand-green"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-brand-green px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              {ctaLabel}
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
