import { useContext } from 'react'
import { SiteContentContext } from './site-content-context-object'

export function useSiteContent() {
  const ctx = useContext(SiteContentContext)
  if (!ctx) {
    throw new Error('useSiteContent debe usarse dentro de <SiteContentProvider>')
  }
  return ctx
}
