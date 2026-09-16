import { useState, type FormEvent, type ReactNode } from 'react'
import { useAdminAuth } from '../../hooks/use-admin-auth'

export function AdminGate({ children }: { children: ReactNode }) {
  const { unlocked, tryUnlock } = useAdminAuth()
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  if (unlocked) return <>{children}</>

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const ok = tryUnlock(password)
    setError(!ok)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-green-dark px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-lg">
        <h1 className="text-lg font-bold text-brand-green-dark">Panel de contenido</h1>
        <p className="mt-1 text-sm text-brand-ink/70">Acceso interno para editar la landing.</p>

        <label className="mt-4 block text-sm font-medium text-brand-ink/80">
          Contraseña
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            className="mt-1 w-full rounded-lg border border-brand-green/20 px-3 py-2 text-sm outline-none focus:border-brand-green"
          />
        </label>
        {error && <p className="mt-2 text-xs text-red-600">Contraseña incorrecta.</p>}

        <button
          type="submit"
          className="mt-4 w-full rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-green-dark"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}
