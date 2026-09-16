import { AdminToolbar } from './admin-toolbar'
import { EditorHeaderFooter } from './editor-header-footer'
import { EditorHero } from './editor-hero'
import { EditorServices } from './editor-services'
import { EditorPricing } from './editor-pricing'
import { EditorTeamTrust } from './editor-team-trust'
import { EditorFaq } from './editor-faq'
import { EditorContact } from './editor-contact'
import { EditorLegalCookies } from './editor-legal-cookies'

export function AdminDashboard() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <AdminToolbar />

      <div className="mx-auto max-w-3xl space-y-5 px-4 py-6 sm:px-6">
        <EditorHeaderFooter />
        <EditorHero />
        <EditorServices />
        <EditorPricing />
        <EditorTeamTrust />
        <EditorFaq />
        <EditorContact />
        <EditorLegalCookies />
      </div>
    </div>
  )
}
