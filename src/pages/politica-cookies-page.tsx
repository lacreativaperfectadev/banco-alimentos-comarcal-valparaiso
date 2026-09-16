import { useSiteContent } from '../hooks/use-site-content'
import { LegalPageLayout } from './legal-page-layout'

export function PoliticaCookiesPage() {
  const { content } = useSiteContent()
  return <LegalPageLayout title={content.legal.cookies.title} body={content.legal.cookies.body} />
}
