import { useState, type FocusEvent, type KeyboardEvent } from 'react'

interface CustomSelectProps {
  value: string
  onChange: (value: string) => void
  options: string[]
  placeholder: string
  hasError?: boolean
}

/**
 * El <select> nativo no se puede restylear: el desplegable emergente lo
 * pinta el sistema operativo y siempre resalta en azul, sin importar el CSS.
 * Este combobox propio sí respeta los colores de marca.
 */
export function CustomSelect({ value, onChange, options, placeholder, hasError }: CustomSelectProps) {
  const [open, setOpen] = useState(false)

  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false)
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Escape') setOpen(false)
  }

  function selectOption(option: string) {
    onChange(option)
    setOpen(false)
  }

  return (
    <div className="relative" onBlur={handleBlur} onKeyDown={handleKeyDown}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex w-full items-center justify-between rounded-lg border px-3 py-2 text-left text-sm outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/30 ${
          hasError ? 'border-red-400' : 'border-brand-green/20'
        } ${value ? 'text-brand-ink' : 'text-brand-ink/50'}`}
      >
        <span className="truncate">{value || placeholder}</span>
        <span aria-hidden="true" className={`ml-2 shrink-0 text-brand-green transition-transform ${open ? 'rotate-180' : ''}`}>
          ▾
        </span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-lg border border-brand-green/20 bg-white py-1 shadow-lg"
        >
          {options.map((option) => (
            <li
              key={option}
              role="option"
              aria-selected={option === value}
              tabIndex={0}
              onClick={() => selectOption(option)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  selectOption(option)
                }
              }}
              className={`cursor-pointer px-3 py-2 text-sm hover:bg-brand-green/10 ${
                option === value ? 'bg-brand-green/10 font-medium text-brand-green-dark' : 'text-brand-ink'
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
