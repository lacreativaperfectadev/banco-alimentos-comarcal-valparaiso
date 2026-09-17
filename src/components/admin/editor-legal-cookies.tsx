import { useSiteContent } from '../../hooks/use-site-content'
import { AdminSectionCard } from './admin-section-card'
import { FieldInput } from './field-input'

export function EditorLegalCookies() {
  const { content, updateSection } = useSiteContent()
  const { legal, cookieBanner } = content

  return (
    <>
      <AdminSectionCard title="Aviso de cookies">
        <FieldInput
          label="Mensaje"
          value={cookieBanner.message}
          onChange={(v) => updateSection('cookieBanner', { ...cookieBanner, message: v })}
          multiline
        />
        <div className="grid gap-2 sm:grid-cols-2">
          <FieldInput
            label="Botón aceptar"
            value={cookieBanner.acceptLabel}
            onChange={(v) => updateSection('cookieBanner', { ...cookieBanner, acceptLabel: v })}
          />
          <FieldInput
            label="Botón rechazar"
            value={cookieBanner.rejectLabel}
            onChange={(v) => updateSection('cookieBanner', { ...cookieBanner, rejectLabel: v })}
          />
        </div>
      </AdminSectionCard>

      <AdminSectionCard title="Páginas legales">
        <p className="text-xs text-brand-ink/70">
          Textos provisionales hasta que lleguen los datos fiscales definitivos del cliente.
        </p>
        <FieldInput
          label="Aviso legal"
          value={legal.avisoLegal.body}
          onChange={(v) => updateSection('legal', { ...legal, avisoLegal: { ...legal.avisoLegal, body: v } })}
          multiline
        />
        <FieldInput
          label="Política de privacidad"
          value={legal.privacidad.body}
          onChange={(v) => updateSection('legal', { ...legal, privacidad: { ...legal.privacidad, body: v } })}
          multiline
        />
        <FieldInput
          label="Política de cookies"
          value={legal.cookies.body}
          onChange={(v) => updateSection('legal', { ...legal, cookies: { ...legal.cookies, body: v } })}
          multiline
        />
      </AdminSectionCard>
    </>
  )
}
