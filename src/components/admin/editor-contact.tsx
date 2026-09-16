import { useSiteContent } from '../../hooks/use-site-content'
import { AdminSectionCard } from './admin-section-card'
import { FieldInput } from './field-input'

export function EditorContact() {
  const { content, updateSection } = useSiteContent()
  const contact = content.contact

  return (
    <AdminSectionCard title="Contacto (formulario, dirección, horario)">
      <FieldInput label="Texto pequeño superior" value={contact.eyebrow} onChange={(v) => updateSection('contact', { ...contact, eyebrow: v })} />
      <FieldInput label="Título" value={contact.title} onChange={(v) => updateSection('contact', { ...contact, title: v })} />
      <FieldInput label="Subtítulo" value={contact.subtitle} onChange={(v) => updateSection('contact', { ...contact, subtitle: v })} multiline />

      <div className="grid gap-2 sm:grid-cols-2">
        <FieldInput
          label="Dirección"
          value={contact.info.address}
          onChange={(v) => updateSection('contact', { ...contact, info: { ...contact.info, address: v } })}
          multiline
        />
        <FieldInput
          label="Horario"
          value={contact.info.hours}
          onChange={(v) => updateSection('contact', { ...contact, info: { ...contact.info, hours: v } })}
          multiline
        />
      </div>
      <FieldInput
        label="Nota manuscrita sobre el mapa"
        value={contact.info.mapCaption}
        onChange={(v) => updateSection('contact', { ...contact, info: { ...contact.info, mapCaption: v } })}
      />

      <div>
        <p className="text-sm font-medium text-brand-ink/80">Motivos de contacto (desplegable)</p>
        <div className="mt-2 space-y-2">
          {contact.form.reasonOptions.map((option, index) => (
            <FieldInput
              key={index}
              label={`Opción ${index + 1}`}
              value={option}
              onChange={(v) => {
                const reasonOptions = contact.form.reasonOptions.map((o, i) => (i === index ? v : o))
                updateSection('contact', { ...contact, form: { ...contact.form, reasonOptions } })
              }}
            />
          ))}
        </div>
      </div>
    </AdminSectionCard>
  )
}
