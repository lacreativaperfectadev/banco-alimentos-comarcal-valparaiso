import { Link } from 'react-router-dom'
import { SiteHeader } from '../components/landing/site-header'
import { SiteFooter } from '../components/landing/site-footer'

export function LegalPageLayout({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <Link to="/" className="text-sm font-medium text-brand-green hover:underline">
          ← Volver a la landing
        </Link>
        <h1 className="mt-4 text-2xl font-bold text-brand-green-dark sm:text-3xl">{title}</h1>
        <div className="mt-6 whitespace-pre-line text-sm leading-relaxed text-brand-ink/85">{body}</div>
      </main>
      <SiteFooter />
    </div>
  )
}
