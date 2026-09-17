import { useState, type ChangeEvent } from 'react'

interface ImageFieldProps {
  label: string
  currentSrc: string
}

/**
 * Previsualiza un cambio de imagen solo en esta sesión del navegador
 * (URL.createObjectURL), sin guardarlo en localStorage: un archivo real
 * pesa demasiado para la cuota de localStorage. Para que el cambio sea
 * definitivo hay que sustituir el archivo indicado en public/images/.
 */
export function ImageField({ label, currentSrc }: ImageFieldProps) {
  const [previewSrc, setPreviewSrc] = useState<string | null>(null)
  const fileName = currentSrc.split('/').pop()

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return
    setPreviewSrc(URL.createObjectURL(file))
  }

  return (
    <div className="rounded-lg border border-brand-green/20 p-3">
      <p className="text-sm font-medium text-brand-ink/80">{label}</p>
      <img
        src={previewSrc ?? currentSrc}
        alt=""
        className="mt-2 aspect-[4/3] w-full max-w-xs rounded-lg object-cover"
      />
      <input type="file" accept="image/*" onChange={handleFileChange} className="mt-2 block text-xs" />
      <p className="mt-1 text-xs text-brand-ink/70">
        Esto es solo una vista previa de esta sesión. Para que el cambio sea definitivo, sustituye el archivo{' '}
        <code className="rounded bg-brand-green-light px-1">public/images/{fileName}</code> por la imagen final y
        vuelve a publicar.
      </p>
    </div>
  )
}
