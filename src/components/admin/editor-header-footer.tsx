import { useSiteContent } from '../../hooks/use-site-content'
import { AdminSectionCard } from './admin-section-card'
import { FieldInput } from './field-input'
import { ImageField } from './image-field'

export function EditorHeaderFooter() {
  const { content, updateSection } = useSiteContent()
  const { header, footer } = content

  return (
    <AdminSectionCard title="Cabecera, pie y logo">
      <ImageField label="Logotipo" currentSrc={header.logo} />
      <FieldInput label="Texto del botón de contacto (cabecera)" value={header.ctaLabel} onChange={(v) => updateSection('header', { ...header, ctaLabel: v })} />

      <div>
        <p className="text-sm font-medium text-brand-ink/80">Menú de navegación</p>
        <div className="mt-2 space-y-2">
          {header.navLinks.map((link, index) => (
            <FieldInput
              key={index}
              label={`Enlace ${index + 1}`}
              value={link.label}
              onChange={(v) => {
                const navLinks = header.navLinks.map((l, i) => (i === index ? { ...l, label: v } : l))
                updateSection('header', { ...header, navLinks })
              }}
            />
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-medium text-brand-ink/80">Redes sociales (pie de página)</p>
        <div className="mt-2 space-y-2">
          {footer.socialLinks.map((social, index) => (
            <div key={index} className="grid grid-cols-2 gap-2">
              <FieldInput
                label="Nombre"
                value={social.label}
                onChange={(v) => {
                  const socialLinks = footer.socialLinks.map((s, i) => (i === index ? { ...s, label: v } : s))
                  updateSection('footer', { ...footer, socialLinks })
                }}
              />
              <FieldInput
                label="Enlace"
                value={social.href}
                onChange={(v) => {
                  const socialLinks = footer.socialLinks.map((s, i) => (i === index ? { ...s, href: v } : s))
                  updateSection('footer', { ...footer, socialLinks })
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </AdminSectionCard>
  )
}
