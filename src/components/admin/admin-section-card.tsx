import type { ReactNode } from 'react'

export function AdminSectionCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-brand-green/15 bg-white p-5">
      <h2 className="text-base font-semibold text-brand-green-dark">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  )
}
