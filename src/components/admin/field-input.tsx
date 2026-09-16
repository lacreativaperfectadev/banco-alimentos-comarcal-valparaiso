interface FieldInputProps {
  label: string
  value: string
  onChange: (value: string) => void
  multiline?: boolean
}

export function FieldInput({ label, value, onChange, multiline }: FieldInputProps) {
  const className =
    'mt-1 w-full rounded-lg border border-brand-green/20 px-3 py-2 text-sm text-brand-ink outline-none focus:border-brand-green'

  return (
    <label className="block text-sm font-medium text-brand-ink/80">
      {label}
      {multiline ? (
        <textarea value={value} onChange={(e) => onChange(e.target.value)} rows={3} className={className} />
      ) : (
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)} className={className} />
      )}
    </label>
  )
}
