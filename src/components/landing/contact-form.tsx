import { useState, type FormEvent, type ReactNode } from 'react'
import { useSiteContent } from '../../hooks/use-site-content'
import { CustomSelect } from './custom-select'

interface FormValues {
  nombre: string
  telefono: string
  correo: string
  motivo: string
  mensaje: string
  consentimiento: boolean
  empresa: string // honeypot, debe quedar vacío
}

const emptyValues: FormValues = {
  nombre: '',
  telefono: '',
  correo: '',
  motivo: '',
  mensaje: '',
  consentimiento: false,
  empresa: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function encodeFormData(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&')
}

export function ContactForm() {
  const { content } = useSiteContent()
  const { form } = content.contact
  const [values, setValues] = useState<FormValues>(emptyValues)
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  function validate(current: FormValues) {
    const next: Partial<Record<keyof FormValues, string>> = {}
    if (!current.nombre.trim()) next.nombre = 'Indica tu nombre y apellidos.'
    if (!current.telefono.trim()) next.telefono = 'Indica un teléfono de contacto.'
    if (!current.correo.trim()) next.correo = 'Indica tu correo electrónico.'
    else if (!emailPattern.test(current.correo)) next.correo = 'El correo electrónico no es válido.'
    if (!current.motivo) next.motivo = 'Selecciona un motivo de contacto.'
    if (!current.consentimiento) next.consentimiento = 'Debes aceptar la política de privacidad.'
    return next
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return
    if (values.empresa) return // honeypot relleno: descarta en silencio

    setStatus('submitting')
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData({ 'form-name': 'contacto', ...values, consentimiento: 'sí' }),
      })
      if (!response.ok) throw new Error('submit-failed')
      setStatus('success')
      setValues(emptyValues)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-brand-green/10">
        <p className="text-lg font-semibold text-brand-green-dark">{form.successTitle}</p>
        <p className="mt-2 text-sm text-brand-ink/75">{form.successMessage}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-green/10">
      <input type="text" name="empresa" value={values.empresa} tabIndex={-1} autoComplete="off"
        onChange={(e) => setValues((v) => ({ ...v, empresa: e.target.value }))}
        className="hidden" aria-hidden="true" />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={form.nameLabel} required error={errors.nombre}>
          <input
            type="text"
            value={values.nombre}
            onChange={(e) => setValues((v) => ({ ...v, nombre: e.target.value }))}
            className={inputClass(!!errors.nombre)}
          />
        </Field>
        <Field label={form.phoneLabel} required error={errors.telefono}>
          <input
            type="tel"
            value={values.telefono}
            onChange={(e) => setValues((v) => ({ ...v, telefono: e.target.value }))}
            className={inputClass(!!errors.telefono)}
          />
        </Field>
        <Field label={form.emailLabel} required error={errors.correo}>
          <input
            type="email"
            value={values.correo}
            onChange={(e) => setValues((v) => ({ ...v, correo: e.target.value }))}
            className={inputClass(!!errors.correo)}
          />
        </Field>
        <Field label={form.reasonLabel} required error={errors.motivo}>
          <CustomSelect
            value={values.motivo}
            onChange={(motivo) => setValues((v) => ({ ...v, motivo }))}
            options={form.reasonOptions}
            placeholder="Selecciona una opción"
            hasError={!!errors.motivo}
          />
        </Field>
      </div>

      <Field label={form.messageLabel}>
        <textarea
          value={values.mensaje}
          onChange={(e) => setValues((v) => ({ ...v, mensaje: e.target.value }))}
          rows={4}
          className={inputClass(false)}
        />
      </Field>

      <div>
        <label className="flex items-start gap-2 text-sm text-brand-ink/80">
          <input
            type="checkbox"
            checked={values.consentimiento}
            onChange={(e) => setValues((v) => ({ ...v, consentimiento: e.target.checked }))}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-brand-green/40 accent-brand-green focus:ring-2 focus:ring-brand-green/30"
          />
          <span>
            {form.consentLabel} <span aria-hidden="true">*</span>
          </span>
        </label>
        {errors.consentimiento && <p className="mt-1 text-xs text-red-600">{errors.consentimiento}</p>}
      </div>

      {status === 'error' && <p className="text-sm text-red-600">{form.errorMessage}</p>}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-green-dark disabled:opacity-60 sm:w-auto"
      >
        {status === 'submitting' ? 'Enviando…' : form.submitLabel}
      </button>
    </form>
  )
}

function inputClass(hasError: boolean) {
  return `w-full rounded-lg border px-3 py-2 text-sm text-brand-ink outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/30 accent-brand-green ${
    hasError ? 'border-red-400' : 'border-brand-green/20'
  }`
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string
  required?: boolean
  error?: string
  children: ReactNode
}) {
  return (
    <label className="block text-sm font-medium text-brand-ink/80">
      {label} {required && <span aria-hidden="true">*</span>}
      <div className="mt-1">{children}</div>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </label>
  )
}
