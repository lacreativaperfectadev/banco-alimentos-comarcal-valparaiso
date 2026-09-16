import { createContext } from 'react'
import type { SiteContent } from '../content/site-content-types'

export interface SiteContentContextValue {
  content: SiteContent
  updateSection: <K extends keyof SiteContent>(section: K, value: SiteContent[K]) => void
  resetSection: <K extends keyof SiteContent>(section: K) => void
  resetAll: () => void
  exportJSON: () => void
  importJSON: (file: File) => Promise<void>
}

export const SiteContentContext = createContext<SiteContentContextValue | null>(null)
