import { useSiteContent } from '../../hooks/use-site-content'
import { AdminSectionCard } from './admin-section-card'
import { FieldInput } from './field-input'
import { ImageField } from './image-field'

export function EditorFaq() {
  const { content, updateSection } = useSiteContent()
  const faq = content.faq

  function updateItem(index: number, patch: Partial<(typeof faq.items)[number]>) {
    const items = faq.items.map((it, i) => (i === index ? { ...it, ...patch } : it))
    updateSection('faq', { ...faq, items })
  }

  return (
    <AdminSectionCard title="Preguntas frecuentes">
      <FieldInput label="Nota manuscrita" value={faq.eyebrow} onChange={(v) => updateSection('faq', { ...faq, eyebrow: v })} />
      <FieldInput label="Título" value={faq.title} onChange={(v) => updateSection('faq', { ...faq, title: v })} />
      <FieldInput label="Subtítulo" value={faq.subtitle} onChange={(v) => updateSection('faq', { ...faq, subtitle: v })} />
      <ImageField label="Foto de la sección" currentSrc={faq.image} />

      <div className="space-y-3">
        {faq.items.map((item, index) => (
          <div key={index} className="rounded-lg border border-brand-green/15 p-3">
            <FieldInput label="Pregunta" value={item.question} onChange={(v) => updateItem(index, { question: v })} />
            <div className="mt-2">
              <FieldInput label="Respuesta" value={item.answer} onChange={(v) => updateItem(index, { answer: v })} multiline />
            </div>
          </div>
        ))}
      </div>
    </AdminSectionCard>
  )
}
