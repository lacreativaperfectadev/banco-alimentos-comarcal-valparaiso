import { useSiteContent } from '../../hooks/use-site-content'
import { AdminSectionCard } from './admin-section-card'
import { FieldInput } from './field-input'
import { ImageField } from './image-field'

export function EditorTeamTrust() {
  const { content, updateSection } = useSiteContent()
  const { team, trust } = content

  return (
    <>
      <AdminSectionCard title="Equipo">
        <FieldInput label="Título" value={team.title} onChange={(v) => updateSection('team', { ...team, title: v })} />
        <FieldInput label="Párrafo" value={team.paragraph} onChange={(v) => updateSection('team', { ...team, paragraph: v })} multiline />
        <FieldInput label="Texto del botón" value={team.ctaLabel} onChange={(v) => updateSection('team', { ...team, ctaLabel: v })} />
        <ImageField label="Foto del equipo" currentSrc={team.image} />
      </AdminSectionCard>

      <AdminSectionCard title="Confianza (equipo, años, opiniones)">
        <FieldInput label="Título" value={trust.title} onChange={(v) => updateSection('trust', { ...trust, title: v })} />
        <div className="space-y-3">
          {trust.items.map((item, index) => (
            <div key={index} className="rounded-lg border border-brand-green/15 p-3">
              <FieldInput
                label="Título"
                value={item.title}
                onChange={(v) => {
                  const items = trust.items.map((it, i) => (i === index ? { ...it, title: v } : it))
                  updateSection('trust', { ...trust, items })
                }}
              />
              <div className="mt-2">
                <FieldInput
                  label="Descripción"
                  value={item.description}
                  onChange={(v) => {
                    const items = trust.items.map((it, i) => (i === index ? { ...it, description: v } : it))
                    updateSection('trust', { ...trust, items })
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </AdminSectionCard>
    </>
  )
}
