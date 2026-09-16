import { useState } from 'react'

const SESSION_KEY = 'kodarvia:banco-alimentos:admin-unlocked'
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'ADMIN'

function readUnlocked(): boolean {
  try {
    return sessionStorage.getItem(SESSION_KEY) === 'true'
  } catch {
    return false
  }
}

export function useAdminAuth() {
  const [unlocked, setUnlocked] = useState(readUnlocked)

  function tryUnlock(password: string): boolean {
    if (password !== ADMIN_PASSWORD) return false
    sessionStorage.setItem(SESSION_KEY, 'true')
    setUnlocked(true)
    return true
  }

  function lock() {
    sessionStorage.removeItem(SESSION_KEY)
    setUnlocked(false)
  }

  return { unlocked, tryUnlock, lock }
}
