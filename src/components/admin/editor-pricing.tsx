import { useSiteContent } from '../../hooks/use-site-content'
import { AdminSectionCard } from './admin-section-card'
import { FieldInput } from './field-input'

export function EditorPricing() {
  const { content, updateSection } = useSiteContent()
  const pricing = content.pricing

  function updateItem(index: number, patch: Partial<(typeof pricing.items)[number]>) {
    const items = pricing.items.map((it, i) => (i === index ? { ...it, ...patch } : it))
    updateSection('pricing', { ...pricing, items })
  }

  return (
    <AdminSectionCard title="Precios orientativos">
      <FieldInput label="Texto pequeño superior" value={pricing.eyebrow} onChange={(v) => updateSection('pricing', { ...pricing, eyebrow: v })} />
      <FieldInput label="Título" value={pricing.title} onChange={(v) => updateSection('pricing', { ...pricing, title: v })} />
      <FieldInput label="Subtítulo" value={pricing.subtitle} onChange={(v) => updateSection('pricing', { ...pricing, subtitle: v })} multiline />
      <FieldInput label="Texto del botón" value={pricing.ctaLabel} onChange={(v) => updateSection('pricing', { ...pricing, ctaLabel: v })} />
      <FieldInput label="Aviso de precios orientativos" value={pricing.disclaimer} onChange={(v) => updateSection('pricing', { ...pricing, disclaimer: v })} />

      <div className="space-y-4">
        {pricing.items.map((item, index) => (
          <div key={index} className="rounded-lg border border-brand-green/15 p-3">
            <p className="mb-2 text-xs font-semibold uppercase text-brand-ink/70">Lote {index + 1}</p>
            <div className="grid gap-2 sm:grid-cols-2">
              <FieldInput label="Nombre" value={item.name} onChange={(v) => updateItem(index, { name: v })} />
              <FieldInput label="Descripción" value={item.description} onChange={(v) => updateItem(index, { description: v })} />
              <FieldInput label="Precio" value={item.price} onChange={(v) => updateItem(index, { price: v })} />
              <FieldInput label="Peso aproximado" value={item.weight} onChange={(v) => updateItem(index, { weight: v })} />
            </div>
          </div>
        ))}
      </div>
    </AdminSectionCard>
  )
}
