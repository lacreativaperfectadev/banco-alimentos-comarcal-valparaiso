import { useCallback, useMemo, useState, type ReactNode } from 'react'
import type { SiteContent } from '../content/site-content-types'
import { defaultContent } from '../content/default-content'
import { SiteContentContext, type SiteContentContextValue } from './site-content-context-object'

const STORAGE_KEY = 'kodarvia:banco-alimentos:content'

function loadStoredContent(): SiteContent {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultContent
    const stored = JSON.parse(raw) as Partial<SiteContent>
    // Merge superficial por sección: si una sección no existe en lo guardado
    // (por ejemplo, se añadió después en el código), cae al valor por defecto.
    return { ...defaultContent, ...stored }
  } catch {
    return defaultContent
  }
}

function persist(next: SiteContent) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
}

export function SiteContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent>(loadStoredContent)

  const updateSection = useCallback<SiteContentContextValue['updateSection']>((section, value) => {
    setContent((prev) => {
      const next = { ...prev, [section]: value }
      persist(next)
      return next
    })
  }, [])

  const resetSection = useCallback<SiteContentContextValue['resetSection']>((section) => {
    setContent((prev) => {
      const next = { ...prev, [section]: defaultContent[section] }
      persist(next)
      return next
    })
  }, [])

  const resetAll = useCallback(() => {
    persist(defaultContent)
    setContent(defaultContent)
  }, [])

  const exportJSON = useCallback(() => {
    const blob = new Blob([JSON.stringify(content, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'contenido-banco-alimentos.json'
    link.click()
    URL.revokeObjectURL(url)
  }, [content])

  const importJSON = useCallback(async (file: File) => {
    const text = await file.text()
    const parsed = JSON.parse(text) as Partial<SiteContent>
    const next = { ...defaultContent, ...parsed }
    persist(next)
    setContent(next)
  }, [])

  const value = useMemo<SiteContentContextValue>(
    () => ({ content, updateSection, resetSection, resetAll, exportJSON, importJSON }),
    [content, updateSection, resetSection, resetAll, exportJSON, importJSON],
  )

  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>
}
