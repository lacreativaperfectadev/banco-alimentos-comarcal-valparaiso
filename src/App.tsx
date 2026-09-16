import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SiteContentProvider } from './hooks/site-content-context'
import { LandingPage } from './pages/landing-page'
import { AvisoLegalPage } from './pages/aviso-legal-page'
import { PoliticaPrivacidadPage } from './pages/politica-privacidad-page'
import { PoliticaCookiesPage } from './pages/politica-cookies-page'
import { AdminPage } from './pages/admin-page'

function App() {
  return (
    <SiteContentProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/aviso-legal" element={<AvisoLegalPage />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidadPage />} />
          <Route path="/politica-cookies" element={<PoliticaCookiesPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </SiteContentProvider>
  )
}

export default App
