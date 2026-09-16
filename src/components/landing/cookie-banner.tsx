import { useSiteContent } from '../../hooks/use-site-content'
import { useCookieConsent } from '../../hooks/use-cookie-consent'
import { CONTAINER } from '../../lib/layout'

export function CookieBanner() {
  const { content } = useSiteContent()
  const { consent, accept, reject } = useCookieConsent()
  const { message, acceptLabel, rejectLabel } = content.cookieBanner

  if (consent) return null

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-green/20 bg-white/98 px-4 py-4 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] backdrop-blur sm:px-6"
    >
      <div className={`${CONTAINER} flex flex-col items-center gap-3 sm:flex-row sm:justify-between`}>
        <p className="text-sm text-brand-ink/80">{message}</p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={reject}
            className="rounded-full border border-brand-green/30 px-5 py-2 text-sm font-semibold text-brand-ink/80 hover:bg-brand-green-light"
          >
            {rejectLabel}
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-full bg-brand-green px-5 py-2 text-sm font-semibold text-white hover:bg-brand-green-dark"
          >
            {acceptLabel}
          </button>
        </div>
      </div>
    </div>
  )
}
