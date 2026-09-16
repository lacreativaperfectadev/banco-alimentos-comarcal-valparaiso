import { useCallback, useState } from 'react'

/**
 * Verdad simple: visible=false hasta que el elemento entra en el viewport
 * (o de inmediato si el usuario prefiere sin animaciones). Se conecta
 * mediante callback ref al montar el nodo, en vez de useEffect+ref.current.
 */
export function useReveal() {
  const [visible, setVisible] = useState(false)

  const setRef = useCallback((node: HTMLElement | null) => {
    if (!node) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(node)
  }, [])

  return { setRef, visible }
}
