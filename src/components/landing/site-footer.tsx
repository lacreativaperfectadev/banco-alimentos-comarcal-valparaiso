import { Link } from 'react-router-dom'
import { useSiteContent } from '../../hooks/use-site-content'
import { CONTAINER } from '../../lib/layout'

export function SiteFooter() {
  const { content } = useSiteContent()
  const { logo, logoAlt, links } = content.footer

  return (
    <footer className="bg-brand-ink py-10 text-white/80">
      <div className={`${CONTAINER} flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left`}>
        <img src={logo} alt={logoAlt} className="h-20 w-auto rounded-xl bg-white p-2 object-contain shadow-sm" />

        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
          {links.map((link) => (
            <Link key={link.label} to={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
