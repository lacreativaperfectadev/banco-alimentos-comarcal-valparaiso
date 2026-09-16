import { useSiteContent } from '../hooks/use-site-content'
import { LegalPageLayout } from './legal-page-layout'

export function AvisoLegalPage() {
  const { content } = useSiteContent()
  return <LegalPageLayout title={content.legal.avisoLegal.title} body={content.legal.avisoLegal.body} />
}
