import { useState } from 'react'

const STORAGE_KEY = 'kodarvia:banco-alimentos:cookie-consent'

type Consent = 'accepted' | 'rejected' | null

function readConsent(): Consent {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'accepted' || value === 'rejected' ? value : null
  } catch {
    return null
  }
}

export function useCookieConsent() {
  const [consent, setConsent] = useState<Consent>(readConsent)

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setConsent('accepted')
  }

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected')
    setConsent('rejected')
  }

  return { consent, accept, reject }
}
