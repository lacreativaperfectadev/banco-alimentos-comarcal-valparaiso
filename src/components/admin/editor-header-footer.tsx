import { useSiteContent } from '../../hooks/use-site-content'
import { AdminSectionCard } from './admin-section-card'
import { FieldInput } from './field-input'
import { ImageField } from './image-field'

export function EditorHeaderFooter() {
  const { content, updateSection } = useSiteContent()
  const { header } = content

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
    </AdminSectionCard>
  )
}
