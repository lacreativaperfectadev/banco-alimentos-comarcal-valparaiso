import { useSiteContent } from '../../hooks/use-site-content'
import { AdminSectionCard } from './admin-section-card'
import { FieldInput } from './field-input'
import { ImageField } from './image-field'

export function EditorHero() {
  const { content, updateSection } = useSiteContent()
  const hero = content.hero

  return (
    <AdminSectionCard title="Cabecera principal (hero)">
      <FieldInput label="Texto pequeño superior" value={hero.eyebrow} onChange={(v) => updateSection('hero', { ...hero, eyebrow: v })} />
      <FieldInput label="Título" value={hero.title} onChange={(v) => updateSection('hero', { ...hero, title: v })} multiline />
      <FieldInput label="Párrafo" value={hero.paragraph} onChange={(v) => updateSection('hero', { ...hero, paragraph: v })} multiline />
      <FieldInput label="Texto del botón" value={hero.ctaLabel} onChange={(v) => updateSection('hero', { ...hero, ctaLabel: v })} />
      <FieldInput
        label="Nota manuscrita sobre la foto"
        value={hero.imageCaption}
        onChange={(v) => updateSection('hero', { ...hero, imageCaption: v })}
      />
      <ImageField label="Foto principal" currentSrc={hero.image} />

      <div>
        <p className="text-sm font-medium text-brand-ink/80">Distintivos (badges)</p>
        <div className="mt-2 space-y-2">
          {hero.badges.map((badge, index) => (
            <FieldInput
              key={index}
              label={`Distintivo ${index + 1}`}
              value={badge.label}
              onChange={(v) => {
                const badges = hero.badges.map((b, i) => (i === index ? { ...b, label: v } : b))
                updateSection('hero', { ...hero, badges })
              }}
            />
          ))}
        </div>
      </div>
    </AdminSectionCard>
  )
}
