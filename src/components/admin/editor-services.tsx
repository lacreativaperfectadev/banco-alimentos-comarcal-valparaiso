import { useSiteContent } from '../../hooks/use-site-content'
import { AdminSectionCard } from './admin-section-card'
import { FieldInput } from './field-input'

export function EditorServices() {
  const { content, updateSection } = useSiteContent()
  const services = content.services

  return (
    <AdminSectionCard title="Qué hacemos (servicios)">
      <FieldInput label="Texto pequeño superior" value={services.eyebrow} onChange={(v) => updateSection('services', { ...services, eyebrow: v })} />
      <FieldInput label="Título" value={services.title} onChange={(v) => updateSection('services', { ...services, title: v })} />
      <FieldInput label="Subtítulo" value={services.subtitle} onChange={(v) => updateSection('services', { ...services, subtitle: v })} multiline />

      <div className="space-y-4">
        {services.items.map((item, index) => (
          <div key={index} className="rounded-lg border border-brand-green/15 p-3">
            <p className="mb-2 text-xs font-semibold uppercase text-brand-ink/70">Servicio {index + 1}</p>
            <FieldInput
              label="Título"
              value={item.title}
              onChange={(v) => {
                const items = services.items.map((it, i) => (i === index ? { ...it, title: v } : it))
                updateSection('services', { ...services, items })
              }}
            />
            <div className="mt-2">
              <FieldInput
                label="Descripción"
                value={item.description}
                onChange={(v) => {
                  const items = services.items.map((it, i) => (i === index ? { ...it, description: v } : it))
                  updateSection('services', { ...services, items })
                }}
                multiline
              />
            </div>
          </div>
        ))}
      </div>
    </AdminSectionCard>
  )
}
