import { useSiteContent } from '../hooks/use-site-content'
import { LegalPageLayout } from './legal-page-layout'

export function PoliticaPrivacidadPage() {
  const { content } = useSiteContent()
  return <LegalPageLayout title={content.legal.privacidad.title} body={content.legal.privacidad.body} />
}
