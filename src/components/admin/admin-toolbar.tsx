import { useRef, type ChangeEvent } from 'react'
import { useSiteContent } from '../../hooks/use-site-content'
import { useAdminAuth } from '../../hooks/use-admin-auth'

export function AdminToolbar() {
  const { exportJSON, importJSON, resetAll } = useSiteContent()
  const { lock } = useAdminAuth()
  const fileInputRef = useRef<HTMLInputElement>(null)

  async function handleImport(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return
    await importJSON(file)
    event.target.value = ''
  }

  function handleResetAll() {
    if (confirm('¿Restablecer todos los textos a los valores de partida? Se perderán los cambios guardados.')) {
      resetAll()
    }
  }

  return (
    <div className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-3 border-b border-brand-green/15 bg-white px-4 py-3 sm:px-6">
      <div>
        <p className="text-sm font-semibold text-brand-green-dark">Panel de contenido</p>
        <p className="text-xs text-brand-ink/70">Los cambios se guardan al instante en este navegador.</p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <a href="/" target="_blank" rel="noreferrer" className="rounded-full border border-brand-green/30 px-4 py-2 text-xs font-semibold text-brand-green hover:bg-brand-green-light">
          Ver landing ↗
        </a>
        <button type="button" onClick={exportJSON} className="rounded-full border border-brand-green/30 px-4 py-2 text-xs font-semibold text-brand-green hover:bg-brand-green-light">
          Exportar JSON
        </button>
        <button type="button" onClick={() => fileInputRef.current?.click()} className="rounded-full border border-brand-green/30 px-4 py-2 text-xs font-semibold text-brand-green hover:bg-brand-green-light">
          Importar JSON
        </button>
        <input ref={fileInputRef} type="file" accept="application/json" onChange={handleImport} className="hidden" />
        <button type="button" onClick={handleResetAll} className="rounded-full border border-red-300 px-4 py-2 text-xs font-semibold text-red-600 hover:bg-red-50">
          Restablecer todo
        </button>
        <button type="button" onClick={lock} className="rounded-full bg-brand-ink px-4 py-2 text-xs font-semibold text-white hover:bg-brand-ink/80">
          Salir
        </button>
      </div>
    </div>
  )
}
