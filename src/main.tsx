import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Activa la hoja de Google Fonts precargada en index.html (rel="preload")
// como stylesheet real, para que no bloquee el primer render de la página.
const fontsPreload = document.getElementById('fonts-preload')
if (fontsPreload instanceof HTMLLinkElement) {
  fontsPreload.rel = 'stylesheet'
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
